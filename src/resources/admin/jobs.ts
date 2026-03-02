// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';
import * as ConnectorsAPI from '../connectors/connectors';
import { JobsList, type JobsListParams } from '../../pagination';

export class Jobs extends APIResource {
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
    return this._client.getAPIList('/admin/jobs/list', JobListResponsesJobsList, { query, ...options });
  }

  delete(body: JobDeleteParams, options?: Core.RequestOptions): Core.APIPromise<AdminDeleteJobsResponse> {
    return this._client.post('/admin/jobs/delete', { body, ...options });
  }

  killByUser(
    body: JobKillByUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobKillByUserResponse> {
    return this._client.post('/admin/jobs/kill_by_user', { body, ...options });
  }
}

export class JobListResponsesJobsList extends JobsList<JobListResponse> {}

export interface AdminDeleteJobsRequest {
  job_ids: Array<string>;
}

export interface AdminDeleteJobsResponse {
  deleted_jobs: number;
}

export interface AdminListJobsRequestParams {
  job_type?: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore' | null;

  limit?: number;

  offset?: number;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;

  user_id?: string | null;
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

export interface JobKillByUserResponse {
  killed_jobs: number;
}

export interface JobListParams extends JobsListParams {
  job_type?: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore' | null;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;

  user_id?: string | null;
}

export interface JobDeleteParams {
  job_ids: Array<string>;
}

export interface JobKillByUserParams {
  user_id: string;
}

Jobs.JobListResponsesJobsList = JobListResponsesJobsList;

export declare namespace Jobs {
  export {
    type AdminDeleteJobsRequest as AdminDeleteJobsRequest,
    type AdminDeleteJobsResponse as AdminDeleteJobsResponse,
    type AdminListJobsRequestParams as AdminListJobsRequestParams,
    type JobListResponse as JobListResponse,
    type JobKillByUserResponse as JobKillByUserResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
    type JobDeleteParams as JobDeleteParams,
    type JobKillByUserParams as JobKillByUserParams,
  };
}
