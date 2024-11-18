// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SharedAPI from '../shared';

export class Entity extends APIResource {
  /**
   * verify a kg against the dataset
   */
  verify(body: EntityVerifyParams, options?: Core.RequestOptions): Core.APIPromise<SharedAPI.KnowledgeGraph> {
    return this._client.post('/admin/entity/verify', { body, ...options });
  }
}

export interface EntityVerifyParams {
  dataset_name: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  kg: SharedAPI.KnowledgeGraph;

  /**
   * Whether to apply fixes to the dataset
   */
  fix?: boolean;
}

export declare namespace Entity {
  export { type EntityVerifyParams as EntityVerifyParams };
}
