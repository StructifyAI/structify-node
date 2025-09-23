// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class SandboxResource extends APIResource {
  create(chatId: string, body: SandboxCreateParams, options?: Core.RequestOptions): Core.APIPromise<Sandbox> {
    return this._client.post(`/sandbox/${chatId}`, { body, ...options });
  }

  list(chatId: string, options?: Core.RequestOptions): Core.APIPromise<SandboxListResponse> {
    return this._client.get(`/sandbox/list/${chatId}`, options);
  }

  get(chatId: string, body: SandboxGetParams, options?: Core.RequestOptions): Core.APIPromise<Sandbox> {
    return this._client.post(`/sandbox/live/${chatId}`, { body, ...options });
  }

  updateStatus(
    sandboxId: string,
    body: SandboxUpdateStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Sandbox> {
    return this._client.patch(`/sandbox/${sandboxId}/status`, { body, ...options });
  }
}

export interface GetSandboxRequest {
  sandbox_url_override?: string | null;
}

export interface Sandbox {
  id: string;

  chat_session_id: string;

  created_at: string;

  modal_id: string;

  modal_url: string;

  status: 'alive' | 'terminated';

  updated_at: string;

  latest_node?: string | null;
}

export type SandboxListResponse = Array<Sandbox>;

export interface SandboxCreateParams {
  chat_session_id: string;

  modal_id: string;

  modal_url: string;

  status: 'alive' | 'terminated';

  latest_node?: string | null;
}

export interface SandboxGetParams {
  sandbox_url_override?: string | null;
}

export interface SandboxUpdateStatusParams {
  status: string;
}

export declare namespace SandboxResource {
  export {
    type GetSandboxRequest as GetSandboxRequest,
    type Sandbox as Sandbox,
    type SandboxListResponse as SandboxListResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxGetParams as SandboxGetParams,
    type SandboxUpdateStatusParams as SandboxUpdateStatusParams,
  };
}
