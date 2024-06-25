// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as RunsAPI from './runs';

export class Runs extends APIResource {
  /**
   * List all the executions
   */
  list(options?: Core.RequestOptions): Core.APIPromise<RunListResponse> {
    return this._client.get('/runs/list', options);
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

export type RunListResponse = Array<string>;

export type RunDeleteResponse = string;

export interface RunCancelResponse {
  id: string;

  status: 'Running' | 'Completed' | 'Failed';
}

export namespace Runs {
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunDeleteResponse = RunsAPI.RunDeleteResponse;
  export import RunCancelResponse = RunsAPI.RunCancelResponse;
}
