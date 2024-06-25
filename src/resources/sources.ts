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

export interface SourceListResponse {
  extra_properties: Record<string, string | null | boolean | null | number | null>;

  link: SourceListResponse.Web | SourceListResponse.Document | 'None';

  location: SourceListResponse.Text | SourceListResponse.Visual | 'None';
}

export namespace SourceListResponse {
  export interface Web {
    Web: Web.Web;
  }

  export namespace Web {
    export interface Web {
      url: string;
    }
  }

  export interface Document {
    Document: Document.Document;
  }

  export namespace Document {
    export interface Document {
      name: string;
    }
  }

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
}

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
