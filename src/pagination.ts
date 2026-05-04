// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

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

export interface AdminTeamListResponse<Item> {
  items: Array<Item>;

  total_count: number;
}

export interface AdminTeamListParams {
  /**
   * The offset to start from
   */
  offset?: number;

  /**
   * The number of items to return
   */
  limit?: number;
}

export class AdminTeamList<Item> extends AbstractPage<Item> implements AdminTeamListResponse<Item> {
  items: Array<Item>;

  total_count: number;

  constructor(
    client: APIClient,
    response: Response,
    body: AdminTeamListResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body.items || [];
    this.total_count = body.total_count || 0;
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<AdminTeamListParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = (this.options.query as AdminTeamListParams).offset ?? 0;
    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    const totalCount = this.total_count;
    if (!totalCount) {
      return null;
    }

    if (currentCount < totalCount) {
      return { params: { offset: currentCount } };
    }

    return null;
  }
}
