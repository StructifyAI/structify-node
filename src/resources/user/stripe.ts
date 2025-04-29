// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Stripe extends APIResource {
  createSession(
    body: StripeCreateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateSessionResponse> {
    return this._client.post('/user/transactions/stripe/create_session', { body, ...options });
  }
}

export interface CreateSessionRequest {
  /**
   * Amount in cents (i64)
   */
  credits: number;

  origin: string;
}

export interface CreateSessionResponse {
  url: string;
}

export interface StripeCreateSessionParams {
  /**
   * Amount in cents (i64)
   */
  credits: number;

  origin: string;
}

export declare namespace Stripe {
  export {
    type CreateSessionRequest as CreateSessionRequest,
    type CreateSessionResponse as CreateSessionResponse,
    type StripeCreateSessionParams as StripeCreateSessionParams,
  };
}
