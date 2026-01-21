// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class SandboxResource extends APIResource {
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
  /**
   * Override URL for the modal control service (for testing/development)
   */
  modal_control_service_url_override?: string | null;
}

export interface Sandbox {
  id: string;

  chat_session_id: string;

  created_at: string;

  provider: 'modal' | 'daytona';

  provider_id: string;

  status: 'alive' | 'terminated';

  tunnel_url: string;

  updated_at: string;

  api_url?: string | null;

  latest_node?: string | null;

  session_id?: string | null;
}

export type SandboxListResponse = Array<Sandbox>;

export interface SandboxGetParams {
  /**
   * Override URL for the modal control service (for testing/development)
   */
  modal_control_service_url_override?: string | null;
}

export interface SandboxUpdateStatusParams {
  status: string;
}

export declare namespace SandboxResource {
  export {
    type GetSandboxRequest as GetSandboxRequest,
    type Sandbox as Sandbox,
    type SandboxListResponse as SandboxListResponse,
    type SandboxGetParams as SandboxGetParams,
    type SandboxUpdateStatusParams as SandboxUpdateStatusParams,
  };
}
