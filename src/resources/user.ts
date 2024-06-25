// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as UserAPI from './user';

export class User extends APIResource {
  /**
   * Creates a test token.
   */
  createTestToken(options?: Core.RequestOptions): Core.APIPromise<UserCreateTestTokenResponse> {
    return this._client.post('/user/create_test_token', options);
  }

  /**
   * Enable a source
   */
  info(options?: Core.RequestOptions): Core.APIPromise<UserInfo> {
    return this._client.get('/user/info', options);
  }
}

export interface UserInfo {
  credits_remaining: number;

  credits_used: number;

  is_admin: boolean;

  username: string;
}

export interface UserCreateTestTokenResponse {
  token: string;
}

export namespace User {
  export import UserInfo = UserAPI.UserInfo;
  export import UserCreateTestTokenResponse = UserAPI.UserCreateTestTokenResponse;
}
