// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UserAPI from '../user';

export class Users extends APIResource {
  /**
   * Create a user, returing their API token.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<UserAPI.TokenResponse> {
    return this._client.post('/admin/users/create', options);
  }

  /**
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

export declare namespace Users {
  export { type User as User, type UserListResponse as UserListResponse };
}
