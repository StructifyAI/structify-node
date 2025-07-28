// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class SandboxResource extends APIResource {
  createChat(chatId: string, options?: Core.RequestOptions): Core.APIPromise<Sandbox> {
    return this._client.post(`/sandbox/${chatId}`, options);
  }

  getLiveChat(chatId: string, options?: Core.RequestOptions): Core.APIPromise<Sandbox> {
    return this._client.get(`/sandbox/live/${chatId}`, options);
  }

  listChat(chatId: string, options?: Core.RequestOptions): Core.APIPromise<SandboxListChatResponse> {
    return this._client.get(`/sandbox/list/${chatId}`, options);
  }

  updateStatus(
    sandboxId: string,
    body: SandboxUpdateStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sandbox> {
    return this._client.patch(`/sandbox/${sandboxId}/status`, { body, ...options });
  }
}

export interface Sandbox {
  id: string;

  chat_session_id: string;

  created_at: string;

  modal_id: string;

  modal_url: string;

  status: 'alive' | 'terminated';

  updated_at: string;
}

export type SandboxListChatResponse = Array<Sandbox>;

export interface SandboxUpdateStatusParams {
  status: string;
}

export declare namespace SandboxResource {
  export {
    type Sandbox as Sandbox,
    type SandboxListChatResponse as SandboxListChatResponse,
    type SandboxUpdateStatusParams as SandboxUpdateStatusParams,
  };
}
