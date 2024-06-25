// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as AdminUsersAPI from './admin-users';

export class AdminUsers extends APIResource {
  /**
   * Lists all the users in the system.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AdminUserListResponse> {
    return this._client.get('/admin/users/list', options);
  }
}

export interface UserNode {
  email: string;

  user_type?: 'Admin' | 'Public' | 'EndUser';
}

export type AdminUserListResponse = Array<UserNode>;

export namespace AdminUsers {
  export import UserNode = AdminUsersAPI.UserNode;
  export import AdminUserListResponse = AdminUsersAPI.AdminUserListResponse;
}
