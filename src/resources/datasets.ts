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
  get(
    query: DatasetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SharedAPI.DatasetDescriptor | null> {
    return this._client.get('/dataset/info', { query, ...options });
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

export interface DatasetViewRelationshipsResponse {
  from_id: string;

  label: string;

  to_id: string;
}

export interface DatasetViewTableResponse {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | null | boolean | null | number | null>;
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

    properties?: Array<Relationship.Property>;
  }

  export namespace Relationship {
    export interface Property {
      description: string;

      name: string;

      merge_strategy?: 'Unique' | 'FuzzyMatch' | 'None';

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

export interface DatasetGetParams {
  /**
   * Information about the dataset
   */
  name: string;
}

export interface DatasetViewRelationshipsParams extends JobsListParams {
  dataset: string;

  name: string;
}

export interface DatasetViewTableParams extends JobsListParams {
  dataset: string;

  name: string;
}

export namespace Datasets {
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetViewRelationshipsResponse = DatasetsAPI.DatasetViewRelationshipsResponse;
  export import DatasetViewTableResponse = DatasetsAPI.DatasetViewTableResponse;
  export import DatasetViewRelationshipsResponsesJobsList = DatasetsAPI.DatasetViewRelationshipsResponsesJobsList;
  export import DatasetViewTableResponsesJobsList = DatasetsAPI.DatasetViewTableResponsesJobsList;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import DatasetViewRelationshipsParams = DatasetsAPI.DatasetViewRelationshipsParams;
  export import DatasetViewTableParams = DatasetsAPI.DatasetViewTableParams;
}
