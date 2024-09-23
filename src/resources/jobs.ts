// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as JobsAPI from './jobs';
import * as SharedAPI from './shared';
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

  creation_time: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  /**
   * What time did the job start running?
   */
  run_started_time?: string | null;

  /**
   * How many steps were taken for this job?
   */
  step_count?: number | null;
}

export type JobDeleteResponse = string;

export interface JobCancelResponse {
  id: string;

  creation_time: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  /**
   * What time did the job start running?
   */
  run_started_time?: string | null;

  /**
   * How many steps were taken for this job?
   */
  step_count?: number | null;
}

export interface JobGetResponse {
  job: JobGetResponse.Job;

  steps: Array<StructureAPI.ExecutionStep>;
}

export namespace JobGetResponse {
  export interface Job {
    id: string;

    creation_time: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    /**
     * What time did the job start running?
     */
    run_started_time?: string | null;

    /**
     * How many steps were taken for this job?
     */
    step_count?: number | null;
  }
}

export interface JobGetStepGraphResponse {
  steps: Array<JobGetStepGraphResponse.Step>;

  transitions: Array<JobGetStepGraphResponse.Transition>;
}

export namespace JobGetStepGraphResponse {
  export interface Step {
    id: string;

    creation_time: string;

    status: 'Queued' | 'Ignored' | 'Executed';

    prompt?: string | null;

    queued_message?: string | null;

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a Neo4j DB
     */
    save?: SharedAPI.KnowledgeGraph | null;

    screenshot?: Core.Uploadable | null;

    skipped_reason?: string | null;
  }

  export interface Transition {
    from: string;

    to: string;

    tool_call: Transition.ToolCall;
  }

  export namespace Transition {
    export interface ToolCall {
      formatted_input: string;

      name: string;
    }
  }
}

export type JobGetStepsResponse = Array<StructureAPI.ExecutionStep>;

export interface JobListParams extends JobsListParams {
  /**
   * Dataset name to optionally filter jobs by
   */
  dataset_name?: string | null;

  /**
   * Status to optionally filter jobs by
   */
  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;
}

export namespace Jobs {
  export import JobListResponse = JobsAPI.JobListResponse;
  export import JobDeleteResponse = JobsAPI.JobDeleteResponse;
  export import JobCancelResponse = JobsAPI.JobCancelResponse;
  export import JobGetResponse = JobsAPI.JobGetResponse;
  export import JobGetStepGraphResponse = JobsAPI.JobGetStepGraphResponse;
  export import JobGetStepsResponse = JobsAPI.JobGetStepsResponse;
  export import JobListResponsesJobsList = JobsAPI.JobListResponsesJobsList;
  export import JobListParams = JobsAPI.JobListParams;
}
