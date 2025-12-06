// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class APIKeys extends APIResource {
  create(body: APIKeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateAPIKeyResponse> {
    return this._client.post('/user/api_keys', { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<ListAPIKeysResponse> {
    return this._client.get('/user/api_keys', options);
  }

  get(id: string, options?: Core.RequestOptions): Core.APIPromise<APIKeyInfo> {
    return this._client.get(`/user/api_keys/${id}`, options);
  }

  revoke(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/user/api_keys/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface APIKeyInfo {
  id: string;

  created_at: string;

  membership_id: string;

  expires_at?: string | null;

  last_used_at?: string | null;

  name?: string | null;

  revoked_at?: string | null;
}

export interface CreateAPIKeyRequest {
  expires_at?: string | null;

  membership_id?: string | null;

  name?: string | null;
}

export interface CreateAPIKeyResponse {
  api_key: APIKeyInfo;

  raw_key: string;
}

export interface ListAPIKeysResponse {
  api_keys: Array<APIKeyInfo>;
}

export interface APIKeyCreateParams {
  expires_at?: string | null;

  membership_id?: string | null;

  name?: string | null;
}

export declare namespace APIKeys {
  export {
    type APIKeyInfo as APIKeyInfo,
    type CreateAPIKeyRequest as CreateAPIKeyRequest,
    type CreateAPIKeyResponse as CreateAPIKeyResponse,
    type ListAPIKeysResponse as ListAPIKeysResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
  };
}
