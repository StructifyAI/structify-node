// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { JobsList, type JobsListParams } from '../pagination';

export class PlanResource extends APIResource {
  /**
   * Create a plan to run consecutive jobs as each step finishes.
   */
  create(body: PlanCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/plan/create', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * List all plans for your user account in the database.
   */
  list(
    query?: PlanListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListResponsesJobsList, PlanListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<PlanListResponsesJobsList, PlanListResponse>;
  list(
    query: PlanListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListResponsesJobsList, PlanListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/plan/list', PlanListResponsesJobsList, { query, ...options });
  }

  /**
   * List all plans for your user account in the database. with their associated
   * jobs.
   */
  listWithJobs(
    query?: PlanListWithJobsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListWithJobsResponsesJobsList, PlanListWithJobsResponse>;
  listWithJobs(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListWithJobsResponsesJobsList, PlanListWithJobsResponse>;
  listWithJobs(
    query: PlanListWithJobsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListWithJobsResponsesJobsList, PlanListWithJobsResponse> {
    if (isRequestOptions(query)) {
      return this.listWithJobs({}, query);
    }
    return this._client.getAPIList('/plan/list_with_jobs', PlanListWithJobsResponsesJobsList, {
      query,
      ...options,
    });
  }

  /**
   * Pause all running plans for your user account in the database.
   */
  pauseAll(query: PlanPauseAllParams, options?: Core.RequestOptions): Core.APIPromise<PlanPauseAllResponse> {
    return this._client.get('/plan/pause_all', { query, ...options });
  }

  /**
   * Resume all paused plans for your user account in the database.
   */
  resumeAll(
    query: PlanResumeAllParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanResumeAllResponse> {
    return this._client.get('/plan/resume_all', { query, ...options });
  }
}

export class PlanListResponsesJobsList extends JobsList<PlanListResponse> {}

export class PlanListWithJobsResponsesJobsList extends JobsList<PlanListWithJobsResponse> {}

export interface EnhanceProperty {
  entity_id: string;

  property_name: string;

  allow_extra_entities?: boolean;

  starting_searches?: Array<string>;

  starting_urls?: Array<string>;
}

export interface EnhanceRelationship {
  entity_id: string;

  relationship_name: string;

  allow_extra_entities?: boolean;

  starting_searches?: Array<string>;

  starting_urls?: Array<string>;
}

export interface FindRelationship {
  from_id: string;

  relationship_name: string;

  to_id: string;

  allow_extra_entities?: boolean;

  starting_searches?: Array<string>;

  starting_urls?: Array<string>;
}

export interface Plan {
  steps: Array<
    | EnhanceProperty
    | EnhanceRelationship
    | FindRelationship
    | Array<EnhanceProperty | EnhanceRelationship | FindRelationship>
  >;
}

export type PlanCreateResponse = string;

export interface PlanListResponse {
  plan: Plan;

  plan_id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed' | 'Paused';

  step: number;
}

export interface PlanListWithJobsResponse {
  created_at: string;

  jobs: Array<PlanListWithJobsResponse.Job>;

  plan: Plan;

  plan_id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed' | 'Paused';

  step: number;

  updated_at: string;
}

export namespace PlanListWithJobsResponse {
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

    /**
     * Proto for JobInput
     */
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

export type PlanPauseAllResponse = Array<string>;

export type PlanResumeAllResponse = Array<string>;

export interface PlanCreateParams {
  dataset: string;

  plan: Plan;
}

export interface PlanListParams extends JobsListParams {
  created_since?: string | null;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | 'Paused' | null;

  updated_since?: string | null;
}

export interface PlanListWithJobsParams extends JobsListParams {
  created_since?: string | null;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | 'Paused' | null;

  updated_since?: string | null;
}

export interface PlanPauseAllParams {
  /**
   * Name of the dataset to pause plans for
   */
  dataset_name: string;
}

export interface PlanResumeAllParams {
  /**
   * Name of the dataset to resume plans for
   */
  dataset_name: string;
}

PlanResource.PlanListResponsesJobsList = PlanListResponsesJobsList;
PlanResource.PlanListWithJobsResponsesJobsList = PlanListWithJobsResponsesJobsList;

export declare namespace PlanResource {
  export {
    type EnhanceProperty as EnhanceProperty,
    type EnhanceRelationship as EnhanceRelationship,
    type FindRelationship as FindRelationship,
    type Plan as Plan,
    type PlanCreateResponse as PlanCreateResponse,
    type PlanListResponse as PlanListResponse,
    type PlanListWithJobsResponse as PlanListWithJobsResponse,
    type PlanPauseAllResponse as PlanPauseAllResponse,
    type PlanResumeAllResponse as PlanResumeAllResponse,
    PlanListResponsesJobsList as PlanListResponsesJobsList,
    PlanListWithJobsResponsesJobsList as PlanListWithJobsResponsesJobsList,
    type PlanCreateParams as PlanCreateParams,
    type PlanListParams as PlanListParams,
    type PlanListWithJobsParams as PlanListWithJobsParams,
    type PlanPauseAllParams as PlanPauseAllParams,
    type PlanResumeAllParams as PlanResumeAllParams,
  };
}
