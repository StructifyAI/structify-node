// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Stripe extends APIResource {
  createPortalSession(
    body: StripeCreatePortalSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateSessionResponse> {
    return this._client.post('/user/transactions/stripe/create_portal_session', { body, ...options });
  }

  createSession(
    body: StripeCreateSessionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateSessionResponse> {
    return this._client.post('/user/transactions/stripe/create_session', { body, ...options });
  }

  createSubscription(
    body: StripeCreateSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateSessionResponse> {
    return this._client.post('/user/transactions/stripe/create_subscription', { body, ...options });
  }
}

export interface CreatePortalRequest {
  return_url: string;

  team_id: string;
}

export interface CreateSessionRequest {
  /**
   * Amount in cents (i64)
   */
  credits: number;

  origin: string;

  team_id: string;
}

export interface CreateSessionResponse {
  url: string;
}

export interface CreateSubscriptionRequest {
  origin: string;

  plan: SubscriptionPlan;

  team_id: string;
}

export type SubscriptionPlan = 'Pro' | 'Team';

export interface StripeCreatePortalSessionParams {
  return_url: string;

  team_id: string;
}

export interface StripeCreateSessionParams {
  /**
   * Amount in cents (i64)
   */
  credits: number;

  origin: string;

  team_id: string;
}

export interface StripeCreateSubscriptionParams {
  origin: string;

  plan: SubscriptionPlan;

  team_id: string;
}

export declare namespace Stripe {
  export {
    type CreatePortalRequest as CreatePortalRequest,
    type CreateSessionRequest as CreateSessionRequest,
    type CreateSessionResponse as CreateSessionResponse,
    type CreateSubscriptionRequest as CreateSubscriptionRequest,
    type SubscriptionPlan as SubscriptionPlan,
    type StripeCreatePortalSessionParams as StripeCreatePortalSessionParams,
    type StripeCreateSessionParams as StripeCreateSessionParams,
    type StripeCreateSubscriptionParams as StripeCreateSubscriptionParams,
  };
}
