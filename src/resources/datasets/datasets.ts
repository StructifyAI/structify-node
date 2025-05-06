// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DatasetsAPI from './datasets';
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
  create(body: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/dataset/create', { body, ...options });
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
   * Add a property descriptor to a table in the dataset schema
   */
  addProperty(body: DatasetAddPropertyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/dataset/add_property', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get the enrichment progress for a dataset
   */
  enrichmentProgress(
    query: DatasetEnrichmentProgressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetEnrichmentProgressResponse> {
    return this._client.get('/dataset/enrichment_progress', { query, ...options });
  }

  /**
   * You need to specify a dataset and a table_name
   */
  exportToCsv(query: DatasetExportToCsvParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/dataset/export_to_csv', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Each table and relationship type will be in its own sheet
   */
  exportToExcel(query: DatasetExportToExcelParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/dataset/export_to_excel', {
      query,
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
   * Remove a property descriptor from a table in the dataset schema
   */
  removeProperty(body: DatasetRemovePropertyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/dataset/remove_property', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  reorderProperties(
    body: DatasetReorderPropertiesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/dataset/reorder_properties', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  setPrimaryColumn(
    body: DatasetSetPrimaryColumnParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/dataset/set_primary_column', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update a property descriptor in a table in the dataset schema
   */
  updateProperty(body: DatasetUpdatePropertyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/dataset/update_property', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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

/**
 * The configuration for a probabilistic merge strategy
 */
export interface MergeConfig {
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

export interface RelationshipMergeStrategy {
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

export type Strategy = 'Unique' | 'NoSignal' | Strategy.Probabilistic;

export namespace Strategy {
  export interface Probabilistic {
    /**
     * The configuration for a probabilistic merge strategy
     */
    Probabilistic: DatasetsAPI.MergeConfig;
  }
}

export type DatasetCreateResponse = string;

export type DatasetListResponse = Array<DatasetListResponse.DatasetListResponseItem>;

export namespace DatasetListResponse {
  export interface DatasetListResponseItem {
    id: string;

    description: string;

    name: string;
  }
}

export interface DatasetEnrichmentProgressResponse {
  completed: number;

  failed: number;

  queued: number;

  running: number;

  total: number;
}

/**
 * A dataset is where you put multiple referential schemas.
 *
 * A dataset is a complete namespace where all references between schemas are held
 * within the dataset.
 */
export interface DatasetGetResponse extends SharedAPI.DatasetDescriptor {
  id: string;

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
  id: string;

  created_at: string;

  dataset_id: string;

  from_id: string;

  label: string;

  properties: Record<
    string,
    | string
    | boolean
    | number
    | DatasetViewRelationshipsResponse.PartialDateObject
    | string
    | string
    | DatasetViewRelationshipsResponse.URLObject
    | string
    | DatasetViewRelationshipsResponse.MoneyObject
    | SharedAPI.Image
    | DatasetViewRelationshipsResponse.PersonName
    | DatasetViewRelationshipsResponse.AddressObject
    | string
  >;

  to_id: string;

  updated_at: string;
}

export namespace DatasetViewRelationshipsResponse {
  export interface PartialDateObject {
    original_string: string;

    year: number;

    day?: number | null;

    month?: number | null;
  }

  export interface URLObject {
    original_string: string;

    url: string;
  }

  export interface MoneyObject {
    amount: number;

    currency_code:
      | 'USD'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'CNY'
      | 'INR'
      | 'RUB'
      | 'CAD'
      | 'AUD'
      | 'CHF'
      | 'ILS'
      | 'NZD'
      | 'SGD'
      | 'HKD'
      | 'NOK'
      | 'SEK'
      | 'PLN'
      | 'TRY'
      | 'DKK'
      | 'MXN'
      | 'ZAR'
      | 'PHP'
      | 'VND'
      | 'THB'
      | 'BRL'
      | 'KRW';

    original_string: string;
  }

  export interface PersonName {
    name: string;
  }

  export interface AddressObject {
    components: Record<string, string>;

    original_address: string;
  }
}

export interface DatasetViewTableResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  label: string;

  properties: Record<
    string,
    | string
    | boolean
    | number
    | DatasetViewTableResponse.PartialDateObject
    | string
    | string
    | DatasetViewTableResponse.URLObject
    | string
    | DatasetViewTableResponse.MoneyObject
    | SharedAPI.Image
    | DatasetViewTableResponse.PersonName
    | DatasetViewTableResponse.AddressObject
    | string
  >;

  updated_at: string;
}

export namespace DatasetViewTableResponse {
  export interface PartialDateObject {
    original_string: string;

    year: number;

    day?: number | null;

    month?: number | null;
  }

  export interface URLObject {
    original_string: string;

    url: string;
  }

  export interface MoneyObject {
    amount: number;

    currency_code:
      | 'USD'
      | 'EUR'
      | 'GBP'
      | 'JPY'
      | 'CNY'
      | 'INR'
      | 'RUB'
      | 'CAD'
      | 'AUD'
      | 'CHF'
      | 'ILS'
      | 'NZD'
      | 'SGD'
      | 'HKD'
      | 'NOK'
      | 'SEK'
      | 'PLN'
      | 'TRY'
      | 'DKK'
      | 'MXN'
      | 'ZAR'
      | 'PHP'
      | 'VND'
      | 'THB'
      | 'BRL'
      | 'KRW';

    original_string: string;
  }

  export interface PersonName {
    name: string;
  }

  export interface AddressObject {
    components: Record<string, string>;

    original_address: string;
  }
}

export interface DatasetViewTablesWithRelationshipsResponse {
  connected_entities: Array<DatasetViewTablesWithRelationshipsResponse.ConnectedEntity>;

  entities: Array<DatasetViewTablesWithRelationshipsResponse.Entity>;

  relationships: Array<DatasetViewTablesWithRelationshipsResponse.Relationship>;
}

export namespace DatasetViewTablesWithRelationshipsResponse {
  export interface ConnectedEntity {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<
      string,
      | string
      | boolean
      | number
      | ConnectedEntity.PartialDateObject
      | string
      | string
      | ConnectedEntity.URLObject
      | string
      | ConnectedEntity.MoneyObject
      | SharedAPI.Image
      | ConnectedEntity.PersonName
      | ConnectedEntity.AddressObject
      | string
    >;

    updated_at: string;
  }

  export namespace ConnectedEntity {
    export interface PartialDateObject {
      original_string: string;

      year: number;

      day?: number | null;

      month?: number | null;
    }

    export interface URLObject {
      original_string: string;

      url: string;
    }

    export interface MoneyObject {
      amount: number;

      currency_code:
        | 'USD'
        | 'EUR'
        | 'GBP'
        | 'JPY'
        | 'CNY'
        | 'INR'
        | 'RUB'
        | 'CAD'
        | 'AUD'
        | 'CHF'
        | 'ILS'
        | 'NZD'
        | 'SGD'
        | 'HKD'
        | 'NOK'
        | 'SEK'
        | 'PLN'
        | 'TRY'
        | 'DKK'
        | 'MXN'
        | 'ZAR'
        | 'PHP'
        | 'VND'
        | 'THB'
        | 'BRL'
        | 'KRW';

      original_string: string;
    }

    export interface PersonName {
      name: string;
    }

    export interface AddressObject {
      components: Record<string, string>;

      original_address: string;
    }
  }

  export interface Entity {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<
      string,
      | string
      | boolean
      | number
      | Entity.PartialDateObject
      | string
      | string
      | Entity.URLObject
      | string
      | Entity.MoneyObject
      | SharedAPI.Image
      | Entity.PersonName
      | Entity.AddressObject
      | string
    >;

    updated_at: string;
  }

  export namespace Entity {
    export interface PartialDateObject {
      original_string: string;

      year: number;

      day?: number | null;

      month?: number | null;
    }

    export interface URLObject {
      original_string: string;

      url: string;
    }

    export interface MoneyObject {
      amount: number;

      currency_code:
        | 'USD'
        | 'EUR'
        | 'GBP'
        | 'JPY'
        | 'CNY'
        | 'INR'
        | 'RUB'
        | 'CAD'
        | 'AUD'
        | 'CHF'
        | 'ILS'
        | 'NZD'
        | 'SGD'
        | 'HKD'
        | 'NOK'
        | 'SEK'
        | 'PLN'
        | 'TRY'
        | 'DKK'
        | 'MXN'
        | 'ZAR'
        | 'PHP'
        | 'VND'
        | 'THB'
        | 'BRL'
        | 'KRW';

      original_string: string;
    }

    export interface PersonName {
      name: string;
    }

    export interface AddressObject {
      components: Record<string, string>;

      original_address: string;
    }
  }

  export interface Relationship {
    id: string;

    created_at: string;

    dataset_id: string;

    from_id: string;

    label: string;

    properties: Record<
      string,
      | string
      | boolean
      | number
      | Relationship.PartialDateObject
      | string
      | string
      | Relationship.URLObject
      | string
      | Relationship.MoneyObject
      | SharedAPI.Image
      | Relationship.PersonName
      | Relationship.AddressObject
      | string
    >;

    to_id: string;

    updated_at: string;
  }

  export namespace Relationship {
    export interface PartialDateObject {
      original_string: string;

      year: number;

      day?: number | null;

      month?: number | null;
    }

    export interface URLObject {
      original_string: string;

      url: string;
    }

    export interface MoneyObject {
      amount: number;

      currency_code:
        | 'USD'
        | 'EUR'
        | 'GBP'
        | 'JPY'
        | 'CNY'
        | 'INR'
        | 'RUB'
        | 'CAD'
        | 'AUD'
        | 'CHF'
        | 'ILS'
        | 'NZD'
        | 'SGD'
        | 'HKD'
        | 'NOK'
        | 'SEK'
        | 'PLN'
        | 'TRY'
        | 'DKK'
        | 'MXN'
        | 'ZAR'
        | 'PHP'
        | 'VND'
        | 'THB'
        | 'BRL'
        | 'KRW';

      original_string: string;
    }

    export interface PersonName {
      name: string;
    }

    export interface AddressObject {
      components: Record<string, string>;

      original_address: string;
    }
  }
}

export interface DatasetCreateParams {
  description: string;

  name: string;

  relationships: Array<DatasetCreateParams.Relationship>;

  tables: Array<SharedAPI.Table>;

  generate_merge_criteria?: boolean;

  llm_override_field?: string | null;
}

export namespace DatasetCreateParams {
  export interface Relationship {
    description: string;

    name: string;

    source_table: string;

    target_table: string;

    merge_strategy?: DatasetsAPI.RelationshipMergeStrategy | null;

    properties?: Array<Relationship.Property>;
  }

  export namespace Relationship {
    export interface Property {
      description: string;

      name: string;

      merge_strategy?: DatasetsAPI.Strategy;

      prop_type?: SharedAPI.PropertyType;
    }
  }
}

export interface DatasetDeleteParams {
  /**
   * The name of the dataset
   */
  name: string;
}

export interface DatasetAddPropertyParams {
  dataset_name: string;

  property: DatasetAddPropertyParams.Property;

  table_name: string;
}

export namespace DatasetAddPropertyParams {
  export interface Property {
    description: string;

    name: string;

    merge_strategy?: DatasetsAPI.Strategy;

    prop_type?: SharedAPI.PropertyType;
  }
}

export interface DatasetEnrichmentProgressParams {
  /**
   * Enrichment progress for the dataset
   */
  name: string;
}

export interface DatasetExportToCsvParams {
  dataset: string;

  name: string;
}

export interface DatasetExportToExcelParams {
  dataset: string;
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

export interface DatasetRemovePropertyParams {
  dataset_name: string;

  property_name: string;

  table_name: string;
}

export interface DatasetReorderPropertiesParams {
  dataset_name: string;

  property_names: Array<string>;

  table_name: string;
}

export interface DatasetSetPrimaryColumnParams {
  dataset_name: string;

  property_name: string;

  table_name: string;
}

export interface DatasetUpdatePropertyParams {
  dataset_name: string;

  property_name: string;

  table_name: string;

  new_property_description?: string | null;

  new_property_merge_strategy?: Strategy | null;

  new_property_type?: SharedAPI.PropertyType | null;
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
    col_id: SortBy.UserDefinedColumn | 'creation_time';

    sort: 'asc' | 'desc';
  }

  export namespace SortBy {
    export interface UserDefinedColumn {
      user_defined_column: string;
    }
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
    col_id: SortBy.UserDefinedColumn | 'creation_time';

    sort: 'asc' | 'desc';
  }

  export namespace SortBy {
    export interface UserDefinedColumn {
      user_defined_column: string;
    }
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
    col_id: SortBy.UserDefinedColumn | 'creation_time';

    sort: 'asc' | 'desc';
  }

  export namespace SortBy {
    export interface UserDefinedColumn {
      user_defined_column: string;
    }
  }
}

Datasets.DatasetViewRelationshipsResponsesJobsList = DatasetViewRelationshipsResponsesJobsList;
Datasets.DatasetViewTableResponsesJobsList = DatasetViewTableResponsesJobsList;
Datasets.Evaluate = Evaluate;
Datasets.EvaluateListResponsesJobsList = EvaluateListResponsesJobsList;

export declare namespace Datasets {
  export {
    type MergeConfig as MergeConfig,
    type RelationshipMergeStrategy as RelationshipMergeStrategy,
    type Strategy as Strategy,
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetEnrichmentProgressResponse as DatasetEnrichmentProgressResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetMatchResponse as DatasetMatchResponse,
    type DatasetViewRelationshipsResponse as DatasetViewRelationshipsResponse,
    type DatasetViewTableResponse as DatasetViewTableResponse,
    type DatasetViewTablesWithRelationshipsResponse as DatasetViewTablesWithRelationshipsResponse,
    DatasetViewRelationshipsResponsesJobsList as DatasetViewRelationshipsResponsesJobsList,
    DatasetViewTableResponsesJobsList as DatasetViewTableResponsesJobsList,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetAddPropertyParams as DatasetAddPropertyParams,
    type DatasetEnrichmentProgressParams as DatasetEnrichmentProgressParams,
    type DatasetExportToCsvParams as DatasetExportToCsvParams,
    type DatasetExportToExcelParams as DatasetExportToExcelParams,
    type DatasetGetParams as DatasetGetParams,
    type DatasetMatchParams as DatasetMatchParams,
    type DatasetRemovePropertyParams as DatasetRemovePropertyParams,
    type DatasetReorderPropertiesParams as DatasetReorderPropertiesParams,
    type DatasetSetPrimaryColumnParams as DatasetSetPrimaryColumnParams,
    type DatasetUpdatePropertyParams as DatasetUpdatePropertyParams,
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
