// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Image extends APIResource {
  /**
   * Returns the raw image bytes with appropriate content-type header
   */
  get(hash: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/images/${hash}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
