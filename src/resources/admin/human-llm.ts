// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';

export class HumanLlm extends APIResource {
  /**
   * Start the next human llm job in the queue
   */
  getJobs(
    params?: HumanLlmGetJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HumanLlmGetJobsResponse>;
  getJobs(options?: Core.RequestOptions): Core.APIPromise<HumanLlmGetJobsResponse>;
  getJobs(
    params: HumanLlmGetJobsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HumanLlmGetJobsResponse> {
    if (isRequestOptions(params)) {
      return this.getJobs({}, params);
    }
    const { status } = params;
    return this._client.post('/admin/human_llm/get_jobs', { query: { status }, ...options });
  }

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
  prelabelStep(stepId: string, options?: Core.RequestOptions): Core.APIPromise<HumanLlmPrelabelStepResponse> {
    return this._client.post(`/admin/human_llm/prelabel_step/${stepId}`, options);
  }

  /**
   * Start the next human llm job in the queue
   */
  startNextJob(
    params?: HumanLlmStartNextJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StepChoices>;
  startNextJob(options?: Core.RequestOptions): Core.APIPromise<StepChoices>;
  startNextJob(
    params: HumanLlmStartNextJobParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StepChoices> {
    if (isRequestOptions(params)) {
      return this.startNextJob({}, params);
    }
    const { job_id } = params;
    return this._client.post('/admin/human_llm/start_next_job', { query: { job_id }, ...options });
  }

  /**
   * Update a step by setting and preparing the given tool calls, then return
   * possible next steps with descriptions.
   */
  updateStep(body: HumanLlmUpdateStepParams, options?: Core.RequestOptions): Core.APIPromise<StepChoices> {
    return this._client.post('/admin/human_llm/update_step', { body, ...options });
  }
}

export interface StepChoices {
  extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

  job_id: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  seeded_kg: SharedAPI.KnowledgeGraph;

  step_options: Array<StepChoices.StepOption>;
}

export namespace StepChoices {
  export interface StepOption {
    id: string;

    description: string;
  }
}

export type HumanLlmGetJobsResponse = Array<HumanLlmGetJobsResponse.HumanLlmGetJobsResponseItem>;

export namespace HumanLlmGetJobsResponse {
  export interface HumanLlmGetJobsResponseItem {
    id: string;

    creation_time: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    message?: string | null;

    report_on_complete?: boolean;

    /**
     * What time did the job start running?
     */
    run_started_time?: string | null;
  }
}

export interface HumanLlmPrelabelStepResponse {
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

  tool_calls: Array<HumanLlmPrelabelStepResponse.ToolCall>;
}

export namespace HumanLlmPrelabelStepResponse {
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

    name:
      | 'Save'
      | 'Scroll'
      | 'ScrollToBottom'
      | 'Exit'
      | 'Click'
      | 'Hover'
      | 'Wait'
      | 'Error'
      | 'Google'
      | 'Type';

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

export interface HumanLlmGetJobsParams {
  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;
}

export interface HumanLlmGetNextStepParams {
  job_id: string;

  step_id: string;
}

export interface HumanLlmStartNextJobParams {
  job_id?: string | null;
}

export interface HumanLlmUpdateStepParams {
  job_id: string;

  step_id: string;

  tool_calls: Array<HumanLlmUpdateStepParams.ToolCall>;

  add_to_training_datum?: boolean;
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

    name:
      | 'Save'
      | 'Scroll'
      | 'ScrollToBottom'
      | 'Exit'
      | 'Click'
      | 'Hover'
      | 'Wait'
      | 'Error'
      | 'Google'
      | 'Type';

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
    type StepChoices as StepChoices,
    type HumanLlmGetJobsResponse as HumanLlmGetJobsResponse,
    type HumanLlmPrelabelStepResponse as HumanLlmPrelabelStepResponse,
    type HumanLlmGetJobsParams as HumanLlmGetJobsParams,
    type HumanLlmGetNextStepParams as HumanLlmGetNextStepParams,
    type HumanLlmStartNextJobParams as HumanLlmStartNextJobParams,
    type HumanLlmUpdateStepParams as HumanLlmUpdateStepParams,
  };
}
