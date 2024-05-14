// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as GetJobInfoAPI from './get-job-info';

export class GetJobInfo extends APIResource {
  /**
   * Structure an unstructured data source into the given dataset in an async
   * fashion.
   *
   * Returns a token that can be waited on until the request is finished.
   */
  create(params: GetJobInfoCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { job_id } = params;
    return this._client.post('/usage/get_job_info', { query: { job_id }, ...options });
  }
}

export type GetJobInfoCreateResponse = unknown;

export interface GetJobInfoCreateParams {
  job_id: string;
}

export namespace GetJobInfo {
  export import GetJobInfoCreateResponse = GetJobInfoAPI.GetJobInfoCreateResponse;
  export import GetJobInfoCreateParams = GetJobInfoAPI.GetJobInfoCreateParams;
}
