// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Image extends APIResource {
  /**
   * Returns an object containing the image bytes
   */
  get(hash: string, options?: Core.RequestOptions): Core.APIPromise<ImageGetResponse> {
    return this._client.get(`/images/${hash}`, options);
  }
}

export interface ImageGetResponse {
  bytes: Core.Uploadable;
}

export declare namespace Image {
  export { type ImageGetResponse as ImageGetResponse };
}
