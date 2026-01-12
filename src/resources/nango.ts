// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Nango extends APIResource {
  createSession(
    body: NangoCreateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NangoCreateSessionResponse> {
    return this._client.post('/nango/session', { body, ...options });
  }

  listIntegrations(options?: Core.RequestOptions): Core.APIPromise<NangoListIntegrationsResponse> {
    return this._client.get('/nango/integrations', options);
  }
}

/**
 * A Nango connect session for the frontend SDK
 */
export interface ConnectSession {
  token: string;

  expires_at: string;
}

/**
 * Request body for creating a Nango session with optional scope selection
 */
export interface CreateNangoSessionRequest {
  connector_auth_method_id: string;

  /**
   * Specific scope IDs to use. If not provided, defaults to required + recommended
   * scopes. If the auth method has no scopes in the database, Nango's default scopes
   * are used.
   */
  selected_scope_ids?: Array<string> | null;
}

/**
 * A Nango integration (OAuth provider configuration)
 */
export interface Integration {
  created_at: string;

  provider: string;

  unique_key: string;

  updated_at: string;

  display_name?: string | null;

  logo?: string | null;
}

/**
 * A Nango connect session for the frontend SDK
 */
export interface NangoCreateSessionResponse {
  token: string;

  expires_at: string;
}

export type NangoListIntegrationsResponse =
  Array<NangoListIntegrationsResponse.NangoListIntegrationsResponseItem>;

export namespace NangoListIntegrationsResponse {
  /**
   * A Nango integration (OAuth provider configuration)
   */
  export interface NangoListIntegrationsResponseItem {
    created_at: string;

    provider: string;

    unique_key: string;

    updated_at: string;

    display_name?: string | null;

    logo?: string | null;
  }
}

export interface NangoCreateSessionParams {
  connector_auth_method_id: string;

  /**
   * Specific scope IDs to use. If not provided, defaults to required + recommended
   * scopes. If the auth method has no scopes in the database, Nango's default scopes
   * are used.
   */
  selected_scope_ids?: Array<string> | null;
}

export declare namespace Nango {
  export {
    type ConnectSession as ConnectSession,
    type CreateNangoSessionRequest as CreateNangoSessionRequest,
    type Integration as Integration,
    type NangoCreateSessionResponse as NangoCreateSessionResponse,
    type NangoListIntegrationsResponse as NangoListIntegrationsResponse,
    type NangoCreateSessionParams as NangoCreateSessionParams,
  };
}
