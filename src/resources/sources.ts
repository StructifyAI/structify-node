// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as SourcesAPI from './sources';

export class Sources extends APIResource {
  /**
   * Get all sources for a given entity
   */
  list(query: SourceListParams, options?: Core.RequestOptions): Core.APIPromise<Source> {
    return this._client.get('/source/get_sources', { query, ...options });
  }
}

export type Source = Source.Text | Source.Document | Source.Web | Source.SecFiling;

export namespace Source {
  export interface Text {
    Text: Text.Text;
  }

  export namespace Text {
    export interface Text {
      text_content: string;
    }
  }

  export interface Document {
    Document: Document.Document;
  }

  export namespace Document {
    export interface Document {
      path: string;
    }
  }

  export interface Web {
    Web: Web.Web;
  }

  export namespace Web {
    export interface Web {
      phrase: string;

      starting_website?: string | null;
    }
  }

  export interface SecFiling {
    SECFiling: SecFiling.SecFiling;
  }

  export namespace SecFiling {
    export interface SecFiling {
      accession_number?: string | null;

      quarter?: number | null;

      year?: number | null;
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
  export import Source = SourcesAPI.Source;
  export import SourceListParams = SourcesAPI.SourceListParams;
}
