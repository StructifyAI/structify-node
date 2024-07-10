// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface ResourcesRunsListResponse<Item> {
  data: Array<Item>;
}

export interface ResourcesRunsListParams {
  /**
   * The offset to start from
   */
  offset?: number;

  /**
   * The number of items to return
   */
  limit?: number;
}

export class ResourcesRunsList<Item> extends AbstractPage<Item> implements ResourcesRunsListResponse<Item> {
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: ResourcesRunsListResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<ResourcesRunsListParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = (this.options.query as ResourcesRunsListParams).offset ?? 0;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}
