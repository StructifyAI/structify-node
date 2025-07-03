// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Sessions extends APIResource {
  /**
   * Get events from all jobs in a session's event queue (without removing them).
   */
  getEvents(
    sessionId: string,
    query?: SessionGetEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetSessionEventsResponse>;
  getEvents(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<GetSessionEventsResponse>;
  getEvents(
    sessionId: string,
    query: SessionGetEventsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetSessionEventsResponse> {
    if (isRequestOptions(query)) {
      return this.getEvents(sessionId, {}, query);
    }
    return this._client.get(`/sessions/${sessionId}/events`, { query, ...options });
  }
}

export interface GetSessionEventsResponse {
  count: number;

  events: Array<GetSessionEventsResponse.Event>;
}

export namespace GetSessionEventsResponse {
  export interface Event {
    id: string;

    body: { [key: string]: unknown };

    job_id: string;

    created_at?: string | null;

    node_id?: string | null;
  }
}

/**
 * The body content of a job event
 */
export type JobEventBody =
  | JobEventBody.AgentNavigated
  | JobEventBody.AgentSearched
  | JobEventBody.Completed
  | JobEventBody.Custom;

export namespace JobEventBody {
  export interface AgentNavigated {
    event_type: 'agent_navigated';

    url: string;
  }

  export interface AgentSearched {
    event_type: 'agent_searched';

    query: string;
  }

  export interface Completed {
    event_type: 'completed';

    message?: string | null;
  }

  export interface Custom {
    data: { [key: string]: unknown };

    event_name: string;

    event_type: 'custom';
  }
}

export interface SessionGetEventsParams {
  /**
   * Maximum number of events to fetch (default: 100).
   */
  limit?: number | null;
}

export declare namespace Sessions {
  export {
    type GetSessionEventsResponse as GetSessionEventsResponse,
    type JobEventBody as JobEventBody,
    type SessionGetEventsParams as SessionGetEventsParams,
  };
}
