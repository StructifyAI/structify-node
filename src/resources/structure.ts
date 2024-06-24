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
  runAsync(body: StructureRunAsyncParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/structure/run_async', { body, ...options });
  }
}

export interface IsComplete {
  completed: boolean;
}

export type StructureJobStatusResponse = unknown;

export type StructureRunAsyncResponse = unknown;

export type StructureIsCompleteParams = Array<string>;

export type StructureJobStatusParams = Array<string>;

export interface StructureRunAsyncParams {
  dataset_name: string;

  /**
   * These are all the types that can be converted into a BasicInputType
   */
  structure_input:
    | StructureRunAsyncParams.SecIngestor
    | StructureRunAsyncParams.PdfIngestor
    | StructureRunAsyncParams.Basic;
}

export namespace StructureRunAsyncParams {
  export interface SecIngestor {
    SECIngestor: SecIngestor.SecIngestor;
  }

  export namespace SecIngestor {
    export interface SecIngestor {
      extraction_criteria: Array<SecIngestor.ExtractionCriterion>;

      accession_number?: string | null;

      quarter?: number | null;

      year?: number | null;
    }

    export namespace SecIngestor {
      /**
       * It's an OR statement across these.
       */
      export interface ExtractionCriterion {
        property_names: Array<string>;

        /**
         * Vec<ExtractionCriterium> = it has to meet every one.
         */
        table_name: string;
      }
    }
  }

  export interface PdfIngestor {
    /**
     * This is currently a very simple ingestor. It converts everything to an image and
     * processes them independently.
     */
    PDFIngestor: PdfIngestor.PdfIngestor;
  }

  export namespace PdfIngestor {
    /**
     * This is currently a very simple ingestor. It converts everything to an image and
     * processes them independently.
     */
    export interface PdfIngestor {
      extraction_criteria: Array<PdfIngestor.ExtractionCriterion>;

      path: string;
    }

    export namespace PdfIngestor {
      /**
       * It's an OR statement across these.
       */
      export interface ExtractionCriterion {
        property_names: Array<string>;

        /**
         * Vec<ExtractionCriterium> = it has to meet every one.
         */
        table_name: string;
      }
    }
  }

  export interface Basic {
    /**
     * These are all the types for which we have an agent that is directly capable of
     * navigating. There should be a one to one mapping between them.
     */
    Basic: Basic.TextDocument | Basic.WebSearch | Basic.ImageDocument;
  }

  export namespace Basic {
    export interface TextDocument {
      TextDocument: TextDocument.TextDocument;
    }

    export namespace TextDocument {
      export interface TextDocument {
        extraction_criteria: Array<TextDocument.ExtractionCriterion>;

        content?: string | null;

        filepath?: string | null;

        save?: boolean;
      }

      export namespace TextDocument {
        /**
         * It's an OR statement across these.
         */
        export interface ExtractionCriterion {
          property_names: Array<string>;

          /**
           * Vec<ExtractionCriterium> = it has to meet every one.
           */
          table_name: string;
        }
      }
    }

    export interface WebSearch {
      WebSearch: WebSearch.WebSearch;
    }

    export namespace WebSearch {
      export interface WebSearch {
        extraction_criteria: Array<WebSearch.ExtractionCriterion>;

        use_local_browser: boolean;

        starting_website?: string | null;
      }

      export namespace WebSearch {
        /**
         * It's an OR statement across these.
         */
        export interface ExtractionCriterion {
          property_names: Array<string>;

          /**
           * Vec<ExtractionCriterium> = it has to meet every one.
           */
          table_name: string;
        }
      }
    }

    export interface ImageDocument {
      ImageDocument: ImageDocument.ImageDocument;
    }

    export namespace ImageDocument {
      export interface ImageDocument {
        content: Uploadable;

        document_name: string;

        extraction_criteria: Array<ImageDocument.ExtractionCriterion>;
      }

      export namespace ImageDocument {
        /**
         * It's an OR statement across these.
         */
        export interface ExtractionCriterion {
          property_names: Array<string>;

          /**
           * Vec<ExtractionCriterium> = it has to meet every one.
           */
          table_name: string;
        }
      }
    }
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
