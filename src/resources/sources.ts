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

export type Source = Source.Web | Source.Document | Source.SecFiling;

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

  export interface SecFiling {
    SecFiling: SecFiling.SecFiling;
  }

  export namespace SecFiling {
    export interface SecFiling {
      accession_number: string;

      cik_number: string;
    }
  }
}

export type SourceListResponse = Array<SourceListResponse.SourceListResponseItem>;

export namespace SourceListResponse {
  export interface SourceListResponseItem {
    id: string;

    created_at: string;

    is_summary: boolean;

    user_specified: boolean;

    link?: SourcesAPI.Source | null;

    location?:
      | SourceListResponseItem.Text
      | SourceListResponseItem.Visual
      | SourceListResponseItem.Page
      | null;

    scraper_id?: string | null;

    step_id?: string | null;
  }

  export namespace SourceListResponseItem {
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
