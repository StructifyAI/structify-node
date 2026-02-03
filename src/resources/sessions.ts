// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionsAPI from './sessions';
import * as SharedAPI from './shared';
import { type Response } from '../_shims/index';

export class Sessions extends APIResource {
  confirmNode(
    nodeId: string,
    body: SessionConfirmNodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSessionNode> {
    return this._client.post(`/sessions/nodes/${nodeId}/confirm`, { body, ...options });
  }

  createSession(
    body: SessionCreateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSession> {
    return this._client.post('/sessions', { body, ...options });
  }

  editNodeOutput(
    nodeId: string,
    body: SessionEditNodeOutputParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/sessions/nodes/${nodeId}/edit_output`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Finalize a workflow session DAG by creating all nodes/edges and marking it as
   * ready
   */
  finalizeDag(
    sessionId: string,
    body: SessionFinalizeDagParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FinalizeDagResponse> {
    return this._client.post(`/sessions/${sessionId}/dag_ready`, { body, ...options });
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

  getNode(nodeId: string, options?: Core.RequestOptions): Core.APIPromise<GetNodeResponse> {
    return this._client.get(`/sessions/nodes/${nodeId}`, options);
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

  requestConfirmation(
    nodeId: string,
    body: SessionRequestConfirmationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSessionNode> {
    return this._client.post(`/sessions/nodes/${nodeId}/request_confirmation`, { body, ...options });
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

  uploadDashboardLayout(
    sessionId: string,
    body: SessionUploadDashboardLayoutParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowSession> {
    return this._client.post(`/sessions/${sessionId}/dashboard_layout`, { body, ...options });
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

export type AutofixContext = 'creation' | 'execution' | 'visualization';

export interface CellEdit {
  column_name: string;

  row_index: number;

  value: string;
}

export interface ConfirmNodeRequest {
  confirmed: boolean;
}

export interface CreateWorkflowSessionRequest {
  chat_session_id: string;

  workflow_schedule_id?: string | null;
}

/**
 * A page is the top-level container with title/description Can contain multiple
 * dashboards with different datasets
 */
export interface Dashboard {
  /**
   * One or more dashboards on this page
   */
  dashboards: Array<DashboardPage>;

  /**
   * Page title
   */
  title: string;

  /**
   * Optional page description
   */
  description?: string | null;
}

/**
 * A component references a viz node and optionally includes mosaic metadata
 */
export interface DashboardComponent {
  /**
   * Function name of the viz node that outputs the chart spec
   */
  node_name: string;

  /**
   * Display title (overrides viz node title)
   */
  title: string;

  /**
   * Description (optional, can override viz node's description)
   */
  description?: string | null;

  mosaic?: DashboardComponent.Mosaic | null;

  /**
   * Grid span: 1 (quarter), 2 (half), 3 (three-quarters), 4 (full width)
   */
  span?: number | null;
}

export namespace DashboardComponent {
  export interface Mosaic {
    fields: { [key: string]: string | boolean | Mosaic.UnionMember2 };

    bin?: Mosaic.Bin | null;

    groupBy?: Array<string> | null;

    limit?: number | null;

    orderBy?: string | null;

    /**
     * Table name - optional, derived from datasetNodeName in dashboard config
     */
    table?: string | null;
  }

  export namespace Mosaic {
    export interface UnionMember2 {
      expr: string;

      /**
       * Optional Plotly property path (e.g., marker.color) to assign this column to
       */
      target?: string | null;
    }

    export interface Bin {
      as: string;

      field: string;

      step: number;
    }
  }
}

/**
 * A dashboard groups components that share a common dataset. If dataset_node_name
 * is None, components render static viz without Mosaic cross-filtering.
 */
export interface DashboardPage {
  /**
   * Components (charts) in this dashboard
   */
  components: Array<DashboardComponent>;

  /**
   * Title for this dashboard section
   */
  title: string;

  /**
   * Control filters (dropdowns, checkboxes, ranges) for this dashboard
   */
  controls?: Array<DashboardPage.Dropdown | DashboardPage.Range | DashboardPage.Checkbox> | null;

  /**
   * Function name of the node that returns the dataset (DataFrame/Parquet). If None,
   * no cross-filtering is available.
   */
  datasetNodeName?: string | null;

  /**
   * Optional description
   */
  description?: string | null;
}

export namespace DashboardPage {
  export interface Dropdown {
    id: string;

    field: string;

    label: string;

    options: Array<Dropdown.Option>;

    type: 'dropdown';

    default_value?: string | null;
  }

  export namespace Dropdown {
    export interface Option {
      label: string;

      value: string;
    }
  }

  export interface Range {
    id: string;

    field: string;

    label: string;

    max: number;

    min: number;

    type: 'range';

    default_value?: Array<number> | null;

    step?: number | null;
  }

  export interface Checkbox {
    id: string;

    field: string;

    label: string;

    options: Array<Checkbox.Option>;

    type: 'checkbox';

    default_value?: Array<string> | null;
  }

  export namespace Checkbox {
    export interface Option {
      label: string;

      value: string;
    }
  }
}

export interface EdgeSpec {
  source_node_index: number;

  target_node_index: number;
}

export interface EditNodeOutputRequest {
  edits: Array<CellEdit>;
}

export interface FinalizeDagRequest {
  edges: Array<EdgeSpec>;

  nodes: Array<NodeSpec>;

  /**
   * A page is the top-level container with title/description Can contain multiple
   * dashboards with different datasets
   */
  dashboard_layout?: Dashboard | null;
}

export interface FinalizeDagResponse {
  node_ids: Array<string>;
}

export interface GetNodeLogsResponse {
  logs: Array<WorkflowNodeLog>;
}

export interface GetNodeResponse {
  node: WorkflowSessionNode;
}

/**
 * The body content of a job event
 */
export type JobEventBody =
  | JobEventBody.AgentNavigated
  | JobEventBody.AgentSearched
  | JobEventBody.AgentSaved
  | JobEventBody.AgentExited
  | JobEventBody.APINetworkCaptured
  | JobEventBody.APIJsExecuted
  | JobEventBody.DerivedProperty
  | JobEventBody.Failed
  | JobEventBody.Completed
  | JobEventBody.CacheHit
  | JobEventBody.AttemptedMatch
  | JobEventBody.DatahubPageFetched
  | JobEventBody.DatahubDatabasesCreated
  | JobEventBody.DatahubSchemasCreated
  | JobEventBody.DatahubTablesProcessed
  | JobEventBody.DatahubEmbeddingBatch
  | JobEventBody.ViewedPdfPage;

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

  export interface APINetworkCaptured {
    api_candidate_count: number;

    event_type: 'api_network_captured';

    request_count: number;

    url: string;
  }

  export interface APIJsExecuted {
    code_preview: string;

    event_type: 'api_js_executed';

    success: boolean;
  }

  export interface DerivedProperty {
    event_type: 'derived_property';

    property: string;

    value: string;
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

  export interface CacheHit {
    cached_from_job_id: string;

    event_type: 'cache_hit';

    message?: string | null;
  }

  export interface AttemptedMatch {
    candidates: Array<{ [key: string]: string | boolean | number }>;

    event_type: 'attempted_match';

    reason: string;

    target: { [key: string]: string | boolean | number };

    match_idx?: number | null;

    raw_text?: string | null;
  }

  export interface DatahubPageFetched {
    datasets_in_page: number;

    event_type: 'datahub_page_fetched';

    page_num: number;

    total_datasets: number;
  }

  export interface DatahubDatabasesCreated {
    count: number;

    event_type: 'datahub_databases_created';
  }

  export interface DatahubSchemasCreated {
    count: number;

    event_type: 'datahub_schemas_created';
  }

  export interface DatahubTablesProcessed {
    column_lineage_count: number;

    event_type: 'datahub_tables_processed';

    table_lineage_count: number;

    tables_created: number;

    tables_failed: number;

    tables_updated: number;
  }

  export interface DatahubEmbeddingBatch {
    batch_num: number;

    event_type: 'datahub_embedding_batch';

    tables_in_batch: number;

    total_batches: number;
  }

  export interface ViewedPdfPage {
    event_type: 'viewed_pdf_page';

    page_index: number;
  }
}

export interface MarkWorkflowSessionErroredRequest {
  error_message: string;

  autofix?: boolean;

  autofix_context?: AutofixContext | null;

  error_traceback?: string | null;
}

export interface NodeSpec {
  code: string;

  code_md5_hash: string;

  docstring: string;

  function_name: string;

  connector_id?: string | null;
}

export interface RequestConfirmationRequest {
  operation: 'tag' | 'pdf' | 'web' | 'match';

  row_count: number;
}

export interface UpdateWorkflowNodeProgressRequest {
  current: number;

  elapsed_seconds: number;

  title: string;

  total?: number | null;
}

export interface UpdateWorkflowNodeRequest {
  execution_status: WorkflowNodeExecutionStatus;

  error_message?: string | null;

  error_traceback?: string | null;

  execution_time_ms?: number | null;
}

export interface UploadDashboardLayoutRequest {
  /**
   * A page is the top-level container with title/description Can contain multiple
   * dashboards with different datasets
   */
  layout: Dashboard;
}

export interface UploadNodeVisualizationOutputRequest {
  visualization_output: { [key: string]: unknown };
}

export interface WorkflowDag {
  aborted: boolean;

  edges: Array<WorkflowSessionEdge>;

  is_ready: boolean;

  nodes: Array<WorkflowSessionNode>;

  session_id: string;

  dag_ready_at?: string | null;

  /**
   * A page is the top-level container with title/description Can contain multiple
   * dashboards with different datasets
   */
  dashboard_layout?: Dashboard | null;

  error?: string | null;

  error_traceback?: string | null;
}

export type WorkflowNodeExecutionStatus =
  | 'Unexecuted'
  | 'Success'
  | 'Failure'
  | 'Running'
  | 'Aborted'
  | 'PendingConfirmation';

export interface WorkflowNodeLog {
  id: string;

  content: string;

  is_stderr: boolean;

  node_id: string;

  timestamp: string;
}

export interface WorkflowSession {
  id: string;

  aborted: boolean;

  chat_session_id: string;

  dag_ready: boolean;

  updated_at: string;

  created_at?: string | null;

  dag_ready_at?: string | null;

  dashboard_layout_proto?: Core.Uploadable | null;

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

  manually_edited: boolean;

  node_index: number;

  node_name: string;

  reviewed: boolean;

  session_id: string;

  updated_at: string;

  code?: string | null;

  confirmation_status?: string | null;

  connector_id?: string | null;

  created_at?: string | null;

  error_message?: string | null;

  error_traceback?: string | null;

  estimated_cost?: number | null;

  execution_time_ms?: number | null;

  input_row_count?: number | null;

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

    total?: number | null;
  }
}

export interface SessionKillJobsResponse {
  killed_jobs: Array<string>;

  message: string;
}

export interface SessionConfirmNodeParams {
  confirmed: boolean;
}

export interface SessionCreateSessionParams {
  chat_session_id: string;

  workflow_schedule_id?: string | null;
}

export interface SessionEditNodeOutputParams {
  edits: Array<CellEdit>;
}

export interface SessionFinalizeDagParams {
  edges: Array<EdgeSpec>;

  nodes: Array<NodeSpec>;

  /**
   * A page is the top-level container with title/description Can contain multiple
   * dashboards with different datasets
   */
  dashboard_layout?: Dashboard | null;
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

  autofix?: boolean;

  autofix_context?: AutofixContext | null;

  error_traceback?: string | null;
}

export interface SessionRequestConfirmationParams {
  operation: 'tag' | 'pdf' | 'web' | 'match';

  row_count: number;
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

  total?: number | null;
}

export interface SessionUploadDashboardLayoutParams {
  /**
   * A page is the top-level container with title/description Can contain multiple
   * dashboards with different datasets
   */
  layout: Dashboard;
}

export interface SessionUploadNodeOutputDataParams {
  content: Core.Uploadable;

  output_schema?: string | null;
}

export interface SessionUploadNodeVisualizationOutputParams {
  visualization_output: { [key: string]: unknown };
}

export declare namespace Sessions {
  export {
    type AutofixContext as AutofixContext,
    type CellEdit as CellEdit,
    type ConfirmNodeRequest as ConfirmNodeRequest,
    type CreateWorkflowSessionRequest as CreateWorkflowSessionRequest,
    type Dashboard as Dashboard,
    type DashboardComponent as DashboardComponent,
    type DashboardPage as DashboardPage,
    type EdgeSpec as EdgeSpec,
    type EditNodeOutputRequest as EditNodeOutputRequest,
    type FinalizeDagRequest as FinalizeDagRequest,
    type FinalizeDagResponse as FinalizeDagResponse,
    type GetNodeLogsResponse as GetNodeLogsResponse,
    type GetNodeResponse as GetNodeResponse,
    type JobEventBody as JobEventBody,
    type MarkWorkflowSessionErroredRequest as MarkWorkflowSessionErroredRequest,
    type NodeSpec as NodeSpec,
    type RequestConfirmationRequest as RequestConfirmationRequest,
    type UpdateWorkflowNodeProgressRequest as UpdateWorkflowNodeProgressRequest,
    type UpdateWorkflowNodeRequest as UpdateWorkflowNodeRequest,
    type UploadDashboardLayoutRequest as UploadDashboardLayoutRequest,
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
    type SessionConfirmNodeParams as SessionConfirmNodeParams,
    type SessionCreateSessionParams as SessionCreateSessionParams,
    type SessionEditNodeOutputParams as SessionEditNodeOutputParams,
    type SessionFinalizeDagParams as SessionFinalizeDagParams,
    type SessionGetEventsParams as SessionGetEventsParams,
    type SessionKillJobsParams as SessionKillJobsParams,
    type SessionMarkErroredParams as SessionMarkErroredParams,
    type SessionRequestConfirmationParams as SessionRequestConfirmationParams,
    type SessionUpdateNodeParams as SessionUpdateNodeParams,
    type SessionUpdateNodeProgressParams as SessionUpdateNodeProgressParams,
    type SessionUploadDashboardLayoutParams as SessionUploadDashboardLayoutParams,
    type SessionUploadNodeOutputDataParams as SessionUploadNodeOutputDataParams,
    type SessionUploadNodeVisualizationOutputParams as SessionUploadNodeVisualizationOutputParams,
  };
}
