// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ChatAPI from './chat';
import * as SessionsAPI from './sessions';
import * as SharedAPI from './shared';
import * as StructureAPI from './structure';
import { type Response } from '../_shims/index';

export class Chat extends APIResource {
  addCollaborator(
    chatId: string,
    body: ChatAddCollaboratorParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/chat/sessions/${chatId}/collaborators`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Add a git commit to a chat session
   */
  addGitCommit(
    sessionId: string,
    body: ChatAddGitCommitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatAddGitCommitResponse> {
    return this._client.post(`/chat/sessions/${sessionId}/commits`, { body, ...options });
  }

  /**
   * Add an IssueFound tool call as an admin-only auto-review message
   */
  adminIssueFound(
    chatId: string,
    body: ChatAdminIssueFoundParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminIssueFoundResponse> {
    return this._client.post(`/chat/sessions/${chatId}/admin/issue_found`, { body, ...options });
  }

  /**
   * Copy a chat session with its workflows and git files
   */
  copy(body: ChatCopyParams, options?: Core.RequestOptions): Core.APIPromise<ChatSessionWithMessages> {
    return this._client.post('/chat/copy', { body, ...options });
  }

  copyNodeOutputByCodeHash(
    sessionId: string,
    body: ChatCopyNodeOutputByCodeHashParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post(`/chat/sessions/${sessionId}/nodes/by_code_hash`, { body, ...options });
  }

  /**
   * Create a new chat session with an initial message
   */
  createSession(
    body: ChatCreateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateChatSessionResponse> {
    return this._client.post('/chat/sessions', { body, ...options });
  }

  /**
   * Delete input files from a chat session
   */
  deleteInputFile(
    chatId: string,
    body: ChatDeleteInputFileParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatDeleteInputFileResponse> {
    return this._client.post(`/chat/input-files/delete/${chatId}`, { body, ...options });
  }

  /**
   * Delete a chat session
   */
  deleteSession(
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeleteChatSessionResponse> {
    return this._client.delete(`/chat/sessions/${sessionId}`, options);
  }

  /**
   * Get all dependencies for a chat session
   */
  getDependencies(
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetDependenciesResponse> {
    return this._client.get(`/chat/sessions/${sessionId}/dependencies`, options);
  }

  /**
   * Get a specific git commit by its hash for a chat session
   */
  getGitCommit(
    chatId: string,
    commitHash: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatGetGitCommitResponse> {
    return this._client.get(`/chat/sessions/${chatId}/commits/${commitHash}`, options);
  }

  /**
   * Get all partial chats for a chat session
   */
  getPartialChats(
    chatSessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatGetPartialChatsResponse> {
    return this._client.get(`/chat/${chatSessionId}/partial-chats`, options);
  }

  /**
   * Get a chat session with all its messages
   */
  getSession(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<GetChatSessionResponse> {
    return this._client.get(`/chat/sessions/${sessionId}`, options);
  }

  /**
   * Get chronological timeline of messages and commits for a chat session
   */
  getSessionTimeline(
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatGetSessionTimelineResponse> {
    return this._client.get(`/chat/sessions/${sessionId}/timeline`, options);
  }

  /**
   * Grant temporary admin override access for the calling admin to a chat session
   */
  grantAdminOverride(
    chatId: string,
    body: ChatGrantAdminOverrideParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminGrantAccessResponse> {
    return this._client.post(`/chat/sessions/${chatId}/admin_override`, { body, ...options });
  }

  /**
   * List all users who have access to a chat session
   */
  listCollaborators(
    chatId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListCollaboratorsResponse> {
    return this._client.get(`/chat/sessions/${chatId}/collaborators`, options);
  }

  /**
   * List input files for a chat session
   */
  listInputFiles(chatId: string, options?: Core.RequestOptions): Core.APIPromise<ChatListInputFilesResponse> {
    return this._client.get(`/chat/input-files/list/${chatId}`, options);
  }

  /**
   * List all chat sessions for the authenticated user within a specific team and
   * project.
   */
  listSessions(
    query: ChatListSessionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListChatSessionsResponse> {
    return this._client.get('/chat/sessions', { query, ...options });
  }

  /**
   * List active chat templates for the /chat page
   */
  listTemplates(options?: Core.RequestOptions): Core.APIPromise<ChatListTemplatesResponse> {
    return this._client.get('/chat/templates', options);
  }

  /**
   * Load files from a chat session's git repository
   */
  loadFiles(
    body: ChatLoadFilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatLoadFilesResponse> {
    return this._client.post('/chat/files/load', { body, ...options });
  }

  /**
   * Download a single input file by chat ID and filename
   */
  loadInputFile(chatId: string, filename: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/chat/input-files/download/${chatId}/${filename}`, {
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * Pass `since` query param (RFC 3339 timestamp) to only get files created/updated
   * after that time. The response includes `latest_timestamp` which can be passed as
   * `since` on the next call.
   */
  loadInputFiles(
    chatId: string,
    query?: ChatLoadInputFilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatLoadInputFilesResponse>;
  loadInputFiles(chatId: string, options?: Core.RequestOptions): Core.APIPromise<ChatLoadInputFilesResponse>;
  loadInputFiles(
    chatId: string,
    query: ChatLoadInputFilesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatLoadInputFilesResponse> {
    if (isRequestOptions(query)) {
      return this.loadInputFiles(chatId, {}, query);
    }
    return this._client.get(`/chat/input-files/download-all/${chatId}`, { query, ...options });
  }

  /**
   * Make an ephemeral chat session permanent
   */
  makePermanent(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.patch(`/chat/sessions/${sessionId}/make-permanent`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  removeCollaborator(chatId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/chat/sessions/${chatId}/collaborators/${userId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Revert a chat session to a specific commit
   */
  revertToCommit(
    sessionId: string,
    body: ChatRevertToCommitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatRevertToCommitResponse> {
    return this._client.post(`/chat/sessions/${sessionId}/revert`, { body, ...options });
  }

  updateSession(
    sessionId: string,
    body: ChatUpdateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatSession> {
    return this._client.patch(`/chat/sessions/${sessionId}`, { body, ...options });
  }

  updateSessionFavorite(
    sessionId: string,
    body: ChatUpdateSessionFavoriteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatSession> {
    return this._client.patch(`/chat/sessions/${sessionId}/favorite`, { body, ...options });
  }

  /**
   * Update visibility of a chat session
   */
  updateVisibility(
    sessionId: string,
    body: ChatUpdateVisibilityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateVisibilityResponse> {
    return this._client.put(`/chat/sessions/${sessionId}/visibility`, { body, ...options });
  }

  /**
   * Upload an input file to a chat session's bucket storage
   */
  uploadInputFile(
    chatId: string,
    body: ChatUploadInputFileParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatUploadInputFileResponse> {
    return this._client.post(
      `/chat/input-files/upload/${chatId}`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface AddCollaboratorRequest {
  email: string;

  role: ChatSessionRole;
}

/**
 * Response for granting temporary admin access
 */
export interface AdminGrantAccessResponse {
  expires_at: string;

  role: ChatSessionRole;
}

export interface AdminIssueFoundRequest {
  message: string;

  title: string;
}

export interface AdminIssueFoundResponse {
  message_id: string;
}

/**
 * A chat session dependency
 */
export interface ChatDependency {
  /**
   * Name of the Python package
   */
  package_name: string;

  /**
   * Optional version specifier (e.g., ">=1.0.0", "==2.0.0")
   */
  version_spec?: string | null;
}

/**
 * Events in a chat session timeline, including messages and unified tool
 * calls/results
 */
export type ChatEvent =
  | ChatEvent.TextMessage
  | ChatEvent.Thinking
  | ChatEvent.File
  | ChatEvent.Action
  | ChatEvent.Connector
  | ChatEvent.ToolCall
  | ChatEvent.Question
  | ChatEvent.InternalError
  | ChatEvent.ReviewRequest
  | ChatEvent.AttachedFile
  | ChatEvent.ConnectorRequest
  | ChatEvent.UserInterrupted
  | ChatEvent.IssueFound;

export namespace ChatEvent {
  export interface TextMessage {
    TextMessage: TextMessage.TextMessage;
  }

  export namespace TextMessage {
    export interface TextMessage {
      message: string;
    }
  }

  export interface Thinking {
    Thinking: Thinking.Thinking;
  }

  export namespace Thinking {
    export interface Thinking {
      block_id: number;

      complete: boolean;

      content: string;
    }
  }

  export interface File {
    /**
     * The file event can't be serialized to the database safely without the content.
     * When streaming, we start with the path only, then add the content as we go.
     */
    File: File.File;
  }

  export namespace File {
    /**
     * The file event can't be serialized to the database safely without the content.
     * When streaming, we start with the path only, then add the content as we go.
     */
    export interface File {
      block_id: number;

      complete: boolean;

      path: string;

      content?: string | null;
    }
  }

  export interface Action {
    Action: Action.Action;
  }

  export namespace Action {
    export interface Action {
      actions: Array<Action.Action>;

      block_id: number;

      complete: boolean;
    }

    export namespace Action {
      /**
       * Action definition
       */
      export interface Action {
        description: string;

        name: string;
      }
    }
  }

  export interface Connector {
    Connector: Connector.Connector;
  }

  export namespace Connector {
    export interface Connector {
      env_vars: Array<string>;

      name: string;

      description?: string | null;
    }
  }

  export interface ToolCall {
    ToolCall: ToolCall.ToolCall;
  }

  export namespace ToolCall {
    export interface ToolCall {
      block_id: number;

      complete: boolean;

      invocation: ChatAPI.ToolInvocation;

      tool_result: ChatAPI.ToolResult;
    }
  }

  export interface Question {
    Question: Question.Question;
  }

  export namespace Question {
    export interface Question {
      block_id: number;

      complete: boolean;

      content: string;

      options: Array<string>;
    }
  }

  export interface InternalError {
    InternalError: InternalError.InternalError;
  }

  export namespace InternalError {
    export interface InternalError {
      message: string;
    }
  }

  export interface ReviewRequest {
    ReviewRequest: ReviewRequest.ReviewRequest;
  }

  export namespace ReviewRequest {
    export interface ReviewRequest {
      node_summaries: Array<ReviewRequest.NodeSummary>;
    }

    export namespace ReviewRequest {
      export interface NodeSummary {
        in_dashboard: boolean;

        name: string;

        data_preview?: string | null;

        image?: Core.Uploadable | null;
      }
    }
  }

  export interface AttachedFile {
    AttachedFile: AttachedFile.AttachedFile;
  }

  export namespace AttachedFile {
    export interface AttachedFile {
      path: string;

      image_bytes?: Core.Uploadable | null;
    }
  }

  export interface ConnectorRequest {
    ConnectorRequest: ConnectorRequest.ConnectorRequest;
  }

  export namespace ConnectorRequest {
    export interface ConnectorRequest {
      connector_id: string;
    }
  }

  export interface UserInterrupted {
    UserInterrupted: unknown;
  }

  export interface IssueFound {
    IssueFound: IssueFound.IssueFound;
  }

  export namespace IssueFound {
    export interface IssueFound {
      admin_override: boolean;

      description: string;

      title: string;
    }
  }
}

export interface ChatSession {
  id: string;

  created_at: string;

  ephemeral: boolean;

  git_application_token: string;

  review_required: boolean;

  skip_confirmations: boolean;

  slack_completion_notified: boolean;

  team_id: string;

  teams_completion_notified: boolean;

  updated_at: string;

  user_message_needed: boolean;

  visibility: ChatVisibility;

  config_proto?: Core.Uploadable | null;

  message_head?: string | null;

  name?: string | null;

  project_id?: string | null;

  slack_channel_id?: string | null;

  slack_team_id?: string | null;

  slack_thread_ts?: string | null;

  teams_channel_id?: string | null;

  teams_conversation_id?: string | null;

  teams_tenant_id?: string | null;
}

export type ChatSessionRole = 'viewer' | 'editor' | 'owner';

export interface ChatSessionUser {
  id: string;

  chat_session_id: string;

  created_at: string;

  is_favorite: boolean;

  role: ChatSessionRole;

  updated_at: string;

  user_id: string;
}

export interface ChatSessionWithMessages {
  id: string;

  commits: Array<ChatSessionWithMessages.Commit>;

  created_at: string;

  git_application_token: string;

  is_favorite: boolean;

  messages: Array<ChatSessionWithMessages.Message>;

  skip_confirmations: boolean;

  team_id: string;

  updated_at: string;

  user_message_needed: boolean;

  user_role: ChatSessionRole;

  visibility: ChatVisibility;

  latest_workflow_session_id?: string | null;

  message_head?: string | null;

  name?: string | null;

  project_id?: string | null;

  slack_channel_id?: string | null;

  slack_team_id?: string | null;

  slack_thread_ts?: string | null;

  teams_channel_id?: string | null;

  teams_conversation_id?: string | null;

  teams_tenant_id?: string | null;
}

export namespace ChatSessionWithMessages {
  export interface Commit {
    id: string;

    chat_session_id: string;

    commit_hash: string;

    created_at: string;
  }

  export interface Message {
    id: string;

    chat_session_id: string;

    content: string;

    created_at: string;

    role: string;

    timestamp: string;

    content_proto?: Core.Uploadable | null;

    git_hash?: string | null;

    previous_message_id?: string | null;

    slack_channel_id?: string | null;

    slack_message_ts?: string | null;

    slack_thread_ts?: string | null;

    stream_chunks?: Array<Message.StreamChunk> | null;

    teams_channel_id?: string | null;

    teams_conversation_id?: string | null;

    teams_message_id?: string | null;
  }

  export namespace Message {
    /**
     * Entry for stream chunk logging - stored as JSONB array on chat_message
     */
    export interface StreamChunk {
      chunk_type: string;

      content: string;
    }
  }
}

export interface ChatTemplate {
  id: string;

  chat_session_id: string;

  created_at: string;

  created_by: string;

  description: string;

  display_order: number;

  image_url: string;

  is_active: boolean;

  title: string;

  updated_at: string;

  updated_by: string;
}

export type ChatVisibility = 'private' | 'shared_with_team' | 'shared_with_team_view' | 'public';

export interface CopyChatSessionRequest {
  copy_name: string;

  source_chat_id: string;

  team_id: string;

  copy_inputs?: boolean;

  project_id?: string | null;
}

export interface CreateChatSessionRequest {
  team_id: string;

  /**
   * Configuration for chat session with system prompt and LLM key
   */
  config?: CreateChatSessionRequest.Config | null;

  ephemeral?: boolean | null;

  project_id?: string | null;
}

export namespace CreateChatSessionRequest {
  /**
   * Configuration for chat session with system prompt and LLM key
   */
  export interface Config {
    is_onboarding_session: boolean;

    /**
     * LLM model keys available in the system. Format: <provider>.<model-name>
     */
    llm_key?:
      | 'vllm.gpt-5-mini-2025-08-07'
      | 'vllm.gpt-4.1-mini-2025-04-14'
      | 'vllm.gpt-5-nano-2025-08-07'
      | 'vllm.gpt-5-2025-08-07'
      | 'vllm.ft:gpt-4o-2024-08-06:structify::ADrF00Gq'
      | 'vllm.ft:gpt-4o-mini-2024-07-18:structify::ABCLHTsN'
      | 'vllm.action'
      | 'vllm.dora'
      | 'vllm.boring_dora'
      | 'vllm.claude-3-7-sonnet-20250219'
      | 'vllm.claude-sonnet-4-20250514'
      | 'vllm.qwen-3-coder-480b'
      | 'test_llm.test'
      | 'bedrock.claude-sonnet-4-bedrock'
      | 'bedrock.claude-sonnet-4-5-bedrock'
      | 'bedrock.claude-opus-4-5-bedrock'
      | 'bedrock.claude-opus-4-6-bedrock'
      | 'bedrock.claude-haiku-4-5-bedrock'
      | 'gemini.gemini-2.5-pro'
      | 'gemini.gemini-2.5-flash'
      | 'gemini.gemini-3-pro-preview'
      | 'gemini.gemini-3-flash-preview'
      | 'vertex_anthropic.claude-sonnet-4-5-vertex'
      | null;

    max_steps?: number | null;

    reminder_message?: string | null;

    system_prompt?: string | null;
  }
}

/**
 * Response for creating a chat session
 */
export interface CreateChatSessionResponse {
  session: ChatSessionWithMessages;
}

/**
 * Success response for delete operations
 */
export interface DeleteChatSessionResponse {
  message: string;

  success: boolean;
}

/**
 * Standard error response
 */
export interface ErrorResponse {
  error: string;
}

/**
 * Response for getting a chat session
 */
export interface GetChatSessionResponse {
  session: GetChatSessionResponse.Session;
}

export namespace GetChatSessionResponse {
  export interface Session {
    id: string;

    commits: Array<Session.Commit>;

    created_at: string;

    git_application_token: string;

    is_favorite: boolean;

    messages: Array<Session.Message>;

    team_id: string;

    title: string;

    updated_at: string;

    user_message_needed: boolean;

    user_role: ChatAPI.ChatSessionRole;

    visibility: ChatAPI.ChatVisibility;

    workflow_sessions: Array<SessionsAPI.WorkflowSession>;

    latest_workflow_session_id?: string | null;

    message_head?: string | null;

    name?: string | null;

    project_id?: string | null;

    slack_channel_id?: string | null;

    slack_team_id?: string | null;

    slack_thread_ts?: string | null;

    teams_channel_id?: string | null;

    teams_conversation_id?: string | null;

    teams_tenant_id?: string | null;

    workflow_schedule_id?: string | null;
  }

  export namespace Session {
    export interface Commit {
      id: string;

      chat_session_id: string;

      commit_hash: string;

      created_at: string;
    }

    /**
     * Model-layer message representation - streamlined for LLM transmission
     */
    export interface Message {
      /**
       * Events in a chat session timeline, including messages and unified tool
       * calls/results
       */
      content: ChatAPI.ChatEvent;

      message_id: string;

      role: 'user' | 'system' | 'assistant';

      timestamp: string;

      git_hash?: string | null;

      previous_message_id?: string | null;
    }
  }
}

/**
 * Response structure for getting chat dependencies
 */
export interface GetDependenciesResponse {
  /**
   * List of dependencies for the chat session
   */
  dependencies: Array<ChatDependency>;
}

export interface GrantAdminAccessRequest {
  /**
   * Duration in hours for the temporary access
   */
  duration_hours: number;

  role: ChatSessionRole;
}

/**
 * Response for listing chat sessions
 */
export interface ListChatSessionsResponse {
  sessions: Array<ListChatSessionsResponse.Session>;
}

export namespace ListChatSessionsResponse {
  export interface Session {
    id: string;

    created_at: string;

    is_favorite: boolean;

    team_id: string;

    title: string;

    updated_at: string;

    user_role: ChatAPI.ChatSessionRole;

    visibility: ChatAPI.ChatVisibility;

    name?: string | null;

    owner_email?: string | null;

    project_id?: string | null;

    slack_channel_id?: string | null;

    teams_channel_id?: string | null;

    teams_conversation_id?: string | null;
  }
}

/**
 * Response for listing collaborators
 */
export interface ListCollaboratorsResponse {
  users: Array<ListCollaboratorsResponse.User>;
}

export namespace ListCollaboratorsResponse {
  /**
   * DTO for chat collaborator with user email information
   */
  export interface User {
    created_at: string;

    email: string;

    role: ChatAPI.ChatSessionRole;

    updated_at: string;

    user_id: string;
  }
}

/**
 * Our generic definition of a message to a chat agent.
 */
export interface Message {
  /**
   * We want this to be a vec of contents so we can accurately capture an
   * interleaving of images and text.
   *
   * This is meant to be a completely raw, unprocessed representation of the text.
   * Don't take stuff out.
   */
  content: Array<Message.Text | Message.Image>;

  role: 'user' | 'system' | 'assistant';
}

export namespace Message {
  export interface Text {
    Text: string;
  }

  export interface Image {
    Image: Core.Uploadable;
  }
}

export type ToolInvocation =
  | ToolInvocation.WebSearch
  | ToolInvocation.WebNavigate
  | ToolInvocation.ViewPage
  | ToolInvocation.Save
  | ToolInvocation.SaveEntities
  | ToolInvocation.Exit
  | ToolInvocation.APIExecute
  | ToolInvocation.Javascript
  | ToolInvocation.NavigateToIFrame
  | ToolInvocation.InfiniteScroll
  | ToolInvocation.InspectStep
  | ToolInvocation.ReadNodeLogs
  | ToolInvocation.DeleteFile
  | ToolInvocation.MoveFile
  | ToolInvocation.RunBash
  | ToolInvocation.RunPython
  | ToolInvocation.IssueFound
  | ToolInvocation.SaveDatabase
  | ToolInvocation.SaveSchema
  | ToolInvocation.SaveTable
  | ToolInvocation.SaveColumn
  | ToolInvocation.SaveAPIResource
  | ToolInvocation.SaveMemory
  | ToolInvocation.SearchConnectorTables
  | ToolInvocation.RequestClarification
  | ToolInvocation.AddDependency
  | ToolInvocation.SelectData
  | ToolInvocation.CreateConnector
  | ToolInvocation.SearchConnectorTypes
  | ToolInvocation.PinPreviousTool;

export namespace ToolInvocation {
  export interface WebSearch {
    input: WebSearch.Input;

    name: 'WebSearch';
  }

  export namespace WebSearch {
    export interface Input {
      query: string;
    }
  }

  export interface WebNavigate {
    input: WebNavigate.Input;

    name: 'WebNavigate';
  }

  export namespace WebNavigate {
    export interface Input {
      url: string;

      output_format?: 'Text' | 'Visual' | null;
    }
  }

  export interface ViewPage {
    input: ViewPage.Input;

    name: 'ViewPage';
  }

  export namespace ViewPage {
    export interface Input {
      page_number: number;
    }
  }

  export interface Save {
    input: Save.Input;

    name: 'Save';
  }

  export namespace Save {
    export interface Input {
      /**
       * Knowledge graph info structured to deserialize and display in the same format
       * that the LLM outputs. Also the first representation of an LLM output in the
       * pipeline from raw tool output to being merged into a DB
       */
      knowledge_graph: SharedAPI.KnowledgeGraph;

      reason: string;

      sources: Array<string>;
    }
  }

  export interface SaveEntities {
    input: SaveEntities.Input;

    name: 'SaveEntities';
  }

  export namespace SaveEntities {
    export interface Input {
      entities: Array<{ [key: string]: { [key: string]: unknown } }>;

      reason: string;

      sources: Array<string>;
    }
  }

  export interface Exit {
    input: Exit.Input;

    name: 'Exit';
  }

  export namespace Exit {
    export interface Input {
      reason: string;
    }
  }

  export interface APIExecute {
    input: APIExecute.Input;

    name: 'ApiExecute';
  }

  export namespace APIExecute {
    export interface Input {
      code: string;
    }
  }

  export interface Javascript {
    input: Javascript.Input;

    name: 'Javascript';
  }

  export namespace Javascript {
    export interface Input {
      code: string;
    }
  }

  export interface NavigateToIFrame {
    input: NavigateToIFrame.Input;

    name: 'NavigateToIFrame';
  }

  export namespace NavigateToIFrame {
    export interface Input {
      index: number;
    }
  }

  export interface InfiniteScroll {
    input: unknown;

    name: 'InfiniteScroll';
  }

  export interface InspectStep {
    input: InspectStep.Input;

    name: 'InspectStep';
  }

  export namespace InspectStep {
    export interface Input {
      step_name: string;
    }
  }

  export interface ReadNodeLogs {
    input: ReadNodeLogs.Input;

    name: 'ReadNodeLogs';
  }

  export namespace ReadNodeLogs {
    export interface Input {
      end_line: number;

      node_function_name: string;

      start_line: number;

      log_type?: string | null;
    }
  }

  export interface DeleteFile {
    input: DeleteFile.Input;

    name: 'DeleteFile';
  }

  export namespace DeleteFile {
    export interface Input {
      file: string;
    }
  }

  export interface MoveFile {
    input: MoveFile.Input;

    name: 'MoveFile';
  }

  export namespace MoveFile {
    export interface Input {
      file: string;

      new_path: string;
    }
  }

  export interface RunBash {
    input: RunBash.Input;

    name: 'RunBash';
  }

  export namespace RunBash {
    export interface Input {
      command: string;

      connector?: string | null;

      working_dir?: string | null;
    }
  }

  export interface RunPython {
    input: RunPython.Input;

    name: 'RunPython';
  }

  export namespace RunPython {
    export interface Input {
      code: string;

      connector?: string | null;

      timeout_seconds?: number | null;

      working_dir?: string | null;
    }
  }

  export interface IssueFound {
    input: IssueFound.Input;

    name: 'IssueFound';
  }

  export namespace IssueFound {
    export interface Input {
      admin_override: boolean;

      description: string;

      title: string;
    }
  }

  export interface SaveDatabase {
    input: SaveDatabase.Input;

    name: 'SaveDatabase';
  }

  export namespace SaveDatabase {
    export interface Input {
      name: string;

      description?: string | null;

      notes?: string | null;
    }
  }

  export interface SaveSchema {
    input: SaveSchema.Input;

    name: 'SaveSchema';
  }

  export namespace SaveSchema {
    export interface Input {
      name: string;

      description?: string | null;

      notes?: string | null;
    }
  }

  export interface SaveTable {
    input: SaveTable.Input;

    name: 'SaveTable';
  }

  export namespace SaveTable {
    export interface Input {
      name: string;

      description?: string | null;

      notes?: string | null;

      tag?: string | null;
    }
  }

  export interface SaveColumn {
    input: SaveColumn.Input;

    name: 'SaveColumn';
  }

  export namespace SaveColumn {
    export interface Input {
      column_name: string;

      column_type: string;

      notes?: string | null;
    }
  }

  export interface SaveAPIResource {
    input: SaveAPIResource.Input;

    name: 'SaveApiResource';
  }

  export namespace SaveAPIResource {
    export interface Input {
      endpoint: string;

      name: string;

      description?: string | null;

      notes?: string | null;
    }
  }

  export interface SaveMemory {
    input: SaveMemory.Input;

    name: 'SaveMemory';
  }

  export namespace SaveMemory {
    export interface Input {
      key: string;

      value: string;
    }
  }

  export interface SearchConnectorTables {
    input: SearchConnectorTables.Input;

    name: 'SearchConnectorTables';
  }

  export namespace SearchConnectorTables {
    export interface Input {
      query: string;

      wiki_tag?: string | null;
    }
  }

  export interface RequestClarification {
    input: RequestClarification.Input;

    name: 'RequestClarification';
  }

  export namespace RequestClarification {
    export interface Input {
      question: string;

      table_name: string;

      column_name?: string | null;
    }
  }

  export interface AddDependency {
    input: AddDependency.Input;

    name: 'AddDependency';
  }

  export namespace AddDependency {
    export interface Input {
      package_name: string;

      version_spec?: string | null;
    }
  }

  export interface SelectData {
    input: SelectData.Input;

    name: 'SelectData';
  }

  export namespace SelectData {
    export interface Input {
      node_ids: Array<string>;
    }
  }

  export interface CreateConnector {
    input: CreateConnector.Input;

    name: 'CreateConnector';
  }

  export namespace CreateConnector {
    export interface Input {
      connector_type: string;

      name: string;

      description?: string | null;

      secrets?: Array<string>;
    }
  }

  export interface SearchConnectorTypes {
    input: SearchConnectorTypes.Input;

    name: 'SearchConnectorTypes';
  }

  export namespace SearchConnectorTypes {
    export interface Input {
      query?: string | null;
    }
  }

  export interface PinPreviousTool {
    input: PinPreviousTool.Input;

    name: 'PinPreviousTool';
  }

  export namespace PinPreviousTool {
    export interface Input {
      path: string;
    }
  }
}

export type ToolResult =
  | 'Pending'
  | 'NoResult'
  | 'Completed'
  | ToolResult.Error
  | ToolResult.Text
  | ToolResult.CodeExecution
  | ToolResult.WebMarkdown
  | ToolResult.WebSearch
  | ToolResult.ConnectorSearch
  | ToolResult.NodeLogs
  | ToolResult.Image
  | ToolResult.Pinned;

export namespace ToolResult {
  export interface Error {
    Error: string;
  }

  export interface Text {
    Text: string;
  }

  export interface CodeExecution {
    CodeExecution: CodeExecution.CodeExecution;
  }

  export namespace CodeExecution {
    export interface CodeExecution {
      return_code: number;

      stderr: string;

      stdout: string;
    }
  }

  export interface WebMarkdown {
    WebMarkdown: string;
  }

  export interface WebSearch {
    WebSearch: Array<WebSearch.WebSearch>;
  }

  export namespace WebSearch {
    export interface WebSearch {
      snippet: string;

      title: string;

      url: string;
    }
  }

  export interface ConnectorSearch {
    ConnectorSearch: Array<ConnectorSearch.ConnectorSearch>;
  }

  export namespace ConnectorSearch {
    export interface ConnectorSearch {
      columns: Array<ConnectorSearch.Column>;

      database: string;

      schema: string;

      table_name: string;

      description?: string | null;

      notes?: string | null;
    }

    export namespace ConnectorSearch {
      export interface Column {
        name: string;

        type: string;

        notes?: string | null;
      }
    }
  }

  export interface NodeLogs {
    NodeLogs: Array<string>;
  }

  export interface Image {
    Image: Image.Image;
  }

  export namespace Image {
    export interface Image {
      image_bytes: Core.Uploadable;

      ocr_text?: string | null;
    }
  }

  export interface Pinned {
    Pinned: string;
  }
}

export interface UpdateChatSessionFavoriteRequest {
  is_favorite: boolean;
}

export interface UpdateChatSessionRequest {
  message_head?: string | null;

  name?: string | null;

  project_id?: string | null;

  skip_confirmations?: boolean | null;
}

export interface UpdateVisibilityRequest {
  visibility: ChatVisibility;
}

export interface UpdateVisibilityResponse {
  visibility: ChatVisibility;
}

/**
 * Response structure for adding a git commit
 */
export interface ChatAddGitCommitResponse {
  commit: ChatAddGitCommitResponse.Commit;
}

export namespace ChatAddGitCommitResponse {
  export interface Commit {
    id: string;

    chat_session_id: string;

    commit_hash: string;

    created_at: string;
  }
}

export type ChatCopyNodeOutputByCodeHashResponse = string | null;

export interface ChatDeleteInputFileResponse {
  files_deleted: number;
}

/**
 * Response structure for getting a git commit by hash
 */
export interface ChatGetGitCommitResponse {
  commit: ChatGetGitCommitResponse.Commit;
}

export namespace ChatGetGitCommitResponse {
  export interface Commit {
    id: string;

    chat_session_id: string;

    commit_hash: string;

    created_at: string;
  }
}

export type ChatGetPartialChatsResponse = Array<ChatGetPartialChatsResponse.ChatGetPartialChatsResponseItem>;

export namespace ChatGetPartialChatsResponse {
  export interface ChatGetPartialChatsResponseItem {
    chat_prompt: StructureAPI.ChatPrompt;

    created_at: string;

    message_id?: string | null;
  }
}

/**
 * Response structure for getting session timeline
 */
export interface ChatGetSessionTimelineResponse {
  /**
   * Chronologically sorted list of messages and commits
   */
  timeline: Array<ChatGetSessionTimelineResponse.Message | ChatGetSessionTimelineResponse.GitCommit>;
}

export namespace ChatGetSessionTimelineResponse {
  export interface Message {
    id: string;

    chat_session_id: string;

    content: string;

    created_at: string;

    role: string;

    timestamp: string;

    type: 'Message';

    content_proto?: Core.Uploadable | null;

    git_hash?: string | null;

    previous_message_id?: string | null;

    slack_channel_id?: string | null;

    slack_message_ts?: string | null;

    slack_thread_ts?: string | null;

    stream_chunks?: Array<Message.StreamChunk> | null;

    teams_channel_id?: string | null;

    teams_conversation_id?: string | null;

    teams_message_id?: string | null;
  }

  export namespace Message {
    /**
     * Entry for stream chunk logging - stored as JSONB array on chat_message
     */
    export interface StreamChunk {
      chunk_type: string;

      content: string;
    }
  }

  export interface GitCommit {
    id: string;

    chat_session_id: string;

    commit_hash: string;

    created_at: string;

    type: 'GitCommit';
  }
}

export type ChatListInputFilesResponse = Array<ChatListInputFilesResponse.ChatListInputFilesResponseItem>;

export namespace ChatListInputFilesResponse {
  export interface ChatListInputFilesResponseItem {
    chat_session_id: string;

    content_type: string;

    created_at: string;

    file_size: number;

    filename: string;
  }
}

export type ChatListTemplatesResponse = Array<ChatTemplate>;

export interface ChatLoadFilesResponse {
  commit_hash: string;

  files: { [key: string]: string };
}

export interface ChatLoadInputFilesResponse {
  files: { [key: string]: string };

  latest_timestamp?: string | null;
}

/**
 * Response structure for reverting to a git commit
 */
export interface ChatRevertToCommitResponse {
  /**
   * The commit hash that was reverted to
   */
  commit_hash: string;

  /**
   * Timestamp when the revert occurred
   */
  reverted_at: string;
}

export interface ChatUploadInputFileResponse {
  file: ChatUploadInputFileResponse.File;
}

export namespace ChatUploadInputFileResponse {
  export interface File {
    chat_session_id: string;

    content_type: string;

    created_at: string;

    file_size: number;

    filename: string;
  }
}

export interface ChatAddCollaboratorParams {
  email: string;

  role: ChatSessionRole;
}

export interface ChatAddGitCommitParams {
  /**
   * The git commit hash (must be 40 characters)
   */
  commit_hash: string;
}

export interface ChatAdminIssueFoundParams {
  message: string;

  title: string;
}

export interface ChatCopyParams {
  copy_name: string;

  source_chat_id: string;

  team_id: string;

  copy_inputs?: boolean;

  project_id?: string | null;
}

export interface ChatCopyNodeOutputByCodeHashParams {
  code_md5_hash: string;

  new_node_id: string;
}

export interface ChatCreateSessionParams {
  team_id: string;

  /**
   * Configuration for chat session with system prompt and LLM key
   */
  config?: ChatCreateSessionParams.Config | null;

  ephemeral?: boolean | null;

  project_id?: string | null;
}

export namespace ChatCreateSessionParams {
  /**
   * Configuration for chat session with system prompt and LLM key
   */
  export interface Config {
    is_onboarding_session: boolean;

    /**
     * LLM model keys available in the system. Format: <provider>.<model-name>
     */
    llm_key?:
      | 'vllm.gpt-5-mini-2025-08-07'
      | 'vllm.gpt-4.1-mini-2025-04-14'
      | 'vllm.gpt-5-nano-2025-08-07'
      | 'vllm.gpt-5-2025-08-07'
      | 'vllm.ft:gpt-4o-2024-08-06:structify::ADrF00Gq'
      | 'vllm.ft:gpt-4o-mini-2024-07-18:structify::ABCLHTsN'
      | 'vllm.action'
      | 'vllm.dora'
      | 'vllm.boring_dora'
      | 'vllm.claude-3-7-sonnet-20250219'
      | 'vllm.claude-sonnet-4-20250514'
      | 'vllm.qwen-3-coder-480b'
      | 'test_llm.test'
      | 'bedrock.claude-sonnet-4-bedrock'
      | 'bedrock.claude-sonnet-4-5-bedrock'
      | 'bedrock.claude-opus-4-5-bedrock'
      | 'bedrock.claude-opus-4-6-bedrock'
      | 'bedrock.claude-haiku-4-5-bedrock'
      | 'gemini.gemini-2.5-pro'
      | 'gemini.gemini-2.5-flash'
      | 'gemini.gemini-3-pro-preview'
      | 'gemini.gemini-3-flash-preview'
      | 'vertex_anthropic.claude-sonnet-4-5-vertex'
      | null;

    max_steps?: number | null;

    reminder_message?: string | null;

    system_prompt?: string | null;
  }
}

export interface ChatDeleteInputFileParams {
  filenames: Array<string>;
}

export interface ChatGrantAdminOverrideParams {
  /**
   * Duration in hours for the temporary access
   */
  duration_hours: number;

  role: ChatSessionRole;
}

export interface ChatListSessionsParams {
  /**
   * Team ID to filter chat sessions
   */
  team_id: string;

  /**
   * Maximum number of sessions to return (default: 50)
   */
  limit?: number | null;

  /**
   * Project ID to filter chat sessions
   */
  project_id?: string | null;
}

export interface ChatLoadFilesParams {
  chat_id: string;

  commit_hash?: string | null;
}

export interface ChatLoadInputFilesParams {
  since?: string | null;
}

export interface ChatRevertToCommitParams {
  /**
   * The git commit hash to revert to (must be 40 characters)
   */
  commit_hash: string;
}

export interface ChatUpdateSessionParams {
  message_head?: string | null;

  name?: string | null;

  project_id?: string | null;

  skip_confirmations?: boolean | null;
}

export interface ChatUpdateSessionFavoriteParams {
  is_favorite: boolean;
}

export interface ChatUpdateVisibilityParams {
  visibility: ChatVisibility;
}

export interface ChatUploadInputFileParams {
  content: Core.Uploadable;

  content_type: string;

  file_name: string;
}

export declare namespace Chat {
  export {
    type AddCollaboratorRequest as AddCollaboratorRequest,
    type AdminGrantAccessResponse as AdminGrantAccessResponse,
    type AdminIssueFoundRequest as AdminIssueFoundRequest,
    type AdminIssueFoundResponse as AdminIssueFoundResponse,
    type ChatDependency as ChatDependency,
    type ChatEvent as ChatEvent,
    type ChatSession as ChatSession,
    type ChatSessionRole as ChatSessionRole,
    type ChatSessionUser as ChatSessionUser,
    type ChatSessionWithMessages as ChatSessionWithMessages,
    type ChatTemplate as ChatTemplate,
    type ChatVisibility as ChatVisibility,
    type CopyChatSessionRequest as CopyChatSessionRequest,
    type CreateChatSessionRequest as CreateChatSessionRequest,
    type CreateChatSessionResponse as CreateChatSessionResponse,
    type DeleteChatSessionResponse as DeleteChatSessionResponse,
    type ErrorResponse as ErrorResponse,
    type GetChatSessionResponse as GetChatSessionResponse,
    type GetDependenciesResponse as GetDependenciesResponse,
    type GrantAdminAccessRequest as GrantAdminAccessRequest,
    type ListChatSessionsResponse as ListChatSessionsResponse,
    type ListCollaboratorsResponse as ListCollaboratorsResponse,
    type Message as Message,
    type ToolInvocation as ToolInvocation,
    type ToolResult as ToolResult,
    type UpdateChatSessionFavoriteRequest as UpdateChatSessionFavoriteRequest,
    type UpdateChatSessionRequest as UpdateChatSessionRequest,
    type UpdateVisibilityRequest as UpdateVisibilityRequest,
    type UpdateVisibilityResponse as UpdateVisibilityResponse,
    type ChatAddGitCommitResponse as ChatAddGitCommitResponse,
    type ChatCopyNodeOutputByCodeHashResponse as ChatCopyNodeOutputByCodeHashResponse,
    type ChatDeleteInputFileResponse as ChatDeleteInputFileResponse,
    type ChatGetGitCommitResponse as ChatGetGitCommitResponse,
    type ChatGetPartialChatsResponse as ChatGetPartialChatsResponse,
    type ChatGetSessionTimelineResponse as ChatGetSessionTimelineResponse,
    type ChatListInputFilesResponse as ChatListInputFilesResponse,
    type ChatListTemplatesResponse as ChatListTemplatesResponse,
    type ChatLoadFilesResponse as ChatLoadFilesResponse,
    type ChatLoadInputFilesResponse as ChatLoadInputFilesResponse,
    type ChatRevertToCommitResponse as ChatRevertToCommitResponse,
    type ChatUploadInputFileResponse as ChatUploadInputFileResponse,
    type ChatAddCollaboratorParams as ChatAddCollaboratorParams,
    type ChatAddGitCommitParams as ChatAddGitCommitParams,
    type ChatAdminIssueFoundParams as ChatAdminIssueFoundParams,
    type ChatCopyParams as ChatCopyParams,
    type ChatCopyNodeOutputByCodeHashParams as ChatCopyNodeOutputByCodeHashParams,
    type ChatCreateSessionParams as ChatCreateSessionParams,
    type ChatDeleteInputFileParams as ChatDeleteInputFileParams,
    type ChatGrantAdminOverrideParams as ChatGrantAdminOverrideParams,
    type ChatListSessionsParams as ChatListSessionsParams,
    type ChatLoadFilesParams as ChatLoadFilesParams,
    type ChatLoadInputFilesParams as ChatLoadInputFilesParams,
    type ChatRevertToCommitParams as ChatRevertToCommitParams,
    type ChatUpdateSessionParams as ChatUpdateSessionParams,
    type ChatUpdateSessionFavoriteParams as ChatUpdateSessionFavoriteParams,
    type ChatUpdateVisibilityParams as ChatUpdateVisibilityParams,
    type ChatUploadInputFileParams as ChatUploadInputFileParams,
  };
}
