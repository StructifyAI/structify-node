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

  addMember(
    body: TeamAddMemberParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminAddMemberResponse> {
    return this._client.post('/admin/team/add_member', { body, ...options });
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

  expireGrants(
    body: TeamExpireGrantsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExpireGrantsResponse> {
    return this._client.post('/admin/team/expire_grants', { body, ...options });
  }

  extendTrial(
    body: TeamExtendTrialParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExtendTrialResponse> {
    return this._client.post('/admin/team/extend_trial', { body, ...options });
  }

  grantCredits(
    body: TeamGrantCreditsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GrantCreditsResponse> {
    return this._client.post('/admin/team/grant_credits', { body, ...options });
  }

  listMembers(teamId: string, options?: Core.RequestOptions): Core.APIPromise<AdminListMembersResponse> {
    return this._client.get(`/admin/team/${teamId}/members`, options);
  }

  removeMember(
    body: TeamRemoveMemberParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminRemoveMemberResponse> {
    return this._client.post('/admin/team/remove_member', { body, ...options });
  }

  updateSeatsOverride(
    body: TeamUpdateSeatsOverrideParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateSeatsOverrideResponse> {
    return this._client.post('/admin/team/update_seats_override', { body, ...options });
  }
}

export class AdminTeamsListResponsesJobsList extends JobsList<AdminTeamsListResponse> {}

export interface AdminAddMemberRequest {
  email: string;

  role: TeamsAPI.TeamRole;

  team_id: string;
}

export interface AdminAddMemberResponse {
  /**
   * Contains membership information and API token value
   */
  membership: AdminAddMemberResponse.Membership;
}

export namespace AdminAddMemberResponse {
  /**
   * Contains membership information and API token value
   */
  export interface Membership {
    id: string;

    created_at: string;

    pending: boolean;

    role: TeamsAPI.TeamRole;

    team_id: string;

    value: Core.Uploadable;

    invitation_expires_at?: string | null;

    invitation_token?: string | null;

    invited_at?: string | null;

    invited_by_user_id?: string | null;

    invitee_email?: string | null;

    user_id?: string | null;
  }
}

export interface AdminListMembersResponse {
  members: Array<AdminListMembersResponse.Member>;
}

export namespace AdminListMembersResponse {
  export interface Member {
    created_at: string;

    email: string;

    pending: boolean;

    role: TeamsAPI.TeamRole;

    team_id: string;

    user_id?: string | null;
  }
}

export interface AdminRemoveMemberRequest {
  team_id: string;

  user_id: string;
}

export interface AdminRemoveMemberResponse {
  success: boolean;
}

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

export interface ExpireGrantsRequest {
  source_type: string;

  team_id: string;
}

export interface ExpireGrantsResponse {
  expired_count: number;

  team_id: string;
}

export interface ExtendTrialRequest {
  new_expires_at: string;

  team_id: string;
}

export interface ExtendTrialResponse {
  grant_id: string;

  new_expires_at: string;

  team_id: string;
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

export interface UpdateSeatsOverrideRequest {
  team_id: string;

  seats_override?: number | null;
}

export interface UpdateSeatsOverrideResponse {
  team_id: string;

  seats_override?: number | null;
}

export interface TeamListParams extends JobsListParams {}

export interface TeamAddMemberParams {
  email: string;

  role: TeamsAPI.TeamRole;

  team_id: string;
}

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

export interface TeamExpireGrantsParams {
  source_type: string;

  team_id: string;
}

export interface TeamExtendTrialParams {
  new_expires_at: string;

  team_id: string;
}

export interface TeamGrantCreditsParams {
  amount: number;

  source_type: string;

  team_id: string;

  expires_at?: string | null;

  source_ref?: string | null;

  starts_at?: string | null;
}

export interface TeamRemoveMemberParams {
  team_id: string;

  user_id: string;
}

export interface TeamUpdateSeatsOverrideParams {
  team_id: string;

  seats_override?: number | null;
}

Teams.AdminTeamsListResponsesJobsList = AdminTeamsListResponsesJobsList;

export declare namespace Teams {
  export {
    type AdminAddMemberRequest as AdminAddMemberRequest,
    type AdminAddMemberResponse as AdminAddMemberResponse,
    type AdminListMembersResponse as AdminListMembersResponse,
    type AdminRemoveMemberRequest as AdminRemoveMemberRequest,
    type AdminRemoveMemberResponse as AdminRemoveMemberResponse,
    type AdminTeamsListResponse as AdminTeamsListResponse,
    type CancelSubscriptionRequest as CancelSubscriptionRequest,
    type CancelSubscriptionResponse as CancelSubscriptionResponse,
    type CreateSubscriptionResponse as CreateSubscriptionResponse,
    type CreateTeamSubscriptionRequest as CreateTeamSubscriptionRequest,
    type ExpireGrantsRequest as ExpireGrantsRequest,
    type ExpireGrantsResponse as ExpireGrantsResponse,
    type ExtendTrialRequest as ExtendTrialRequest,
    type ExtendTrialResponse as ExtendTrialResponse,
    type GrantCreditsRequest as GrantCreditsRequest,
    type GrantCreditsResponse as GrantCreditsResponse,
    type UpdateSeatsOverrideRequest as UpdateSeatsOverrideRequest,
    type UpdateSeatsOverrideResponse as UpdateSeatsOverrideResponse,
    AdminTeamsListResponsesJobsList as AdminTeamsListResponsesJobsList,
    type TeamListParams as TeamListParams,
    type TeamAddMemberParams as TeamAddMemberParams,
    type TeamCancelSubscriptionParams as TeamCancelSubscriptionParams,
    type TeamCreateSubscriptionParams as TeamCreateSubscriptionParams,
    type TeamExpireGrantsParams as TeamExpireGrantsParams,
    type TeamExtendTrialParams as TeamExtendTrialParams,
    type TeamGrantCreditsParams as TeamGrantCreditsParams,
    type TeamRemoveMemberParams as TeamRemoveMemberParams,
    type TeamUpdateSeatsOverrideParams as TeamUpdateSeatsOverrideParams,
  };
}
