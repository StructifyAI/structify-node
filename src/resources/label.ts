// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Label extends APIResource {
  /**
   * Update a step as part of the human LLM.
   */
  verify(body: LabelVerifyParams, options?: Core.RequestOptions): Core.APIPromise<LabelVerifyResponse> {
    return this._client.post('/label/verify', { body, ...options });
  }
}

export interface LabelVerifyResponse {
  error_message?: string | null;
}

export interface LabelVerifyParams {
  better_response: string;

  training_step_id: string;

  verify_type: 'DeprecatedToolCalling' | 'ActionStr' | 'Json';

  worse_response: string;
}

export declare namespace Label {
  export { type LabelVerifyResponse as LabelVerifyResponse, type LabelVerifyParams as LabelVerifyParams };
}
