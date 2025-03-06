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
   * Add an entity (or entities) to a dataset given a graph representation of the
   * entity (or entities).
   */
  add(body: EntityAddParams, options?: Core.RequestOptions): Core.APIPromise<EntityAddResponse> {
    return this._client.post('/entity/add', { body, ...options });
  }

  /**
   * Add a batch of entities to a dataset given a list of graph representations of
   * the entities.
   */
  addBatch(
    body: EntityAddBatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntityAddBatchResponse> {
    return this._client.post('/entity/add_batch', { body, ...options });
  }

  /**
   * Get entity with a given id
   */
  get(query: EntityGetParams, options?: Core.RequestOptions): Core.APIPromise<SharedAPI.StructifyEntity> {
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
   * list jobs for a given entity
   */
  listJobs(
    query: EntityListJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntityListJobsResponse> {
    return this._client.get('/entity/list_jobs', { query, ...options });
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
   * Trigger our merge process for a given entity
   */
  triggerMerge(
    params: EntityTriggerMergeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SharedAPI.StructifyEntity> {
    const { entity_id } = params;
    return this._client.post('/entity/trigger_merge', { query: { entity_id }, ...options });
  }

  /**
   * update an entity manually
   */
  updateProperty(
    body: EntityUpdatePropertyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SharedAPI.StructifyEntity> {
    return this._client.post('/entity/update', { body, ...options });
  }

  /**
   * verify a kg against the dataset
   */
  verify(body: EntityVerifyParams, options?: Core.RequestOptions): Core.APIPromise<SharedAPI.EntityGraph> {
    return this._client.post('/entity/verify', { body, ...options });
  }

  view(query: EntityViewParams, options?: Core.RequestOptions): Core.APIPromise<EntityViewResponse> {
    return this._client.get('/entity/view', { query, ...options });
  }
}

export interface UserDocumentSource {
  name: string;

  page: number;
}

export interface UserWebSource {
  url: string;
}

export type EntityDeleteResponse = Array<string>;

export type EntityAddResponse = Array<string>;

export type EntityAddBatchResponse = Array<string>;

export interface EntityGetLocalSubgraphResponse {
  neighbors: Array<SharedAPI.StructifyEntity>;

  relationships: Array<EntityGetLocalSubgraphResponse.Relationship>;
}

export namespace EntityGetLocalSubgraphResponse {
  export interface Relationship {
    from_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

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

    location: SourceEntity.ByteOffset | SourceEntity.UnionMember1 | SourceEntity.PageNumber | unknown;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    user_specified: boolean;
  }

  export namespace SourceEntity {
    export interface ByteOffset {
      byte_offset: number;
    }

    export interface UnionMember1 {
      x: number;

      y: number;
    }

    export interface PageNumber {
      page_number: number;
    }
  }
}

export type EntityListJobsResponse = Array<EntityListJobsResponse.EntityListJobsResponseItem>;

export namespace EntityListJobsResponse {
  export interface EntityListJobsResponseItem {
    id: string;

    creation_time: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    message?: string | null;

    reason?: string | null;

    report_on_complete?: boolean;

    /**
     * What time did the job start running?
     */
    run_started_time?: string | null;
  }
}

export interface EntityMergeResponse {
  match_object?: EntityMergeResponse.MatchObject | null;

  merged_entity_id?: string | null;
}

export namespace EntityMergeResponse {
  export interface MatchObject {
    a_id: string;

    b_id: string;

    info: string;

    p_match: number;

    p_match_threshold: number;
  }
}

export type EntitySearchResponse = Array<SharedAPI.StructifyEntity>;

export type EntitySummarizeResponse = Array<SharedAPI.StructifyEntity>;

export interface EntityViewResponse {
  connected_entities: Array<SharedAPI.StructifyEntity>;

  entity: SharedAPI.StructifyEntity;

  last_updated: string;

  relationships: Array<EntityViewResponse.Relationship>;

  similar_entities: Array<SharedAPI.StructifyEntity>;

  sources: Array<EntityViewResponse.Source>;
}

export namespace EntityViewResponse {
  export interface Relationship {
    from_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    to_id: string;
  }

  export interface Source {
    id: string;

    creation_time: string;

    is_summary: boolean;

    link: SourcesAPI.Source;

    location: Source.ByteOffset | Source.UnionMember1 | Source.PageNumber | unknown;

    user_specified: boolean;
  }

  export namespace Source {
    export interface ByteOffset {
      byte_offset: number;
    }

    export interface UnionMember1 {
      x: number;

      y: number;
    }

    export interface PageNumber {
      page_number: number;
    }
  }
}

export interface EntityDeleteParams {
  dataset: string;

  entity_id: string;
}

export interface EntityAddParams {
  dataset: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  entity_graph: SharedAPI.EntityGraph;

  /**
   * If true, attempt to merge with existing entities in the dataset
   */
  attempt_merge?: boolean;

  source?: UserWebSource | UserDocumentSource;
}

export interface EntityAddBatchParams {
  dataset: string;

  entity_graphs: Array<SharedAPI.EntityGraph>;

  /**
   * If true, attempt to merge with existing entities in the dataset
   */
  attempt_merge?: boolean;

  source?: UserWebSource | UserDocumentSource;
}

export interface EntityGetParams {
  id: string;

  resolve_id?: boolean;
}

export interface EntityGetLocalSubgraphParams {
  id: string;

  radius?: number;
}

export interface EntityGetSourceEntitiesParams {
  id: string;
}

export interface EntityListJobsParams {
  id: string;
}

export interface EntityMergeParams {
  entity_1_id: string;

  entity_2_id: string;

  debug?: boolean;
}

export interface EntitySearchParams {
  dataset: string;

  query: string;

  table_name: string;
}

export interface EntitySummarizeParams {
  dataset: string;

  entity_id: string;

  properties: Array<string>;

  /**
   * A list of instructions for each property to guide the summarization process
   */
  extra_instructions?: Array<string> | null;
}

export interface EntityTriggerMergeParams {
  entity_id: string;
}

export interface EntityUpdatePropertyParams {
  dataset: string;

  entity_id: string;

  properties: Record<string, string | boolean | number | SharedAPI.Image>;

  source?: UserWebSource | UserDocumentSource;
}

export interface EntityVerifyParams {
  dataset: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  kg: SharedAPI.EntityGraph;

  /**
   * Whether to apply fixes to the dataset
   */
  fix?: boolean;
}

export interface EntityViewParams {
  id: string;

  resolve_id?: boolean;
}

export declare namespace Entities {
  export {
    type UserDocumentSource as UserDocumentSource,
    type UserWebSource as UserWebSource,
    type EntityDeleteResponse as EntityDeleteResponse,
    type EntityAddResponse as EntityAddResponse,
    type EntityAddBatchResponse as EntityAddBatchResponse,
    type EntityGetLocalSubgraphResponse as EntityGetLocalSubgraphResponse,
    type EntityGetSourceEntitiesResponse as EntityGetSourceEntitiesResponse,
    type EntityListJobsResponse as EntityListJobsResponse,
    type EntityMergeResponse as EntityMergeResponse,
    type EntitySearchResponse as EntitySearchResponse,
    type EntitySummarizeResponse as EntitySummarizeResponse,
    type EntityViewResponse as EntityViewResponse,
    type EntityDeleteParams as EntityDeleteParams,
    type EntityAddParams as EntityAddParams,
    type EntityAddBatchParams as EntityAddBatchParams,
    type EntityGetParams as EntityGetParams,
    type EntityGetLocalSubgraphParams as EntityGetLocalSubgraphParams,
    type EntityGetSourceEntitiesParams as EntityGetSourceEntitiesParams,
    type EntityListJobsParams as EntityListJobsParams,
    type EntityMergeParams as EntityMergeParams,
    type EntitySearchParams as EntitySearchParams,
    type EntitySummarizeParams as EntitySummarizeParams,
    type EntityTriggerMergeParams as EntityTriggerMergeParams,
    type EntityUpdatePropertyParams as EntityUpdatePropertyParams,
    type EntityVerifyParams as EntityVerifyParams,
    type EntityViewParams as EntityViewParams,
  };
}
