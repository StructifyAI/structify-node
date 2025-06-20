// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as WorkflowAPI from './workflow';

export class WorkflowResource extends APIResource {
  /**
   * Create a new workflow
   */
  create(body: WorkflowCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/workflow/create', { body, ...options });
  }

  /**
   * Update an existing workflow
   */
  update(body: WorkflowUpdateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.put('/workflow/update', { body, ...options });
  }

  /**
   * list a new workflow
   */
  list(params?: WorkflowListParams, options?: Core.RequestOptions): Core.APIPromise<WorkflowListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<WorkflowListResponse>;
  list(
    params: WorkflowListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { dataset_name } = params;
    return this._client.post('/workflow/list', { query: { dataset_name }, ...options });
  }

  /**
   * Delete an existing workflow
   */
  delete(body: WorkflowDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete('/workflow/delete', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get a workflow by ID
   */
  get(query: WorkflowGetParams, options?: Core.RequestOptions): Core.APIPromise<ExistingWorkflow> {
    return this._client.get('/workflow/get', { query, ...options });
  }

  /**
   * Get the job status breakdown of a workflow
   */
  jobProgress(
    query: WorkflowJobProgressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowJobProgressResponse> {
    return this._client.get('/workflow/job_progress', { query, ...options });
  }

  jobs(query: WorkflowJobsParams, options?: Core.RequestOptions): Core.APIPromise<WorkflowJobsResponse> {
    return this._client.get('/workflow/jobs', { query, ...options });
  }

  /**
   * Trigger a workflow on a set of entities
   */
  trigger(body: WorkflowTriggerParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/workflow/trigger', { body, ...options });
  }
}

export interface ExistingWorkflow extends Workflow {
  id: ID;

  dataset_name: string;
}

export type ID = string;

export interface Workflow {
  name: string;

  starting_step: string;

  starting_table: string;

  steps: Array<Workflow.Step>;

  default_banned_domains?: Array<string>;

  /**
   * Configuration parameters for the StopChecker
   */
  default_stop_conditions?: Workflow.DefaultStopConditions;
}

export namespace Workflow {
  export interface Step {
    id: string;

    children: Array<string>;

    operation:
      | Step.EnhanceProperties
      | Step.EnhanceRelationship
      | Step.DeriveProperty
      | Step.ScrapePage
      | 'IngestData';

    table_name: string;
  }

  export namespace Step {
    export interface EnhanceProperties {
      EnhanceProperties: Array<string>;
    }

    export interface EnhanceRelationship {
      EnhanceRelationship: string;
    }

    export interface DeriveProperty {
      DeriveProperty: Array<string>;
    }

    export interface ScrapePage {
      ScrapePage: ScrapePage.ScrapePage;
    }

    export namespace ScrapePage {
      export interface ScrapePage {
        relationship_name: string;

        starting_url_property_name: string;
      }
    }
  }

  /**
   * Configuration parameters for the StopChecker
   */
  export interface DefaultStopConditions {
    max_steps_without_save: number;

    max_errors?: number | null;

    max_execution_time_secs?: number | null;

    max_total_steps?: number | null;
  }
}

export type WorkflowListResponse = Array<ExistingWorkflow>;

export type WorkflowJobProgressResponse = Record<string, Record<string, number>>;

export type WorkflowJobsResponse = Array<WorkflowJobsResponse.WorkflowJobsResponseItem>;

export namespace WorkflowJobsResponse {
  export interface WorkflowJobsResponseItem {
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

export type WorkflowTriggerResponse = unknown;

export interface WorkflowCreateParams {
  dataset_name: string;

  workflow: Workflow;
}

export interface WorkflowUpdateParams {
  dataset_name: string;

  workflow: Workflow;

  workflow_id: ID;
}

export interface WorkflowListParams {
  dataset_name?: string | null;
}

export interface WorkflowDeleteParams {
  workflow_id: ID;
}

export interface WorkflowGetParams {
  workflow_id: ID;
}

export interface WorkflowJobProgressParams {
  workflow_id: ID;
}

export interface WorkflowJobsParams {
  workflow_id: ID;

  group_id?: string | null;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;

  step_id?: string | null;
}

export interface WorkflowTriggerParams {
  entity_ids: Array<string>;

  workflow_id: ID;

  banned_domains?: Array<string> | null;

  /**
   * Configuration parameters for the StopChecker
   */
  stop_config?: WorkflowTriggerParams.StopConfig | null;
}

export namespace WorkflowTriggerParams {
  /**
   * Configuration parameters for the StopChecker
   */
  export interface StopConfig {
    max_steps_without_save: number;

    max_errors?: number | null;

    max_execution_time_secs?: number | null;

    max_total_steps?: number | null;
  }
}

export declare namespace WorkflowResource {
  export {
    type ExistingWorkflow as ExistingWorkflow,
    type ID as ID,
    type Workflow as Workflow,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowJobProgressResponse as WorkflowJobProgressResponse,
    type WorkflowJobsResponse as WorkflowJobsResponse,
    type WorkflowTriggerResponse as WorkflowTriggerResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowUpdateParams as WorkflowUpdateParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowDeleteParams as WorkflowDeleteParams,
    type WorkflowGetParams as WorkflowGetParams,
    type WorkflowJobProgressParams as WorkflowJobProgressParams,
    type WorkflowJobsParams as WorkflowJobsParams,
    type WorkflowTriggerParams as WorkflowTriggerParams,
  };
}
