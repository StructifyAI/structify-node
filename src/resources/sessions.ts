// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SourcesAPI from './sources';

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

  getDag(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<GetWorkflowDagResponse> {
    return this._client.get(`/sessions/${sessionId}/dag`, options);
  }

  /**
   * Get events from all jobs in a session's event queue (without removing them).
   */
  getEvents(
    sessionId: string,
    query?: SessionGetEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetSessionEventsResponse>;
  getEvents(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<GetSessionEventsResponse>;
  getEvents(
    sessionId: string,
    query: SessionGetEventsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetSessionEventsResponse> {
    if (isRequestOptions(query)) {
      return this.getEvents(sessionId, {}, query);
    }
    return this._client.get(`/sessions/${sessionId}/events`, { query, ...options });
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
}

export interface CreateWorkflowEdgeRequest {
  source_node_id: string;

  target_node_id: string;
}

export interface CreateWorkflowNodeRequest {
  docstring: string;

  function_name: string;

  output_schema?: unknown;
}

export interface CreateWorkflowSessionRequest {
  chat_session_id: string;
}

export interface GetSessionEventsResponse {
  count: number;

  events: Array<GetSessionEventsResponse.Event>;
}

export namespace GetSessionEventsResponse {
  export interface Event {
    id: string;

    body: { [key: string]: unknown };

    job_id: string;

    created_at?: string | null;

    node_id?: string | null;
  }
}

export interface GetWorkflowDagResponse {
  edges: Array<WorkflowSessionEdge>;

  nodes: Array<WorkflowSessionNode>;

  session_id: string;

  error?: string | null;

  error_traceback?: string | null;
}

/**
 * The body content of a job event
 */
export type JobEventBody =
  | JobEventBody.AgentNavigated
  | JobEventBody.AgentSearched
  | JobEventBody.AgentSaved
  | JobEventBody.Completed
  | JobEventBody.Scraped
  | JobEventBody.Custom;

export namespace JobEventBody {
  export interface AgentNavigated {
    event_type: 'agent_navigated';

    url: string;
  }

  export interface AgentSearched {
    event_type: 'agent_searched';

    query: string;
  }

  export interface AgentSaved {
    event_type: 'agent_saved';

    n_entities: number;

    n_relationships: number;

    url: SourcesAPI.Source;
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

export interface UpdateWorkflowNodeRequest {
  execution_status: WorkflowNodeExecutionStatus;

  error_message?: string | null;

  error_traceback?: string | null;

  execution_time_ms?: number | null;

  output_data?: unknown;
}

export type WorkflowNodeExecutionStatus = 'Unexecuted' | 'Success' | 'Failure' | 'Running';

export interface WorkflowSession {
  id: string;

  chat_session_id: string;

  updated_at: string;

  created_at?: string | null;

  error_message?: string | null;

  error_traceback?: string | null;
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

  output_data?: unknown;

  output_schema?: unknown;
}

export interface SessionCreateEdgeParams {
  source_node_id: string;

  target_node_id: string;
}

export interface SessionCreateNodeParams {
  docstring: string;

  function_name: string;

  output_schema?: unknown;
}

export interface SessionCreateSessionParams {
  chat_session_id: string;
}

export interface SessionGetEventsParams {
  /**
   * Maximum number of events to fetch (default: 100).
   */
  limit?: number | null;
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

  output_data?: unknown;
}

export declare namespace Sessions {
  export {
    type CreateWorkflowEdgeRequest as CreateWorkflowEdgeRequest,
    type CreateWorkflowNodeRequest as CreateWorkflowNodeRequest,
    type CreateWorkflowSessionRequest as CreateWorkflowSessionRequest,
    type GetSessionEventsResponse as GetSessionEventsResponse,
    type GetWorkflowDagResponse as GetWorkflowDagResponse,
    type JobEventBody as JobEventBody,
    type MarkWorkflowSessionErroredRequest as MarkWorkflowSessionErroredRequest,
    type UpdateWorkflowNodeRequest as UpdateWorkflowNodeRequest,
    type WorkflowNodeExecutionStatus as WorkflowNodeExecutionStatus,
    type WorkflowSession as WorkflowSession,
    type WorkflowSessionEdge as WorkflowSessionEdge,
    type WorkflowSessionNode as WorkflowSessionNode,
    type SessionCreateEdgeParams as SessionCreateEdgeParams,
    type SessionCreateNodeParams as SessionCreateNodeParams,
    type SessionCreateSessionParams as SessionCreateSessionParams,
    type SessionGetEventsParams as SessionGetEventsParams,
    type SessionMarkErroredParams as SessionMarkErroredParams,
    type SessionUpdateNodeParams as SessionUpdateNodeParams,
  };
}
