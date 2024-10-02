// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EntitiesAPI from './entities';
import * as SharedAPI from './shared';
import * as SourcesAPI from './sources';

export class Entities extends APIResource {
  /**
   * Add an entity manually
   */
  add(body: EntityAddParams, options?: Core.RequestOptions): Core.APIPromise<EntityAddResponse> {
    return this._client.post('/entity/add', { body, ...options });
  }

  /**
   * Get entity with a given id
   */
  get(query: EntityGetParams, options?: Core.RequestOptions): Core.APIPromise<EntityGetResponse> {
    return this._client.get('/entity/get', { query, ...options });
  }

  getLocalSubgraph(
    query: EntityGetLocalSubgraphParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntityGetLocalSubgraphResponse> {
    return this._client.get('/entity/get_local_subgraph', { query, ...options });
  }

  getSourceEntities(
    query: EntityGetSourceEntitiesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntityGetSourceEntitiesResponse> {
    return this._client.get('/entity/get_source_entities', { query, ...options });
  }

  /**
   * merge an entity manually
   */
  merge(body: EntityMergeParams, options?: Core.RequestOptions): Core.APIPromise<EntityMergeResponse> {
    return this._client.post('/entity/merge', { body, ...options });
  }

  /**
   * Search for entities based on the given query
   */
  search(body: EntitySearchParams, options?: Core.RequestOptions): Core.APIPromise<EntitySearchResponse> {
    return this._client.post('/entity/search', { body, ...options });
  }
}

export type EntityAddResponse = Array<string>;

export interface EntityGetResponse {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | boolean | number>;
}

export interface EntityGetLocalSubgraphResponse {
  neighbors: Array<EntityGetLocalSubgraphResponse.Neighbor>;

  relationships: Array<EntityGetLocalSubgraphResponse.Relationship>;
}

export namespace EntityGetLocalSubgraphResponse {
  export interface Neighbor {
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

export interface EntityGetSourceEntitiesResponse {
  source_entities: Array<Array<EntityGetSourceEntitiesResponse.SourceEntity>>;
}

export namespace EntityGetSourceEntitiesResponse {
  export interface SourceEntity {
    id: string;

    creation_time: string;

    label: string;

    link: SourcesAPI.Source;

    llm_id: number;

    location: SourceEntity.Text | SourceEntity.Visual | SourceEntity.Page | 'None';

    properties: Record<string, string | boolean | number>;

    user_specified: boolean;
  }

  export namespace SourceEntity {
    export interface Text {
      Text: Text.Text;
    }

    export namespace Text {
      export interface Text {
        byte_offset: number;
      }
    }

    export interface Visual {
      Visual: Visual.Visual;
    }

    export namespace Visual {
      export interface Visual {
        x: number;

        y: number;
      }
    }

    export interface Page {
      Page: Page.Page;
    }

    export namespace Page {
      export interface Page {
        page_number: number;
      }
    }
  }
}

export interface EntityMergeResponse {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | boolean | number>;
}

export type EntitySearchResponse = Array<EntitySearchResponse.EntitySearchResponseItem>;

export namespace EntitySearchResponse {
  export interface EntitySearchResponseItem {
    id: string;

    creation_time: string;

    label: string;

    properties: Record<string, string | boolean | number>;
  }
}

export interface EntityAddParams {
  dataset_name: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  kg: SharedAPI.KnowledgeGraph;

  source?: 'None' | EntityAddParams.Web | EntityAddParams.DocumentPage;
}

export namespace EntityAddParams {
  export interface Web {
    Web: string;
  }

  export interface DocumentPage {
    DocumentPage: Array<unknown>;
  }
}

export interface EntityGetParams {
  id: string;
}

export interface EntityGetLocalSubgraphParams {
  id: string;

  radius?: number;
}

export interface EntityGetSourceEntitiesParams {
  id: string;
}

export interface EntityMergeParams {
  entity_1_id: string;

  entity_2_id: string;
}

export interface EntitySearchParams {
  dataset_name: string;

  query: string;

  table_name: string;
}

export namespace Entities {
  export import EntityAddResponse = EntitiesAPI.EntityAddResponse;
  export import EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export import EntityGetLocalSubgraphResponse = EntitiesAPI.EntityGetLocalSubgraphResponse;
  export import EntityGetSourceEntitiesResponse = EntitiesAPI.EntityGetSourceEntitiesResponse;
  export import EntityMergeResponse = EntitiesAPI.EntityMergeResponse;
  export import EntitySearchResponse = EntitiesAPI.EntitySearchResponse;
  export import EntityAddParams = EntitiesAPI.EntityAddParams;
  export import EntityGetParams = EntitiesAPI.EntityGetParams;
  export import EntityGetLocalSubgraphParams = EntitiesAPI.EntityGetLocalSubgraphParams;
  export import EntityGetSourceEntitiesParams = EntitiesAPI.EntityGetSourceEntitiesParams;
  export import EntityMergeParams = EntitiesAPI.EntityMergeParams;
  export import EntitySearchParams = EntitiesAPI.EntitySearchParams;
}
