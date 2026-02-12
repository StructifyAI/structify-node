// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ChatAPI from './chat';
import * as SessionsAPI from './sessions';
import * as SharedAPI from './shared';
import * as SourcesAPI from './sources';
import * as StructureAPI from './structure';
import * as ConnectorsAPI from './connectors/connectors';
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
   * You successfully cancelled a job.
   */
  cancel(uuid: string, options?: Core.RequestOptions): Core.APIPromise<JobCancelResponse> {
    return this._client.post(`/jobs/cancel/${uuid}`, options);
  }

  get(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobGetResponse> {
    return this._client.get(`/jobs/get/${jobId}`, options);
  }

  getEvents(jobId: string, options?: Core.RequestOptions): Core.APIPromise<GetJobEventsResponse> {
    return this._client.get(`/jobs/${jobId}/events`, options);
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

  /**
   * Returns counts of jobs by status (completed, running, failed, queued). Exactly
   * one of job_ids or dataset_name must be provided. This endpoint can handle large
   * numbers of job IDs since it returns aggregated data instead of individual job
   * details.
   */
  status(body: JobStatusParams, options?: Core.RequestOptions): Core.APIPromise<JobStatusResponse> {
    return this._client.post('/jobs/status_aggregated', { body, ...options });
  }
}

export class JobListResponsesJobsList extends JobsList<JobListResponse> {}

export interface GetJobEventsResponse {
  events: Array<GetJobEventsResponse.Event>;
}

export namespace GetJobEventsResponse {
  export interface Event {
    /**
     * The body content of a job event
     */
    body: SessionsAPI.JobEventBody;

    created_at: string;
  }
}

export interface JobListResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  job_type: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore';

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  user_id: string;

  message?: string | null;

  parameters?: JobListResponse.Parameters | null;

  reason?: string | null;

  run_started_time?: string | null;

  run_time_milliseconds?: number | null;

  special_job_type?: 'HumanLLM' | null;
}

export namespace JobListResponse {
  export interface Parameters {
    allow_extra_entities: boolean;

    extraction_criteria: Array<StructureAPI.SaveRequirement>;

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a DB
     */
    seeded_kg: SharedAPI.KnowledgeGraph;

    structuring_input:
      | Parameters.Agent
      | Parameters.TransformationPrompt
      | Parameters.ScrapeFromURLProperty
      | Parameters.ScrapeURL
      | Parameters.ConnectorExploration;

    instructions?: string | null;

    model?: string | null;
  }

  export namespace Parameters {
    export interface Agent {
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

          page?: number | null;
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
      ScrapeFromUrlProperty: ScrapeFromURLProperty.ScrapeFromURLProperty;
    }

    export namespace ScrapeFromURLProperty {
      export interface ScrapeFromURLProperty {
        batch_scrape: boolean;

        url_property_name: string;

        use_markdown: boolean;
      }
    }

    export interface ScrapeURL {
      ScrapeUrl: ScrapeURL.ScrapeURL;
    }

    export namespace ScrapeURL {
      export interface ScrapeURL {
        batch_scrape: boolean;

        url: string;

        use_markdown: boolean;
      }
    }

    export interface ConnectorExploration {
      ConnectorExploration: ConnectorExploration.ConnectorExploration;
    }

    export namespace ConnectorExploration {
      export interface ConnectorExploration {
        connector_id: string;

        /**
         * Identifies the phase of connector exploration
         *
         * This enum is used to track which phase of exploration a chat session belongs to.
         * It's stored as JSONB in the database to allow for flexible phase identification.
         */
        exploration_phase_id: ConnectorsAPI.ExplorationPhaseID;

        exploration_run_id: string;

        /**
         * Which exploration stage to run
         */
        stage: 'both' | 'ingestion' | 'annotation';
      }
    }
  }
}

export interface JobCancelResponse {
  id: string;

  created_at: string;

  dataset_id: string;

  job_type: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore';

  max_steps_without_save: number;

  membership_id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  updated_at: string;

  use_proxy: boolean;

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
}

export interface JobGetResponse {
  agents: Array<JobGetResponse.Agent>;

  info: JobGetResponse.Info;

  saved: Array<Array<JobGetResponse.Saved>>;
}

export namespace JobGetResponse {
  export interface Agent {
    base_url: string;

    is_newly_created: boolean;

    scraper_created_at: string;

    scraper_id: string;

    scraper_updated_at: string;

    chat?: StructureAPI.ChatPrompt | null;

    code?: string | null;

    events?: Array<ChatAPI.ChatEvent> | null;

    next_page_code?: string | null;
  }

  export interface Info {
    id: string;

    created_at: string;

    dataset_id: string;

    job_type: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore';

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    user_id: string;

    message?: string | null;

    parameters?: Info.Parameters | null;

    reason?: string | null;

    run_started_time?: string | null;

    run_time_milliseconds?: number | null;

    special_job_type?: 'HumanLLM' | null;
  }

  export namespace Info {
    export interface Parameters {
      allow_extra_entities: boolean;

      extraction_criteria: Array<StructureAPI.SaveRequirement>;

      /**
       * Knowledge graph info structured to deserialize and display in the same format
       * that the LLM outputs. Also the first representation of an LLM output in the
       * pipeline from raw tool output to being merged into a DB
       */
      seeded_kg: SharedAPI.KnowledgeGraph;

      structuring_input:
        | Parameters.Agent
        | Parameters.TransformationPrompt
        | Parameters.ScrapeFromURLProperty
        | Parameters.ScrapeURL
        | Parameters.ConnectorExploration;

      instructions?: string | null;

      model?: string | null;
    }

    export namespace Parameters {
      export interface Agent {
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

            page?: number | null;
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
        ScrapeFromUrlProperty: ScrapeFromURLProperty.ScrapeFromURLProperty;
      }

      export namespace ScrapeFromURLProperty {
        export interface ScrapeFromURLProperty {
          batch_scrape: boolean;

          url_property_name: string;

          use_markdown: boolean;
        }
      }

      export interface ScrapeURL {
        ScrapeUrl: ScrapeURL.ScrapeURL;
      }

      export namespace ScrapeURL {
        export interface ScrapeURL {
          batch_scrape: boolean;

          url: string;

          use_markdown: boolean;
        }
      }

      export interface ConnectorExploration {
        ConnectorExploration: ConnectorExploration.ConnectorExploration;
      }

      export namespace ConnectorExploration {
        export interface ConnectorExploration {
          connector_id: string;

          /**
           * Identifies the phase of connector exploration
           *
           * This enum is used to track which phase of exploration a chat session belongs to.
           * It's stored as JSONB in the database to allow for flexible phase identification.
           */
          exploration_phase_id: ConnectorsAPI.ExplorationPhaseID;

          exploration_run_id: string;

          /**
           * Which exploration stage to run
           */
          stage: 'both' | 'ingestion' | 'annotation';
        }
      }
    }
  }

  export interface Saved {
    id: string;

    created_at: string;

    is_summary: boolean;

    label: string;

    llm_id: number;

    properties: {
      [key: string]:
        | string
        | boolean
        | number
        | Saved.PartialDateObject
        | string
        | string
        | Saved.URLObject
        | string
        | Saved.MoneyObject
        | SharedAPI.Image
        | Saved.PersonName
        | Saved.AddressObject
        | string;
    };

    source_id: string;

    user_specified: boolean;

    job_id?: string | null;

    kg_entity_id?: string | null;

    link?: SourcesAPI.Source | null;

    location?: Saved.Text | Saved.Visual | Saved.Page | null;

    scraper_id?: string | null;
  }

  export namespace Saved {
    export interface PartialDateObject {
      original_string: string;

      year: number;

      day?: number | null;

      month?: number | null;
    }

    export interface URLObject {
      original_string: string;

      url: string;
    }

    export interface MoneyObject {
      amount: number;

      currency_code:
        | 'USD'
        | 'EUR'
        | 'GBP'
        | 'JPY'
        | 'CNY'
        | 'INR'
        | 'RUB'
        | 'CAD'
        | 'AUD'
        | 'CHF'
        | 'ILS'
        | 'NZD'
        | 'SGD'
        | 'HKD'
        | 'NOK'
        | 'SEK'
        | 'PLN'
        | 'TRY'
        | 'DKK'
        | 'MXN'
        | 'ZAR'
        | 'PHP'
        | 'VND'
        | 'THB'
        | 'BRL'
        | 'KRW';

      original_string: string;
    }

    export interface PersonName {
      name: string;
    }

    export interface AddressObject {
      components: { [key: string]: string };

      original_address: string;
    }

    export interface Text {
      Text: Text.Text;
    }

    export namespace Text {
      export interface Text {
        byte_offset: number;
      }
    }

    export interface Visual {
      Visual: Visual.Visual;
    }

    export namespace Visual {
      export interface Visual {
        x: number;

        y: number;
      }
    }

    export interface Page {
      Page: Page.Page;
    }

    export namespace Page {
      export interface Page {
        page_number: number;
      }
    }
  }
}

export interface JobStatusResponse {
  completed: number;

  failed: number;

  queued: number;

  running: number;

  total: number;
}

export interface JobListParams extends JobsListParams {
  /**
   * Dataset name to optionally filter jobs by
   */
  dataset?: string | null;

  /**
   * Type of job to optionally filter jobs by
   */
  job_type?: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore' | null;

  /**
   * Node ID to optionally filter jobs by
   */
  node_id?: string | null;

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

export interface JobStatusParams {
  dataset_name?: string | null;

  job_ids?: Array<string> | null;

  node_id?: string | null;
}

Jobs.JobListResponsesJobsList = JobListResponsesJobsList;

export declare namespace Jobs {
  export {
    type GetJobEventsResponse as GetJobEventsResponse,
    type JobListResponse as JobListResponse,
    type JobCancelResponse as JobCancelResponse,
    type JobGetResponse as JobGetResponse,
    type JobStatusResponse as JobStatusResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
    type JobStatusParams as JobStatusParams,
  };
}
