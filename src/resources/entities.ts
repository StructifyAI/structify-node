// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SharedAPI from './shared';

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
  ): Core.APIPromise<EntityTriggerMergeResponse> {
    const { entity_id } = params;
    return this._client.post('/entity/trigger_merge', { query: { entity_id }, ...options });
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

  /**
   * verify a kg against the dataset
   */
  verify(body: EntityVerifyParams, options?: Core.RequestOptions): Core.APIPromise<SharedAPI.KnowledgeGraph> {
    return this._client.post('/entity/verify', { body, ...options });
  }

  view(query: EntityViewParams, options?: Core.RequestOptions): Core.APIPromise<EntityViewResponse> {
    return this._client.get('/entity/view', { query, ...options });
  }
}

export type EntityDeleteResponse = Array<number>;

export type EntityAddResponse = Array<number>;

export type EntityAddBatchResponse = Array<number>;

export interface EntityGetResponse {
  id: number;

  creation_time: string;

  dataset_id: unknown;

  label: string;

  properties: unknown;
}

export interface EntityGetLocalSubgraphResponse {
  neighbors: Array<EntityGetLocalSubgraphResponse.Neighbor>;

  relationships: Array<EntityGetLocalSubgraphResponse.Relationship>;
}

export namespace EntityGetLocalSubgraphResponse {
  export interface Neighbor {
    id: number;

    creation_time: string;

    dataset_id: unknown;

    label: string;

    properties: unknown;
  }

  export interface Relationship {
    from_id: number;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    to_id: number;
  }
}

export interface EntityGetSourceEntitiesResponse {
  source_entities: Array<Array<EntityGetSourceEntitiesResponse.SourceEntity>>;
}

export namespace EntityGetSourceEntitiesResponse {
  export interface SourceEntity {
    id: number;

    created_at: string;

    is_summary: boolean;

    label: string;

    link: unknown;

    llm_id: number;

    location: unknown;

    properties: unknown;

    source_id: number;

    user_specified: boolean;

    entity_id?: number | null;

    job_id?: number | null;

    step_id?: number | null;
  }
}

export type EntityListJobsResponse = Array<EntityListJobsResponse.EntityListJobsResponseItem>;

export namespace EntityListJobsResponse {
  export interface EntityListJobsResponseItem {
    id: number;

    created_at: string;

    dataset_id: unknown;

    parameters: unknown;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    user_id: unknown;

    message?: string | null;

    plan_id?: number | null;

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

  merged_entity_id?: number | null;
}

export namespace EntityMergeResponse {
  export interface MatchObject {
    a_id: number;

    b_id: number;

    info: string;

    p_match: number;

    p_match_threshold: number;
  }
}

export type EntitySearchResponse = Array<EntitySearchResponse.EntitySearchResponseItem>;

export namespace EntitySearchResponse {
  export interface EntitySearchResponseItem {
    id: number;

    creation_time: string;

    dataset_id: unknown;

    label: string;

    properties: unknown;
  }
}

export type EntitySummarizeResponse = Array<EntitySummarizeResponse.EntitySummarizeResponseItem>;

export namespace EntitySummarizeResponse {
  export interface EntitySummarizeResponseItem {
    id: number;

    creation_time: string;

    dataset_id: unknown;

    label: string;

    properties: unknown;
  }
}

export interface EntityTriggerMergeResponse {
  id: number;

  creation_time: string;

  dataset_id: unknown;

  label: string;

  properties: unknown;
}

export interface EntityUpdatePropertyResponse {
  id: number;

  creation_time: string;

  dataset_id: unknown;

  label: string;

  properties: unknown;
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
    id: number;

    creation_time: string;

    dataset_id: unknown;

    label: string;

    properties: unknown;
  }

  export interface Entity {
    id: number;

    creation_time: string;

    dataset_id: unknown;

    label: string;

    properties: unknown;
  }

  export interface Relationship {
    from_id: number;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    to_id: number;
  }

  export interface SimilarEntity {
    id: number;

    creation_time: string;

    dataset_id: unknown;

    label: string;

    properties: unknown;
  }

  export interface Source {
    id: number;

    created_at: string;

    is_summary: boolean;

    link: unknown;

    location: unknown;

    user_specified: boolean;

    step_id?: number | null;
  }
}

export interface EntityDeleteParams {
  dataset: string;

  entity_id: number;
}

export interface EntityAddParams {
  dataset: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  entity_graph: SharedAPI.KnowledgeGraph;

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

export interface EntityAddBatchParams {
  dataset: string;

  entity_graphs: Array<SharedAPI.KnowledgeGraph>;

  /**
   * If true, attempt to merge with existing entities in the dataset
   */
  attempt_merge?: boolean;

  source?:
    | 'None'
    | EntityAddBatchParams.Web
    | EntityAddBatchParams.DocumentPage
    | EntityAddBatchParams.SecFiling;
}

export namespace EntityAddBatchParams {
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
  id: number;

  resolve_id?: boolean;
}

export interface EntityGetLocalSubgraphParams {
  id: number;

  radius?: number;
}

export interface EntityGetSourceEntitiesParams {
  id: number;
}

export interface EntityListJobsParams {
  id: number;
}

export interface EntityMergeParams {
  entity_1_id: number;

  entity_2_id: number;

  debug?: boolean;
}

export interface EntitySearchParams {
  dataset: string;

  query: string;

  table_name: string;
}

export interface EntitySummarizeParams {
  dataset: string;

  entity_id: number;

  properties: Array<string>;

  /**
   * A list of instructions for each property to guide the summarization process
   */
  extra_instructions?: Array<string> | null;
}

export interface EntityTriggerMergeParams {
  entity_id: number;
}

export interface EntityUpdatePropertyParams {
  dataset: string;

  entity_id: number;

  properties: Record<string, string | boolean | number | SharedAPI.Image>;

  source?:
    | 'None'
    | EntityUpdatePropertyParams.Web
    | EntityUpdatePropertyParams.DocumentPage
    | EntityUpdatePropertyParams.SecFiling;
}

export namespace EntityUpdatePropertyParams {
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

export interface EntityVerifyParams {
  dataset: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  entity_graph: SharedAPI.KnowledgeGraph;

  /**
   * Whether to apply fixes to the dataset
   */
  fix?: boolean;
}

export interface EntityViewParams {
  id: number;

  resolve_id?: boolean;
}

export declare namespace Entities {
  export {
    type EntityDeleteResponse as EntityDeleteResponse,
    type EntityAddResponse as EntityAddResponse,
    type EntityAddBatchResponse as EntityAddBatchResponse,
    type EntityGetResponse as EntityGetResponse,
    type EntityGetLocalSubgraphResponse as EntityGetLocalSubgraphResponse,
    type EntityGetSourceEntitiesResponse as EntityGetSourceEntitiesResponse,
    type EntityListJobsResponse as EntityListJobsResponse,
    type EntityMergeResponse as EntityMergeResponse,
    type EntitySearchResponse as EntitySearchResponse,
    type EntitySummarizeResponse as EntitySummarizeResponse,
    type EntityTriggerMergeResponse as EntityTriggerMergeResponse,
    type EntityUpdatePropertyResponse as EntityUpdatePropertyResponse,
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
