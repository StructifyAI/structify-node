// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as RunsAPI from './runs';
import * as SharedAPI from './shared';
import * as StructureAPI from './structure';
import { RunsList, type RunsListParams } from '../pagination';

export class Runs extends APIResource {
  /**
   * List all the executions
   */
  list(
    query?: RunListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RunListResponsesRunsList, RunListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<RunListResponsesRunsList, RunListResponse>;
  list(
    query: RunListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RunListResponsesRunsList, RunListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/runs/list', RunListResponsesRunsList, { query, ...options });
  }

  /**
   * Delete a run
   */
  delete(uuid: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/runs/delete/${uuid}`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * You successfully cancelled a run.
   */
  cancel(uuid: string, options?: Core.RequestOptions): Core.APIPromise<RunCancelResponse> {
    return this._client.post(`/runs/cancel/${uuid}`, options);
  }

  /**
   * Retrieve a run from structify.
   */
  get(uuid: string, options?: Core.RequestOptions): Core.APIPromise<RunGetResponse> {
    return this._client.get(`/runs/get/${uuid}`, options);
  }

  /**
   * Retrieve a run from structify.
   */
  getSteps(jobId: string, options?: Core.RequestOptions): Core.APIPromise<RunGetStepsResponse> {
    return this._client.get(`/runs/get_steps/${jobId}`, options);
  }

  /**
   * One example use case is every single day check the news websites and pull them
   * into my dataset.
   */
  schedule(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/runs/schedule', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class RunListResponsesRunsList extends RunsList<RunListResponse> {}

export interface RunListResponse {
  id: SharedAPI.StructifyID;

  creation_time: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';
}

export type RunDeleteResponse = string;

export interface RunCancelResponse {
  id: SharedAPI.StructifyID;

  creation_time: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';
}

export interface RunGetResponse {
  date: string;

  steps: Array<StructureAPI.ExecutionStep>;

  /**
   * Used to identify this history
   */
  uuid: string;
}

export type RunGetStepsResponse = Array<StructureAPI.ExecutionStep>;

export interface RunListParams extends RunsListParams {}

export namespace Runs {
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunDeleteResponse = RunsAPI.RunDeleteResponse;
  export import RunCancelResponse = RunsAPI.RunCancelResponse;
  export import RunGetResponse = RunsAPI.RunGetResponse;
  export import RunGetStepsResponse = RunsAPI.RunGetStepsResponse;
  export import RunListResponsesRunsList = RunsAPI.RunListResponsesRunsList;
  export import RunListParams = RunsAPI.RunListParams;
}
