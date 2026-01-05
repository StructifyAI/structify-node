// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ChatAPI from '../chat';

export class ChatTemplates extends APIResource {
  create(
    body: ChatTemplateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatAPI.ChatTemplate> {
    return this._client.post('/admin/chat/templates', { body, ...options });
  }

  update(
    templateId: string,
    body: ChatTemplateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatAPI.ChatTemplate> {
    return this._client.patch(`/admin/chat/templates/${templateId}`, { body, ...options });
  }

  list(
    query?: ChatTemplateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatTemplateListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ChatTemplateListResponse>;
  list(
    query: ChatTemplateListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatTemplateListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/admin/chat/templates', { query, ...options });
  }
}

export interface AdminChatTemplateListQuery {
  chat_session_id?: string | null;
}

export interface CreateChatTemplateRequest {
  chat_session_id: string;

  description: string;

  display_order: number;

  image_url: string;

  is_active: boolean;

  title: string;
}

export interface UpdateChatTemplateRequest {
  description?: string | null;

  display_order?: number | null;

  image_url?: string | null;

  is_active?: boolean | null;

  title?: string | null;

  updated_by?: string | null;
}

export type ChatTemplateListResponse = Array<ChatAPI.ChatTemplate>;

export interface ChatTemplateCreateParams {
  chat_session_id: string;

  description: string;

  display_order: number;

  image_url: string;

  is_active: boolean;

  title: string;
}

export interface ChatTemplateUpdateParams {
  description?: string | null;

  display_order?: number | null;

  image_url?: string | null;

  is_active?: boolean | null;

  title?: string | null;

  updated_by?: string | null;
}

export interface ChatTemplateListParams {
  chat_session_id?: string | null;
}

export declare namespace ChatTemplates {
  export {
    type AdminChatTemplateListQuery as AdminChatTemplateListQuery,
    type CreateChatTemplateRequest as CreateChatTemplateRequest,
    type UpdateChatTemplateRequest as UpdateChatTemplateRequest,
    type ChatTemplateListResponse as ChatTemplateListResponse,
    type ChatTemplateCreateParams as ChatTemplateCreateParams,
    type ChatTemplateUpdateParams as ChatTemplateUpdateParams,
    type ChatTemplateListParams as ChatTemplateListParams,
  };
}
