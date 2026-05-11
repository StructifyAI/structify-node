// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';
import * as ConnectorsAPI from '../connectors/connectors';
import { JobsList, type JobsListParams } from '../../pagination';

/**
 * Admin endpoints
 */
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

  concurrency(options?: Core.RequestOptions): Core.APIPromise<JobConcurrencyResponse> {
    return this._client.get('/admin/jobs/concurrency_limits', options);
  }

  killByMembership(
    body: JobKillByMembershipParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobKillByMembershipResponse> {
    return this._client.post('/admin/jobs/kill_by_membership', { body, ...options });
  }

  runningStats(options?: Core.RequestOptions): Core.APIPromise<JobRunningStatsResponse> {
    return this._client.get('/admin/jobs/running_stats', options);
  }

  updateConcurrency(
    body: JobUpdateConcurrencyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobUpdateConcurrencyResponse> {
    return this._client.put('/admin/jobs/concurrency_limits', { body, ...options });
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
  job_type?: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore' | 'DatahubIngestion' | null;

  limit?: number;

  membership_id?: string | null;

  offset?: number;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;
}

export interface JobListResponse {
  id: string;

  created_at: string;

  job_type: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore' | 'DatahubIngestion';

  membership_id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  dataset_id?: string | null;

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

    structuring_input:
      | Parameters.Agent
      | Parameters.TransformationPrompt
      | Parameters.ScrapeFromURLProperty
      | Parameters.ScrapeURL
      | Parameters.DatahubIngestion
      | Parameters.ConnectorExploration;

    instructions?: string | null;

    model?: string | null;

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a DB
     */
    seeded_kg?: SharedAPI.KnowledgeGraph | null;
  }

  export namespace Parameters {
    export interface Agent {
      Agent: 'Web' | 'NoResources' | Agent.Pdf;
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

    export interface DatahubIngestion {
      DatahubIngestion: DatahubIngestion.DatahubIngestion;
    }

    export namespace DatahubIngestion {
      export interface DatahubIngestion {
        connector_id: string;

        exploration_run_id: string;

        only_do_datahub: boolean;
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

        strategy: 'full' | 'diff';
      }
    }
  }
}

export interface JobConcurrencyResponse {
  id: number;

  updated_at: string;

  max_connector_explore_jobs?: number | null;

  max_derive_jobs?: number | null;

  max_match_jobs?: number | null;

  max_pdf_jobs?: number | null;

  max_scrape_jobs?: number | null;

  max_total_jobs?: number | null;

  max_web_jobs?: number | null;
}

export interface JobKillByMembershipResponse {
  killed_jobs: number;
}

export interface JobRunningStatsResponse {
  by_membership: Array<JobRunningStatsResponse.ByMembership>;

  by_type: Array<JobRunningStatsResponse.ByType>;

  completed_last_hour: number;

  failed_last_hour: number;

  total_queued: number;

  total_running: number;
}

export namespace JobRunningStatsResponse {
  export interface ByMembership {
    membership_id: string;

    queued: number;

    running: number;
  }

  export interface ByType {
    count: number;

    job_type: string;
  }
}

export interface JobUpdateConcurrencyResponse {
  id: number;

  updated_at: string;

  max_connector_explore_jobs?: number | null;

  max_derive_jobs?: number | null;

  max_match_jobs?: number | null;

  max_pdf_jobs?: number | null;

  max_scrape_jobs?: number | null;

  max_total_jobs?: number | null;

  max_web_jobs?: number | null;
}

export interface JobListParams extends JobsListParams {
  job_type?: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore' | 'DatahubIngestion' | null;

  membership_id?: string | null;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;
}

export interface JobDeleteParams {
  job_ids: Array<string>;
}

export interface JobKillByMembershipParams {
  membership_id: string;
}

export interface JobUpdateConcurrencyParams {
  max_connector_explore_jobs?: number | null;

  max_derive_jobs?: number | null;

  max_match_jobs?: number | null;

  max_pdf_jobs?: number | null;

  max_scrape_jobs?: number | null;

  max_total_jobs?: number | null;

  max_web_jobs?: number | null;
}

Jobs.JobListResponsesJobsList = JobListResponsesJobsList;

export declare namespace Jobs {
  export {
    type AdminDeleteJobsRequest as AdminDeleteJobsRequest,
    type AdminDeleteJobsResponse as AdminDeleteJobsResponse,
    type AdminListJobsRequestParams as AdminListJobsRequestParams,
    type JobListResponse as JobListResponse,
    type JobConcurrencyResponse as JobConcurrencyResponse,
    type JobKillByMembershipResponse as JobKillByMembershipResponse,
    type JobRunningStatsResponse as JobRunningStatsResponse,
    type JobUpdateConcurrencyResponse as JobUpdateConcurrencyResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
    type JobDeleteParams as JobDeleteParams,
    type JobKillByMembershipParams as JobKillByMembershipParams,
    type JobUpdateConcurrencyParams as JobUpdateConcurrencyParams,
  };
}
