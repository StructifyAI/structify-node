// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Webhook extends APIResource {
  trigger(
    body: WebhookTriggerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookTriggerResponse> {
    return this._client.post('/webhook/trigger', { body, ...options });
  }
}

export interface WebhookTriggerRequest {
  workflow_schedule_id: string;

  workflow_parameters?: { [key: string]: { [key: string]: unknown } };
}

export interface WebhookTriggerResponse {
  message: string;

  success: boolean;

  sandbox_id?: string | null;

  tunnel_url?: string | null;
}

export interface WebhookTriggerParams {
  workflow_schedule_id: string;

  workflow_parameters?: { [key: string]: { [key: string]: unknown } };
}

export declare namespace Webhook {
  export {
    type WebhookTriggerRequest as WebhookTriggerRequest,
    type WebhookTriggerResponse as WebhookTriggerResponse,
    type WebhookTriggerParams as WebhookTriggerParams,
  };
}
