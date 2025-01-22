// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as UserAPI from '../user';

export class Users extends APIResource {
  /**
   * Create a user, returing their API token.
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserAPI.TokenResponse> {
    return this._client.post('/admin/users/create', { body, ...options });
  }

  /**
   * Lists all the users in the system.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/admin/users/list', options);
  }

  /**
   * get the credit balance of a user by email.
   */
  getCredits(
    body: UserGetCreditsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetCreditsResponse> {
    return this._client.post('/admin/users/get_credits', { body, ...options });
  }

  /**
   * set the credit balance of a user, returing that new credit balance.
   */
  setCredits(
    body: UserSetCreditsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSetCreditsResponse> {
    return this._client.post('/admin/users/set_credits', { body, ...options });
  }
}

export interface User {
  email: string;

  permissions?: Array<'pdf_parsing' | 'labeler' | 'debug' | 'none'> | null;

  user_type?: 'Admin' | 'Public' | 'EndUser';
}

export type UserListResponse = Array<User>;

export interface UserGetCreditsResponse {
  credit_count: number;
}

export interface UserSetCreditsResponse {
  credit_count: number;
}

export interface UserCreateParams {
  credit_count?: number | null;

  email?: string | null;

  is_admin?: boolean;

  permissions?: Array<'pdf_parsing' | 'labeler' | 'debug' | 'none'> | null;

  test?: boolean;
}

export interface UserGetCreditsParams {
  user_email?: string | null;

  user_token?: string | null;
}

export interface UserSetCreditsParams {
  credit_count: number;

  user_email: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserGetCreditsResponse as UserGetCreditsResponse,
    type UserSetCreditsResponse as UserSetCreditsResponse,
    type UserCreateParams as UserCreateParams,
    type UserGetCreditsParams as UserGetCreditsParams,
    type UserSetCreditsParams as UserSetCreditsParams,
  };
}
