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

  stripeWebhook(body: StripeStripeWebhookParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/user/transactions/stripe/webhook', { body, ...options });
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

export type StripeStripeWebhookResponse = unknown;

export interface StripeCreateSessionParams {
  /**
   * Amount in cents (i64)
   */
  credits: number;

  origin: string;
}

export interface StripeStripeWebhookParams {
  data: StripeStripeWebhookParams.Data;

  type: string;
}

export namespace StripeStripeWebhookParams {
  export interface Data {
    object: Data.Object;
  }

  export namespace Data {
    export interface Object {
      amount_subtotal?: number | null;

      metadata?: Record<string, string> | null;
    }
  }
}

export declare namespace Stripe {
  export {
    type CreateSessionRequest as CreateSessionRequest,
    type CreateSessionResponse as CreateSessionResponse,
    type StripeStripeWebhookResponse as StripeStripeWebhookResponse,
    type StripeCreateSessionParams as StripeCreateSessionParams,
    type StripeStripeWebhookParams as StripeStripeWebhookParams,
  };
}
