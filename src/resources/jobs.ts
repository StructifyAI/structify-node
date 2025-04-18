// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SharedAPI from './shared';
import * as StructureAPI from './structure';
import { JobsList, type JobsListParams } from '../pagination';

export class Jobs extends APIResource {
  /**
   * List all the executions
   */
  list(
    query?: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesJobsList, JobListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<JobListResponsesJobsList, JobListResponse>;
  list(
    query: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<JobListResponsesJobsList, JobListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/jobs/list', JobListResponsesJobsList, { query, ...options });
  }

  /**
   * Delete a job
   */
  delete(jobId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/jobs/delete/${jobId}`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * You successfully cancelled a job.
   */
  cancel(uuid: string, options?: Core.RequestOptions): Core.APIPromise<JobCancelResponse> {
    return this._client.post(`/jobs/cancel/${uuid}`, options);
  }

  /**
   * Retrieve a job from structify.
   */
  get(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse> {
    return this._client.get(`/jobs/get/${jobId}`, options);
  }

  /**
   * Retrieve a step from structify.
   */
  getStep(stepId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetStepResponse> {
    return this._client.get(`/jobs/get_step/${stepId}`, options);
  }

  getStepGraph(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetStepGraphResponse> {
    return this._client.get(`/jobs/get_step_graph/${jobId}`, options);
  }

  /**
   * Retrieve a job from structify.
   */
  getSteps(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetStepsResponse> {
    return this._client.get(`/jobs/get_steps/${jobId}`, options);
  }

  /**
   * One example use case is every single day check the news websites and pull them
   * into my dataset.
   */
  schedule(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/jobs/schedule', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class JobListResponsesJobsList extends JobsList<JobListResponse> {}

export interface JobListResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  user_id: string;

  /**
   * A message about the status of the job at completion
   */
  message?: string | null;

  /**
   * Proto for JobInput
   */
  parameters?: Core.Uploadable | null;

  plan_id?: string | null;

  /**
   * A reason for the job's existence
   */
  reason?: string | null;

  /**
   * What time did the job start running?
   */
  run_started_time?: string | null;
}

export type JobDeleteResponse = string;

export interface JobCancelResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  user_id: string;

  /**
   * A message about the status of the job at completion
   */
  message?: string | null;

  /**
   * Proto for JobInput
   */
  parameters?: Core.Uploadable | null;

  plan_id?: string | null;

  /**
   * A reason for the job's existence
   */
  reason?: string | null;

  /**
   * What time did the job start running?
   */
  run_started_time?: string | null;
}

export interface JobGetResponse {
  job: JobGetResponse.Job;

  steps: Array<StructureAPI.ExecutionStep>;
}

export namespace JobGetResponse {
  export interface Job {
    id: string;

    created_at: string;

    dataset_id: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    user_id: string;

    /**
     * A message about the status of the job at completion
     */
    message?: string | null;

    /**
     * Proto for JobInput
     */
    parameters?: Core.Uploadable | null;

    plan_id?: string | null;

    /**
     * A reason for the job's existence
     */
    reason?: string | null;

    /**
     * What time did the job start running?
     */
    run_started_time?: string | null;
  }
}

export interface JobGetStepResponse {
  prompt: StructureAPI.ChatPrompt;

  response: JobGetStepResponse.Response;
}

export namespace JobGetStepResponse {
  export interface Response {
    llm: string;

    text: string;

    tool_calls: Array<Response.ToolCall>;

    reasoning?: string | null;

    thinking?: string | null;
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

export type JobGetStepGraphResponse = Array<JobGetStepGraphResponse.JobGetStepGraphResponseItem>;

export namespace JobGetStepGraphResponse {
  export interface JobGetStepGraphResponseItem {
    id: string;

    creation_time: string;

    status: 'queued' | 'started' | 'executed' | 'skipped';

    execution_step?: JobGetStepGraphResponseItem.ExecutionStep | null;

    parent_transition?: JobGetStepGraphResponseItem.ParentTransition | null;

    queued_message?: string | null;

    skipped_reason?: string | null;

    state_change_message?: string | null;

    step_index?: number | null;
  }

  export namespace JobGetStepGraphResponseItem {
    export interface ExecutionStep {
      prompt: StructureAPI.ChatPrompt;

      response: ExecutionStep.Response;
    }

    export namespace ExecutionStep {
      export interface Response {
        llm: string;

        text: string;

        tool_calls: Array<Response.ToolCall>;

        reasoning?: string | null;

        thinking?: string | null;
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

    export interface ParentTransition {
      parent_id: string;

      tool_input: string;

      tool_name: string;
    }
  }
}

export type JobGetStepsResponse = Array<StructureAPI.ExecutionStep>;

export interface JobListParams extends JobsListParams {
  /**
   * Dataset name to optionally filter jobs by
   */
  dataset?: string | null;

  /**
   * List since a specific timestamp
   */
  since?: string | null;

  /**
   * Status to optionally filter jobs by
   */
  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;
}

Jobs.JobListResponsesJobsList = JobListResponsesJobsList;

export declare namespace Jobs {
  export {
    type JobListResponse as JobListResponse,
    type JobDeleteResponse as JobDeleteResponse,
    type JobCancelResponse as JobCancelResponse,
    type JobGetResponse as JobGetResponse,
    type JobGetStepResponse as JobGetStepResponse,
    type JobGetStepGraphResponse as JobGetStepGraphResponse,
    type JobGetStepsResponse as JobGetStepsResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
  };
}
