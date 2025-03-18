// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as PlanAPI from './plan';

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
  list(options?: Core.RequestOptions): Core.APIPromise<PlanListResponse> {
    return this._client.get('/plan/list', options);
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
  relationship_name: string;

  source_entity_id: string;

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

export type PlanListResponse = Array<PlanListResponse.PlanListResponseItem>;

export namespace PlanListResponse {
  export interface PlanListResponseItem {
    plan: PlanAPI.Plan;

    plan_id: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed' | 'Paused';

    step: number;
  }
}

export type PlanPauseAllResponse = Array<string>;

export type PlanResumeAllResponse = Array<string>;

export interface PlanCreateParams {
  dataset: string;

  plan: Plan;
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

export declare namespace PlanResource {
  export {
    type EnhanceProperty as EnhanceProperty,
    type EnhanceRelationship as EnhanceRelationship,
    type FindRelationship as FindRelationship,
    type Plan as Plan,
    type PlanCreateResponse as PlanCreateResponse,
    type PlanListResponse as PlanListResponse,
    type PlanPauseAllResponse as PlanPauseAllResponse,
    type PlanResumeAllResponse as PlanResumeAllResponse,
    type PlanCreateParams as PlanCreateParams,
    type PlanPauseAllParams as PlanPauseAllParams,
    type PlanResumeAllParams as PlanResumeAllParams,
  };
}
