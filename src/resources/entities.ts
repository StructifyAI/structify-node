// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EntitiesAPI from './entities';
import * as SharedAPI from './shared';

export class Entities extends APIResource {
  /**
   * Add an entity manually
   */
  add(params: EntityAddParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { dataset_name, entity } = params;
    return this._client.post('/entity/manual_add', {
      query: { dataset_name, entity },
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Get entity with a given id
   */
  get(query: EntityGetParams, options?: Core.RequestOptions): Core.APIPromise<EntityGetResponse> {
    return this._client.get('/entity/get_entity', { query, ...options });
  }
}

export type EntityAddResponse = string;

export interface EntityGetResponse {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | null | boolean | null | number | null>;
}

export interface EntityAddParams {
  /**
   * Dataset name
   */
  dataset_name: string;

  /**
   * Entities and relationships to add
   */
  entity: SharedAPI.KnowledgeGraph;
}

export interface EntityGetParams {
  /**
   * Id of the entity to get entity for
   */
  id: string;
}

export namespace Entities {
  export import EntityAddResponse = EntitiesAPI.EntityAddResponse;
  export import EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export import EntityAddParams = EntitiesAPI.EntityAddParams;
  export import EntityGetParams = EntitiesAPI.EntityGetParams;
}
