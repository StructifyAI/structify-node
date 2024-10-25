// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as UserAPI from './user';

export class User extends APIResource {
  /**
   * Creates a test token.
   */
  createTestToken(
    body: UserCreateTestTokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenResponse> {
    return this._client.post('/user/create_test_token', { body, ...options });
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

  transactions(options?: Core.RequestOptions): Core.APIPromise<UserTransactionsResponse> {
    return this._client.get('/user/transactions/list', options);
  }

  /**
   * Returns usage statistics for the user.
   */
  usage(query?: UserUsageParams, options?: Core.RequestOptions): Core.APIPromise<UserUsageResponse>;
  usage(options?: Core.RequestOptions): Core.APIPromise<UserUsageResponse>;
  usage(
    query: UserUsageParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserUsageResponse> {
    if (isRequestOptions(query)) {
      return this.usage({}, query);
    }
    return this._client.get('/user/usage', { query, ...options });
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

export type UserTransactionsResponse = Array<UserTransactionsResponse.UserTransactionsResponseItem>;

export namespace UserTransactionsResponse {
  /**
   * Represents a transaction in our database.
   */
  export interface UserTransactionsResponseItem {
    amount: number;

    timestamp: string;

    transaction_id: string;
  }
}

export interface UserUsageResponse {
  credits_used: number;

  num_entities: number;

  num_relationships: number;

  num_runs: number;
}

export interface UserCreateTestTokenParams {
  credits?: number;

  is_admin?: boolean;
}

export interface UserUsageParams {
  dataset?: string | null;
}

export namespace User {
  export type TokenResponse = UserAPI.TokenResponse;
  export type UserInfo = UserAPI.UserInfo;
  export type UserTransactionsResponse = UserAPI.UserTransactionsResponse;
  export type UserUsageResponse = UserAPI.UserUsageResponse;
  export type UserCreateTestTokenParams = UserAPI.UserCreateTestTokenParams;
  export type UserUsageParams = UserAPI.UserUsageParams;
}
