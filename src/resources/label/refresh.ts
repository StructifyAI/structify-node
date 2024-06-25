// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as RefreshAPI from './refresh';
import * as DatasetsAPI from '../datasets';
import * as RunsAPI from '../runs';
import { type Uploadable } from '../../core';

export class Refresh extends APIResource {
  /**
   * web requests that would be cancelled by cloudflare in prod.
   */
  retrieve(
    query?: RefreshRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RefreshResponse | null>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<RefreshResponse | null>;
  retrieve(
    query: RefreshRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RefreshResponse | null> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/label/refresh', { query, ...options });
  }
}

export interface RefreshResponse {
  chat: RefreshResponse.Chat;

  run_id: string;

  uuid: string;
}

export namespace RefreshResponse {
  export interface Chat {
    decoding_params: Chat.DecodingParams;

    messages: Array<Chat.Message>;

    human_llm_metadata?: Chat.HumanLlmMetadata | null;

    metadata?: Chat.Metadata | null;
  }

  export namespace Chat {
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

      history?: RunsAPI.ExecutionHistory | null;
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

      extraction_criteria: Array<Metadata.ExtractionCriterion>;

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
}

export interface RefreshRetrieveParams {
  uuid?: string | null;
}

export namespace Refresh {
  export import RefreshResponse = RefreshAPI.RefreshResponse;
  export import RefreshRetrieveParams = RefreshAPI.RefreshRetrieveParams;
}
