// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class User extends APIResource {
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

  permissions: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'>;
}

export interface UserInfo {
  credits_remaining: number;

  credits_used: number;

  feature_flags: Array<
    | 'functional_test'
    | 'pdf_parsing'
    | 'boredm_construction_model'
    | 'generic_suspicious_queue'
    | 'new_use_case_preview'
    | 'none'
  >;

  is_admin: boolean;

  permissions: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'>;

  username: string;
}

export type UserTransactionsResponse = Array<UserTransactionsResponse.UserTransactionsResponseItem>;

export namespace UserTransactionsResponse {
  /**
   * Represents a transaction in our database.
   */
  export interface UserTransactionsResponseItem {
    id: string;

    amount: number;

    timestamp: string;

    token_id: string;

    job_id?: string | null;
  }
}

export interface UserUsageResponse {
  credits_used: number;

  num_entities: number;

  num_jobs: number;

  num_relationships: number;
}

export interface UserUsageParams {
  dataset?: string | null;
}

export declare namespace User {
  export {
    type TokenResponse as TokenResponse,
    type UserInfo as UserInfo,
    type UserTransactionsResponse as UserTransactionsResponse,
    type UserUsageResponse as UserUsageResponse,
    type UserUsageParams as UserUsageParams,
  };
}
