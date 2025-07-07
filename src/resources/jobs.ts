// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SharedAPI from './shared';
import * as StructureAPI from './structure';
import * as WorkflowAPI from './workflow';
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
   * Retrieve a job from structify using a job_id.
   */
  get(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse> {
    return this._client.get(`/jobs/get/${jobId}`, options);
  }

  /**
   * Retrieve scrapers associated with a job from structify.
   */
  getScrapers(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetScrapersResponse> {
    return this._client.get(`/jobs/get_scrapers/${jobId}`, options);
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

  job_type: 'Web' | 'Pdf' | 'Derive' | 'Scrape';

  selected_next_workflow_step: boolean;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  user_id: string;

  message?: string | null;

  parameters?: JobListResponse.Parameters | null;

  reason?: string | null;

  run_started_time?: string | null;

  run_time_milliseconds?: number | null;

  special_job_type?: 'HumanLLM' | null;

  workflow_group_id?: string | null;

  workflow_id?: WorkflowAPI.ID | null;

  workflow_step_id?: string | null;
}

export namespace JobListResponse {
  export interface Parameters {
    allow_extra_entities: boolean;

    extraction_criteria: Array<StructureAPI.SaveRequirement>;

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a Neo4j DB
     */
    seeded_kg: SharedAPI.KnowledgeGraph;

    structuring_input:
      | Parameters.Agent
      | Parameters.TransformationPrompt
      | Parameters.ScrapeFromURLProperty
      | Parameters.ScrapeURL;
  }

  export namespace Parameters {
    export interface Agent {
      /**
       * These are all the types that can be converted into a BasicInputType
       */
      Agent: Agent.Pdf | Agent.Web;
    }

    export namespace Agent {
      export interface Pdf {
        /**
         * Ingest all pages of a PDF and process them independently.
         */
        PDF: Pdf.Pdf;
      }

      export namespace Pdf {
        /**
         * Ingest all pages of a PDF and process them independently.
         */
        export interface Pdf {
          path: string;
        }
      }

      export interface Web {
        Web: Web.Web;
      }

      export namespace Web {
        export interface Web {
          banned_domains?: Array<string>;

          starting_searches?: Array<string>;

          starting_urls?: Array<string>;
        }
      }
    }

    export interface TransformationPrompt {
      TransformationPrompt: string;
    }

    export interface ScrapeFromURLProperty {
      ScrapeFromUrlProperty: string;
    }

    export interface ScrapeURL {
      ScrapeUrl: string;
    }
  }
}

export type JobDeleteResponse = string;

export interface JobCancelResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  job_type: 'Web' | 'Pdf' | 'Derive' | 'Scrape';

  max_steps_without_save: number;

  selected_next_workflow_step: boolean;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  user_id: string;

  max_errors?: number | null;

  max_execution_time_secs?: number | null;

  max_total_steps?: number | null;

  /**
   * A message about the status of the job at completion
   */
  message?: string | null;

  node_id?: string | null;

  /**
   * Proto for JobInput
   */
  parameters?: Core.Uploadable | null;

  /**
   * A reason for the job's existence
   */
  reason?: string | null;

  /**
   * What time did the job start running?
   */
  run_started_time?: string | null;

  run_time_milliseconds?: number | null;

  seeded_kg_search_term?: string | null;

  session_id?: string | null;

  workflow_group_id?: string | null;

  workflow_id?: WorkflowAPI.ID | null;

  workflow_step_id?: string | null;
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

    job_type: 'Web' | 'Pdf' | 'Derive' | 'Scrape';

    max_steps_without_save: number;

    selected_next_workflow_step: boolean;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    user_id: string;

    max_errors?: number | null;

    max_execution_time_secs?: number | null;

    max_total_steps?: number | null;

    /**
     * A message about the status of the job at completion
     */
    message?: string | null;

    node_id?: string | null;

    /**
     * Proto for JobInput
     */
    parameters?: Core.Uploadable | null;

    /**
     * A reason for the job's existence
     */
    reason?: string | null;

    /**
     * What time did the job start running?
     */
    run_started_time?: string | null;

    run_time_milliseconds?: number | null;

    seeded_kg_search_term?: string | null;

    session_id?: string | null;

    workflow_group_id?: string | null;

    workflow_id?: WorkflowAPI.ID | null;

    workflow_step_id?: string | null;
  }
}

export type JobGetScrapersResponse = Array<JobGetScrapersResponse.JobGetScrapersResponseItem>;

export namespace JobGetScrapersResponse {
  export interface JobGetScrapersResponseItem {
    base_url: string;

    is_newly_created: boolean;

    scraper_created_at: string;

    scraper_id: string;

    scraper_updated_at: string;

    chat?: StructureAPI.ChatPrompt | null;

    code?: string | null;

    next_page_code?: string | null;
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
   * seeded kg search term
   */
  seeded_kg_search_term?: string | null;

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
    type JobGetScrapersResponse as JobGetScrapersResponse,
    type JobGetStepResponse as JobGetStepResponse,
    type JobGetStepGraphResponse as JobGetStepGraphResponse,
    type JobGetStepsResponse as JobGetStepsResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
  };
}
