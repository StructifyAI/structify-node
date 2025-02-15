// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SharedAPI from '../shared';

export class Evaluate extends APIResource {
  /**
   * List all dataset evaluation results with pagination
   */
  list(query?: EvaluateListParams, options?: Core.RequestOptions): Core.APIPromise<EvaluateListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EvaluateListResponse>;
  list(
    query: EvaluateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/dataset/evaluate/list', { query, ...options });
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
   * Get the status of a dataset evaluation
   */
  status(
    query: EvaluateStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateStatusResponse> {
    return this._client.get('/dataset/evaluate/status', { query, ...options });
  }
}

export type EvaluateListResponse = Array<EvaluateListResponse.EvaluateListResponseItem>;

export namespace EvaluateListResponse {
  export interface EvaluateListResponseItem {
    id: string;

    dataset_1: string;

    dataset_2: string;

    email_1: string;

    email_2: string;

    started_at: string;
  }
}

export interface EvaluateGetResponse {
  id: string;

  iou: number;

  matched: number;

  stats: EvaluateGetResponse.Stats;

  unmatched: number;
}

export namespace EvaluateGetResponse {
  export interface Stats {
    tables: Record<string, Stats.Tables>;
  }

  export namespace Stats {
    export interface Tables {
      matched_entities: Array<Tables.MatchedEntity>;

      unmatched_1: Array<string>;

      unmatched_2: Array<string>;
    }

    export namespace Tables {
      export interface MatchedEntity {
        e1_id: string;

        e2_id: string;

        match_score: number;

        property_matches: MatchedEntity.PropertyMatches;
      }

      export namespace MatchedEntity {
        export interface PropertyMatches {
          matched_properties: Record<string, PropertyMatches.MatchedProperties>;

          unmatched_properties_1: Record<string, string | boolean | number | SharedAPI.Image>;

          unmatched_properties_2: Record<string, string | boolean | number | SharedAPI.Image>;
        }

        export namespace PropertyMatches {
          export interface MatchedProperties {
            match_score: number;

            value1: string | boolean | number | SharedAPI.Image;

            value2: string | boolean | number | SharedAPI.Image;
          }
        }
      }
    }
  }
}

export interface EvaluateStatusResponse {
  id: string;

  progress: number;

  status: string;
}

export interface EvaluateListParams {
  limit?: number | null;

  skip?: number | null;
}

export interface EvaluateDeleteParams {
  id: string;
}

export interface EvaluateGetParams {
  id: string;
}

export interface EvaluateStatusParams {
  id: string;
}

export declare namespace Evaluate {
  export {
    type EvaluateListResponse as EvaluateListResponse,
    type EvaluateGetResponse as EvaluateGetResponse,
    type EvaluateStatusResponse as EvaluateStatusResponse,
    type EvaluateListParams as EvaluateListParams,
    type EvaluateDeleteParams as EvaluateDeleteParams,
    type EvaluateGetParams as EvaluateGetParams,
    type EvaluateStatusParams as EvaluateStatusParams,
  };
}
