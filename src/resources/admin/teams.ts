// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TeamsAPI from '../teams';

export class Teams extends APIResource {
  /**
   * Lists all teams in the system along with their subscription information and
   * member counts.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TeamListResponse> {
    return this._client.get('/admin/teams/list', options);
  }
}

export interface AdminTeamsListResponse extends TeamsAPI.Team {
  member_count: number;

  subscription: AdminTeamsListResponse.Subscription;
}

export namespace AdminTeamsListResponse {
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

export type TeamListResponse = Array<AdminTeamsListResponse>;

export declare namespace Teams {
  export { type AdminTeamsListResponse as AdminTeamsListResponse, type TeamListResponse as TeamListResponse };
}
