// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { JobsList, type JobsListParams } from '../pagination';

export class Match extends APIResource {
  /**
   * This endpoint creates one job per entity in the source table. Each job will
   * attempt to find a matching entity in the target table using LLM-based matching.
   */
  createJobs(
    body: MatchCreateJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateMatchJobsResponse> {
    return this._client.post('/match/create_jobs', { body, ...options });
  }

  /**
   * Returns paginated match results showing which entities from the source table
   * were matched to entities in target tables, along with the reasoning.
   */
  listResults(
    query: MatchListResultsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MatchResultsJobsList, MatchResult> {
    return this._client.getAPIList('/match/list_results', MatchResultsJobsList, { query, ...options });
  }
}

export class MatchResultsJobsList extends JobsList<MatchResult> {}

export interface CreateMatchJobsRequest {
  /**
   * Optional conditioning prompt for the LLM matcher
   */
  conditioning: string;

  /**
   * Dataset name
   */
  dataset: string;

  /**
   * Source table name (entities to match from)
   */
  source_table: string;

  /**
   * Target table name (entities to match to)
   */
  target_table: string;
}

export interface CreateMatchJobsResponse {
  /**
   * Number of jobs created
   */
  count: number;

  /**
   * IDs of the created match jobs
   */
  job_ids: Array<string>;
}

export interface ListMatchResultsParams {
  /**
   * Dataset name
   */
  dataset: string;

  /**
   * Source table name to get matches for
   */
  source_table: string;

  /**
   * Number of results to return (default: 1000, max: 1000)
   */
  limit?: number;

  /**
   * Offset for pagination (default: 0)
   */
  offset?: number;
}

export interface MatchResult {
  id: string;

  created_at: string;

  job_id: string;

  match_reason: string;

  source_entity_id: string;

  target_entity_id: string;

  confidence_score?: number | null;
}

export interface MatchCreateJobsParams {
  /**
   * Optional conditioning prompt for the LLM matcher
   */
  conditioning: string;

  /**
   * Dataset name
   */
  dataset: string;

  /**
   * Source table name (entities to match from)
   */
  source_table: string;

  /**
   * Target table name (entities to match to)
   */
  target_table: string;
}

export interface MatchListResultsParams extends JobsListParams {
  /**
   * Dataset name
   */
  dataset: string;

  /**
   * Source table name to get matches for
   */
  source_table: string;
}

Match.MatchResultsJobsList = MatchResultsJobsList;

export declare namespace Match {
  export {
    type CreateMatchJobsRequest as CreateMatchJobsRequest,
    type CreateMatchJobsResponse as CreateMatchJobsResponse,
    type ListMatchResultsParams as ListMatchResultsParams,
    type MatchResult as MatchResult,
    MatchResultsJobsList as MatchResultsJobsList,
    type MatchCreateJobsParams as MatchCreateJobsParams,
    type MatchListResultsParams as MatchListResultsParams,
  };
}
