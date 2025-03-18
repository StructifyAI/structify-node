// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as StructureAPI from './structure';
import { JobsList, type JobsListParams } from '../pagination';

export class Jobs extends APIResource {
  /**
   * List all the executions
   */
  list(
    query?: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesJobsList, JobListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<JobListResponsesJobsList, JobListResponse>;
  list(
    query: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesJobsList, JobListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/jobs/list', JobListResponsesJobsList, { query, ...options });
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

  getStepGraph(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetStepGraphResponse> {
    return this._client.get(`/jobs/get_step_graph/${jobId}`, options);
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

export class JobListResponsesJobsList extends JobsList<JobListResponse> {}

export interface JobListResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  user_id: string;

  /**
   * A message about the status of the job at completion
   */
  message?: string | null;

  parameters?: Core.Uploadable | null;

  plan_id?: string | null;

  /**
   * A reason for the job's existence
   */
  reason?: string | null;

  /**
   * What time did the job start running?
   */
  run_started_time?: string | null;
}

export type JobDeleteResponse = string;

export interface JobCancelResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  user_id: string;

  /**
   * A message about the status of the job at completion
   */
  message?: string | null;

  parameters?: Core.Uploadable | null;

  plan_id?: string | null;

  /**
   * A reason for the job's existence
   */
  reason?: string | null;

  /**
   * What time did the job start running?
   */
  run_started_time?: string | null;
}

export interface JobGetResponse {
  job: JobGetResponse.Job;

  steps: Array<StructureAPI.ExecutionStep>;
}

export namespace JobGetResponse {
  export interface Job {
    id: string;

    created_at: string;

    dataset_id: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    user_id: string;

    /**
     * A message about the status of the job at completion
     */
    message?: string | null;

    parameters?: Core.Uploadable | null;

    plan_id?: string | null;

    /**
     * A reason for the job's existence
     */
    reason?: string | null;

    /**
     * What time did the job start running?
     */
    run_started_time?: string | null;
  }
}

export type JobGetStepGraphResponse = Array<JobGetStepGraphResponse.JobGetStepGraphResponseItem>;

export namespace JobGetStepGraphResponse {
  export interface JobGetStepGraphResponseItem {
    id: string;

    creation_time: string;

    status: 'queued' | 'started' | 'executed' | 'skipped';

    execution_step?: StructureAPI.ExecutionStep | null;

    parent_transition?: JobGetStepGraphResponseItem.ParentTransition | null;

    queued_message?: string | null;

    skipped_reason?: string | null;

    state_change_message?: string | null;

    step_index?: number | null;
  }

  export namespace JobGetStepGraphResponseItem {
    export interface ParentTransition {
      parent_id: string;

      tool_input: string;

      tool_name: string;
    }
  }
}

export type JobGetStepsResponse = Array<StructureAPI.ExecutionStep>;

export interface JobListParams extends JobsListParams {
  /**
   * Dataset name to optionally filter jobs by
   */
  dataset?: string | null;

  /**
   * List since a specific timestamp
   */
  since?: string | null;

  /**
   * Status to optionally filter jobs by
   */
  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;
}

Jobs.JobListResponsesJobsList = JobListResponsesJobsList;

export declare namespace Jobs {
  export {
    type JobListResponse as JobListResponse,
    type JobDeleteResponse as JobDeleteResponse,
    type JobCancelResponse as JobCancelResponse,
    type JobGetResponse as JobGetResponse,
    type JobGetStepGraphResponse as JobGetStepGraphResponse,
    type JobGetStepsResponse as JobGetStepsResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
  };
}
