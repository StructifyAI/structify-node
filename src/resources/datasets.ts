// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DatasetsAPI from './datasets';
import * as SharedAPI from './shared';
import { JobsList, type JobsListParams } from '../pagination';

export class Datasets extends APIResource {
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

export interface DatasetMatchResponse {
  entity: DatasetMatchResponse.Entity;

  score: number;
}

export namespace DatasetMatchResponse {
  export interface Entity {
    id: string;

    creation_time: string;

    label: string;

    properties: Record<string, string | boolean | number>;
  }
}

export interface DatasetViewRelationshipsResponse {
  from_id: string;

  label: string;

  properties: Record<string, string | boolean | number>;

  to_id: string;
}

export interface DatasetViewTableResponse {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | boolean | number>;
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

    properties: Record<string, string | boolean | number>;
  }

  export interface Entity {
    id: string;

    creation_time: string;

    label: string;

    properties: Record<string, string | boolean | number>;
  }

  export interface Relationship {
    from_id: string;

    label: string;

    properties: Record<string, string | boolean | number>;

    to_id: string;
  }
}

export interface DatasetCreateParams {
  description: string;

  name: string;

  relationships: Array<DatasetCreateParams.Relationship>;

  tables: Array<SharedAPI.Table>;
}

export namespace DatasetCreateParams {
  export interface Relationship {
    description: string;

    name: string;

    source_table: string;

    target_table: string;

    merge_strategy?: Relationship.MergeStrategy | null;

    properties?: Array<Relationship.Property>;
  }

  export namespace Relationship {
    export interface MergeStrategy {
      Probabilistic: MergeStrategy.Probabilistic;
    }

    export namespace MergeStrategy {
      export interface Probabilistic {
        /**
         * Describes the expected cardinality of the source table when a match is found in
         * the target table
         *
         * For example, if we have a source company and a target funding round, we expect
         * the source company to appear in multiple funding rounds, but not _too_ many. So
         * if we have a funding round match, the expected number of unique companies is
         * relatively small. This is an estimate of that number.
         */
        source_cardinality_given_target_match?: number | null;

        /**
         * Describes the expected cardinality of the target table when a match is found in
         * the source table
         *
         * For example, if we have a source company and a target funding round, we usually
         * expect some number of funding rounds to be associated with a single company but
         * not _too_ many. So if we have a company match, the expected number of unique
         * funding rounds is relatively small. This is an estimate of that number.
         */
        target_cardinality_given_source_match?: number | null;
      }
    }

    export interface Property {
      description: string;

      name: string;

      /**
       * Property with unique 1:1 correspondence to its parent.
       *
       * Merge based on this property 100% of the time
       */
      merge_strategy?: 'Unique' | Property.Probabilistic | 'NoSignal';

      prop_type?: SharedAPI.PropertyType;
    }

    export namespace Property {
      export interface Probabilistic {
        Probabilistic: Probabilistic.Probabilistic;
      }

      export namespace Probabilistic {
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
}

export interface DatasetViewRelationshipsParams extends JobsListParams {
  dataset: string;

  name: string;

  job_id?: string | null;
}

export interface DatasetViewTableParams extends JobsListParams {
  dataset: string;

  name: string;

  job_id?: string | null;
}

export interface DatasetViewTablesWithRelationshipsParams {
  dataset: string;

  name: string;

  job_id?: string | null;

  limit?: number;

  offset?: number;
}

export namespace Datasets {
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetMatchResponse = DatasetsAPI.DatasetMatchResponse;
  export import DatasetViewRelationshipsResponse = DatasetsAPI.DatasetViewRelationshipsResponse;
  export import DatasetViewTableResponse = DatasetsAPI.DatasetViewTableResponse;
  export import DatasetViewTablesWithRelationshipsResponse = DatasetsAPI.DatasetViewTablesWithRelationshipsResponse;
  export import DatasetViewRelationshipsResponsesJobsList = DatasetsAPI.DatasetViewRelationshipsResponsesJobsList;
  export import DatasetViewTableResponsesJobsList = DatasetsAPI.DatasetViewTableResponsesJobsList;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import DatasetMatchParams = DatasetsAPI.DatasetMatchParams;
  export import DatasetViewRelationshipsParams = DatasetsAPI.DatasetViewRelationshipsParams;
  export import DatasetViewTableParams = DatasetsAPI.DatasetViewTableParams;
  export import DatasetViewTablesWithRelationshipsParams = DatasetsAPI.DatasetViewTablesWithRelationshipsParams;
}
