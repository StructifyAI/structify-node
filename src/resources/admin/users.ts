// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Users extends APIResource {
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
