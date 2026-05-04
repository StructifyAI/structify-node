// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Analytics extends APIResource {
  createTracker(
    body: AnalyticsCreateTrackerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateTrackerResponse> {
    return this._client.post('/analytics/tracker', { body, ...options });
  }

  listEvents(
    trackerId: string,
    query?: AnalyticsListEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListEventsResponse>;
  listEvents(trackerId: string, options?: Core.RequestOptions): Core.APIPromise<ListEventsResponse>;
  listEvents(
    trackerId: string,
    query: AnalyticsListEventsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListEventsResponse> {
    if (isRequestOptions(query)) {
      return this.listEvents(trackerId, {}, query);
    }
    return this._client.get(`/analytics/${trackerId}/events`, { query, ...options });
  }

  listTrackers(
    query: AnalyticsListTrackersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListTrackersResponse> {
    return this._client.get('/analytics/tracker', { query, ...options });
  }

  revokeTracker(trackerId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/analytics/tracker/${trackerId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CreateTrackerRequest {
  name: string;

  team_id: string;

  allowed_origins?: Array<string>;
}

export interface CreateTrackerResponse {
  post_path: string;

  tracker: Tracker;
}

export interface Event {
  collector_tstamp: string;

  event_id: string;

  tracker_id: string;

  app_id?: string | null;

  contexts?: unknown | null;

  device?: unknown | null;

  domain_sessionid?: string | null;

  domain_sessionidx?: number | null;

  domain_userid?: string | null;

  dvce_created_tstamp?: string | null;

  event?: string | null;

  event_name?: string | null;

  mkt_campaign?: string | null;

  mkt_clickid?: string | null;

  mkt_content?: string | null;

  mkt_medium?: string | null;

  mkt_network?: string | null;

  mkt_source?: string | null;

  mkt_term?: string | null;

  network_userid?: string | null;

  page_referrer?: string | null;

  page_title?: string | null;

  page_url?: string | null;

  page_urlhost?: string | null;

  page_urlpath?: string | null;

  page_urlquery?: string | null;

  platform?: string | null;

  unstruct_event?: unknown | null;

  user_id?: string | null;

  user_ipaddress?: string | null;

  useragent?: string | null;

  v_tracker?: string | null;
}

export interface ListEventsResponse {
  data: Array<Event>;

  /**
   * Cursor to fetch the next page; `None` when the current page is the last one.
   */
  next_cursor?: string | null;
}

export interface ListTrackersQuery {
  team_id: string;
}

export interface ListTrackersResponse {
  trackers: Array<Tracker>;
}

export interface Tracker {
  id: string;

  allowed_origins: Array<string>;

  created_at: string;

  name: string;

  team_id: string;

  revoked_at?: string | null;
}

export interface AnalyticsCreateTrackerParams {
  name: string;

  team_id: string;

  allowed_origins?: Array<string>;
}

export interface AnalyticsListEventsParams {
  /**
   * Opaque cursor returned as `next_cursor` on the previous page. Omit on the first
   * request.
   */
  cursor?: string | null;

  /**
   * Maximum number of events to return. Defaults to 100, capped at 1000.
   */
  limit?: number | null;
}

export interface AnalyticsListTrackersParams {
  /**
   * Team to list trackers for
   */
  team_id: string;
}

export declare namespace Analytics {
  export {
    type CreateTrackerRequest as CreateTrackerRequest,
    type CreateTrackerResponse as CreateTrackerResponse,
    type Event as Event,
    type ListEventsResponse as ListEventsResponse,
    type ListTrackersQuery as ListTrackersQuery,
    type ListTrackersResponse as ListTrackersResponse,
    type Tracker as Tracker,
    type AnalyticsCreateTrackerParams as AnalyticsCreateTrackerParams,
    type AnalyticsListEventsParams as AnalyticsListEventsParams,
    type AnalyticsListTrackersParams as AnalyticsListTrackersParams,
  };
}
