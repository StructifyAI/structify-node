// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as UsageAPI from './usage';

export class Usage extends APIResource {
  /**
   * Returns a token that can be waited on until the request is finished.
   */
  getJobInfo(
    params: UsageGetJobInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageGetJobInfoResponse> {
    const { job_id } = params;
    return this._client.post('/usage/get_job_info', { query: { job_id }, ...options });
  }
}

export interface UsageGetJobInfoResponse {
  images: Array<string>;

  job_id: string;

  job_status: unknown;

  run_time: string;

  summary_text: string;
}

export interface UsageGetJobInfoParams {
  job_id: string;
}

export namespace Usage {
  export import UsageGetJobInfoResponse = UsageAPI.UsageGetJobInfoResponse;
  export import UsageGetJobInfoParams = UsageAPI.UsageGetJobInfoParams;
}
