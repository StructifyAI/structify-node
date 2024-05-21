// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as RunsAPI from './runs';

export class Runs extends APIResource {
  /**
   * List all the active runs
   */
  list(options?: Core.RequestOptions): Core.APIPromise<RunListResponse> {
    return this._client.get('/runs/list', options);
  }

  /**
   * You successfully cancelled a run.
   */
  cancel(uuid: string, options?: Core.RequestOptions): Core.APIPromise<RunCancelResponse> {
    return this._client.post(`/runs/cancel/${uuid}`, options);
  }
}

export type RunListResponse = Array<RunListResponse.RunListResponseItem>;

export namespace RunListResponse {
  export interface RunListResponseItem {
    id: string;

    status: 'Running' | 'Completed' | 'Failed';
  }
}

export interface RunCancelResponse {
  id: string;

  status: 'Running' | 'Completed' | 'Failed';
}

export namespace Runs {
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunCancelResponse = RunsAPI.RunCancelResponse;
}
