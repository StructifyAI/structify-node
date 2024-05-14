// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as JobStatusAPI from './job-status';

export class JobStatus extends APIResource {
  /**
   * Wait for all specified async tasks to be completed.
   */
  create(body: JobStatusCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/structure/job_status', { body, ...options });
  }
}

export type JobStatusCreateResponse = unknown;

export type JobStatusCreateParams = Array<string>;

export namespace JobStatus {
  export import JobStatusCreateResponse = JobStatusAPI.JobStatusCreateResponse;
  export import JobStatusCreateParams = JobStatusAPI.JobStatusCreateParams;
}
