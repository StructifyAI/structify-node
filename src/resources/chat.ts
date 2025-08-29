// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ChatAPI from './chat';

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
   * Add a message to a chat session
   */
  addMessage(
    sessionId: string,
    body: ChatAddMessageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddChatMessageResponse> {
    return this._client.post(`/chat/sessions/${sessionId}/messages`, { body, ...options });
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
   * Delete a chat session
   */
  deleteSession(
    sessionId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeleteChatSessionResponse> {
    return this._client.delete(`/chat/sessions/${sessionId}`, options);
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
   * List all users who have access to a chat session
   */
  listCollaborators(
    chatId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListCollaboratorsResponse> {
    return this._client.get(`/chat/sessions/${chatId}/collaborators`, options);
  }

  /**
   * List all chat sessions for the authenticated user.
   */
  listSessions(
    query?: ChatListSessionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListChatSessionsResponse>;
  listSessions(options?: Core.RequestOptions): Core.APIPromise<ListChatSessionsResponse>;
  listSessions(
    query: ChatListSessionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListChatSessionsResponse> {
    if (isRequestOptions(query)) {
      return this.listSessions({}, query);
    }
    return this._client.get('/chat/sessions', { query, ...options });
  }

  removeCollaborator(chatId: string, userId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/chat/sessions/${chatId}/collaborators/${userId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Toggle public visibility of a chat session
   */
  togglePublic(
    sessionId: string,
    body: ChatTogglePublicParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TogglePublicResponse> {
    return this._client.put(`/chat/sessions/${sessionId}/public`, { body, ...options });
  }

  updateSession(
    sessionId: string,
    body: ChatUpdateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatSession> {
    return this._client.patch(`/chat/sessions/${sessionId}`, { body, ...options });
  }
}

export interface AddChatMessageRequest {
  content: string;

  role: string;
}

/**
 * Response for adding a message
 */
export interface AddChatMessageResponse {
  message: AddChatMessageResponse.Message;
}

export namespace AddChatMessageResponse {
  export interface Message {
    id: string;

    chat_session_id: string;

    content: string;

    created_at: string;

    role: string;

    timestamp: string;
  }
}

export interface AddCollaboratorRequest {
  role: ChatSessionRole;

  user_id: string;
}

export interface ChatSession {
  id: string;

  created_at: string;

  git_application_token: string;

  is_public: boolean;

  project_id: string;

  updated_at: string;

  name?: string | null;
}

export type ChatSessionRole = 'owner' | 'editor' | 'viewer';

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

  /**
   * Whether the chat session is public
   */
  is_public: boolean;

  messages: Array<ChatSessionWithMessages.Message>;

  project_id: string;

  updated_at: string;

  user_role: ChatSessionRole;

  latest_workflow_session_id?: string | null;

  name?: string | null;
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
  }
}

export interface CreateChatSessionRequest {
  git_application_token: string;

  initial_message: string;

  project_id: string;
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
  session: ChatSessionWithMessages;
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

    project_id: string;

    title: string;

    updated_at: string;

    user_role: ChatAPI.ChatSessionRole;

    name?: string | null;
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

export interface TogglePublicRequest {
  is_public: boolean;
}

export interface TogglePublicResponse {
  is_public: boolean;
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
  }

  export interface GitCommit {
    id: string;

    chat_session_id: string;

    commit_hash: string;

    created_at: string;

    type: 'GitCommit';
  }
}

export interface ChatAddCollaboratorParams {
  role: ChatSessionRole;

  user_id: string;
}

export interface ChatAddGitCommitParams {
  /**
   * The git commit hash (must be 40 characters)
   */
  commit_hash: string;
}

export interface ChatAddMessageParams {
  content: string;

  role: string;
}

export interface ChatCopyNodeOutputByCodeHashParams {
  code_md5_hash: string;

  new_node_id?: string | null;
}

export interface ChatCreateSessionParams {
  git_application_token: string;

  initial_message: string;

  project_id: string;
}

export interface ChatListSessionsParams {
  /**
   * Maximum number of sessions to return (default: 50)
   */
  limit?: number | null;
}

export interface ChatTogglePublicParams {
  is_public: boolean;
}

export interface ChatUpdateSessionParams {
  is_favorite?: boolean | null;

  name?: string | null;
}

export declare namespace Chat {
  export {
    type AddChatMessageRequest as AddChatMessageRequest,
    type AddChatMessageResponse as AddChatMessageResponse,
    type AddCollaboratorRequest as AddCollaboratorRequest,
    type ChatSession as ChatSession,
    type ChatSessionRole as ChatSessionRole,
    type ChatSessionUser as ChatSessionUser,
    type ChatSessionWithMessages as ChatSessionWithMessages,
    type CreateChatSessionRequest as CreateChatSessionRequest,
    type CreateChatSessionResponse as CreateChatSessionResponse,
    type DeleteChatSessionResponse as DeleteChatSessionResponse,
    type ErrorResponse as ErrorResponse,
    type GetChatSessionResponse as GetChatSessionResponse,
    type ListChatSessionsResponse as ListChatSessionsResponse,
    type ListCollaboratorsResponse as ListCollaboratorsResponse,
    type TogglePublicRequest as TogglePublicRequest,
    type TogglePublicResponse as TogglePublicResponse,
    type ChatAddGitCommitResponse as ChatAddGitCommitResponse,
    type ChatCopyNodeOutputByCodeHashResponse as ChatCopyNodeOutputByCodeHashResponse,
    type ChatGetGitCommitResponse as ChatGetGitCommitResponse,
    type ChatGetSessionTimelineResponse as ChatGetSessionTimelineResponse,
    type ChatAddCollaboratorParams as ChatAddCollaboratorParams,
    type ChatAddGitCommitParams as ChatAddGitCommitParams,
    type ChatAddMessageParams as ChatAddMessageParams,
    type ChatCopyNodeOutputByCodeHashParams as ChatCopyNodeOutputByCodeHashParams,
    type ChatCreateSessionParams as ChatCreateSessionParams,
    type ChatListSessionsParams as ChatListSessionsParams,
    type ChatTogglePublicParams as ChatTogglePublicParams,
    type ChatUpdateSessionParams as ChatUpdateSessionParams,
  };
}
