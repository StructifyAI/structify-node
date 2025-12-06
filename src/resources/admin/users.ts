// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as UserAPI from '../user/user';

export class Users extends APIResource {
  /**
   * Create a user, returning their session token.
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserAPI.TokenResponse> {
    return this._client.post('/admin/users/create', { body, ...options });
  }

  /**
   * Lists all the users in the system along with their associated API tokens.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/admin/users/list', options);
  }

  getStats(body: UserGetStatsParams, options?: Core.RequestOptions): Core.APIPromise<UserGetStatsResponse> {
    return this._client.post('/admin/users/get_stats', { body, ...options });
  }
}

export interface User {
  id: string;

  completed_onboarding: boolean;

  created_at: string;

  email: string;

  feature_flags: Array<
    | 'functional_test'
    | 'pdf_parsing'
    | 'boredm_construction_model'
    | 'generic_suspicious_queue'
    | 'new_use_case_preview'
    | 'bedrock_codegen'
    | 'cerebras_codegen'
    | 'gemini25pro'
    | 'claude_sonnet4'
    | 'none'
    | null
  >;

  feature_overrides: { [key: string]: unknown };

  full_name: string;

  is_developer: boolean;

  permissions: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none' | null>;

  updated_at: string;

  user_type: 'admin' | 'public' | 'end_user';

  apollo_data?: unknown;

  company_description?: string | null;

  company_name?: string | null;

  cufinder_data?: unknown;

  job_title?: string | null;

  last_activity?: string | null;

  last_selected_team_id?: string | null;

  linkedin_url?: string | null;

  onboarding_session_id?: string | null;

  survey_completed_at?: string | null;

  survey_response?: unknown;
}

export type UserListResponse = Array<UserListResponse.UserListResponseItem>;

export namespace UserListResponse {
  export interface UserListResponseItem extends UsersAPI.User {
    balance: number;

    tokens: Array<string>;
  }
}

export type UserGetStatsResponse = Array<UserGetStatsResponse.UserGetStatsResponseItem>;

export namespace UserGetStatsResponse {
  export interface UserGetStatsResponseItem {
    job_count: number;

    period: string;
  }
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
    | 'bedrock_codegen'
    | 'cerebras_codegen'
    | 'gemini25pro'
    | 'claude_sonnet4'
    | 'none'
  >;

  full_name?: string | null;

  is_admin?: boolean;

  permissions?: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'>;

  test?: boolean;
}

export interface UserGetStatsParams {
  bucket?: 'Second' | 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Quarter' | 'Year' | 'Decade';

  end_date?: string;

  start_date?: string;

  user_email?: string | null;

  user_token?: string | null;
}

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserCreateParams as UserCreateParams,
    type UserGetStatsParams as UserGetStatsParams,
  };
}
