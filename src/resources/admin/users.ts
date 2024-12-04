// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UserAPI from '../user';

export class Users extends APIResource {
  /**
   * Create a user, returing their API token.
   */
  create(params?: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserAPI.TokenResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<UserAPI.TokenResponse>;
  create(
    params: UserCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserAPI.TokenResponse> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { credit_count, email, is_admin, test } = params;
    return this._client.post('/admin/users/create', {
      query: { credit_count, email, is_admin, test },
      ...options,
    });
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

export interface UserCreateParams {
  credit_count?: number | null;

  email?: string | null;

  is_admin?: boolean;

  test?: boolean;
}

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
  };
}
