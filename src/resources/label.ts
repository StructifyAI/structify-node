// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as LabelAPI from './label';
import * as SharedAPI from './shared';
import * as StructureAPI from './structure';

export class Label extends APIResource {
  /**
   * web requests that would be cancelled by cloudflare in prod.
   */
  getMessages(
    query?: LabelGetMessagesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelGetMessagesResponse | null>;
  getMessages(options?: Core.RequestOptions): Core.APIPromise<LabelGetMessagesResponse | null>;
  getMessages(
    query: LabelGetMessagesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelGetMessagesResponse | null> {
    if (isRequestOptions(query)) {
      return this.getMessages({}, query);
    }
    return this._client.get('/label/refresh', { query, ...options });
  }

  /**
   * web requests that would be cancelled by cloudflare in prod.
   */
  llmAssist(uuid: string, options?: Core.RequestOptions): Core.APIPromise<LabelLlmAssistResponse> {
    return this._client.get(`/label/llm_assist/${uuid}`, options);
  }

  /**
   * Returns a token that can be waited on until the request is finished.
   */
  run(body: LabelRunParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/label/run_async', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Submit a label as part of the human LLM.
   */
  submit(uuid: string, body: LabelSubmitParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/label/submit/${uuid}`, {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface LabelGetMessagesResponse {
  chat: StructureAPI.ChatPrompt;

  run_id: string;

  uuid: string;
}

export type LabelLlmAssistResponse = Array<
  | LabelLlmAssistResponse.Save
  | LabelLlmAssistResponse.Scroll
  | LabelLlmAssistResponse.Exit
  | LabelLlmAssistResponse.Click
  | LabelLlmAssistResponse.Hover
  | LabelLlmAssistResponse.Wait
  | LabelLlmAssistResponse.Error
  | LabelLlmAssistResponse.Google
  | LabelLlmAssistResponse.Type
>;

export namespace LabelLlmAssistResponse {
  export interface Save {
    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a Neo4j DB
     */
    Save: SharedAPI.KnowledgeGraph;
  }

  export interface Scroll {
    /**
     * For tools with no inputs.
     */
    Scroll: Scroll.Scroll;
  }

  export namespace Scroll {
    /**
     * For tools with no inputs.
     */
    export interface Scroll {
      /**
       * OpenAI Requires an argument, so we put a dummy one here.
       */
      reason: string;
    }
  }

  export interface Exit {
    /**
     * For tools with no inputs.
     */
    Exit: Exit.Exit;
  }

  export namespace Exit {
    /**
     * For tools with no inputs.
     */
    export interface Exit {
      /**
       * OpenAI Requires an argument, so we put a dummy one here.
       */
      reason: string;
    }
  }

  export interface Click {
    Click: Click.Click;
  }

  export namespace Click {
    export interface Click {
      flag: number;
    }
  }

  export interface Hover {
    Hover: Hover.Hover;
  }

  export namespace Hover {
    export interface Hover {
      flag: number;
    }
  }

  export interface Wait {
    Wait: Wait.Wait;
  }

  export namespace Wait {
    export interface Wait {
      /**
       * Time in seconds to wait
       */
      seconds: number;
    }
  }

  export interface Error {
    Error: Error.Error;
  }

  export namespace Error {
    export interface Error {
      error: string;
    }
  }

  export interface Google {
    Google: Google.Google;
  }

  export namespace Google {
    export interface Google {
      query: string;
    }
  }

  export interface Type {
    Type: Type.Type;
  }

  export namespace Type {
    export interface Type {
      flag: number;

      input: string;
    }
  }
}

export type LabelRunResponse = string;

export type LabelSubmitResponse = string;

export interface LabelGetMessagesParams {
  uuid?: string | null;
}

export interface LabelRunParams {
  dataset_name: string;

  /**
   * These are all the types that can be converted into a BasicInputType
   */
  structure_input: LabelRunParams.SecIngestor | LabelRunParams.PdfIngestor | LabelRunParams.Basic;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  seeded_entity?: SharedAPI.KnowledgeGraph;
}

export namespace LabelRunParams {
  export interface SecIngestor {
    SECIngestor: SecIngestor.SecIngestor;
  }

  export namespace SecIngestor {
    export interface SecIngestor {
      extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

      accession_number?: string | null;

      quarter?: number | null;

      year?: number | null;
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
      extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

      path: string;
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
        extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

        content?: string | null;

        filepath?: string | null;

        save?: boolean;
      }
    }

    export interface WebSearch {
      WebSearch: WebSearch.WebSearch;
    }

    export namespace WebSearch {
      export interface WebSearch {
        extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

        use_local_browser: boolean;

        starting_website?: string | null;
      }
    }

    export interface ImageDocument {
      ImageDocument: ImageDocument.ImageDocument;
    }

    export namespace ImageDocument {
      export interface ImageDocument {
        content: Core.Uploadable;

        document_name: string;

        extraction_criteria: Array<StructureAPI.ExtractionCriteria>;
      }
    }
  }
}

export type LabelSubmitParams = Array<
  | LabelSubmitParams.Save
  | LabelSubmitParams.Scroll
  | LabelSubmitParams.Exit
  | LabelSubmitParams.Click
  | LabelSubmitParams.Hover
  | LabelSubmitParams.Wait
  | LabelSubmitParams.Error
  | LabelSubmitParams.Google
  | LabelSubmitParams.Type
> | null;

export namespace LabelSubmitParams {
  export interface Save {
    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a Neo4j DB
     */
    Save: SharedAPI.KnowledgeGraph;
  }

  export interface Scroll {
    /**
     * For tools with no inputs.
     */
    Scroll: Scroll.Scroll;
  }

  export namespace Scroll {
    /**
     * For tools with no inputs.
     */
    export interface Scroll {
      /**
       * OpenAI Requires an argument, so we put a dummy one here.
       */
      reason: string;
    }
  }

  export interface Exit {
    /**
     * For tools with no inputs.
     */
    Exit: Exit.Exit;
  }

  export namespace Exit {
    /**
     * For tools with no inputs.
     */
    export interface Exit {
      /**
       * OpenAI Requires an argument, so we put a dummy one here.
       */
      reason: string;
    }
  }

  export interface Click {
    Click: Click.Click;
  }

  export namespace Click {
    export interface Click {
      flag: number;
    }
  }

  export interface Hover {
    Hover: Hover.Hover;
  }

  export namespace Hover {
    export interface Hover {
      flag: number;
    }
  }

  export interface Wait {
    Wait: Wait.Wait;
  }

  export namespace Wait {
    export interface Wait {
      /**
       * Time in seconds to wait
       */
      seconds: number;
    }
  }

  export interface Error {
    Error: Error.Error;
  }

  export namespace Error {
    export interface Error {
      error: string;
    }
  }

  export interface Google {
    Google: Google.Google;
  }

  export namespace Google {
    export interface Google {
      query: string;
    }
  }

  export interface Type {
    Type: Type.Type;
  }

  export namespace Type {
    export interface Type {
      flag: number;

      input: string;
    }
  }
}

export namespace Label {
  export import LabelGetMessagesResponse = LabelAPI.LabelGetMessagesResponse;
  export import LabelLlmAssistResponse = LabelAPI.LabelLlmAssistResponse;
  export import LabelRunResponse = LabelAPI.LabelRunResponse;
  export import LabelSubmitResponse = LabelAPI.LabelSubmitResponse;
  export import LabelGetMessagesParams = LabelAPI.LabelGetMessagesParams;
  export import LabelRunParams = LabelAPI.LabelRunParams;
  export import LabelSubmitParams = LabelAPI.LabelSubmitParams;
}
