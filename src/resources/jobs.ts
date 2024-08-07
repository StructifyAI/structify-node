// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as JobsAPI from './jobs';
import * as StructureAPI from './structure';
import { Pagination, type PaginationParams } from '../pagination';

export class Jobs extends APIResource {
  /**
   * List all the executions
   */
  list(
    query?: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesPagination, JobListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<JobListResponsesPagination, JobListResponse>;
  list(
    query: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesPagination, JobListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/jobs/list', JobListResponsesPagination, { query, ...options });
  }

  /**
   * Delete a job
   */
  delete(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/jobs/delete/${jobId}`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * You successfully cancelled a job.
   */
  cancel(uuid: string, options?: Core.RequestOptions): Core.APIPromise<JobCancelResponse> {
    return this._client.post(`/jobs/cancel/${uuid}`, options);
  }

  /**
   * Retrieve a job from structify.
   */
  get(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse> {
    return this._client.get(`/jobs/get/${jobId}`, options);
  }

  /**
   * Retrieve a step from structify.
   */
  getStep(stepId: string, options?: Core.RequestOptions): Core.APIPromise<StructureAPI.ExecutionStep> {
    return this._client.get(`/jobs/get_step/${stepId}`, options);
  }

  /**
   * Retrieve a job from structify.
   */
  getSteps(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetStepsResponse> {
    return this._client.get(`/jobs/get_steps/${jobId}`, options);
  }

  /**
   * One example use case is every single day check the news websites and pull them
   * into my dataset.
   */
  schedule(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/jobs/schedule', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class JobListResponsesPagination extends Pagination<JobListResponse> {}

export interface JobListResponse {
  id: string;

  creation_time: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';
}

export type JobDeleteResponse = string;

export interface JobCancelResponse {
  id: string;

  creation_time: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';
}

export type JobGetResponse = Array<StructureAPI.ExecutionStep>;

export type JobGetStepsResponse = Array<StructureAPI.ExecutionStep>;

export interface JobListParams extends PaginationParams {}

export namespace Jobs {
  export import JobListResponse = JobsAPI.JobListResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobCancelResponse = JobsAPI.JobCancelResponse;
  export import JobGetResponse = JobsAPI.JobGetResponse;
  export import JobGetStepsResponse = JobsAPI.JobGetStepsResponse;
  export import JobListResponsesPagination = JobsAPI.JobListResponsesPagination;
  export import JobListParams = JobsAPI.JobListParams;
}
