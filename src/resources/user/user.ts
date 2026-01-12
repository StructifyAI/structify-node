// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from '../admin/users';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyCreateParams,
  APIKeyInfo,
  APIKeys,
  CreateAPIKeyRequest,
  CreateAPIKeyResponse,
  ListAPIKeysResponse,
} from './api-keys';
import * as StripeAPI from './stripe';
import {
  CreatePortalRequest,
  CreateSessionRequest,
  CreateSessionResponse,
  CreateSubscriptionRequest,
  Stripe,
  StripeCreatePortalSessionParams,
  StripeCreateSessionParams,
  StripeCreateSubscriptionParams,
  SubscriptionPlan,
} from './stripe';

export class User extends APIResource {
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);

  /**
   * Update a user's permissions and type.
   */
  update(body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<UsersAPI.User> {
    return this._client.put('/user/update', { body, ...options });
  }

  enrich(body: UserEnrichParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/user/enrich', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
  jwtToAPIToken(
    jwt: string,
    body: UserJwtToAPITokenParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenResponse> {
    return this._client.post(`/user/jwt_to_api_token/${jwt}`, { body, ...options });
  }

  /**
   * This endpoint allows clients to extend their session by providing both the
   * current session token and refresh token. Upon successful refresh, a new session
   * token is issued and the old session is revoked.
   */
  refresh(body: UserRefreshParams, options?: Core.RequestOptions): Core.APIPromise<RefreshSessionResponse> {
    return this._client.post('/user/refresh', { body, ...options });
  }

  /**
   * Submit user onboarding survey
   */
  surveySubmit(
    body: UserSurveySubmitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SurveySubmissionResponse> {
    return this._client.post('/user/survey/submit', { body, ...options });
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

export interface EnrichUserParams {
  email: string;
}

export interface JwtToAPITokenRequest {
  full_name?: string | null;

  invitation_token?: string | null;
}

export interface RefreshSessionRequest {
  refresh_token: string;

  session_token: string;
}

export interface RefreshSessionResponse {
  expires_at: string;

  refresh_token: string;

  refresh_token_expires_at: string;

  session_token: string;
}

export interface SurveySubmissionRequest {
  survey_response: { [key: string]: unknown };
}

export interface SurveySubmissionResponse {
  message: string;

  success: boolean;
}

export interface TokenResponse {
  permissions: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'>;

  refresh_token: string;

  session_expires_at: string;

  session_token: string;
}

export interface UpdateUserParams {
  updates: UpdateUserParams.Updates;

  current_email?: string | null;
}

export namespace UpdateUserParams {
  export interface Updates {
    apollo_data?: unknown;

    company_description?: string | null;

    company_name?: string | null;

    completed_onboarding?: boolean | null;

    cost_confirmation_threshold?: number | null;

    cufinder_data?: unknown;

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
      | null
    > | null;

    feature_overrides?: unknown;

    full_name?: string | null;

    is_developer?: boolean | null;

    job_title?: string | null;

    last_selected_team_id?: string | null;

    linkedin_url?: string | null;

    onboarding_session_id?: string | null;

    permissions?: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none' | null> | null;

    slack_user_id?: string | null;

    slack_username?: string | null;

    survey_response?: unknown;

    teams_user_id?: string | null;

    teams_user_name?: string | null;

    user_type?: 'admin' | 'public' | 'end_user' | null;
  }
}

export interface UserInfo {
  completed_onboarding: boolean;

  credits_remaining: number;

  credits_used: number;

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
  >;

  full_name: string;

  is_developer: boolean;

  permissions: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'>;

  user_id: string;

  user_type: 'admin' | 'public' | 'end_user';

  username: string;

  company_description?: string | null;

  company_name?: string | null;

  cost_confirmation_threshold?: number | null;

  impersonated_by_email?: string | null;

  job_title?: string | null;

  last_selected_team_id?: string | null;

  linkedin_url?: string | null;

  onboarding_session_id?: string | null;

  slack_user_id?: string | null;

  slack_username?: string | null;

  survey_completed_at?: string | null;
}

export type UserTransactionsResponse = Array<UserTransactionsResponse.UserTransactionsResponseItem>;

export namespace UserTransactionsResponse {
  /**
   * Represents a transaction in our database.
   */
  export interface UserTransactionsResponseItem {
    id: string;

    amount: number;

    membership_id: string;

    timestamp: string;

    credit_grant_id?: string | null;

    job_id?: string | null;
  }
}

export interface UserUsageResponse {
  credits_used: number;

  num_entities: number;

  num_relationships: number;
}

export interface UserUpdateParams {
  updates: UserUpdateParams.Updates;

  current_email?: string | null;
}

export namespace UserUpdateParams {
  export interface Updates {
    apollo_data?: unknown;

    company_description?: string | null;

    company_name?: string | null;

    completed_onboarding?: boolean | null;

    cost_confirmation_threshold?: number | null;

    cufinder_data?: unknown;

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
      | null
    > | null;

    feature_overrides?: unknown;

    full_name?: string | null;

    is_developer?: boolean | null;

    job_title?: string | null;

    last_selected_team_id?: string | null;

    linkedin_url?: string | null;

    onboarding_session_id?: string | null;

    permissions?: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none' | null> | null;

    slack_user_id?: string | null;

    slack_username?: string | null;

    survey_response?: unknown;

    teams_user_id?: string | null;

    teams_user_name?: string | null;

    user_type?: 'admin' | 'public' | 'end_user' | null;
  }
}

export interface UserEnrichParams {
  email: string;
}

export interface UserJwtToAPITokenParams {
  full_name?: string | null;

  invitation_token?: string | null;
}

export interface UserRefreshParams {
  refresh_token: string;

  session_token: string;
}

export interface UserSurveySubmitParams {
  survey_response: { [key: string]: unknown };
}

export interface UserUsageParams {
  dataset?: string | null;
}

User.Stripe = Stripe;
User.APIKeys = APIKeys;

export declare namespace User {
  export {
    type EnrichUserParams as EnrichUserParams,
    type JwtToAPITokenRequest as JwtToAPITokenRequest,
    type RefreshSessionRequest as RefreshSessionRequest,
    type RefreshSessionResponse as RefreshSessionResponse,
    type SurveySubmissionRequest as SurveySubmissionRequest,
    type SurveySubmissionResponse as SurveySubmissionResponse,
    type TokenResponse as TokenResponse,
    type UpdateUserParams as UpdateUserParams,
    type UserInfo as UserInfo,
    type UserTransactionsResponse as UserTransactionsResponse,
    type UserUsageResponse as UserUsageResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserEnrichParams as UserEnrichParams,
    type UserJwtToAPITokenParams as UserJwtToAPITokenParams,
    type UserRefreshParams as UserRefreshParams,
    type UserSurveySubmitParams as UserSurveySubmitParams,
    type UserUsageParams as UserUsageParams,
  };

  export {
    Stripe as Stripe,
    type CreatePortalRequest as CreatePortalRequest,
    type CreateSessionRequest as CreateSessionRequest,
    type CreateSessionResponse as CreateSessionResponse,
    type CreateSubscriptionRequest as CreateSubscriptionRequest,
    type SubscriptionPlan as SubscriptionPlan,
    type StripeCreatePortalSessionParams as StripeCreatePortalSessionParams,
    type StripeCreateSessionParams as StripeCreateSessionParams,
    type StripeCreateSubscriptionParams as StripeCreateSubscriptionParams,
  };

  export {
    APIKeys as APIKeys,
    type APIKeyInfo as APIKeyInfo,
    type CreateAPIKeyRequest as CreateAPIKeyRequest,
    type CreateAPIKeyResponse as CreateAPIKeyResponse,
    type ListAPIKeysResponse as ListAPIKeysResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
  };
}
