// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class WorkflowResource extends APIResource {
  /**
   * Create a new workflow
   */
  create(body: WorkflowCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/dataset/workflow/create', { body, ...options });
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
    return this._client.post('/dataset/workflow/list', { query: { dataset_name }, ...options });
  }
}

export type ID = string;

export interface Workflow {
  name: string;

  starting_step: string;

  starting_table: string;

  steps: Record<string, Workflow.Steps>;
}

export namespace Workflow {
  export interface Steps {
    id: string;

    children: Array<string>;

    operation: Steps.EnhanceProperties | Steps.EnhanceRelationship | Steps.DeriveProperty | 'IngestData';

    table_name: string;
  }

  export namespace Steps {
    export interface EnhanceProperties {
      EnhanceProperties: Array<string>;
    }

    export interface EnhanceRelationship {
      EnhanceRelationship: string;
    }

    export interface DeriveProperty {
      DeriveProperty: Array<string>;
    }
  }
}

export type WorkflowListResponse = Array<Workflow>;

export interface WorkflowCreateParams {
  dataset_name: string;

  name: string;

  workflow: Workflow;
}

export interface WorkflowListParams {
  dataset_name?: string | null;
}

export declare namespace WorkflowResource {
  export {
    type ID as ID,
    type Workflow as Workflow,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowListParams as WorkflowListParams,
  };
}
