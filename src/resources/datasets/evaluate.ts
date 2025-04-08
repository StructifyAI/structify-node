// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import { JobsList, type JobsListParams } from '../../pagination';

export class Evaluate extends APIResource {
  /**
   * List all dataset evaluation results with pagination
   */
  list(
    query: EvaluateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EvaluateListResponsesJobsList, EvaluateListResponse> {
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
    const { dataset_1, dataset_2, dataset_2_is_ground_truth, merge_threshold_override } = params;
    return this._client.post('/dataset/evaluate/run', {
      query: { dataset_1, dataset_2, dataset_2_is_ground_truth, merge_threshold_override },
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

  dataset_1_name: string;

  dataset_2: string;

  dataset_2_is_ground_truth: boolean;

  dataset_2_name: string;

  iou: number;

  matched: number;

  matches: EvaluateGetResponse.Matches;

  started_at: string;

  stats: EvaluateGetResponse.Stats;

  status: 'Running' | 'Completed' | 'Failed';

  unmatched: number;

  run_message?: string | null;
}

export namespace EvaluateGetResponse {
  export interface Matches {
    relationship_matches: Record<string, Matches.RelationshipMatches>;

    table_matches: Record<string, Matches.TableMatches>;
  }

  export namespace Matches {
    export interface RelationshipMatches {
      relationship_matches: Array<RelationshipMatches.RelationshipMatch>;

      unmatched_a: Array<RelationshipMatches.UnmatchedA>;

      unmatched_b: Array<RelationshipMatches.UnmatchedB>;
    }

    export namespace RelationshipMatches {
      export interface RelationshipMatch {
        matched_properties: Array<RelationshipMatch.MatchedProperty>;

        relationship_a: RelationshipMatch.RelationshipA;

        relationship_b: RelationshipMatch.RelationshipB;
      }

      export namespace RelationshipMatch {
        export interface MatchedProperty {
          match_prob: number;

          match_transfer_prob: number;

          name: string;

          property_cardinality: number;

          unique: boolean;
        }

        export interface RelationshipA {
          from_id: string;

          label: string;

          properties: Record<string, string | boolean | number | SharedAPI.Image>;

          to_id: string;
        }

        export interface RelationshipB {
          from_id: string;

          label: string;

          properties: Record<string, string | boolean | number | SharedAPI.Image>;

          to_id: string;
        }
      }

      export interface UnmatchedA {
        from_id: string;

        label: string;

        properties: Record<string, string | boolean | number | SharedAPI.Image>;

        to_id: string;
      }

      export interface UnmatchedB {
        from_id: string;

        label: string;

        properties: Record<string, string | boolean | number | SharedAPI.Image>;

        to_id: string;
      }
    }

    export interface TableMatches {
      entity_matches: Array<SharedAPI.EntityMatch>;

      unmatched_a: Array<TableMatches.UnmatchedA>;

      unmatched_b: Array<TableMatches.UnmatchedB>;
    }

    export namespace TableMatches {
      export interface UnmatchedA {
        entity: UnmatchedA.Entity;

        best_match?: SharedAPI.EntityMatch | null;
      }

      export namespace UnmatchedA {
        export interface Entity {
          id: string;

          created_at: string;

          dataset_id: string;

          label: string;

          properties: Record<string, string | boolean | number | SharedAPI.Image>;

          updated_at: string;
        }
      }

      export interface UnmatchedB {
        entity: UnmatchedB.Entity;

        best_match?: SharedAPI.EntityMatch | null;
      }

      export namespace UnmatchedB {
        export interface Entity {
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

  export interface Stats {
    per_relationship: Record<string, Stats.PerRelationship>;

    per_table: Record<string, Stats.PerTable>;
  }

  export namespace Stats {
    export interface PerRelationship {
      per_property: Record<string, PerRelationship.PerProperty>;

      prop_granularity: PerRelationship.PropGranularity;

      relationship_granularity: PerRelationship.RelationshipGranularity;
    }

    export namespace PerRelationship {
      export interface PerProperty {
        false_negatives: number;

        false_positives: number;

        true_positives: number;
      }

      export interface PropGranularity {
        false_negatives: number;

        false_positives: number;

        true_positives: number;
      }

      export interface RelationshipGranularity {
        false_negatives: number;

        false_positives: number;

        true_positives: number;
      }
    }

    export interface PerTable {
      entity_granularity: PerTable.EntityGranularity;

      per_property: Record<string, PerTable.PerProperty>;

      prop_granularity: PerTable.PropGranularity;
    }

    export namespace PerTable {
      export interface EntityGranularity {
        false_negatives: number;

        false_positives: number;

        true_positives: number;
      }

      export interface PerProperty {
        false_negatives: number;

        false_positives: number;

        true_positives: number;
      }

      export interface PropGranularity {
        false_negatives: number;

        false_positives: number;

        true_positives: number;
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

  merge_threshold_override?: number | null;
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
