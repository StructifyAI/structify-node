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
    runIdx: number,
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
        Functions: Array<Record<string, unknown>>;
      }

      export interface JsonValidator {
        JsonValidator: Record<string, unknown>;
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

        steps: Array<History.Step>;

        /**
         * Used to identify this history
         */
        uuid: string;
      }

      export namespace History {
        export interface Step {
          prompt: Step.Prompt;

          response: Step.Response;
        }

        export namespace Step {
          export interface Prompt {
            decoding_params: Prompt.DecodingParams;

            messages: Array<Prompt.Message>;

            human_llm_metadata?: Prompt.HumanLlmMetadata | null;

            metadata?: Prompt.Metadata | null;
          }

          export namespace Prompt {
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
                Functions: Array<Record<string, unknown>>;
              }

              export interface JsonValidator {
                JsonValidator: Record<string, unknown>;
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

                steps: Array<unknown>;

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

                tool_validator: Record<string, unknown>;
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

              result?:
                | ToolCall.ToolQueued
                | ToolCall.ToolFail
                | ToolCall.InputParseFail
                | ToolCall.Success
                | null;
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

        tool_validator: Record<string, unknown>;
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

export type LabelRunResponse = string;

export type LabelSubmitResponse = string;

export type LabelUpdateParams = Array<LabelUpdateParams.StepUpdate>;

export namespace LabelUpdateParams {
  export interface StepUpdate {
    input:
      | StepUpdate.Save
      | StepUpdate.Scroll
      | StepUpdate.Exit
      | StepUpdate.Click
      | StepUpdate.Hover
      | StepUpdate.Wait
      | StepUpdate.Error
      | StepUpdate.Google
      | StepUpdate.Type;

    name: 'Save' | 'Scroll' | 'Exit' | 'Click' | 'Hover' | 'Wait' | 'Error' | 'Google' | 'Type';

    result?:
      | StepUpdate.ToolQueued
      | StepUpdate.ToolFail
      | StepUpdate.InputParseFail
      | StepUpdate.Success
      | null;
  }

  export namespace StepUpdate {
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

export interface LabelRunParams {
  dataset_name: string;

  /**
   * These are all the types that can be converted into a BasicInputType
   */
  structure_input: LabelRunParams.SecIngestor | LabelRunParams.PdfIngestor | LabelRunParams.Basic;
}

export namespace LabelRunParams {
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
      TextDocument: unknown;
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
  export import LabelRunResponse = LabelAPI.LabelRunResponse;
  export import LabelSubmitResponse = LabelAPI.LabelSubmitResponse;
  export import LabelUpdateParams = LabelAPI.LabelUpdateParams;
  export import LabelGetMessagesParams = LabelAPI.LabelGetMessagesParams;
  export import LabelRunParams = LabelAPI.LabelRunParams;
  export import LabelSubmitParams = LabelAPI.LabelSubmitParams;
}
