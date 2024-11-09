// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SharedAPI from './shared';
import * as SourcesAPI from './sources';

export class Entities extends APIResource {
  /**
   * Delete an entity manually
   */
  delete(body: EntityDeleteParams, options?: Core.RequestOptions): Core.APIPromise<EntityDeleteResponse> {
    return this._client.delete('/entity/delete', { body, ...options });
  }

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

  /**
   * Search for entities based on the given query
   */
  summarize(
    body: EntitySummarizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntitySummarizeResponse> {
    return this._client.post('/entity/summarize', { body, ...options });
  }

  /**
   * update an entity manually
   */
  updateProperty(
    body: EntityUpdatePropertyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntityUpdatePropertyResponse> {
    return this._client.post('/entity/update', { body, ...options });
  }

  view(query: EntityViewParams, options?: Core.RequestOptions): Core.APIPromise<EntityViewResponse> {
    return this._client.get('/entity/view', { query, ...options });
  }
}

export type EntityDeleteResponse = Array<string>;

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

    is_summary: boolean;

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

export type EntitySummarizeResponse = Array<EntitySummarizeResponse.EntitySummarizeResponseItem>;

export namespace EntitySummarizeResponse {
  export interface EntitySummarizeResponseItem {
    id: string;

    creation_time: string;

    label: string;

    properties: Record<string, string | boolean | number>;
  }
}

export interface EntityUpdatePropertyResponse {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | boolean | number>;
}

export interface EntityViewResponse {
  connected_entities: Array<EntityViewResponse.ConnectedEntity>;

  entity: EntityViewResponse.Entity;

  last_updated: string;

  relationships: Array<EntityViewResponse.Relationship>;

  similar_entities: Array<EntityViewResponse.SimilarEntity>;

  sources: Array<EntityViewResponse.Source>;
}

export namespace EntityViewResponse {
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

  export interface SimilarEntity {
    id: string;

    creation_time: string;

    label: string;

    properties: Record<string, string | boolean | number>;
  }

  export interface Source {
    id: string;

    creation_time: string;

    is_summary: boolean;

    link: SourcesAPI.Source;

    location: Source.Text | Source.Visual | Source.Page | 'None';

    user_specified: boolean;
  }

  export namespace Source {
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

export interface EntityDeleteParams {
  dataset_name: string;

  entity_id: string;
}

export interface EntityAddParams {
  dataset_name: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  kg: SharedAPI.KnowledgeGraph;

  /**
   * If true, attempt to merge with existing entities in the dataset
   */
  attempt_merge?: boolean;

  source?: 'None' | EntityAddParams.Web | EntityAddParams.DocumentPage | EntityAddParams.SecFiling;
}

export namespace EntityAddParams {
  export interface Web {
    Web: string;
  }

  export interface DocumentPage {
    DocumentPage: Array<unknown>;
  }

  export interface SecFiling {
    SecFiling: Array<unknown>;
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

export interface EntitySummarizeParams {
  dataset_name: string;

  entity_id: string;

  properties: Array<string>;

  /**
   * A list of instructions for each property to guide the summarization process
   */
  extra_instructions?: Array<string> | null;
}

export interface EntityUpdatePropertyParams {
  dataset_name: string;

  entity_id: string;

  /**
   * The name of the property to update
   */
  prop_name: string;

  prop_value: string | boolean | number;
}

export interface EntityViewParams {
  id: string;
}

export declare namespace Entities {
  export {
    type EntityDeleteResponse as EntityDeleteResponse,
    type EntityAddResponse as EntityAddResponse,
    type EntityGetResponse as EntityGetResponse,
    type EntityGetLocalSubgraphResponse as EntityGetLocalSubgraphResponse,
    type EntityGetSourceEntitiesResponse as EntityGetSourceEntitiesResponse,
    type EntityMergeResponse as EntityMergeResponse,
    type EntitySearchResponse as EntitySearchResponse,
    type EntitySummarizeResponse as EntitySummarizeResponse,
    type EntityUpdatePropertyResponse as EntityUpdatePropertyResponse,
    type EntityViewResponse as EntityViewResponse,
    type EntityDeleteParams as EntityDeleteParams,
    type EntityAddParams as EntityAddParams,
    type EntityGetParams as EntityGetParams,
    type EntityGetLocalSubgraphParams as EntityGetLocalSubgraphParams,
    type EntityGetSourceEntitiesParams as EntityGetSourceEntitiesParams,
    type EntityMergeParams as EntityMergeParams,
    type EntitySearchParams as EntitySearchParams,
    type EntitySummarizeParams as EntitySummarizeParams,
    type EntityUpdatePropertyParams as EntityUpdatePropertyParams,
    type EntityViewParams as EntityViewParams,
  };
}
