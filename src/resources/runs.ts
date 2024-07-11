// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RunsAPI from './runs';
import * as StructureAPI from './structure';
import { RunsList, type RunsListParams } from '../pagination';

export class Runs extends APIResource {
  /**
   * List all the executions
   */
  list(
    query: RunListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RunListResponsesRunsList, RunListResponse> {
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

export type RunListResponse = string;

export type RunDeleteResponse = string;

export interface RunCancelResponse {
  id: RunCancelResponse.ID;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';
}

export namespace RunCancelResponse {
  export interface ID {
    id: string;

    id_type: 'Job' | 'Step' | 'Logger' | 'None';
  }
}

export interface RunGetResponse {
  date: string;

  steps: Array<StructureAPI.ExecutionStep>;

  /**
   * Used to identify this history
   */
  uuid: string;
}

export interface RunListParams extends RunsListParams {}

export namespace Runs {
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunDeleteResponse = RunsAPI.RunDeleteResponse;
  export import RunCancelResponse = RunsAPI.RunCancelResponse;
  export import RunGetResponse = RunsAPI.RunGetResponse;
  export import RunListResponsesRunsList = RunsAPI.RunListResponsesRunsList;
  export import RunListParams = RunsAPI.RunListParams;
}
