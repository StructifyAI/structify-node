// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from '../admin/users';
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

  /**
   * Update a user's permissions and type.
   */
  update(body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<UsersAPI.User> {
    return this._client.put('/user/update', { body, ...options });
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

export interface SurveySubmissionRequest {
  survey_response: { [key: string]: unknown };
}

export interface SurveySubmissionResponse {
  message: string;

  success: boolean;
}

export interface TokenResponse {
  token: string;

  permissions: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'>;
}

export interface UpdateUserParams {
  updates: UpdateUserParams.Updates;

  current_email?: string | null;
}

export namespace UpdateUserParams {
  export interface Updates {
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
    > | null;

    full_name?: string | null;

    is_developer?: boolean | null;

    permissions?: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'> | null;

    user_type?: 'admin' | 'public' | 'end_user' | null;
  }
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
    | 'bedrock_codegen'
    | 'cerebras_codegen'
    | 'gemini25pro'
    | 'claude_sonnet4'
    | 'none'
  >;

  full_name: string;

  is_developer: boolean;

  permissions: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'>;

  user_id: string;

  user_type: 'admin' | 'public' | 'end_user';

  username: string;

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

    timestamp: string;

    token_id: string;

    credit_grant_id?: string | null;

    external_service?: 'People' | 'Search' | 'News' | null;

    job_id?: string | null;
  }
}

export interface UserUsageResponse {
  credits_used: number;

  num_entities: number;

  num_jobs: number;

  num_relationships: number;
}

export interface UserUpdateParams {
  updates: UserUpdateParams.Updates;

  current_email?: string | null;
}

export namespace UserUpdateParams {
  export interface Updates {
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
    > | null;

    full_name?: string | null;

    is_developer?: boolean | null;

    permissions?: Array<'labeler' | 'qa_labeler' | 'debug' | 'human_llm' | 'none'> | null;

    user_type?: 'admin' | 'public' | 'end_user' | null;
  }
}

export interface UserSurveySubmitParams {
  survey_response: { [key: string]: unknown };
}

export interface UserUsageParams {
  dataset?: string | null;
}

User.Stripe = Stripe;

export declare namespace User {
  export {
    type SurveySubmissionRequest as SurveySubmissionRequest,
    type SurveySubmissionResponse as SurveySubmissionResponse,
    type TokenResponse as TokenResponse,
    type UpdateUserParams as UpdateUserParams,
    type UserInfo as UserInfo,
    type UserTransactionsResponse as UserTransactionsResponse,
    type UserUsageResponse as UserUsageResponse,
    type UserUpdateParams as UserUpdateParams,
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
}
