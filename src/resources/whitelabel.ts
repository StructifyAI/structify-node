// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Whitelabel extends APIResource {
  estimateCost(
    service: string,
    path_: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EstimateCostResponse> {
    return this._client.get(`/whitelabel/${service}/estimate-cost/${path_}`, options);
  }

  proxyGet(service: string, path_: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/whitelabel/${service}/${path_}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  proxyPost(service: string, path_: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/whitelabel/${service}/${path_}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EstimateCostResponse {
  estimated_credits: number;
}

export declare namespace Whitelabel {
  export { type EstimateCostResponse as EstimateCostResponse };
}
