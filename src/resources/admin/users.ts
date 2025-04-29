// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as UserAPI from '../user/user';

export class Users extends APIResource {
  /**
   * Create a user, returing their API token.
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserAPI.TokenResponse> {
    return this._client.post('/admin/users/create', { body, ...options });
  }

  /**
   * Update a user's permissions and type.
   */
  update(body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.put('/admin/users/update', { body, ...options });
  }

  /**
   * Lists all the users in the system along with their associated API tokens.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/admin/users/list', options);
  }

  /**
   * get the credit balance of a user by email.
   */
  getCredits(
    body: UserGetCreditsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetCreditsResponse> {
    return this._client.post('/admin/users/get_credits', { body, ...options });
  }

  getStats(body: UserGetStatsParams, options?: Core.RequestOptions): Core.APIPromise<UserGetStatsResponse> {
    return this._client.post('/admin/users/get_stats', { body, ...options });
  }

  /**
   * set the credit balance of a user, returing that new credit balance.
   */
  setCredits(
    body: UserSetCreditsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSetCreditsResponse> {
    return this._client.post('/admin/users/set_credits', { body, ...options });
  }
}

export interface User {
  id: string;

  created_at: string;

  email: string;

  feature_flags: Array<
    | 'functional_test'
    | 'pdf_parsing'
    | 'boredm_construction_model'
    | 'generic_suspicious_queue'
    | 'new_use_case_preview'
    | 'none'
    | null
  >;

  permissions: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none' | null>;

  updated_at: string;

  user_type: 'admin' | 'public' | 'end_user';
}

export type UserListResponse = Array<UserListResponse.UserListResponseItem>;

export namespace UserListResponse {
  export interface UserListResponseItem extends UsersAPI.User {
    balance: number;

    tokens: Array<string>;
  }
}

export interface UserGetCreditsResponse {
  credit_count: number;
}

export type UserGetStatsResponse = Array<UserGetStatsResponse.UserGetStatsResponseItem>;

export namespace UserGetStatsResponse {
  export interface UserGetStatsResponseItem {
    job_count: number;

    period: string;
  }
}

export interface UserSetCreditsResponse {
  credit_count: number;
}

export interface UserCreateParams {
  credit_count?: number | null;

  email?: string | null;

  feature_flags?: Array<
    | 'functional_test'
    | 'pdf_parsing'
    | 'boredm_construction_model'
    | 'generic_suspicious_queue'
    | 'new_use_case_preview'
    | 'none'
  >;

  is_admin?: boolean;

  permissions?: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'>;

  test?: boolean;
}

export interface UserUpdateParams {
  current_email: string;

  new_email?: string | null;

  new_feature_flags?: Array<
    | 'functional_test'
    | 'pdf_parsing'
    | 'boredm_construction_model'
    | 'generic_suspicious_queue'
    | 'new_use_case_preview'
    | 'none'
  > | null;

  new_permissions?: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'> | null;
}

export interface UserGetCreditsParams {
  user_email?: string | null;

  user_token?: string | null;
}

export interface UserGetStatsParams {
  bucket?: 'Second' | 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Quarter' | 'Year' | 'Decade';

  end_date?: string;

  start_date?: string;

  user_email?: string | null;

  user_token?: string | null;
}

export interface UserSetCreditsParams {
  credit_count: number;

  user_email: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserGetCreditsResponse as UserGetCreditsResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserSetCreditsResponse as UserSetCreditsResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserGetCreditsParams as UserGetCreditsParams,
    type UserGetStatsParams as UserGetStatsParams,
    type UserSetCreditsParams as UserSetCreditsParams,
  };
}
