// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TeamsAPI from '../teams';

/**
 * Admin endpoints
 */
export class Teams extends APIResource {
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

  /**
   * Drop the manager pointer for a managed team.
   */
  deleteManagementRelationship(
    managedTeamId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeleteManagementRelationshipResponse> {
    return this._client.delete(`/admin/team/${managedTeamId}/management_relationship`, options);
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

  /**
   * Look up the manager pointer for a managed team. 404 if no manager is set.
   */
  getManagementRelationship(
    managedTeamId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagementRelationshipResponse> {
    return this._client.get(`/admin/team/${managedTeamId}/management_relationship`, options);
  }

  grantCredits(
    body: TeamGrantCreditsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GrantCreditsResponse> {
    return this._client.post('/admin/team/grant_credits', { body, ...options });
  }

  /**
   * List management relationships, optionally filtered by manager team.
   */
  listManagementRelationships(
    query?: TeamListManagementRelationshipsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListManagementRelationshipsResponse>;
  listManagementRelationships(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListManagementRelationshipsResponse>;
  listManagementRelationships(
    query: TeamListManagementRelationshipsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListManagementRelationshipsResponse> {
    if (isRequestOptions(query)) {
      return this.listManagementRelationships({}, query);
    }
    return this._client.get('/admin/team/management_relationships', { query, ...options });
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

  /**
   * Structify employees (`is_admin`) for any team, and members of a managing team
   * for any team that managing team manages. Idempotent: re-granting resets
   * `expires_at`. 400 if the caller already has a regular live membership on the
   * team.
   */
  setAccess(body: TeamSetAccessParams, options?: Core.RequestOptions): Core.APIPromise<SetAccessResponse> {
    return this._client.post('/admin/team/set_access', { body, ...options });
  }

  updateSeatsOverride(
    body: TeamUpdateSeatsOverrideParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateSeatsOverrideResponse> {
    return this._client.post('/admin/team/update_seats_override', { body, ...options });
  }

  /**
   * re-posting with a different manager pointer overwrites the prior row.
   */
  upsertManagementRelationship(
    body: TeamUpsertManagementRelationshipParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ManagementRelationshipResponse> {
    return this._client.post('/admin/team/management_relationship', { body, ...options });
  }
}

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

    /**
     * Optional auto-revoke timestamp. Null means the membership has no cutoff.
     */
    expires_at?: string | null;

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

    membership_id: string;

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

export interface DeleteManagementRelationshipResponse {
  deleted: boolean;
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

export interface ListManagementRelationshipsResponse {
  relationships: Array<ManagementRelationshipDetail>;
}

/**
 * A management relationship plus the human-readable names of both teams, so admin
 * UIs don't need a separate lookup to render labels.
 */
export interface ManagementRelationshipDetail extends TeamManagementRelationship {
  managed_team_name: string;

  manager_team_name: string;
}

export interface ManagementRelationshipResponse {
  /**
   * A management relationship plus the human-readable names of both teams, so admin
   * UIs don't need a separate lookup to render labels.
   */
  relationship: ManagementRelationshipDetail;
}

export type SetAccessAction = 'grant' | 'revoke';

export interface SetAccessRequest {
  action: SetAccessAction;

  team_id: string;

  /**
   * Cutoff for the SuperAdmin membership. `None` means no expiry — useful for
   * permanent admin staffing. Ignored when `action = Revoke`.
   */
  expires_at?: string | null;
}

export interface SetAccessResponse {
  action: SetAccessAction;

  expires_at?: string | null;

  membership_id?: string | null;
}

export interface TeamManagementRelationship {
  id: string;

  created_at: string;

  managed_team_id: string;

  manager_team_id: string;

  updated_at: string;
}

export interface UpdateSeatsOverrideRequest {
  team_id: string;

  seats_override?: number | null;
}

export interface UpdateSeatsOverrideResponse {
  team_id: string;

  seats_override?: number | null;
}

export interface UpsertManagementRelationshipRequest {
  managed_team_id: string;

  manager_team_id: string;
}

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

export interface TeamListManagementRelationshipsParams {
  /**
   * Optional filter: only return relationships whose manager is this team.
   */
  manager_team_id?: string | null;
}

export interface TeamRemoveMemberParams {
  team_id: string;

  user_id: string;
}

export interface TeamSetAccessParams {
  action: SetAccessAction;

  team_id: string;

  /**
   * Cutoff for the SuperAdmin membership. `None` means no expiry — useful for
   * permanent admin staffing. Ignored when `action = Revoke`.
   */
  expires_at?: string | null;
}

export interface TeamUpdateSeatsOverrideParams {
  team_id: string;

  seats_override?: number | null;
}

export interface TeamUpsertManagementRelationshipParams {
  managed_team_id: string;

  manager_team_id: string;
}

export declare namespace Teams {
  export {
    type AdminAddMemberRequest as AdminAddMemberRequest,
    type AdminAddMemberResponse as AdminAddMemberResponse,
    type AdminListMembersResponse as AdminListMembersResponse,
    type AdminRemoveMemberRequest as AdminRemoveMemberRequest,
    type AdminRemoveMemberResponse as AdminRemoveMemberResponse,
    type CancelSubscriptionRequest as CancelSubscriptionRequest,
    type CancelSubscriptionResponse as CancelSubscriptionResponse,
    type CreateSubscriptionResponse as CreateSubscriptionResponse,
    type CreateTeamSubscriptionRequest as CreateTeamSubscriptionRequest,
    type DeleteManagementRelationshipResponse as DeleteManagementRelationshipResponse,
    type ExpireGrantsRequest as ExpireGrantsRequest,
    type ExpireGrantsResponse as ExpireGrantsResponse,
    type ExtendTrialRequest as ExtendTrialRequest,
    type ExtendTrialResponse as ExtendTrialResponse,
    type GrantCreditsRequest as GrantCreditsRequest,
    type GrantCreditsResponse as GrantCreditsResponse,
    type ListManagementRelationshipsResponse as ListManagementRelationshipsResponse,
    type ManagementRelationshipDetail as ManagementRelationshipDetail,
    type ManagementRelationshipResponse as ManagementRelationshipResponse,
    type SetAccessAction as SetAccessAction,
    type SetAccessRequest as SetAccessRequest,
    type SetAccessResponse as SetAccessResponse,
    type TeamManagementRelationship as TeamManagementRelationship,
    type UpdateSeatsOverrideRequest as UpdateSeatsOverrideRequest,
    type UpdateSeatsOverrideResponse as UpdateSeatsOverrideResponse,
    type UpsertManagementRelationshipRequest as UpsertManagementRelationshipRequest,
    type TeamAddMemberParams as TeamAddMemberParams,
    type TeamCancelSubscriptionParams as TeamCancelSubscriptionParams,
    type TeamCreateSubscriptionParams as TeamCreateSubscriptionParams,
    type TeamExpireGrantsParams as TeamExpireGrantsParams,
    type TeamExtendTrialParams as TeamExtendTrialParams,
    type TeamGrantCreditsParams as TeamGrantCreditsParams,
    type TeamListManagementRelationshipsParams as TeamListManagementRelationshipsParams,
    type TeamRemoveMemberParams as TeamRemoveMemberParams,
    type TeamSetAccessParams as TeamSetAccessParams,
    type TeamUpdateSeatsOverrideParams as TeamUpdateSeatsOverrideParams,
    type TeamUpsertManagementRelationshipParams as TeamUpsertManagementRelationshipParams,
  };
}
