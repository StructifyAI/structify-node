// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';
import * as AnalyticsAPI from './resources/analytics';

export interface AnalyticsEventsResponse<Item> {
  items: AnalyticsAPI.Event;

  next_cursor: string;
}

export interface AnalyticsEventsParams {
  /**
   * Opaque cursor from the previous page's next_cursor.
   */
  cursor?: string;

  /**
   * Maximum number of events to return.
   */
  limit?: number;
}

export class AnalyticsEvents<Item> extends AbstractPage<Item> implements AnalyticsEventsResponse<Item> {
  items: AnalyticsAPI.Event;

  next_cursor: string;

  constructor(
    client: APIClient,
    response: Response,
    body: AnalyticsEventsResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body.items || {};
    this.next_cursor = body.next_cursor || '';
  }

  getPaginatedItems(): Item[] {
    return this.data;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<AnalyticsEventsParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.next_cursor;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        cursor,
      },
    };
  }
}

export type JobsListResponse<Item> = Item[];

export interface JobsListParams {
  /**
   * The offset to start from
   */
  offset?: number;

  /**
   * The number of items to return
   */
  limit?: number;
}

export class JobsList<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: JobsListResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<JobsListParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = (this.options.query as JobsListParams).offset ?? 0;
    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}

export type ListConnectorCatalogResponse<Item> = Item[];

export interface ListConnectorCatalogParams {
  /**
   * The offset to start from
   */
  offset?: number;

  /**
   * The number of items to return
   */
  limit?: number;
}

export class ListConnectorCatalog<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: ListConnectorCatalogResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ListConnectorCatalogParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = (this.options.query as ListConnectorCatalogParams).offset ?? 0;
    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}
