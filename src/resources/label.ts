// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as LabelAPI from './label';
import * as DatasetsAPI from './datasets';
import { type Uploadable } from '../core';

export class Label extends APIResource {
  /**
   * Submit a label as part of the human LLM.
   */
  update(
    runUuid: string,
    runIdx: string,
    body: LabelUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post(`/label/update/${runUuid}/${runIdx}`, {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

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
  run(params: LabelRunParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { dataset_name, custom_instruction, ...body } = params;
    return this._client.post('/label/run_async', {
      query: { dataset_name, custom_instruction },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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

export type LabelUpdateResponse = string;

export interface LabelGetMessagesResponse {
  chat: LabelGetMessagesResponse.Chat;

  run_id: string;

  uuid: string;
}

export namespace LabelGetMessagesResponse {
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
    }

    export interface Metadata {
      conditioning_prompt: string;

      /**
       * A dataset is where you put multiple referential schemas.
       *
       * A dataset is a complete namespace where all references between schemas are held
       * within the dataset.
       */
      dataset_descriptor: DatasetsAPI.DatasetDescriptor;

      extracted_entities: Array<Metadata.ExtractedEntity>;

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
}

export type LabelSubmitResponse = string;

export type LabelUpdateParams = Array<LabelUpdateParams.Body>;

export namespace LabelUpdateParams {
  export interface Body {
    input:
      | Body.Save
      | Body.Scroll
      | Body.Exit
      | Body.Click
      | Body.Hover
      | Body.Wait
      | Body.Error
      | Body.Google
      | Body.Type;

    name: 'Save' | 'Scroll' | 'Exit' | 'Click' | 'Hover' | 'Wait' | 'Error' | 'Google' | 'Type';

    result?: Body.ToolQueued | Body.ToolFail | Body.InputParseFail | Body.Success | null;
  }

  export namespace Body {
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

export interface LabelGetMessagesParams {
  uuid?: string | null;
}

export type LabelRunParams = LabelRunParams.Variant0 | LabelRunParams.Variant1 | LabelRunParams.Variant2;

export namespace LabelRunParams {
  export interface Variant0 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    SECIngestor: LabelRunParams.Variant0.SecIngestor;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant0 {
    export interface SecIngestor {
      accession_number?: string | null;

      quarter?: number | null;

      year?: number | null;
    }
  }

  export interface Variant1 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param: This is currently a very simple ingestor. It converts everything to
     * an image and processes them independently.
     */
    PDFIngestor: LabelRunParams.Variant1.PdfIngestor;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant1 {
    /**
     * This is currently a very simple ingestor. It converts everything to an image and
     * processes them independently.
     */
    export interface PdfIngestor {
      path: string;
    }
  }

  export interface Variant2 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param: These are all the types for which we have an agent that is directly
     * capable of navigating. There should be a one to one mapping between them.
     */
    Basic:
      | LabelRunParams.Variant2.TextDocument
      | LabelRunParams.Variant2.WebSearch
      | LabelRunParams.Variant2.ImageDocument;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant2 {
    export interface TextDocument {
      TextDocument: TextDocument.TextDocument;
    }

    export namespace TextDocument {
      export interface TextDocument {
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
}

export namespace Label {
  export import LabelUpdateResponse = LabelAPI.LabelUpdateResponse;
  export import LabelGetMessagesResponse = LabelAPI.LabelGetMessagesResponse;
  export import LabelLlmAssistResponse = LabelAPI.LabelLlmAssistResponse;
  export import LabelSubmitResponse = LabelAPI.LabelSubmitResponse;
  export import LabelUpdateParams = LabelAPI.LabelUpdateParams;
  export import LabelGetMessagesParams = LabelAPI.LabelGetMessagesParams;
  export import LabelRunParams = LabelAPI.LabelRunParams;
  export import LabelSubmitParams = LabelAPI.LabelSubmitParams;
}
