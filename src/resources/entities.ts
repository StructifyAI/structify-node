// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EntitiesAPI from './entities';
import * as SharedAPI from './shared';

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

  /**
   * Get all sources for a given entity
   */
  report(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/entity/report', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type EntityAddResponse = Array<string>;

export interface EntityGetResponse {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | null | boolean | null | number | null>;
}

export type EntityReportResponse = string;

export interface EntityAddParams {
  dataset_name: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  kg: SharedAPI.KnowledgeGraph;
}

export interface EntityGetParams {
  id: string;
}

export namespace Entities {
  export import EntityAddResponse = EntitiesAPI.EntityAddResponse;
  export import EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export import EntityReportResponse = EntitiesAPI.EntityReportResponse;
  export import EntityAddParams = EntitiesAPI.EntityAddParams;
  export import EntityGetParams = EntitiesAPI.EntityGetParams;
}
