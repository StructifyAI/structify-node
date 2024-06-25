// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as RunsAPI from './runs';
import * as DatasetsAPI from './datasets';
import * as LlmAssistAPI from './label/llm-assist';
import { type Uploadable } from '../core';

export class Runs extends APIResource {
  /**
   * Retrieve a run from structify.
   */
  retrieve(uuid: string, options?: Core.RequestOptions): Core.APIPromise<ExecutionHistory> {
    return this._client.get(`/runs/get/${uuid}`, options);
  }

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
  cancel(uuid: string, options?: Core.RequestOptions): Core.APIPromise<JobNode> {
    return this._client.post(`/runs/cancel/${uuid}`, options);
  }

  /**
   * One example use case is every single day check the news websites and pull them
   * into my dataset.
   */
  schedule(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/runs/schedule', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ExecutionHistory {
  date: string;

  steps: Array<ExecutionHistory.Step>;

  /**
   * Used to identify this history
   */
  uuid: string;
}

export namespace ExecutionHistory {
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
        input: LlmAssistAPI.ToolInput;

        name: 'Save' | 'Scroll' | 'Exit' | 'Click' | 'Hover' | 'Wait' | 'Error' | 'Google' | 'Type';

        result?: ToolCall.ToolQueued | ToolCall.ToolFail | ToolCall.InputParseFail | ToolCall.Success | null;
      }

      export namespace ToolCall {
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

export interface JobNode {
  id: string;

  status: 'Running' | 'Completed' | 'Failed';
}

export type RunListResponse = Array<string>;

export type RunDeleteResponse = string;

export namespace Runs {
  export import ExecutionHistory = RunsAPI.ExecutionHistory;
  export import JobNode = RunsAPI.JobNode;
  export import RunListResponse = RunsAPI.RunListResponse;
  export import RunDeleteResponse = RunsAPI.RunDeleteResponse;
}
