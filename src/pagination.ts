// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export type PaginationResponse<Item> = Item[];

export interface PaginationParams {
  /**
   * The offset to start from
   */
  offset?: number;

  /**
   * The number of items to return
   */
  limit?: number;
}

export class Pagination<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: PaginationResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PaginationParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = (this.options.query as PaginationParams).offset ?? 0;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}
