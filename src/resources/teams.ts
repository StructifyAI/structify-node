// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as TeamsAPI from './teams';
import * as ProjectsAPI from './projects';

export class Teams extends APIResource {
  create(body: TeamCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateTeamResponse> {
    return this._client.post('/team/create', { body, ...options });
  }

  update(
    teamId: string,
    body: TeamUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateTeamResponse> {
    return this._client.put(`/team/${teamId}`, { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<ListTeamsResponse> {
    return this._client.get('/team/list', options);
  }

  delete(teamId: string, options?: Core.RequestOptions): Core.APIPromise<DeleteTeamResponse> {
    return this._client.delete(`/team/${teamId}`, options);
  }

  acceptInvitation(
    body: TeamAcceptInvitationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AcceptInvitationResponse> {
    return this._client.post('/team/invitations/accept', { body, ...options });
  }

  addMember(
    teamId: string,
    body: TeamAddMemberParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddMemberResponse> {
    return this._client.post(`/team/${teamId}/members`, { body, ...options });
  }

  createProject(
    teamId: string,
    body: TeamCreateProjectParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateProjectResponse> {
    return this._client.post(`/team/${teamId}/projects`, { body, ...options });
  }

  creditsUsage(
    teamId: string,
    query: TeamCreditsUsageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditsUsageResponse> {
    return this._client.get(`/team/${teamId}/credits/usage`, { query, ...options });
  }

  get(teamId: string, options?: Core.RequestOptions): Core.APIPromise<GetTeamResponse> {
    return this._client.get(`/team/${teamId}`, options);
  }

  listMembers(teamId: string, options?: Core.RequestOptions): Core.APIPromise<ListMembersResponse> {
    return this._client.get(`/team/${teamId}/members`, options);
  }

  listProjects(teamId: string, options?: Core.RequestOptions): Core.APIPromise<ListProjectsResponse> {
    return this._client.get(`/team/${teamId}/projects`, options);
  }

  removeMember(
    teamId: string,
    userId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RemoveMemberResponse> {
    return this._client.delete(`/team/${teamId}/members/${userId}`, options);
  }
}

export interface AcceptInvitationRequest {
  token: string;

  supabase_user_id?: string | null;
}

export interface AcceptInvitationResponse {
  requires_signup: boolean;

  success: boolean;

  team_id: string;

  team_name: string;

  user_email: string;
}

export interface AddMemberRequest {
  email: string;

  role: TeamRole;
}

export interface AddMemberResponse {
  invitation_sent: boolean;

  membership: UserTeam;
}

export interface CreateProjectRequest {
  name: string;

  description?: string | null;
}

export interface CreateProjectResponse {
  project: ProjectsAPI.Project;
}

export interface CreateTeamRequest {
  name: string;

  description?: string | null;
}

export interface CreateTeamResponse {
  team: Team;
}

export interface CreditsUsageRequest {
  end: string;

  start: string;

  token?: string | null;

  granularity?: Granularity;
}

export interface CreditsUsageResponse {
  timeseries: Array<CreditsUsageTimeseriesPoint>;

  total_credits_added: number;

  total_spent: number;
}

export interface CreditsUsageTimeseriesPoint {
  bucket_start: string;

  groups: { [key: string]: number };
}

export interface DeleteTeamResponse {
  success: boolean;
}

export interface GetTeamResponse {
  subscription_status: TeamSubscriptionStatus;

  team: Team;
}

export type Granularity = 'hour' | 'day' | 'week' | 'month';

export interface ListMembersResponse {
  members: Array<ListMembersResponse.Member>;
}

export namespace ListMembersResponse {
  export interface Member {
    created_at: string;

    email: string;

    role: TeamsAPI.TeamRole;

    team_id: string;

    user_id: string;
  }
}

export interface ListProjectsResponse {
  projects: Array<ProjectsAPI.Project>;
}

export interface ListTeamsResponse {
  teams: Array<TeamWithRole>;
}

export interface RemoveMemberResponse {
  success: boolean;
}

export interface Team {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export type TeamRole = 'member' | 'admin' | 'owner';

export interface TeamSubscriptionStatus {
  has_active_subscription: boolean;

  is_trial: boolean;

  remaining_credits: number;

  /**
   * Represents the different subscription tiers available
   */
  subscription_tier: 'free' | 'free_trial' | 'pro' | 'team' | 'enterprise';

  payment_provider?: string | null;

  trial_expires_at?: string | null;
}

export interface TeamWithRole extends Team {
  role: TeamRole;
}

export interface UpdateTeamRequest {
  description?: string | null;

  name?: string | null;
}

export interface UpdateTeamResponse {
  team: Team;
}

export type UsageGroupKey =
  | 'web'
  | 'pdf'
  | 'derive'
  | 'scrape'
  | 'apollo'
  | 'searchapi'
  | 'newsapi'
  | 'other';

export interface UserTeam {
  id: string;

  created_at: string;

  pending: boolean;

  role: TeamRole;

  team_id: string;

  invitation_expires_at?: string | null;

  invitation_token?: string | null;

  invited_at?: string | null;

  invited_by_user_id?: string | null;

  invitee_email?: string | null;

  user_id?: string | null;
}

export interface TeamCreateParams {
  name: string;

  description?: string | null;
}

export interface TeamUpdateParams {
  description?: string | null;

  name?: string | null;
}

export interface TeamAcceptInvitationParams {
  token: string;

  supabase_user_id?: string | null;
}

export interface TeamAddMemberParams {
  email: string;

  role: TeamRole;
}

export interface TeamCreateProjectParams {
  name: string;

  description?: string | null;
}

export interface TeamCreditsUsageParams {
  /**
   * End time exclusive (UTC)
   */
  end: string;

  /**
   * hour | day | week | month
   */
  granularity: Granularity;

  /**
   * Start time inclusive (UTC)
   */
  start: string;

  /**
   * Optional token ID to filter by
   */
  token?: string | null;
}

export declare namespace Teams {
  export {
    type AcceptInvitationRequest as AcceptInvitationRequest,
    type AcceptInvitationResponse as AcceptInvitationResponse,
    type AddMemberRequest as AddMemberRequest,
    type AddMemberResponse as AddMemberResponse,
    type CreateProjectRequest as CreateProjectRequest,
    type CreateProjectResponse as CreateProjectResponse,
    type CreateTeamRequest as CreateTeamRequest,
    type CreateTeamResponse as CreateTeamResponse,
    type CreditsUsageRequest as CreditsUsageRequest,
    type CreditsUsageResponse as CreditsUsageResponse,
    type CreditsUsageTimeseriesPoint as CreditsUsageTimeseriesPoint,
    type DeleteTeamResponse as DeleteTeamResponse,
    type GetTeamResponse as GetTeamResponse,
    type Granularity as Granularity,
    type ListMembersResponse as ListMembersResponse,
    type ListProjectsResponse as ListProjectsResponse,
    type ListTeamsResponse as ListTeamsResponse,
    type RemoveMemberResponse as RemoveMemberResponse,
    type Team as Team,
    type TeamRole as TeamRole,
    type TeamSubscriptionStatus as TeamSubscriptionStatus,
    type TeamWithRole as TeamWithRole,
    type UpdateTeamRequest as UpdateTeamRequest,
    type UpdateTeamResponse as UpdateTeamResponse,
    type UsageGroupKey as UsageGroupKey,
    type UserTeam as UserTeam,
    type TeamCreateParams as TeamCreateParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamAcceptInvitationParams as TeamAcceptInvitationParams,
    type TeamAddMemberParams as TeamAddMemberParams,
    type TeamCreateProjectParams as TeamCreateProjectParams,
    type TeamCreditsUsageParams as TeamCreditsUsageParams,
  };
}
