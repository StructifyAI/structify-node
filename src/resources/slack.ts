// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Slack extends APIResource {
  /**
   * This endpoint receives events from Slack when users mention @structify. It
   * handles URL verification challenges and app mention events. Requires proper
   * authentication via StructifyUser - no fake users created.
   */
  events(body: SlackEventsParams, options?: Core.RequestOptions): Core.APIPromise<SlackAPIResponse> {
    return this._client.post('/slack/events', { body, ...options });
  }

  /**
   * Get current user's Slack connection status
   */
  status(options?: Core.RequestOptions): Core.APIPromise<SlackConnectionStatus> {
    return this._client.get('/slack/status', options);
  }

  /**
   * Create Slack user mapping directly from token data
   */
  userMapping(
    body: SlackUserMappingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SlackUserMappingResponse> {
    return this._client.post('/slack/user-mapping', { body, ...options });
  }
}

export type SlackAPIResponse = SlackAPIResponse.SlackChallengeResponse | SlackAPIResponse.SlackEventResponse;

export namespace SlackAPIResponse {
  export interface SlackChallengeResponse {
    challenge: string;
  }

  export interface SlackEventResponse {
    ok: boolean;

    message?: string | null;
  }
}

export interface SlackConnectionStatus {
  connected: boolean;

  slack_team_id?: string | null;

  slack_username?: string | null;
}

export type SlackEventPayload = SlackEventPayload.URLVerification | SlackEventPayload.EventCallback;

export namespace SlackEventPayload {
  export interface URLVerification {
    challenge: string;

    type: 'url_verification';

    token?: string | null;
  }

  export interface EventCallback {
    event: EventCallback.Event;

    team_id: string;

    type: 'event_callback';

    api_app_id?: string | null;

    authed_users?: Array<string> | null;

    event_context?: string | null;

    event_id?: string | null;

    event_time?: number | null;
  }

  export namespace EventCallback {
    export interface Event {
      channel: string;

      text: string;

      ts: string;

      type: 'app_mention';

      user: string;

      channel_type?: string | null;

      client_msg_id?: string | null;

      event_ts?: string | null;

      team?: string | null;

      thread_ts?: string | null;
    }
  }
}

export interface SlackUserMappingRequest {
  slack_team_id: string;

  slack_user_id: string;

  slack_username?: string | null;
}

export interface SlackUserMappingResponse {
  message: string;

  success: boolean;
}

export type SlackEventsParams = SlackEventsParams.Variant0 | SlackEventsParams.Variant1;

export declare namespace SlackEventsParams {
  export interface Variant0 {
    challenge: string;

    type: 'url_verification';

    token?: string | null;
  }

  export interface Variant1 {
    event: Variant1.Event;

    team_id: string;

    type: 'event_callback';

    api_app_id?: string | null;

    authed_users?: Array<string> | null;

    event_context?: string | null;

    event_id?: string | null;

    event_time?: number | null;
  }

  export namespace Variant1 {
    export interface Event {
      channel: string;

      text: string;

      ts: string;

      type: 'app_mention';

      user: string;

      channel_type?: string | null;

      client_msg_id?: string | null;

      event_ts?: string | null;

      team?: string | null;

      thread_ts?: string | null;
    }
  }
}

export interface SlackUserMappingParams {
  slack_team_id: string;

  slack_user_id: string;

  slack_username?: string | null;
}

export declare namespace Slack {
  export {
    type SlackAPIResponse as SlackAPIResponse,
    type SlackConnectionStatus as SlackConnectionStatus,
    type SlackEventPayload as SlackEventPayload,
    type SlackUserMappingRequest as SlackUserMappingRequest,
    type SlackUserMappingResponse as SlackUserMappingResponse,
    type SlackEventsParams as SlackEventsParams,
    type SlackUserMappingParams as SlackUserMappingParams,
  };
}
