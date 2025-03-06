// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';

export class HumanLlm extends APIResource {
  addSearchForJob(
    params: HumanLlmAddSearchForJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StepChoices> {
    const { job_id, url } = params;
    return this._client.post('/admin/human_llm/add_search_for_job', { query: { job_id, url }, ...options });
  }

  /**
   * Adds the given step to the HumanLLM dataset.
   */
  addToDataset(body: HumanLlmAddToDatasetParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/admin/human_llm/add_to_dataset', { body, ...options });
  }

  finishJob(params: HumanLlmFinishJobParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { id, status } = params;
    return this._client.post('/admin/human_llm/finish_job', { query: { id, status }, ...options });
  }

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

export interface HumanLlmJob {
  job: HumanLlmJob.Job;

  metadata: HumanLlmJob.Metadata;
}

export namespace HumanLlmJob {
  export interface Job {
    id: string;

    creation_time: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    message?: string | null;

    reason?: string | null;

    report_on_complete?: boolean;

    /**
     * What time did the job start running?
     */
    run_started_time?: string | null;
  }

  export interface Metadata {
    dataset_name: string;

    property_name: string;

    user_email: string;

    entity_name?: string | null;
  }
}

export interface StepChoiceInfo {
  id: string;

  action_name?: string;

  metadata?: Record<string, string>;
}

export interface StepChoices {
  extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

  job_id: string;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  seeded_kg: SharedAPI.EntityGraph;

  step_options: Array<StepChoiceInfo>;
}

export type HumanLlmAddToDatasetResponse = unknown;

export type HumanLlmFinishJobResponse = unknown;

export type HumanLlmGetJobsResponse = Array<HumanLlmJob>;

export interface HumanLlmPrelabelStepResponse {
  llm: string;

  text: string;

  tool_calls: Array<SharedAPI.ToolCall>;
}

export interface HumanLlmAddSearchForJobParams {
  job_id: string;

  url: string;
}

export interface HumanLlmAddToDatasetParams {
  extraction_criteria_met: boolean;

  job_id: string;

  step_id: string;

  tool_calls: Array<SharedAPI.ToolCall>;
}

export interface HumanLlmFinishJobParams {
  id: string;

  status: 'Queued' | 'Running' | 'Completed' | 'Failed';
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
  extraction_criteria_met: boolean;

  job_id: string;

  step_id: string;

  tool_calls: Array<SharedAPI.ToolCall>;
}

export declare namespace HumanLlm {
  export {
    type HumanLlmJob as HumanLlmJob,
    type StepChoiceInfo as StepChoiceInfo,
    type StepChoices as StepChoices,
    type HumanLlmAddToDatasetResponse as HumanLlmAddToDatasetResponse,
    type HumanLlmFinishJobResponse as HumanLlmFinishJobResponse,
    type HumanLlmGetJobsResponse as HumanLlmGetJobsResponse,
    type HumanLlmPrelabelStepResponse as HumanLlmPrelabelStepResponse,
    type HumanLlmAddSearchForJobParams as HumanLlmAddSearchForJobParams,
    type HumanLlmAddToDatasetParams as HumanLlmAddToDatasetParams,
    type HumanLlmFinishJobParams as HumanLlmFinishJobParams,
    type HumanLlmGetJobsParams as HumanLlmGetJobsParams,
    type HumanLlmGetNextStepParams as HumanLlmGetNextStepParams,
    type HumanLlmStartNextJobParams as HumanLlmStartNextJobParams,
    type HumanLlmUpdateStepParams as HumanLlmUpdateStepParams,
  };
}
