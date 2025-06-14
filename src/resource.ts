// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Structify } from './index';

export abstract class APIResource {
  protected _client: Structify;

  constructor(client: Structify) {
    this._client = client;
  }
}
