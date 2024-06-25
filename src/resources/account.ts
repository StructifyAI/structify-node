// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as AccountAPI from './account';

export class Account extends APIResource {
  /**
   * Creates a test token.
   */
  createTestToken(options?: Core.RequestOptions): Core.APIPromise<NewToken> {
    return this._client.post('/user/create_test_token', options);
  }

  /**
   * Enable a source
   */
  info(options?: Core.RequestOptions): Core.APIPromise<UserInfoResponse> {
    return this._client.get('/user/info', options);
  }
}

export interface NewToken {
  token: string;
}

export interface UserInfoResponse {
  credits_remaining: number;

  credits_used: number;

  is_admin: boolean;

  username: string;
}

export namespace Account {
  export import NewToken = AccountAPI.NewToken;
  export import UserInfoResponse = AccountAPI.UserInfoResponse;
}
