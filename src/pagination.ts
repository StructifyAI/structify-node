// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface RunsListResponse<Item> {
  items: Array<Item>;
}

export interface RunsListParams {
  offset?: number;

  limit?: number;
}

export class RunsList<Item> extends AbstractPage<Item> implements RunsListResponse<Item> {
  items: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: RunsListResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.items = body.items || [];
  }

  getPaginatedItems(): Item[] {
    return this.items ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<RunsListParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = (this.options.query as RunsListParams).offset ?? 0;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}
