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

  /**
   * Get all sources for a given entity
   */
  report(params: SourceReportParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { id, property } = params;
    return this._client.post('/source/report', {
      query: { id, property },
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type Source = Source.Web | Source.Document | 'None';

export namespace Source {
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
}

export interface SourceListResponse {
  id: string;

  link: Source;

  location: SourceListResponse.Text | SourceListResponse.Visual | 'None';
}

export namespace SourceListResponse {
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

export type SourceReportResponse = string;

export interface SourceListParams {
  /**
   * Id of the entity to get sources for
   */
  id: number;
}

export interface SourceReportParams {
  /**
   * Id of the entity to report
   */
  id: number;

  /**
   * Property name that is incorrect
   */
  property: string;
}

export namespace Sources {
  export import Source = SourcesAPI.Source;
  export import SourceListResponse = SourcesAPI.SourceListResponse;
  export import SourceReportResponse = SourcesAPI.SourceReportResponse;
  export import SourceListParams = SourcesAPI.SourceListParams;
  export import SourceReportParams = SourcesAPI.SourceReportParams;
}
