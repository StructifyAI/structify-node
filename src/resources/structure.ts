// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StructureAPI from './structure';
import * as DatasetsAPI from './datasets';
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

export interface ChatPrompt {
  decoding_params: ChatPrompt.DecodingParams;

  messages: Array<ChatPrompt.Message>;

  human_llm_metadata?: ChatPrompt.HumanLlmMetadata | null;

  metadata?: ChatPrompt.Metadata | null;
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
      | DecodingParams.Functions
      | DecodingParams.JsonValidator
      | DecodingParams.RegexValidator
      | DecodingParams.ContextFreeeGrammar
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

    export interface Functions {
      Functions: Array<unknown>;
    }

    export interface JsonValidator {
      JsonValidator: unknown;
    }

    export interface RegexValidator {
      RegexValidator: string;
    }

    export interface ContextFreeeGrammar {
      ContextFreeeGrammar: string;
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
      Image: Uploadable;
    }
  }

  export interface HumanLlmMetadata {
    /**
     * A dataset is where you put multiple referential schemas.
     *
     * A dataset is a complete namespace where all references between schemas are held
     * within the dataset.
     */
    descriptor: DatasetsAPI.DatasetDescriptor;

    run_id: string;

    user_email: string;

    history?: HumanLlmMetadata.History | null;
  }

  export namespace HumanLlmMetadata {
    export interface History {
      date: string;

      steps: Array<StructureAPI.ExecutionStep>;

      /**
       * Used to identify this history
       */
      uuid: string;
    }
  }

  export interface Metadata {
    /**
     * A dataset is where you put multiple referential schemas.
     *
     * A dataset is a complete namespace where all references between schemas are held
     * within the dataset.
     */
    dataset_descriptor: DatasetsAPI.DatasetDescriptor;

    extracted_entities: Array<Metadata.ExtractedEntity>;

    extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

    tool_metadata: Array<Metadata.ToolMetadata>;

    screenshot?: Uploadable | null;

    url?: string | null;

    web_flags?: Array<Metadata.WebFlag> | null;
  }

  export namespace Metadata {
    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs.
     */
    export interface ExtractedEntity {
      entities?: Array<ExtractedEntity.Entity>;

      relationships?: Array<ExtractedEntity.Relationship>;
    }

    export namespace ExtractedEntity {
      export interface Entity {
        id: number;

        properties: Record<string, string>;

        type: string;
      }

      export interface Relationship {
        source: number;

        target: number;

        type: string;
      }
    }

    export interface ToolMetadata {
      description: string;

      name: 'Save' | 'Scroll' | 'Exit' | 'Click' | 'Hover' | 'Wait' | 'Error' | 'Google' | 'Type';

      regex_validator: string;

      tool_validator: unknown;
    }

    export interface WebFlag {
      ariaLabel: string;

      height: number;

      text: string;

      type: string;

      width: number;

      x: number;

      y: number;
    }
  }
}

export interface ExecutionStep {
  prompt: ChatPrompt;

  response: ExecutionStep.Response;
}

export namespace ExecutionStep {
  export interface Response {
    completion_tokens: number;

    /**
     * Cost in dollars
     */
    cost: number;

    llm: string;

    /**
     * New tokens
     */
    prompt_tokens: number;

    text: string;

    tool_calls: Array<Response.ToolCall>;
  }

  export namespace Response {
    export interface ToolCall {
      input:
        | ToolCall.Save
        | ToolCall.Scroll
        | ToolCall.Exit
        | ToolCall.Click
        | ToolCall.Hover
        | ToolCall.Wait
        | ToolCall.Error
        | ToolCall.Google
        | ToolCall.Type;

      name: 'Save' | 'Scroll' | 'Exit' | 'Click' | 'Hover' | 'Wait' | 'Error' | 'Google' | 'Type';

      result?: ToolCall.ToolQueued | ToolCall.ToolFail | ToolCall.InputParseFail | ToolCall.Success | null;
    }

    export namespace ToolCall {
      export interface Save {
        /**
         * Knowledge graph info structured to deserialize and display in the same format
         * that the LLM outputs.
         */
        Save: Save.Save;
      }

      export namespace Save {
        /**
         * Knowledge graph info structured to deserialize and display in the same format
         * that the LLM outputs.
         */
        export interface Save {
          entities?: Array<Save.Entity>;

          relationships?: Array<Save.Relationship>;
        }

        export namespace Save {
          export interface Entity {
            id: number;

            properties: Record<string, string>;

            type: string;
          }

          export interface Relationship {
            source: number;

            target: number;

            type: string;
          }
        }
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
export interface ExtractionCriteria {
  property_names: Array<string>;

  /**
   * Vec<ExtractionCriteria> = it has to meet every one.
   */
  table_name: string;
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
        content: Uploadable;

        document_name: string;

        extraction_criteria: Array<StructureAPI.ExtractionCriteria>;
      }
    }
  }
}

export namespace Structure {
  export import ChatPrompt = StructureAPI.ChatPrompt;
  export import ExecutionStep = StructureAPI.ExecutionStep;
  export import ExtractionCriteria = StructureAPI.ExtractionCriteria;
  export import IsComplete = StructureAPI.IsComplete;
  export import StructureJobStatusResponse = StructureAPI.StructureJobStatusResponse;
  export import StructureRunAsyncResponse = StructureAPI.StructureRunAsyncResponse;
  export import StructureIsCompleteParams = StructureAPI.StructureIsCompleteParams;
  export import StructureJobStatusParams = StructureAPI.StructureJobStatusParams;
  export import StructureRunAsyncParams = StructureAPI.StructureRunAsyncParams;
}
