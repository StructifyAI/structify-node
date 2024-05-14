// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as DatasetsAPI from './datasets';

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
   * Grab a dataset by its name.
   */
  retrieve(
    query: DatasetRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetDescriptor | null> {
    return this._client.get('/dataset/info', { query, ...options });
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
   * View entries from a table in a dataset
   */
  view(query: DatasetViewParams, options?: Core.RequestOptions): Core.APIPromise<DatasetViewResponse> {
    return this._client.get('/dataset/view', { query, ...options });
  }
}

/**
 * A dataset is where you put multiple referential schemas.
 *
 * A dataset is a complete namespace where all references between schemas are held
 * within the dataset.
 */
export interface DatasetDescriptor {
  description: string;

  name: string;

  tables: Array<DatasetDescriptor.Table>;
}

export namespace DatasetDescriptor {
  /**
   * The full definition of what a schema is - without duplicate information.
   */
  export interface Table {
    description: string;

    /**
     * Organized in a name, description format.
     */
    name: string;

    /**
     * Organized in a name, description format.
     */
    properties: Array<Table.Property>;

    relationships: Array<Table.Relationship>;
  }

  export namespace Table {
    export interface Property {
      description: string;

      name: string;
    }

    export interface Relationship {
      description: string;

      name: string;
    }
  }
}

export interface DatasetNode {
  description: string;

  name: string;
}

export interface KgEntity {
  id: number;

  /**
   * Since all Entities have exactly two labels (ENTITY_LABEL and their table name),
   * we only store the non-ENTITY_LABEL label here.
   */
  label: string;

  properties: Record<string, string | null | boolean | null | number | null>;
}

export type DatasetListResponse = Array<DatasetNode>;

export type DatasetViewResponse = Array<KgEntity>;

export interface DatasetCreateParams {
  description: string;

  name: string;

  tables: Array<DatasetCreateParams.Table>;
}

export namespace DatasetCreateParams {
  /**
   * The full definition of what a schema is - without duplicate information.
   */
  export interface Table {
    description: string;

    /**
     * Organized in a name, description format.
     */
    name: string;

    /**
     * Organized in a name, description format.
     */
    properties: Array<Table.Property>;

    relationships: Array<Table.Relationship>;
  }

  export namespace Table {
    export interface Property {
      description: string;

      name: string;
    }

    export interface Relationship {
      description: string;

      name: string;
    }
  }
}

export interface DatasetRetrieveParams {
  /**
   * Information about the dataset
   */
  name: string;
}

export interface DatasetDeleteParams {
  /**
   * The name of the dataset
   */
  name: string;
}

export interface DatasetViewParams {
  dataset_name: string;

  table_name: string;

  limit?: number;

  skip?: number;
}

export namespace Datasets {
  export import DatasetDescriptor = DatasetsAPI.DatasetDescriptor;
  export import DatasetNode = DatasetsAPI.DatasetNode;
  export import KgEntity = DatasetsAPI.KgEntity;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetViewResponse = DatasetsAPI.DatasetViewResponse;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetRetrieveParams = DatasetsAPI.DatasetRetrieveParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetViewParams = DatasetsAPI.DatasetViewParams;
}
