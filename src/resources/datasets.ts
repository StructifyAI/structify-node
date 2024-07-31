// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DatasetsAPI from './datasets';
import { RunsList, type RunsListParams } from '../pagination';

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
  get(query: DatasetGetParams, options?: Core.RequestOptions): Core.APIPromise<DatasetDescriptor | null> {
    return this._client.get('/dataset/info', { query, ...options });
  }

  /**
   * You need to specify a dataset. If you don't specify a table_name, we assume all
   * tables.
   *
   * If you want to view relationships, you can not specify a table_name since the
   * result of inter-table relationships is not well defined.
   *
   * You can either return entities or relationships from this call, but not both. If
   * you want both, just make two calls.
   */
  view(
    query: DatasetViewParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetViewResponsesRunsList, DatasetViewResponse> {
    return this._client.getAPIList('/dataset/view', DatasetViewResponsesRunsList, { query, ...options });
  }
}

export class DatasetViewResponsesRunsList extends RunsList<DatasetViewResponse> {}

export interface Dataset {
  description: string;

  name: string;
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

  relationships: Array<DatasetDescriptor.Relationship>;

  tables: Array<DatasetDescriptor.Table>;
}

export namespace DatasetDescriptor {
  export interface Relationship {
    description: string;

    name: string;

    source_table: string;

    target_table: string;
  }

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
  }

  export namespace Table {
    export interface Property {
      description: string;

      name: string;

      merge_strategy?: 'Unique' | 'FuzzyMatch' | 'None';

      prop_type?: 'String' | Property.Enum | 'Integer';
    }

    export namespace Property {
      export interface Enum {
        Enum: string;
      }
    }
  }
}

export type DatasetListResponse = Array<Dataset>;

export type DatasetViewResponse = DatasetViewResponse.Entity | DatasetViewResponse.Relationship;

export namespace DatasetViewResponse {
  export interface Entity {
    Entity: Entity.Entity;
  }

  export namespace Entity {
    export interface Entity {
      id: string;

      label: string;

      properties: Record<string, string | null | boolean | null | number | null>;
    }
  }

  export interface Relationship {
    Relationship: Relationship.Relationship;
  }

  export namespace Relationship {
    export interface Relationship {
      from_id: string;

      label: string;

      to_id: string;
    }
  }
}

export interface DatasetCreateParams {
  description: string;

  name: string;

  relationships: Array<DatasetCreateParams.Relationship>;

  tables: Array<DatasetCreateParams.Table>;
}

export namespace DatasetCreateParams {
  export interface Relationship {
    description: string;

    name: string;

    source_table: string;

    target_table: string;
  }

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
  }

  export namespace Table {
    export interface Property {
      description: string;

      name: string;

      merge_strategy?: 'Unique' | 'FuzzyMatch' | 'None';

      prop_type?: 'String' | Property.Enum | 'Integer';
    }

    export namespace Property {
      export interface Enum {
        Enum: string;
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

export interface DatasetViewParams extends RunsListParams {
  dataset_name: string;

  requested_type: 'Entities' | 'Relationships';

  relationship_name?: string | null;

  table_name?: string | null;
}

export namespace Datasets {
  export import Dataset = DatasetsAPI.Dataset;
  export import DatasetDescriptor = DatasetsAPI.DatasetDescriptor;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetViewResponse = DatasetsAPI.DatasetViewResponse;
  export import DatasetViewResponsesRunsList = DatasetsAPI.DatasetViewResponsesRunsList;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import DatasetViewParams = DatasetsAPI.DatasetViewParams;
}
