// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SourcesAPI from './sources';

export class Sources extends APIResource {
  /**
   * Get all sources for a given entity
   */
  list(query: SourceListParams, options?: Core.RequestOptions): Core.APIPromise<SourceListResponse> {
    return this._client.get('/source/get_sources', { query, ...options });
  }
}

export type Source = Source.URL | Source.Name | Source.UnionMember2 | unknown;

export namespace Source {
  export interface URL {
    url: string;
  }

  export interface Name {
    name: string;
  }

  export interface UnionMember2 {
    accession_number: string;

    cik_number: string;
  }
}

export type SourceListResponse = Array<SourceListResponse.SourceListResponseItem>;

export namespace SourceListResponse {
  export interface SourceListResponseItem {
    id: string;

    creation_time: string;

    is_summary: boolean;

    link: SourcesAPI.Source;

    location:
      | SourceListResponseItem.ByteOffset
      | SourceListResponseItem.UnionMember1
      | SourceListResponseItem.PageNumber
      | unknown;

    user_specified: boolean;
  }

  export namespace SourceListResponseItem {
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

export interface SourceListParams {
  /**
   * Entity ID to get sources for
   */
  id: string;

  /**
   * Optional property name to filter sources by
   */
  property?: string | null;
}

export declare namespace Sources {
  export {
    type Source as Source,
    type SourceListResponse as SourceListResponse,
    type SourceListParams as SourceListParams,
  };
}
