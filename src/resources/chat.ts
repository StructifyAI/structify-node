// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Chat extends APIResource {
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

export interface ChatSession {
  id: string;

  created_at: string;

  git_application_token: string;

  project_id: string;

  updated_at: string;

  user_id: string;
}

export interface ChatSessionWithMessages {
  id: string;

  commits: Array<ChatSessionWithMessages.Commit>;

  created_at: string;

  git_application_token: string;

  messages: Array<ChatSessionWithMessages.Message>;

  project_id: string;

  updated_at: string;

  user_id: string;

  latest_workflow_session_id?: string | null;
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

    project_id: string;

    title: string;

    updated_at: string;

    user_id: string;
  }
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

export interface ChatAddGitCommitParams {
  /**
   * The git commit hash (must be 40 characters).
   */
  commit_hash: string;
}

export interface ChatAddMessageParams {
  content: string;

  role: string;
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

export declare namespace Chat {
  export {
    type AddChatMessageRequest as AddChatMessageRequest,
    type AddChatMessageResponse as AddChatMessageResponse,
    type ChatSession as ChatSession,
    type ChatSessionWithMessages as ChatSessionWithMessages,
    type CreateChatSessionRequest as CreateChatSessionRequest,
    type CreateChatSessionResponse as CreateChatSessionResponse,
    type DeleteChatSessionResponse as DeleteChatSessionResponse,
    type ErrorResponse as ErrorResponse,
    type GetChatSessionResponse as GetChatSessionResponse,
    type ListChatSessionsResponse as ListChatSessionsResponse,
    type ChatAddGitCommitResponse as ChatAddGitCommitResponse,
    type ChatGetGitCommitResponse as ChatGetGitCommitResponse,
    type ChatGetSessionTimelineResponse as ChatGetSessionTimelineResponse,
    type ChatAddGitCommitParams as ChatAddGitCommitParams,
    type ChatAddMessageParams as ChatAddMessageParams,
    type ChatCreateSessionParams as ChatCreateSessionParams,
    type ChatListSessionsParams as ChatListSessionsParams,
  };
}
