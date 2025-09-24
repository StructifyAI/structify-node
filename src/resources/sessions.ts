// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionsAPI from './sessions';
import * as SharedAPI from './shared';
import { type Response } from '../_shims/index';

export class Sessions extends APIResource {
  createEdge(
    sessionId: string,
    body: SessionCreateEdgeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSessionEdge> {
    return this._client.post(`/sessions/${sessionId}/edges`, { body, ...options });
  }

  createNode(
    sessionId: string,
    body: SessionCreateNodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSessionNode> {
    return this._client.post(`/sessions/${sessionId}/nodes`, { body, ...options });
  }

  createSession(
    body: SessionCreateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSession> {
    return this._client.post('/sessions', { body, ...options });
  }

  /**
   * Finalize a workflow session DAG by validating and marking it as ready
   */
  finalizeDag(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/sessions/${sessionId}/dag_ready`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  getDag(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<WorkflowDag> {
    return this._client.get(`/sessions/${sessionId}/dag`, options);
  }

  /**
   * Get events from all jobs for a specific workflow node.
   */
  getEvents(
    nodeId: string,
    query?: SessionGetEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetEventsResponse>;
  getEvents(nodeId: string, options?: Core.RequestOptions): Core.APIPromise<SessionGetEventsResponse>;
  getEvents(
    nodeId: string,
    query: SessionGetEventsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetEventsResponse> {
    if (isRequestOptions(query)) {
      return this.getEvents(nodeId, {}, query);
    }
    return this._client.get(`/sessions/nodes/${nodeId}/events`, { query, ...options });
  }

  /**
   * Get terminal logs for a workflow node
   */
  getNodeLogs(nodeId: string, options?: Core.RequestOptions): Core.APIPromise<GetNodeLogsResponse> {
    return this._client.get(`/sessions/node/${nodeId}/logs`, options);
  }

  getNodeOutputData(nodeId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/sessions/nodes/${nodeId}/output_data`, {
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  getNodeProgress(
    nodeId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionGetNodeProgressResponse> {
    return this._client.get(`/sessions/nodes/${nodeId}/progress`, options);
  }

  killJobs(
    sessionId: string,
    body: SessionKillJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionKillJobsResponse> {
    return this._client.post(`/sessions/${sessionId}/kill_jobs`, { body, ...options });
  }

  markErrored(
    sessionId: string,
    body: SessionMarkErroredParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSession> {
    return this._client.patch(`/sessions/${sessionId}/error`, { body, ...options });
  }

  updateNode(
    nodeId: string,
    body: SessionUpdateNodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSessionNode> {
    return this._client.patch(`/sessions/nodes/${nodeId}`, { body, ...options });
  }

  updateNodeProgress(
    nodeId: string,
    body: SessionUpdateNodeProgressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSessionNode> {
    return this._client.patch(`/sessions/nodes/${nodeId}/progress`, { body, ...options });
  }

  uploadNodeOutputData(
    nodeId: string,
    body: SessionUploadNodeOutputDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSessionNode> {
    return this._client.post(
      `/sessions/nodes/${nodeId}/output_data`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  uploadNodeVisualizationOutput(
    nodeId: string,
    body: SessionUploadNodeVisualizationOutputParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSessionNode> {
    return this._client.post(`/sessions/nodes/${nodeId}/visualization_output`, { body, ...options });
  }
}

export interface CreateWorkflowEdgeRequest {
  source_node_id: string;

  target_node_id: string;
}

export interface CreateWorkflowNodeRequest {
  code_md5_hash: string;

  docstring: string;

  function_name: string;

  output_schema?: unknown;
}

export interface CreateWorkflowSessionRequest {
  chat_session_id: string;

  workflow_schedule_id?: string | null;
}

export interface GetNodeLogsResponse {
  logs: Array<WorkflowNodeLog>;
}

/**
 * The body content of a job event
 */
export type JobEventBody =
  | JobEventBody.AgentNavigated
  | JobEventBody.AgentSearched
  | JobEventBody.AgentSaved
  | JobEventBody.AgentExited
  | JobEventBody.Failed
  | JobEventBody.Completed
  | JobEventBody.Scraped
  | JobEventBody.Custom;

export namespace JobEventBody {
  export interface AgentNavigated {
    event_type: 'agent_navigated';

    mode: 'visual' | 'text';

    url: string;
  }

  export interface AgentSearched {
    event_type: 'agent_searched';

    query: string;

    results: Array<Array<string>>;
  }

  export interface AgentSaved {
    event_type: 'agent_saved';

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a DB
     */
    kg: SharedAPI.KnowledgeGraph;

    sources: Array<string>;

    page?: number | null;

    reason?: string | null;
  }

  export interface AgentExited {
    event_type: 'agent_exited';

    reason?: string | null;
  }

  export interface Failed {
    error: string;

    event_type: 'failed';

    summary?: string | null;
  }

  export interface Completed {
    event_type: 'completed';

    message?: string | null;
  }

  export interface Scraped {
    count: number;

    event_type: 'scraped';

    page: number;

    url: string;
  }

  export interface Custom {
    data: { [key: string]: unknown };

    event_name: string;

    event_type: 'custom';
  }
}

export interface MarkWorkflowSessionErroredRequest {
  error_message: string;

  error_traceback?: string | null;
}

export interface UpdateWorkflowNodeProgressRequest {
  current: number;

  elapsed_seconds: number;

  title: string;

  total: number;
}

export interface UpdateWorkflowNodeRequest {
  execution_status: WorkflowNodeExecutionStatus;

  error_message?: string | null;

  error_traceback?: string | null;

  execution_time_ms?: number | null;
}

export interface UploadNodeVisualizationOutputRequest {
  visualization_output: { [key: string]: unknown };
}

export interface WorkflowDag {
  edges: Array<WorkflowSessionEdge>;

  is_ready: boolean;

  nodes: Array<WorkflowSessionNode>;

  session_id: string;

  dag_ready_at?: string | null;

  error?: string | null;

  error_traceback?: string | null;
}

export type WorkflowNodeExecutionStatus = 'Unexecuted' | 'Success' | 'Failure' | 'Running';

export interface WorkflowNodeLog {
  id: string;

  content: string;

  is_stderr: boolean;

  node_id: string;

  timestamp: string;
}

export interface WorkflowSession {
  id: string;

  chat_session_id: string;

  dag_ready: boolean;

  updated_at: string;

  created_at?: string | null;

  dag_ready_at?: string | null;

  error_message?: string | null;

  error_traceback?: string | null;

  workflow_schedule_id?: string | null;
}

export interface WorkflowSessionEdge {
  id: string;

  created_at: string;

  session_id: string;

  source_node_id: string;

  target_node_id: string;
}

export interface WorkflowSessionNode {
  id: string;

  code_md5_hash: string;

  docstring: string;

  execution_status: WorkflowNodeExecutionStatus;

  function_name: string;

  node_index: number;

  node_name: string;

  session_id: string;

  updated_at: string;

  created_at?: string | null;

  error_message?: string | null;

  error_traceback?: string | null;

  execution_time_ms?: number | null;

  original_node?: string | null;

  output_blob_name?: string | null;

  output_schema?: unknown;

  progress?: unknown;

  visualization_output?: unknown;
}

export interface SessionGetEventsResponse {
  count: number;

  events: Array<SessionGetEventsResponse.Event>;
}

export namespace SessionGetEventsResponse {
  /**
   * A job paired with all its associated events
   */
  export interface Event {
    id: string;

    events: Array<Event.Event>;

    run_started_time: string;

    status: 'Queued' | 'Running' | 'Completed' | 'Failed';

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a DB
     */
    seeded_kg?: SharedAPI.KnowledgeGraph | null;
  }

  export namespace Event {
    export interface Event {
      /**
       * The body content of a job event
       */
      body: SessionsAPI.JobEventBody;

      created_at: string;
    }
  }
}

export type SessionGetNodeProgressResponse = { [key: string]: SessionGetNodeProgressResponse.item };

export namespace SessionGetNodeProgressResponse {
  export interface item {
    current: number;

    elapsed_seconds: number;

    started_at: string;

    total: number;
  }
}

export interface SessionKillJobsResponse {
  killed_jobs: Array<string>;

  message: string;
}

export interface SessionCreateEdgeParams {
  source_node_id: string;

  target_node_id: string;
}

export interface SessionCreateNodeParams {
  code_md5_hash: string;

  docstring: string;

  function_name: string;

  output_schema?: unknown;
}

export interface SessionCreateSessionParams {
  chat_session_id: string;

  workflow_schedule_id?: string | null;
}

export interface SessionGetEventsParams {
  limit?: number;

  offset?: number;

  search_term?: string | null;

  status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;
}

export interface SessionKillJobsParams {
  message?: string | null;
}

export interface SessionMarkErroredParams {
  error_message: string;

  error_traceback?: string | null;
}

export interface SessionUpdateNodeParams {
  execution_status: WorkflowNodeExecutionStatus;

  error_message?: string | null;

  error_traceback?: string | null;

  execution_time_ms?: number | null;
}

export interface SessionUpdateNodeProgressParams {
  current: number;

  elapsed_seconds: number;

  title: string;

  total: number;
}

export interface SessionUploadNodeOutputDataParams {
  content: Core.Uploadable;
}

export interface SessionUploadNodeVisualizationOutputParams {
  visualization_output: { [key: string]: unknown };
}

export declare namespace Sessions {
  export {
    type CreateWorkflowEdgeRequest as CreateWorkflowEdgeRequest,
    type CreateWorkflowNodeRequest as CreateWorkflowNodeRequest,
    type CreateWorkflowSessionRequest as CreateWorkflowSessionRequest,
    type GetNodeLogsResponse as GetNodeLogsResponse,
    type JobEventBody as JobEventBody,
    type MarkWorkflowSessionErroredRequest as MarkWorkflowSessionErroredRequest,
    type UpdateWorkflowNodeProgressRequest as UpdateWorkflowNodeProgressRequest,
    type UpdateWorkflowNodeRequest as UpdateWorkflowNodeRequest,
    type UploadNodeVisualizationOutputRequest as UploadNodeVisualizationOutputRequest,
    type WorkflowDag as WorkflowDag,
    type WorkflowNodeExecutionStatus as WorkflowNodeExecutionStatus,
    type WorkflowNodeLog as WorkflowNodeLog,
    type WorkflowSession as WorkflowSession,
    type WorkflowSessionEdge as WorkflowSessionEdge,
    type WorkflowSessionNode as WorkflowSessionNode,
    type SessionGetEventsResponse as SessionGetEventsResponse,
    type SessionGetNodeProgressResponse as SessionGetNodeProgressResponse,
    type SessionKillJobsResponse as SessionKillJobsResponse,
    type SessionCreateEdgeParams as SessionCreateEdgeParams,
    type SessionCreateNodeParams as SessionCreateNodeParams,
    type SessionCreateSessionParams as SessionCreateSessionParams,
    type SessionGetEventsParams as SessionGetEventsParams,
    type SessionKillJobsParams as SessionKillJobsParams,
    type SessionMarkErroredParams as SessionMarkErroredParams,
    type SessionUpdateNodeParams as SessionUpdateNodeParams,
    type SessionUpdateNodeProgressParams as SessionUpdateNodeProgressParams,
    type SessionUploadNodeOutputDataParams as SessionUploadNodeOutputDataParams,
    type SessionUploadNodeVisualizationOutputParams as SessionUploadNodeVisualizationOutputParams,
  };
}
