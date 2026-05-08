// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Workflow extends APIResource {
  run(body: WorkflowRunParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/workflow/run', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  stop(body: WorkflowStopParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/workflow/stop', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface RunWorkflowRequest {
  chat_session_id: string;

  use_node_cache: boolean;

  edited_node_name?: string | null;

  /**
   * Function names of nodes to force-rerun. Those nodes are excluded from cache
   * resolution so they re-execute fresh; their ancestors cache-resolve.
   */
  rerun_from?: Array<string>;

  /**
   * When true, descendants of the `rerun_from` nodes are marked Skipped instead of
   * executing. Use this to run a subset of the DAG.
   */
  skip_children?: boolean;
}

export interface StopWorkflowRequest {
  workflow_session_id: string;
}

export interface WorkflowRunParams {
  chat_session_id: string;

  use_node_cache: boolean;

  edited_node_name?: string | null;

  /**
   * Function names of nodes to force-rerun. Those nodes are excluded from cache
   * resolution so they re-execute fresh; their ancestors cache-resolve.
   */
  rerun_from?: Array<string>;

  /**
   * When true, descendants of the `rerun_from` nodes are marked Skipped instead of
   * executing. Use this to run a subset of the DAG.
   */
  skip_children?: boolean;
}

export interface WorkflowStopParams {
  workflow_session_id: string;
}

export declare namespace Workflow {
  export {
    type RunWorkflowRequest as RunWorkflowRequest,
    type StopWorkflowRequest as StopWorkflowRequest,
    type WorkflowRunParams as WorkflowRunParams,
    type WorkflowStopParams as WorkflowStopParams,
  };
}
