// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ChatAPI from './chat';
import * as StructureAPI from './structure';

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
   * Get the actual chat prompt that the LLM will see on its next message (admin
   * only)
   */
  adminGetChatPrompt(
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StructureAPI.ChatPrompt> {
    return this._client.get(`/chat/sessions/${sessionId}/admin/chat_prompt`, options);
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
   * Delete files from a chat session's git repository
   */
  deleteFiles(
    chatId: string,
    body: ChatDeleteFilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatDeleteFilesResponse> {
    return this._client.post(`/chat/files/delete/${chatId}`, { body, ...options });
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
   * Load files from a chat session's git repository
   */
  loadFiles(
    body: ChatLoadFilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatLoadFilesResponse> {
    return this._client.post('/chat/files/load', { body, ...options });
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
  | ChatEvent.ReviewRequest;

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
    ToolCall:
      | ToolCall.UnionMember0
      | ToolCall.UnionMember1
      | ToolCall.UnionMember2
      | ToolCall.UnionMember3
      | ToolCall.UnionMember4
      | ToolCall.UnionMember5
      | ToolCall.UnionMember6
      | ToolCall.UnionMember7
      | ToolCall.UnionMember8
      | ToolCall.UnionMember9
      | ToolCall.UnionMember10
      | ToolCall.UnionMember11
      | ToolCall.UnionMember12
      | ToolCall.UnionMember13
      | ToolCall.UnionMember14
      | ToolCall.UnionMember15
      | ToolCall.UnionMember16;
  }

  export namespace ToolCall {
    export interface UnionMember0 {
      input: UnionMember0.Input;

      name: 'WebSearch';

      result_text?: string | null;
    }

    export namespace UnionMember0 {
      export interface Input {
        query: string;
      }
    }

    export interface UnionMember1 {
      input: UnionMember1.Input;

      name: 'WebNavigate';

      result_text?: string | null;
    }

    export namespace UnionMember1 {
      export interface Input {
        url: string;
      }
    }

    export interface UnionMember2 {
      input: UnionMember2.Input;

      name: 'InspectDAG';

      result_text?: string | null;
    }

    export namespace UnionMember2 {
      export interface Input {
        node_function_name: string;
      }
    }

    export interface UnionMember3 {
      input: UnionMember3.Input;

      name: 'DeleteFile';

      result_text?: string | null;
    }

    export namespace UnionMember3 {
      export interface Input {
        file: string;
      }
    }

    export interface UnionMember4 {
      input: UnionMember4.Input;

      name: 'MoveFile';

      result_text?: string | null;
    }

    export namespace UnionMember4 {
      export interface Input {
        file: string;

        new_path: string;
      }
    }

    export interface UnionMember5 {
      input: UnionMember5.Input;

      name: 'RunBash';

      result_text?: string | null;
    }

    export namespace UnionMember5 {
      export interface Input {
        command: string;

        connector?: string | null;

        working_dir?: string | null;
      }
    }

    export interface UnionMember6 {
      input: UnionMember6.Input;

      name: 'RunPython';

      result_text?: string | null;
    }

    export namespace UnionMember6 {
      export interface Input {
        code: string;

        connector?: string | null;

        working_dir?: string | null;
      }
    }

    export interface UnionMember7 {
      input: UnionMember7.Input;

      name: 'IssueFound';

      result_text?: string | null;
    }

    export namespace UnionMember7 {
      export interface Input {
        description: string;

        title: string;
      }
    }

    export interface UnionMember8 {
      input: UnionMember8.Input;

      name: 'SaveDatabase';

      result_text?: string | null;
    }

    export namespace UnionMember8 {
      export interface Input {
        name: string;

        description?: string | null;

        notes?: string | null;
      }
    }

    export interface UnionMember9 {
      input: UnionMember9.Input;

      name: 'SaveSchema';

      result_text?: string | null;
    }

    export namespace UnionMember9 {
      export interface Input {
        name: string;

        description?: string | null;

        notes?: string | null;
      }
    }

    export interface UnionMember10 {
      input: UnionMember10.Input;

      name: 'SaveTable';

      result_text?: string | null;
    }

    export namespace UnionMember10 {
      export interface Input {
        name: string;

        description?: string | null;

        notes?: string | null;

        tag?: string | null;
      }
    }

    export interface UnionMember11 {
      input: UnionMember11.Input;

      name: 'SaveColumn';

      result_text?: string | null;
    }

    export namespace UnionMember11 {
      export interface Input {
        column_name: string;

        column_type: string;

        notes?: string | null;
      }
    }

    export interface UnionMember12 {
      input: UnionMember12.Input;

      name: 'SaveApiResource';

      result_text?: string | null;
    }

    export namespace UnionMember12 {
      export interface Input {
        endpoint: string;

        name: string;

        description?: string | null;

        notes?: string | null;
      }
    }

    export interface UnionMember13 {
      input: UnionMember13.Input;

      name: 'SaveMemory';

      result_text?: string | null;
    }

    export namespace UnionMember13 {
      export interface Input {
        key: string;

        value: string;
      }
    }

    export interface UnionMember14 {
      input: UnionMember14.Input;

      name: 'SearchConnectorTables';

      result_text?: string | null;
    }

    export namespace UnionMember14 {
      export interface Input {
        query: string;

        wiki_tag?: string | null;
      }
    }

    export interface UnionMember15 {
      input: UnionMember15.Input;

      name: 'RequestClarification';

      result_text?: string | null;
    }

    export namespace UnionMember15 {
      export interface Input {
        question: string;

        table_name: string;

        column_name?: string | null;
      }
    }

    export interface UnionMember16 {
      input: UnionMember16.Input;

      name: 'AddDependency';

      result_text?: string | null;
    }

    export namespace UnionMember16 {
      export interface Input {
        package_name: string;

        version_spec?: string | null;
      }
    }
  }

  export interface Question {
    Question: Question.Question;
  }

  export namespace Question {
    export interface Question {
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
        name: string;

        data_preview?: string | null;

        image?: Core.Uploadable | null;
      }
    }
  }
}

export interface ChatSession {
  id: string;

  created_at: string;

  ephemeral: boolean;

  git_application_token: string;

  review_required: boolean;

  slack_completion_notified: boolean;

  team_id: string;

  updated_at: string;

  user_message_needed: boolean;

  visibility: ChatVisibility;

  config_proto?: Core.Uploadable | null;

  name?: string | null;

  project_id?: string | null;

  slack_channel_id?: string | null;

  slack_team_id?: string | null;

  slack_thread_ts?: string | null;
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

  team_id: string;

  updated_at: string;

  user_message_needed: boolean;

  user_role: ChatSessionRole;

  visibility: ChatVisibility;

  latest_workflow_session_id?: string | null;

  name?: string | null;

  project_id?: string | null;
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

    git_commit_id?: string | null;

    slack_channel_id?: string | null;

    slack_message_ts?: string | null;

    slack_thread_ts?: string | null;

    stream_chunks?: Array<Message.StreamChunk> | null;
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

export type ChatVisibility = 'private' | 'shared_with_team' | 'public';

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

  initial_message?: string | null;

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
      | 'gemini.gemini-2.5-pro'
      | 'gemini.gemini-2.5-flash'
      | 'gemini.gemini-3-pro-preview'
      | 'vertex_anthropic.claude-sonnet-4-5-vertex'
      | null;

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

    latest_workflow_session_id?: string | null;

    name?: string | null;

    project_id?: string | null;
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
      id: string;

      chat_session_id: string;

      /**
       * Events in a chat session timeline, including messages and unified tool
       * calls/results
       */
      content: ChatAPI.ChatEvent;

      created_at: string;

      role: 'user' | 'system' | 'assistant';

      timestamp: string;

      commit_hash?: string | null;
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

export interface UpdateChatSessionFavoriteRequest {
  is_favorite: boolean;
}

export interface UpdateChatSessionRequest {
  name?: string | null;

  project_id?: string | null;
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

export interface ChatDeleteFilesResponse {
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

export type ChatGetPartialChatsResponse = Array<StructureAPI.ChatPrompt>;

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

    git_commit_id?: string | null;

    slack_channel_id?: string | null;

    slack_message_ts?: string | null;

    slack_thread_ts?: string | null;

    stream_chunks?: Array<Message.StreamChunk> | null;
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

export interface ChatLoadFilesResponse {
  commit_hash: string;

  files: { [key: string]: string };
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

  initial_message?: string | null;

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
      | 'gemini.gemini-2.5-pro'
      | 'gemini.gemini-2.5-flash'
      | 'gemini.gemini-3-pro-preview'
      | 'vertex_anthropic.claude-sonnet-4-5-vertex'
      | null;

    reminder_message?: string | null;

    system_prompt?: string | null;
  }
}

export interface ChatDeleteFilesParams {
  paths: Array<string>;
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

export interface ChatRevertToCommitParams {
  /**
   * The git commit hash to revert to (must be 40 characters)
   */
  commit_hash: string;
}

export interface ChatUpdateSessionParams {
  name?: string | null;

  project_id?: string | null;
}

export interface ChatUpdateSessionFavoriteParams {
  is_favorite: boolean;
}

export interface ChatUpdateVisibilityParams {
  visibility: ChatVisibility;
}

export declare namespace Chat {
  export {
    type AddCollaboratorRequest as AddCollaboratorRequest,
    type AdminGrantAccessResponse as AdminGrantAccessResponse,
    type ChatDependency as ChatDependency,
    type ChatEvent as ChatEvent,
    type ChatSession as ChatSession,
    type ChatSessionRole as ChatSessionRole,
    type ChatSessionUser as ChatSessionUser,
    type ChatSessionWithMessages as ChatSessionWithMessages,
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
    type UpdateChatSessionFavoriteRequest as UpdateChatSessionFavoriteRequest,
    type UpdateChatSessionRequest as UpdateChatSessionRequest,
    type UpdateVisibilityRequest as UpdateVisibilityRequest,
    type UpdateVisibilityResponse as UpdateVisibilityResponse,
    type ChatAddGitCommitResponse as ChatAddGitCommitResponse,
    type ChatCopyNodeOutputByCodeHashResponse as ChatCopyNodeOutputByCodeHashResponse,
    type ChatDeleteFilesResponse as ChatDeleteFilesResponse,
    type ChatGetGitCommitResponse as ChatGetGitCommitResponse,
    type ChatGetPartialChatsResponse as ChatGetPartialChatsResponse,
    type ChatGetSessionTimelineResponse as ChatGetSessionTimelineResponse,
    type ChatLoadFilesResponse as ChatLoadFilesResponse,
    type ChatRevertToCommitResponse as ChatRevertToCommitResponse,
    type ChatAddCollaboratorParams as ChatAddCollaboratorParams,
    type ChatAddGitCommitParams as ChatAddGitCommitParams,
    type ChatCopyParams as ChatCopyParams,
    type ChatCopyNodeOutputByCodeHashParams as ChatCopyNodeOutputByCodeHashParams,
    type ChatCreateSessionParams as ChatCreateSessionParams,
    type ChatDeleteFilesParams as ChatDeleteFilesParams,
    type ChatGrantAdminOverrideParams as ChatGrantAdminOverrideParams,
    type ChatListSessionsParams as ChatListSessionsParams,
    type ChatLoadFilesParams as ChatLoadFilesParams,
    type ChatRevertToCommitParams as ChatRevertToCommitParams,
    type ChatUpdateSessionParams as ChatUpdateSessionParams,
    type ChatUpdateSessionFavoriteParams as ChatUpdateSessionFavoriteParams,
    type ChatUpdateVisibilityParams as ChatUpdateVisibilityParams,
  };
}
