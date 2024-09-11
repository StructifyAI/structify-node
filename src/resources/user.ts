// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UserAPI from './user';

export class User extends APIResource {
  /**
   * Creates a test token.
   */
  createTestToken(options?: Core.RequestOptions): Core.APIPromise<TokenResponse> {
    return this._client.post('/user/create_test_token', options);
  }

  /**
   * Enable a source
   */
  info(options?: Core.RequestOptions): Core.APIPromise<UserInfo> {
    return this._client.get('/user/info', options);
  }

  /**
   * JWTs are commonly used for authentication in web applications. They contain
   * encoded information about the user and are typically short-lived for security
   * reasons.
   *
   * This endpoint exists to allow clients who have authenticated via JWT (e.g.,
   * through Supabase) to obtain a long-lived API token. The API token can then be
   * used for subsequent requests to the API without requiring frequent
   * re-authentication.
   *
   * This conversion process enhances security by separating the authentication
   * mechanism (JWT) from the API access mechanism (API token), while providing a
   * seamless experience for users transitioning from web-based authentication to API
   * usage.
   */
  jwtToAPIToken(jwt: string, options?: Core.RequestOptions): Core.APIPromise<TokenResponse> {
    return this._client.post(`/user/jwt_to_api_token/${jwt}`, options);
  }

  /**
   * Creates a test token.
   */
  usage(options?: Core.RequestOptions): Core.APIPromise<UserUsageResponse> {
    return this._client.get('/user/usage', options);
  }
}

export interface TokenResponse {
  token: string;
}

export interface UserInfo {
  credits_remaining: number;

  credits_used: number;

  is_admin: boolean;

  username: string;
}

export interface UserUsageResponse {
  num_entities: number;

  num_relationships: number;

  num_runs: number;
}

export namespace User {
  export import TokenResponse = UserAPI.TokenResponse;
  export import UserInfo = UserAPI.UserInfo;
  export import UserUsageResponse = UserAPI.UserUsageResponse;
}
