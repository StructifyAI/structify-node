// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

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
}

export type WorkflowListResponse = Array<ExistingWorkflow>;

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

export interface WorkflowTriggerParams {
  entity_ids: Array<string>;

  workflow_id: ID;
}

export declare namespace WorkflowResource {
  export {
    type ExistingWorkflow as ExistingWorkflow,
    type ID as ID,
    type Workflow as Workflow,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowTriggerResponse as WorkflowTriggerResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowUpdateParams as WorkflowUpdateParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowDeleteParams as WorkflowDeleteParams,
    type WorkflowGetParams as WorkflowGetParams,
    type WorkflowTriggerParams as WorkflowTriggerParams,
  };
}
