// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as TeamsAPI from '../teams';
import * as UserAPI from '../user/user';

export class Users extends APIResource {
  /**
   * Create a user, returning their session token.
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserAPI.TokenResponse> {
    return this._client.post('/admin/users/create', { body, ...options });
  }

  /**
   * Lists all users with their team memberships.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/admin/users/list', options);
  }

  getStats(body: UserGetStatsParams, options?: Core.RequestOptions): Core.APIPromise<UserGetStatsResponse> {
    return this._client.post('/admin/users/get_stats', { body, ...options });
  }

  impersonate(
    body: UserImpersonateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpersonateResponse> {
    return this._client.post('/admin/users/impersonate', { body, ...options });
  }
}

export interface ImpersonateRequest {
  membership_id: string;
}

export interface ImpersonateResponse {
  expires_at: string;

  refresh_token: string;

  refresh_token_expires_at: string;

  session_token: string;
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
    | 'allow_job_deletion'
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

  cost_confirmation_threshold?: number | null;

  cufinder_data?: unknown;

  job_title?: string | null;

  last_activity?: string | null;

  last_selected_team_id?: string | null;

  linkedin_url?: string | null;

  onboarding_session_id?: string | null;

  slack_user_id?: string | null;

  slack_username?: string | null;

  survey_completed_at?: string | null;

  survey_response?: unknown;

  teams_user_id?: string | null;

  teams_user_name?: string | null;
}

export type UserListResponse = Array<UserListResponse.UserListResponseItem>;

export namespace UserListResponse {
  export interface UserListResponseItem extends UsersAPI.User {
    memberships: Array<UserListResponseItem.Membership>;
  }

  export namespace UserListResponseItem {
    export interface Membership {
      membership_id: string;

      role: TeamsAPI.TeamRole;

      team_id: string;

      team_name: string;
    }
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
    | 'allow_job_deletion'
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

export interface UserImpersonateParams {
  membership_id: string;
}

export declare namespace Users {
  export {
    type ImpersonateRequest as ImpersonateRequest,
    type ImpersonateResponse as ImpersonateResponse,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserCreateParams as UserCreateParams,
    type UserGetStatsParams as UserGetStatsParams,
    type UserImpersonateParams as UserImpersonateParams,
  };
}
