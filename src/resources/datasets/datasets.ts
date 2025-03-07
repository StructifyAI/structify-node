// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as EvaluateAPI from './evaluate';
import {
  Evaluate,
  EvaluateDeleteParams,
  EvaluateGetParams,
  EvaluateGetResponse,
  EvaluateListParams,
  EvaluateListResponse,
  EvaluateListResponsesJobsList,
  EvaluateRunParams,
  EvaluateRunResponse,
  EvaluateStatusParams,
  EvaluateStatusResponse,
} from './evaluate';
import { JobsList, type JobsListParams } from '../../pagination';

export class Datasets extends APIResource {
  evaluate: EvaluateAPI.Evaluate = new EvaluateAPI.Evaluate(this._client);

  /**
   * Creates a dataset.
   */
  create(body: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/dataset/create', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Gets all datasets owned by the current user
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DatasetListResponse> {
    return this._client.get('/dataset/list', options);
  }

  /**
   * Permanently delete a dataset and all its contents
   */
  delete(params: DatasetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { name } = params;
    return this._client.delete('/dataset/delete', {
      query: { name },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Grab a dataset by its name.
   */
  get(query: DatasetGetParams, options?: Core.RequestOptions): Core.APIPromise<DatasetGetResponse> {
    return this._client.get('/dataset/info', { query, ...options });
  }

  /**
   * Returns: The matched subgraph and a score for the match.
   */
  match(body: DatasetMatchParams, options?: Core.RequestOptions): Core.APIPromise<DatasetMatchResponse> {
    return this._client.post('/dataset/match', { body, ...options });
  }

  /**
   * You need to specify a dataset and the name of the relationship
   */
  viewRelationships(
    query: DatasetViewRelationshipsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetViewRelationshipsResponsesJobsList, DatasetViewRelationshipsResponse> {
    return this._client.getAPIList('/dataset/view_relationships', DatasetViewRelationshipsResponsesJobsList, {
      query,
      ...options,
    });
  }

  /**
   * You need to specify a dataset and a table_name
   */
  viewTable(
    query: DatasetViewTableParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetViewTableResponsesJobsList, DatasetViewTableResponse> {
    return this._client.getAPIList('/dataset/view_table', DatasetViewTableResponsesJobsList, {
      query,
      ...options,
    });
  }

  /**
   * the relationships for each entity and the targets for each relationship.
   */
  viewTablesWithRelationships(
    query: DatasetViewTablesWithRelationshipsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetViewTablesWithRelationshipsResponse> {
    return this._client.get('/dataset/view_tables_with_relationships', { query, ...options });
  }
}

export class DatasetViewRelationshipsResponsesJobsList extends JobsList<DatasetViewRelationshipsResponse> {}

export class DatasetViewTableResponsesJobsList extends JobsList<DatasetViewTableResponse> {}

export type DatasetListResponse = Array<DatasetListResponse.DatasetListResponseItem>;

export namespace DatasetListResponse {
  export interface DatasetListResponseItem {
    description: string;

    name: string;
  }
}

/**
 * A dataset is where you put multiple referential schemas.
 *
 * A dataset is a complete namespace where all references between schemas are held
 * within the dataset.
 */
export interface DatasetGetResponse extends SharedAPI.DatasetDescriptor {
  created_timestamp: string;
}

export type DatasetMatchResponse = Record<string, DatasetMatchResponse.item>;

export namespace DatasetMatchResponse {
  export interface item {
    entity: string;

    score: number;
  }
}

export interface DatasetViewRelationshipsResponse {
  from_id: string;

  label: string;

  properties: Record<string, string | boolean | number | SharedAPI.Image>;

  to_id: string;
}

export interface DatasetViewTableResponse {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | boolean | number | SharedAPI.Image>;
}

export interface DatasetViewTablesWithRelationshipsResponse {
  connected_entities: Array<DatasetViewTablesWithRelationshipsResponse.ConnectedEntity>;

  entities: Array<DatasetViewTablesWithRelationshipsResponse.Entity>;

  relationships: Array<DatasetViewTablesWithRelationshipsResponse.Relationship>;
}

export namespace DatasetViewTablesWithRelationshipsResponse {
  export interface ConnectedEntity {
    id: string;

    creation_time: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;
  }

  export interface Entity {
    id: string;

    creation_time: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;
  }

  export interface Relationship {
    from_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    to_id: string;
  }
}

export interface DatasetCreateParams {
  description: string;

  name: string;

  relationships: Array<DatasetCreateParams.Relationship>;

  tables: Array<SharedAPI.Table>;

  llm_override_field?: string | null;
}

export namespace DatasetCreateParams {
  export interface Relationship {
    description: string;

    name: string;

    source_table: string;

    target_table: string;

    merge_strategy?: unknown;

    properties?: Array<Relationship.Property>;
  }

  export namespace Relationship {
    export interface Property {
      description: string;

      name: string;

      merge_strategy?: 'Unique' | 'NoSignal' | Property.Probabilistic;

      prop_type?: SharedAPI.PropertyType;
    }

    export namespace Property {
      export interface Probabilistic {
        /**
         * The configuration for a probabilistic merge strategy
         */
        Probabilistic: Probabilistic.Probabilistic;
      }

      export namespace Probabilistic {
        /**
         * The configuration for a probabilistic merge strategy
         */
        export interface Probabilistic {
          /**
           * The number of unique values that are expected to be present in the complete
           * dataset
           *
           * This is used for merging to determine how significant a match is. (i.e. if there
           * are only 2 possible values, a match gives less confidence than if there are 100)
           */
          baseline_cardinality: number;

          /**
           * The estimated probability that, given an entity match, the properties also match
           *
           * For a person's full name, this would be quite high. For a person's job title, it
           * would be lower because people can have multiple job titles over time or at
           * different companies at the same time.
           */
          match_transfer_probability: number;

          comparison_strategy?: 'Default' | 'EnforceUniqueness';
        }
      }
    }
  }
}

export interface DatasetDeleteParams {
  /**
   * The name of the dataset
   */
  name: string;
}

export interface DatasetGetParams {
  /**
   * Information about the dataset
   */
  name: string;
}

export interface DatasetMatchParams {
  /**
   * The dataset to match against
   */
  dataset: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  query_kg: SharedAPI.KnowledgeGraph;

  match_threshold?: number;
}

export interface DatasetViewRelationshipsParams extends JobsListParams {
  dataset: string;

  name: string;

  job_id?: string | null;

  last_updated?: string | null;

  sort_by?: DatasetViewRelationshipsParams.SortBy;
}

export namespace DatasetViewRelationshipsParams {
  export interface SortBy {
    col_id: 'creation_time';

    sort: 'asc' | 'desc';
  }
}

export interface DatasetViewTableParams extends JobsListParams {
  dataset: string;

  name: string;

  job_id?: string | null;

  last_updated?: string | null;

  sort_by?: DatasetViewTableParams.SortBy;
}

export namespace DatasetViewTableParams {
  export interface SortBy {
    col_id: 'creation_time';

    sort: 'asc' | 'desc';
  }
}

export interface DatasetViewTablesWithRelationshipsParams {
  dataset: string;

  name: string;

  job_id?: string | null;

  last_updated?: string | null;

  limit?: number;

  offset?: number;

  sort_by?: DatasetViewTablesWithRelationshipsParams.SortBy;
}

export namespace DatasetViewTablesWithRelationshipsParams {
  export interface SortBy {
    col_id: 'creation_time';

    sort: 'asc' | 'desc';
  }
}

Datasets.DatasetViewRelationshipsResponsesJobsList = DatasetViewRelationshipsResponsesJobsList;
Datasets.DatasetViewTableResponsesJobsList = DatasetViewTableResponsesJobsList;
Datasets.Evaluate = Evaluate;
Datasets.EvaluateListResponsesJobsList = EvaluateListResponsesJobsList;

export declare namespace Datasets {
  export {
    type DatasetListResponse as DatasetListResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetMatchResponse as DatasetMatchResponse,
    type DatasetViewRelationshipsResponse as DatasetViewRelationshipsResponse,
    type DatasetViewTableResponse as DatasetViewTableResponse,
    type DatasetViewTablesWithRelationshipsResponse as DatasetViewTablesWithRelationshipsResponse,
    DatasetViewRelationshipsResponsesJobsList as DatasetViewRelationshipsResponsesJobsList,
    DatasetViewTableResponsesJobsList as DatasetViewTableResponsesJobsList,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetGetParams as DatasetGetParams,
    type DatasetMatchParams as DatasetMatchParams,
    type DatasetViewRelationshipsParams as DatasetViewRelationshipsParams,
    type DatasetViewTableParams as DatasetViewTableParams,
    type DatasetViewTablesWithRelationshipsParams as DatasetViewTablesWithRelationshipsParams,
  };

  export {
    Evaluate as Evaluate,
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
