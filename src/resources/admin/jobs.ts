// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';
import * as ConnectorsAPI from '../connectors/connectors';
import { JobsList, type JobsListParams } from '../../pagination';

export class Jobs extends APIResource {
  /**
   * This endpoint allows admins to list jobs from all users without user ownership
   * restrictions. Optionally filter out test users (users with functional_test
   * feature flag or debug permission).
   */
  list(
    query: JobListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AdminListJobsResponsesJobsList, AdminListJobsResponse> {
    return this._client.getAPIList('/admin/jobs/list', AdminListJobsResponsesJobsList, { query, ...options });
  }

  delete(body: JobDeleteParams, options?: Core.RequestOptions): Core.APIPromise<AdminDeleteJobsResponse> {
    return this._client.post('/admin/jobs/delete', { body, ...options });
  }
}

export class AdminListJobsResponsesJobsList extends JobsList<AdminListJobsResponse> {}

export interface AdminDeleteJobsRequest {
  job_ids: Array<string>;
}

export interface AdminDeleteJobsResponse {
  deleted_jobs: number;
}

export interface AdminListJobsRequestParams {
  dataset_id?: string | null;

  /**
   * Filter out jobs from test users (users with functional_test feature flag or
   * debug permission)
   */
  filter_test_users?: boolean;

  limit?: number;

  offset?: number;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;
}

export interface AdminListJobsResponse {
  id: string;

  dataset_id: string;

  job_type: 'Web' | 'Pdf' | 'Derive' | 'Scrape' | 'Match' | 'ConnectorExplore';

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';

  user_id: string;

  parameters?: AdminListJobsResponse.Parameters | null;
}

export namespace AdminListJobsResponse {
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

export interface JobListParams extends JobsListParams {
  /**
   * Filter out jobs from test users (users with functional_test feature flag or
   * debug permission)
   */
  filter_test_users: boolean;

  /**
   * Dataset ID to optionally filter jobs by
   */
  dataset_id?: string | null;

  /**
   * Seeded kg search term
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

export interface JobDeleteParams {
  job_ids: Array<string>;
}

Jobs.AdminListJobsResponsesJobsList = AdminListJobsResponsesJobsList;

export declare namespace Jobs {
  export {
    type AdminDeleteJobsRequest as AdminDeleteJobsRequest,
    type AdminDeleteJobsResponse as AdminDeleteJobsResponse,
    type AdminListJobsRequestParams as AdminListJobsRequestParams,
    type AdminListJobsResponse as AdminListJobsResponse,
    AdminListJobsResponsesJobsList as AdminListJobsResponsesJobsList,
    type JobListParams as JobListParams,
    type JobDeleteParams as JobDeleteParams,
  };
}
