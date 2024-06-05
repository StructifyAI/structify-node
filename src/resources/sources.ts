// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as SourcesAPI from './sources';

export class Sources extends APIResource {
  /**
   * Get all sources for a given entity
   */
  list(query: SourceListParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/source/get_sources', { query, ...options });
  }
}

export type SourceListResponse = unknown;

export interface SourceListParams {
  /**
   * Id of the entity to get sources for
   */
  id: number;
}

export namespace Sources {
  export import SourceListResponse = SourcesAPI.SourceListResponse;
  export import SourceListParams = SourcesAPI.SourceListParams;
}
