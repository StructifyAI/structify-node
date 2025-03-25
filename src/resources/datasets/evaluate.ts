// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import { JobsList, type JobsListParams } from '../../pagination';

export class Evaluate extends APIResource {
  /**
   * List all dataset evaluation results with pagination
   */
  list(
    query?: EvaluateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EvaluateListResponsesJobsList, EvaluateListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<EvaluateListResponsesJobsList, EvaluateListResponse>;
  list(
    query: EvaluateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EvaluateListResponsesJobsList, EvaluateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/dataset/evaluate/list', EvaluateListResponsesJobsList, {
      query,
      ...options,
    });
  }

  /**
   * Delete a dataset evaluation result by ID
   */
  delete(params: EvaluateDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { id } = params;
    return this._client.delete('/dataset/evaluate/delete', {
      query: { id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get a dataset evaluation result by ID
   */
  get(query: EvaluateGetParams, options?: Core.RequestOptions): Core.APIPromise<EvaluateGetResponse> {
    return this._client.get('/dataset/evaluate/get', { query, ...options });
  }

  /**
   * Evaluate two datasets
   */
  run(params: EvaluateRunParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { dataset_1, dataset_2, dataset_2_is_ground_truth, email_1, email_2 } = params;
    return this._client.post('/dataset/evaluate/run', {
      query: { dataset_1, dataset_2, dataset_2_is_ground_truth, email_1, email_2 },
      ...options,
    });
  }

  /**
   * Get the status of a dataset evaluation
   */
  status(
    query: EvaluateStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateStatusResponse> {
    return this._client.get('/dataset/evaluate/status', { query, ...options });
  }
}

export class EvaluateListResponsesJobsList extends JobsList<EvaluateListResponse> {}

export interface EvaluateListResponse {
  id: string;

  dataset_1: string;

  dataset_2: string;

  email_1: string;

  email_2: string;

  iou: number;

  matched: number;

  started_at: string;

  status: 'Running' | 'Completed' | 'Failed';

  unmatched: number;

  run_message?: string | null;
}

export interface EvaluateGetResponse {
  id: string;

  dataset_1: string;

  dataset_2: string;

  dataset_2_is_ground_truth: boolean;

  email_1: string;

  email_2: string;

  iou: number;

  matched: number;

  started_at: string;

  stats: EvaluateGetResponse.Stats;

  status: 'Running' | 'Completed' | 'Failed';

  unmatched: number;

  run_message?: string | null;
}

export namespace EvaluateGetResponse {
  export interface Stats {
    table_matches: Record<string, Stats.TableMatches>;
  }

  export namespace Stats {
    export interface TableMatches {
      entity_matches: Array<TableMatches.EntityMatch>;

      unmatched_a: Array<TableMatches.UnmatchedA>;

      unmatched_b: Array<TableMatches.UnmatchedB>;
    }

    export namespace TableMatches {
      export interface EntityMatch {
        /**
         * Alternate matches for entity a - just used for dataset eval
         */
        alternate_matches: Array<unknown>;

        baseline_cardinality: number;

        entity_a: EntityMatch.EntityA;

        entity_b: EntityMatch.EntityB;

        matched_properties: Array<EntityMatch.MatchedProperty>;

        p_match: number;

        p_match_threshold: number;
      }

      export namespace EntityMatch {
        export interface EntityA {
          id: string;

          created_at: string;

          dataset_id: string;

          label: string;

          properties: Record<string, string | boolean | number | SharedAPI.Image>;

          updated_at: string;
        }

        export interface EntityB {
          id: string;

          created_at: string;

          dataset_id: string;

          label: string;

          properties: Record<string, string | boolean | number | SharedAPI.Image>;

          updated_at: string;
        }

        export interface MatchedProperty {
          match_prob: number;

          match_transfer_prob: number;

          name: string;

          property_cardinality: number;

          unique: boolean;
        }
      }

      export interface UnmatchedA {
        id: string;

        created_at: string;

        dataset_id: string;

        label: string;

        properties: Record<string, string | boolean | number | SharedAPI.Image>;

        updated_at: string;
      }

      export interface UnmatchedB {
        id: string;

        created_at: string;

        dataset_id: string;

        label: string;

        properties: Record<string, string | boolean | number | SharedAPI.Image>;

        updated_at: string;
      }
    }
  }
}

export type EvaluateRunResponse = string;

export interface EvaluateStatusResponse {
  status: 'Running' | 'Completed' | 'Failed';
}

export interface EvaluateListParams extends JobsListParams {}

export interface EvaluateDeleteParams {
  id: string;
}

export interface EvaluateGetParams {
  id: string;
}

export interface EvaluateRunParams {
  dataset_1: string;

  dataset_2: string;

  dataset_2_is_ground_truth: boolean;

  email_1: string;

  email_2: string;
}

export interface EvaluateStatusParams {
  id: string;
}

Evaluate.EvaluateListResponsesJobsList = EvaluateListResponsesJobsList;

export declare namespace Evaluate {
  export {
    type EvaluateListResponse as EvaluateListResponse,
    type EvaluateGetResponse as EvaluateGetResponse,
    type EvaluateRunResponse as EvaluateRunResponse,
    type EvaluateStatusResponse as EvaluateStatusResponse,
    EvaluateListResponsesJobsList as EvaluateListResponsesJobsList,
    type EvaluateListParams as EvaluateListParams,
    type EvaluateDeleteParams as EvaluateDeleteParams,
    type EvaluateGetParams as EvaluateGetParams,
    type EvaluateRunParams as EvaluateRunParams,
    type EvaluateStatusParams as EvaluateStatusParams,
  };
}
