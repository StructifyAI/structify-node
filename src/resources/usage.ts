// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as UsageAPI from './usage';

export class Usage extends APIResource {
  /**
   * Returns a token that can be waited on until the request is finished.
   */
  getJobInfo(params: UsageGetJobInfoParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { job_id } = params;
    return this._client.post('/usage/get_job_info', { query: { job_id }, ...options });
  }
}

export type UsageGetJobInfoResponse = unknown;

export interface UsageGetJobInfoParams {
  job_id: string;
}

export namespace Usage {
  export import UsageGetJobInfoResponse = UsageAPI.UsageGetJobInfoResponse;
  export import UsageGetJobInfoParams = UsageAPI.UsageGetJobInfoParams;
}
