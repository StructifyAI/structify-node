// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as StructureAPI from './structure';
import * as SharedAPI from './shared';

export class Structure extends APIResource {
  /**
   * Returns a job id that can be waited on until the request is finished.
   */
  enhanceRelationship(
    body: StructureEnhanceRelationshipParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/structure/enhance_relationship', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Wait for all specified async tasks to be completed.
   */
  isComplete(body: StructureIsCompleteParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/structure/is_complete', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * and any associated LogNodes that have been added to them
   */
  jobStatus(
    body: StructureJobStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StructureJobStatusResponse> {
    return this._client.post('/structure/job_status', { body, ...options });
  }

  /**
   * Returns a token that can be waited on until the request is finished.
   */
  runAsync(body: StructureRunAsyncParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/structure/run_async', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface ChatPrompt {
  decoding_params: ChatPrompt.DecodingParams;

  messages: Array<ChatPrompt.Message>;

  /**
   * All metadata required to generate a prompt for the LLM
   */
  metadata: ChatPrompt.Metadata;
}

export namespace ChatPrompt {
  export interface DecodingParams {
    parameters: Array<
      | DecodingParams.MaxTokens
      | DecodingParams.TopP
      | DecodingParams.RepeatWindow
      | DecodingParams.RepeatPenalty
      | DecodingParams.Temperature
      | DecodingParams.StopTokens
      | DecodingParams.LogitBias
      | DecodingParams.Functions
      | DecodingParams.JsonValidator
      | DecodingParams.RegexValidator
      | DecodingParams.ContextFreeGrammar
      | DecodingParams.NumBeams
      | DecodingParams.Crop
    >;
  }

  export namespace DecodingParams {
    export interface MaxTokens {
      MaxTokens: number;
    }

    export interface TopP {
      TopP: number;
    }

    export interface RepeatWindow {
      RepeatWindow: number;
    }

    export interface RepeatPenalty {
      RepeatPenalty: number;
    }

    export interface Temperature {
      Temperature: number;
    }

    export interface StopTokens {
      StopTokens: Array<string>;
    }

    export interface LogitBias {
      LogitBias: Record<string, number>;
    }

    export interface Functions {
      Functions: Array<Record<string, unknown>>;
    }

    export interface JsonValidator {
      JsonValidator: Record<string, unknown>;
    }

    export interface RegexValidator {
      RegexValidator: string;
    }

    export interface ContextFreeGrammar {
      ContextFreeGrammar: string;
    }

    export interface NumBeams {
      NumBeams: number;
    }

    export interface Crop {
      Crop: boolean;
    }
  }

  /**
   * Our generic definition of a message to a chat agent.
   */
  export interface Message {
    /**
     * We want this to be a vec of contents so we can accurately capture an
     * interleaving of images and text.
     *
     * This is meant to be a completely raw, unprocessed representation of the text.
     * Don't take stuff out.
     */
    content: Array<Message.Text | Message.Image>;

    role: 'user' | 'system' | 'assistant';
  }

  export namespace Message {
    export interface Text {
      Text: string;
    }

    export interface Image {
      Image: Core.Uploadable;
    }
  }

  /**
   * All metadata required to generate a prompt for the LLM
   */
  export interface Metadata {
    /**
     * A dataset is where you put multiple referential schemas.
     *
     * A dataset is a complete namespace where all references between schemas are held
     * within the dataset.
     */
    dataset_descriptor: SharedAPI.DatasetDescriptor;

    extracted_entities: Array<SharedAPI.KnowledgeGraph>;

    extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

    formatter_specific: Metadata.ImageMeta | Metadata.WebMeta | Metadata.TextMeta;

    tool_metadata: Array<StructureAPI.ToolMetadata>;
  }

  export namespace Metadata {
    export interface ImageMeta {
      ImageMeta: ImageMeta.ImageMeta;
    }

    export namespace ImageMeta {
      export interface ImageMeta {
        document_name?: string | null;

        document_page?: number | null;

        image?: Core.Uploadable | null;

        ocr_content?: string | null;
      }
    }

    export interface WebMeta {
      WebMeta: WebMeta.WebMeta;
    }

    export namespace WebMeta {
      export interface WebMeta {
        flags: Array<WebMeta.Flag>;

        url: string;

        ocr_content?: string | null;

        screenshot?: Core.Uploadable | null;
      }

      export namespace WebMeta {
        export interface Flag {
          ariaLabel: string;

          type: string;

          x: number;

          y: number;

          height?: number;

          href?: string | null;

          isInteractive?: boolean | null;

          /**
           * The number by which the flag is referred in image, prompt, and tool calls.
           */
          number?: number | null;

          text?: string;

          /**
           * The serde default here is to give us backwards compatibility it's fine for these
           * to be anything as long as the image isn't given since it won't regenerate.
           */
          width?: number;
        }
      }
    }

    export interface TextMeta {
      TextMeta: TextMeta.TextMeta;
    }

    export namespace TextMeta {
      export interface TextMeta {
        text: string;
      }
    }
  }
}

export interface ExecutionStep {
  id: string;

  prompt: ChatPrompt;

  response: ExecutionStep.Response;
}

export namespace ExecutionStep {
  export interface Response {
    llm: string;

    text: string;

    tool_calls: Array<Response.ToolCall>;
  }

  export namespace Response {
    export interface ToolCall {
      input:
        | ToolCall.Save
        | ToolCall.Scroll
        | ToolCall.ScrollToBottom
        | ToolCall.Exit
        | ToolCall.Click
        | ToolCall.Hover
        | ToolCall.Wait
        | ToolCall.Error
        | ToolCall.Google
        | ToolCall.Type;

      name:
        | 'Exit'
        | 'Save'
        | 'Wait'
        | 'Type'
        | 'Scroll'
        | 'ScrollToBottom'
        | 'Click'
        | 'Hover'
        | 'Error'
        | 'Google';

      result?: ToolCall.ToolQueued | ToolCall.ToolFail | ToolCall.InputParseFail | ToolCall.Success | null;
    }

    export namespace ToolCall {
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
           * Dummy argument
           */
          reason: string;
        }
      }

      export interface ScrollToBottom {
        /**
         * For tools with no inputs.
         */
        ScrollToBottom: ScrollToBottom.ScrollToBottom;
      }

      export namespace ScrollToBottom {
        /**
         * For tools with no inputs.
         */
        export interface ScrollToBottom {
          /**
           * Dummy argument
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
           * Dummy argument
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
          seconds?: number;
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

      export interface ToolQueued {
        ToolQueued: string;
      }

      export interface ToolFail {
        ToolFail: string;
      }

      export interface InputParseFail {
        InputParseFail: string;
      }

      export interface Success {
        Success: string;
      }
    }
  }
}

/**
 * It's an OR statement across these.
 */
export type ExtractionCriteria =
  | ExtractionCriteria.RelationshipExtraction
  | ExtractionCriteria.EntityExtraction
  | ExtractionCriteria.GenericProperty;

export namespace ExtractionCriteria {
  export interface RelationshipExtraction {
    RelationshipExtraction: RelationshipExtraction.RelationshipExtraction;
  }

  export namespace RelationshipExtraction {
    export interface RelationshipExtraction {
      relationship_name: string;
    }
  }

  export interface EntityExtraction {
    EntityExtraction: EntityExtraction.EntityExtraction;
  }

  export namespace EntityExtraction {
    export interface EntityExtraction {
      /**
       * The integer id corresponding to an entity in the seeded kg
       */
      seeded_kg_id: number;

      dataset_entity_id?: string | null;
    }
  }

  export interface GenericProperty {
    GenericProperty: GenericProperty.GenericProperty;
  }

  export namespace GenericProperty {
    export interface GenericProperty {
      property_names: Array<string>;

      /**
       * Vec<ExtractionCriteria> = it has to meet every one.
       */
      table_name: string;
    }
  }
}

export interface ToolMetadata {
  description: string;

  name:
    | 'Exit'
    | 'Save'
    | 'Wait'
    | 'Type'
    | 'Scroll'
    | 'ScrollToBottom'
    | 'Click'
    | 'Hover'
    | 'Error'
    | 'Google';

  regex_validator: string;

  tool_validator: Record<string, unknown>;
}

export type StructureEnhanceRelationshipResponse = string;

export type StructureIsCompleteResponse = string;

export interface StructureJobStatusResponse {
  job_status: Array<'Queued' | 'Running' | 'Completed' | 'Failed'>;

  log_nodes: Array<string>;
}

export type StructureRunAsyncResponse = string;

export interface StructureEnhanceRelationshipParams {
  entity_id: string;

  relationship_name: string;

  allow_new_entities?: boolean;

  special_job_type?: 'HumanLLM' | null;

  starting_searches?: Array<string>;

  starting_urls?: Array<string>;
}

export type StructureIsCompleteParams = Array<string>;

export type StructureJobStatusParams = Array<string>;

export interface StructureRunAsyncParams {
  name: string;

  /**
   * These are all the types that can be converted into a BasicInputType
   */
  structure_input: StructureRunAsyncParams.PdfIngestor | StructureRunAsyncParams.WebSearch;

  extraction_criteria?: Array<ExtractionCriteria>;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  seeded_entity?: SharedAPI.KnowledgeGraph;

  special_job_type?: 'HumanLLM' | null;
}

export namespace StructureRunAsyncParams {
  export interface PdfIngestor {
    /**
     * Ingest all pages of a PDF and process them independently.
     */
    PDFIngestor: PdfIngestor.PdfIngestor;
  }

  export namespace PdfIngestor {
    /**
     * Ingest all pages of a PDF and process them independently.
     */
    export interface PdfIngestor {
      path: string;
    }
  }

  export interface WebSearch {
    WebSearch: WebSearch.WebSearch;
  }

  export namespace WebSearch {
    export interface WebSearch {
      starting_searches?: Array<string>;

      starting_urls?: Array<string>;
    }
  }
}

export declare namespace Structure {
  export {
    type ChatPrompt as ChatPrompt,
    type ExecutionStep as ExecutionStep,
    type ExtractionCriteria as ExtractionCriteria,
    type ToolMetadata as ToolMetadata,
    type StructureEnhanceRelationshipResponse as StructureEnhanceRelationshipResponse,
    type StructureIsCompleteResponse as StructureIsCompleteResponse,
    type StructureJobStatusResponse as StructureJobStatusResponse,
    type StructureRunAsyncResponse as StructureRunAsyncResponse,
    type StructureEnhanceRelationshipParams as StructureEnhanceRelationshipParams,
    type StructureIsCompleteParams as StructureIsCompleteParams,
    type StructureJobStatusParams as StructureJobStatusParams,
    type StructureRunAsyncParams as StructureRunAsyncParams,
  };
}
