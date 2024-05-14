// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as UsersAPI from './users';

export class Users extends APIResource {
  /**
   * Gets all the users.
   *
   * Lists all the users in the system.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/admin/users/list', options);
  }
}

export interface User {
  email: string;

  user_type?: 'Admin' | 'Public' | 'EndUser';
}

export type UserListResponse = Array<User>;

export namespace Users {
  export import User = UsersAPI.User;
  export import UserListResponse = UsersAPI.UserListResponse;
}
