// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UsageAPI from './usage';

export class Usage extends APIResource {
  /**
   * Returns a token that can be waited on until the request is finished.
   */
  getJobInfo(options?: Core.RequestOptions): Core.APIPromise<UsageGetJobInfoResponse> {
    return this._client.post('/usage/get_job_info', options);
  }
}

export interface UsageGetJobInfoResponse {
  images: Array<string>;

  job_id: string;

  job_status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  run_time: string;

  summary_text: string;
}

export namespace Usage {
  export import UsageGetJobInfoResponse = UsageAPI.UsageGetJobInfoResponse;
}
