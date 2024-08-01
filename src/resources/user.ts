// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UserAPI from './user';

export class User extends APIResource {
  /**
   * Creates a test token.
   */
  createTestToken(options?: Core.RequestOptions): Core.APIPromise<NewToken> {
    return this._client.post('/user/create_test_token', options);
  }

  /**
   * Enable a source
   */
  info(options?: Core.RequestOptions): Core.APIPromise<UserInfo> {
    return this._client.get('/user/info', options);
  }

  /**
   * Creates a test token.
   */
  usage(options?: Core.RequestOptions): Core.APIPromise<NewToken> {
    return this._client.get('/user/usage', options);
  }
}

export interface NewToken {
  token: string;
}

export interface UserInfo {
  credits_remaining: number;

  credits_used: number;

  is_admin: boolean;

  username: string;
}

export namespace User {
  export import NewToken = UserAPI.NewToken;
  export import UserInfo = UserAPI.UserInfo;
}
