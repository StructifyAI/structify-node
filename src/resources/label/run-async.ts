// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as RunAsyncAPI from './run-async';
import { type Uploadable } from '../../core';

export class RunAsync extends APIResource {
  /**
   * Returns a token that can be waited on until the request is finished.
   */
  create(body: RunAsyncCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/label/run_async', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type RunAsyncCreateResponse = string;

export interface RunAsyncCreateParams {
  dataset_name: string;

  /**
   * These are all the types that can be converted into a BasicInputType
   */
  structure_input:
    | RunAsyncCreateParams.SecIngestor
    | RunAsyncCreateParams.PdfIngestor
    | RunAsyncCreateParams.Basic;
}

export namespace RunAsyncCreateParams {
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
         * Vec<ExtractionCriteria> = it has to meet every one.
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
         * Vec<ExtractionCriteria> = it has to meet every one.
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
           * Vec<ExtractionCriteria> = it has to meet every one.
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
           * Vec<ExtractionCriteria> = it has to meet every one.
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
           * Vec<ExtractionCriteria> = it has to meet every one.
           */
          table_name: string;
        }
      }
    }
  }
}

export namespace RunAsync {
  export import RunAsyncCreateResponse = RunAsyncAPI.RunAsyncCreateResponse;
  export import RunAsyncCreateParams = RunAsyncAPI.RunAsyncCreateParams;
}
