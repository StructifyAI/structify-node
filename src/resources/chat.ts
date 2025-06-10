// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Chat extends APIResource {
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
   * Get a chat session with all its messages
   */
  getSession(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<GetChatSessionResponse> {
    return this._client.get(`/chat/sessions/${sessionId}`, options);
  }

  /**
   * List all chat sessions for the authenticated user, doesn't contain the messages.
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

  git_commit_hash: string;

  role: string;

  timestamp?: string | null;
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

    git_commit_hash: string;

    role: string;

    timestamp: string;
  }
}

export interface ChatSession {
  id: string;

  created_at: string;

  git_branch: string;

  git_repo_id: string;

  project_id: string;

  updated_at: string;

  user_id: string;
}

export interface ChatSessionWithMessages {
  id: string;

  created_at: string;

  git_branch: string;

  git_repo_id: string;

  messages: Array<ChatSessionWithMessages.Message>;

  project_id: string;

  updated_at: string;

  user_id: string;
}

export namespace ChatSessionWithMessages {
  export interface Message {
    id: string;

    chat_session_id: string;

    content: string;

    created_at: string;

    git_commit_hash: string;

    role: string;

    timestamp: string;
  }
}

export interface CreateChatSessionRequest {
  git_branch: string;

  git_commit_hash: string;

  git_repo_id: string;

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
  sessions: Array<ChatSession>;
}

export interface ChatAddMessageParams {
  content: string;

  git_commit_hash: string;

  role: string;

  timestamp?: string | null;
}

export interface ChatCreateSessionParams {
  git_branch: string;

  git_commit_hash: string;

  git_repo_id: string;

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
    type ChatAddMessageParams as ChatAddMessageParams,
    type ChatCreateSessionParams as ChatCreateSessionParams,
    type ChatListSessionsParams as ChatListSessionsParams,
  };
}
