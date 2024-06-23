// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as RunsAPI from './runs';
import * as DatasetsAPI from './datasets';
import { type Uploadable } from '../core';

export class Runs extends APIResource {
  /**
   * List all the executions
   */
  list(options?: Core.RequestOptions): Core.APIPromise<RunListResponse> {
    return this._client.get('/runs/list', options);
  }

  /**
   * Delete a run
   */
  delete(uuid: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/runs/delete/${uuid}`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * You successfully cancelled a run.
   */
  cancel(uuid: string, options?: Core.RequestOptions): Core.APIPromise<RunCancelResponse> {
    return this._client.post(`/runs/cancel/${uuid}`, options);
  }

  /**
   * Retrieve a run from structify.
   */
  get(uuid: string, options?: Core.RequestOptions): Core.APIPromise<RunGetResponse> {
    return this._client.get(`/runs/get/${uuid}`, options);
  }
}

export type RunListResponse = Array<string>;

export type RunDeleteResponse = string;

export interface RunCancelResponse {
  id: string;

  status: 'Running' | 'Completed' | 'Failed';
}

export interface RunGetResponse {
  date: string;

  steps: Array<RunGetResponse.Step>;

  /**
   * Used to identify this history
   */
  uuid: string;
}

export namespace RunGetResponse {
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
        /**
         * A dataset is where you put multiple referential schemas.
         *
         * A dataset is a complete namespace where all references between schemas are held
         * within the dataset.
         */
        dataset_descriptor: DatasetsAPI.DatasetDescriptor;

        extracted_entities: Array<Metadata.ExtractedEntity>;

        extraction_criterium: Array<Metadata.ExtractionCriterium>;

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
        export interface ExtractionCriterium {
          property_name: Array<string>;

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
}

export namespace Runs {
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunDeleteResponse = RunsAPI.RunDeleteResponse;
  export import RunCancelResponse = RunsAPI.RunCancelResponse;
  export import RunGetResponse = RunsAPI.RunGetResponse;
}
