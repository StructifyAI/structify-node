// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TeamsAPI from '../teams';
import { JobsList, type JobsListParams } from '../../pagination';

export class Teams extends APIResource {
  /**
   * Lists teams in the system along with their subscription information, credit
   * grants, and member counts. Supports optional pagination via limit and offset
   * query parameters.
   */
  list(
    query?: TeamListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AdminTeamsListResponsesJobsList, AdminTeamsListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<AdminTeamsListResponsesJobsList, AdminTeamsListResponse>;
  list(
    query: TeamListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AdminTeamsListResponsesJobsList, AdminTeamsListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/admin/team/list', AdminTeamsListResponsesJobsList, {
      query,
      ...options,
    });
  }

  cancelSubscription(
    body: TeamCancelSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CancelSubscriptionResponse> {
    return this._client.post('/admin/team/cancel_subscription', { body, ...options });
  }

  createSubscription(
    body: TeamCreateSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateSubscriptionResponse> {
    return this._client.post('/admin/team/create_subscription', { body, ...options });
  }

  grantCredits(
    body: TeamGrantCreditsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GrantCreditsResponse> {
    return this._client.post('/admin/team/grant_credits', { body, ...options });
  }
}

export class AdminTeamsListResponsesJobsList extends JobsList<AdminTeamsListResponse> {}

export interface AdminTeamsListResponse extends TeamsAPI.Team {
  grants: Array<AdminTeamsListResponse.Grant>;

  member_count: number;

  subscription: AdminTeamsListResponse.Subscription;
}

export namespace AdminTeamsListResponse {
  export interface Grant {
    id: string;

    amount: number;

    amount_remaining: number;

    created_at: string;

    source_type: string;

    team_id: string;

    updated_at: string;

    expires_at?: string | null;

    source_ref?: string | null;

    starts_at?: string | null;
  }

  export interface Subscription {
    has_active_subscription: boolean;

    is_trial: boolean;

    remaining_credits: number;

    /**
     * Represents the different subscription tiers available
     */
    subscription_tier: 'free' | 'free_trial' | 'pro' | 'team' | 'enterprise';

    trial_expires_at?: string | null;
  }
}

export interface CancelSubscriptionRequest {
  team_id: string;
}

export interface CancelSubscriptionResponse {
  canceled: boolean;

  team_id: string;
}

export interface CreateSubscriptionResponse {
  is_active: boolean;

  subscription_tier: string;

  team_id: string;
}

export interface CreateTeamSubscriptionRequest {
  billing_interval: string;

  is_active: boolean;

  /**
   * Represents the different subscription tiers available
   */
  subscription_tier: 'free' | 'free_trial' | 'pro' | 'team' | 'enterprise';

  team_id: string;

  external_customer_id?: string | null;

  external_price_id?: string | null;

  external_subscription_id?: string | null;
}

export interface GrantCreditsRequest {
  amount: number;

  source_type: string;

  team_id: string;

  expires_at?: string | null;

  source_ref?: string | null;

  starts_at?: string | null;
}

export interface GrantCreditsResponse {
  amount: number;

  grant_id: string;

  team_id: string;
}

export interface TeamListParams extends JobsListParams {}

export interface TeamCancelSubscriptionParams {
  team_id: string;
}

export interface TeamCreateSubscriptionParams {
  billing_interval: string;

  is_active: boolean;

  /**
   * Represents the different subscription tiers available
   */
  subscription_tier: 'free' | 'free_trial' | 'pro' | 'team' | 'enterprise';

  team_id: string;

  external_customer_id?: string | null;

  external_price_id?: string | null;

  external_subscription_id?: string | null;
}

export interface TeamGrantCreditsParams {
  amount: number;

  source_type: string;

  team_id: string;

  expires_at?: string | null;

  source_ref?: string | null;

  starts_at?: string | null;
}

Teams.AdminTeamsListResponsesJobsList = AdminTeamsListResponsesJobsList;

export declare namespace Teams {
  export {
    type AdminTeamsListResponse as AdminTeamsListResponse,
    type CancelSubscriptionRequest as CancelSubscriptionRequest,
    type CancelSubscriptionResponse as CancelSubscriptionResponse,
    type CreateSubscriptionResponse as CreateSubscriptionResponse,
    type CreateTeamSubscriptionRequest as CreateTeamSubscriptionRequest,
    type GrantCreditsRequest as GrantCreditsRequest,
    type GrantCreditsResponse as GrantCreditsResponse,
    AdminTeamsListResponsesJobsList as AdminTeamsListResponsesJobsList,
    type TeamListParams as TeamListParams,
    type TeamCancelSubscriptionParams as TeamCancelSubscriptionParams,
    type TeamCreateSubscriptionParams as TeamCreateSubscriptionParams,
    type TeamGrantCreditsParams as TeamGrantCreditsParams,
  };
}
