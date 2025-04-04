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
  get(query: EntityGetParams, options?: Core.RequestOptions): Core.APIPromise<EntityGetResponse> {
    return this._client.get('/entity/get', { query, ...options });
  }

  getLocalSubgraph(
    query: EntityGetLocalSubgraphParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntityGetLocalSubgraphResponse> {
    return this._client.get('/entity/get_local_subgraph', { query, ...options });
  }

  /**
   * Get all historical merges for a given entity
   */
  getMerges(
    query: EntityGetMergesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntityGetMergesResponse> {
    return this._client.get('/entity/get_merges', { query, ...options });
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

export type EntityDeleteResponse = Array<string>;

export type EntityAddResponse = Array<string>;

export type EntityAddBatchResponse = Array<string>;

export interface EntityGetResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  label: string;

  properties: Record<string, string | boolean | number | SharedAPI.Image>;

  updated_at: string;
}

export interface EntityGetLocalSubgraphResponse {
  neighbors: Array<EntityGetLocalSubgraphResponse.Neighbor>;

  relationships: Array<EntityGetLocalSubgraphResponse.Relationship>;
}

export namespace EntityGetLocalSubgraphResponse {
  export interface Neighbor {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    updated_at: string;
  }

  export interface Relationship {
    from_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    to_id: string;
  }
}

export type EntityGetMergesResponse = Array<SharedAPI.EntityMatch>;

export interface EntityGetSourceEntitiesResponse {
  source_entities: Array<Array<EntityGetSourceEntitiesResponse.SourceEntity>>;
}

export namespace EntityGetSourceEntitiesResponse {
  export interface SourceEntity {
    id: string;

    created_at: string;

    is_summary: boolean;

    label: string;

    llm_id: number;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    source_id: string;

    user_specified: boolean;

    job_id?: string | null;

    kg_entity_id?: string | null;

    link?: SourcesAPI.Source | null;

    location?: SourceEntity.Text | SourceEntity.Visual | SourceEntity.Page | null;

    step_id?: string | null;
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

export type EntityListJobsResponse = Array<EntityListJobsResponse.EntityListJobsResponseItem>;

export namespace EntityListJobsResponse {
  export interface EntityListJobsResponseItem {
    id: string;

    created_at: string;

    dataset_id: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    user_id: string;

    /**
     * A message about the status of the job at completion
     */
    message?: string | null;

    /**
     * Proto for JobInput
     */
    parameters?: Core.Uploadable | null;

    plan_id?: string | null;

    /**
     * A reason for the job's existence
     */
    reason?: string | null;

    /**
     * What time did the job start running?
     */
    run_started_time?: string | null;
  }
}

export interface EntityMergeResponse {
  match_object?: SharedAPI.EntityMatch | null;

  merged_entity_id?: string | null;
}

export type EntitySearchResponse = Array<EntitySearchResponse.EntitySearchResponseItem>;

export namespace EntitySearchResponse {
  export interface EntitySearchResponseItem {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    updated_at: string;
  }
}

export type EntitySummarizeResponse = Array<EntitySummarizeResponse.EntitySummarizeResponseItem>;

export namespace EntitySummarizeResponse {
  export interface EntitySummarizeResponseItem {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    updated_at: string;
  }
}

export interface EntityTriggerMergeResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  label: string;

  properties: Record<string, string | boolean | number | SharedAPI.Image>;

  updated_at: string;
}

export interface EntityUpdatePropertyResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  label: string;

  properties: Record<string, string | boolean | number | SharedAPI.Image>;

  updated_at: string;
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

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    updated_at: string;
  }

  export interface Entity {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    updated_at: string;
  }

  export interface Relationship {
    from_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    to_id: string;
  }

  export interface SimilarEntity {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    updated_at: string;
  }

  export interface Source {
    id: string;

    created_at: string;

    is_summary: boolean;

    user_specified: boolean;

    link?: SourcesAPI.Source | null;

    location?: Source.Text | Source.Visual | Source.Page | null;

    step_id?: string | null;
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
  id: string;

  resolve_id?: boolean;
}

export interface EntityGetLocalSubgraphParams {
  id: string;

  radius?: number;
}

export interface EntityGetMergesParams {
  entity_id: string;
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
  id: string;

  resolve_id?: boolean;
}

export declare namespace Entities {
  export {
    type EntityDeleteResponse as EntityDeleteResponse,
    type EntityAddResponse as EntityAddResponse,
    type EntityAddBatchResponse as EntityAddBatchResponse,
    type EntityGetResponse as EntityGetResponse,
    type EntityGetLocalSubgraphResponse as EntityGetLocalSubgraphResponse,
    type EntityGetMergesResponse as EntityGetMergesResponse,
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
    type EntityGetMergesParams as EntityGetMergesParams,
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
