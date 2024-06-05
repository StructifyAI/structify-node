// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StructureAPI from './structure';
import { type Uploadable } from '../core';

export class Structure extends APIResource {
  /**
   * Wait for all specified async tasks to be completed.
   */
  isComplete(body: StructureIsCompleteParams, options?: Core.RequestOptions): Core.APIPromise<IsComplete> {
    return this._client.post('/structure/is_complete', { body, ...options });
  }

  /**
   * Wait for all specified async tasks to be completed.
   */
  jobStatus(body: StructureJobStatusParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/structure/job_status', { body, ...options });
  }

  /**
   * Returns a token that can be waited on until the request is finished.
   */
  runAsync(params: StructureRunAsyncParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { dataset_name, custom_instruction, ...body } = params;
    return this._client.post('/structure/run_async', {
      query: { dataset_name, custom_instruction },
      body,
      ...options,
    });
  }
}

export interface IsComplete {
  completed: boolean;
}

export type StructureJobStatusResponse = unknown;

export type StructureRunAsyncResponse = unknown;

export type StructureIsCompleteParams = Array<string>;

export type StructureJobStatusParams = Array<string>;

export type StructureRunAsyncParams =
  | StructureRunAsyncParams.Variant0
  | StructureRunAsyncParams.Variant1
  | StructureRunAsyncParams.Variant2;

export namespace StructureRunAsyncParams {
  export interface Variant0 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param: These are all the types for which we have an agent that is directly
     * capable of navigating. There should be a one to one mapping between them.
     */
    Basic:
      | StructureRunAsyncParams.Variant0.TextDocument
      | StructureRunAsyncParams.Variant0.WebSearch
      | StructureRunAsyncParams.Variant0.ImageDocument;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant0 {
    export interface TextDocument {
      TextDocument: TextDocument.TextDocument;
    }

    export namespace TextDocument {
      export interface TextDocument {
        content?: string | null;

        document_name?: string | null;

        save?: boolean;
      }
    }

    export interface WebSearch {
      WebSearch: WebSearch.WebSearch;
    }

    export namespace WebSearch {
      export interface WebSearch {
        conditioning_phrase: string;

        use_local_browser: boolean;

        starting_website?: string | null;
      }
    }

    export interface ImageDocument {
      ImageDocument: ImageDocument.ImageDocument;
    }

    export namespace ImageDocument {
      export interface ImageDocument {
        content: Uploadable;

        document_name: string;
      }
    }
  }

  export interface Variant1 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    SECIngestor: StructureRunAsyncParams.Variant1.SecIngestor;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant1 {
    export interface SecIngestor {
      accession_number?: string | null;

      quarter?: number | null;

      year?: number | null;
    }
  }

  export interface Variant2 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param: This is currently a very simple ingestor. It converts everything to
     * an image and processes them independently.
     */
    PDFIngestor: string;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }
}

export namespace Structure {
  export import IsComplete = StructureAPI.IsComplete;
  export import StructureJobStatusResponse = StructureAPI.StructureJobStatusResponse;
  export import StructureRunAsyncResponse = StructureAPI.StructureRunAsyncResponse;
  export import StructureIsCompleteParams = StructureAPI.StructureIsCompleteParams;
  export import StructureJobStatusParams = StructureAPI.StructureJobStatusParams;
  export import StructureRunAsyncParams = StructureAPI.StructureRunAsyncParams;
}
