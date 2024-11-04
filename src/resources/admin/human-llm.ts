// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';

export class HumanLlm extends APIResource {
  /**
   * Given a step id, get the next formatted step to label.
   */
  getNextStep(
    body: HumanLlmGetNextStepParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StructureAPI.ExecutionStep> {
    return this._client.post('/admin/human_llm/get_next_step', { body, ...options });
  }

  /**
   * Update a step by setting and preparing the given tool calls, then return
   * possible next steps with descriptions.
   */
  updateStep(
    body: HumanLlmUpdateStepParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HumanLlmUpdateStepResponse> {
    return this._client.post('/admin/human_llm/update_step', { body, ...options });
  }
}

export type HumanLlmUpdateStepResponse = Array<
  Array<HumanLlmUpdateStepResponse.HumanLlmUpdateStepResponseItem>
>;

export namespace HumanLlmUpdateStepResponse {
  export interface HumanLlmUpdateStepResponseItem {}
}

export interface HumanLlmGetNextStepParams {
  job_id: string;

  step_id: string;
}

export interface HumanLlmUpdateStepParams {
  job_id: string;

  step_id: string;

  tool_calls: Array<HumanLlmUpdateStepParams.ToolCall>;
}

export namespace HumanLlmUpdateStepParams {
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

export declare namespace HumanLlm {
  export {
    type HumanLlmUpdateStepResponse as HumanLlmUpdateStepResponse,
    type HumanLlmGetNextStepParams as HumanLlmGetNextStepParams,
    type HumanLlmUpdateStepParams as HumanLlmUpdateStepParams,
  };
}
