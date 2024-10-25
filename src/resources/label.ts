// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as LabelAPI from './label';

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

  step_id: string;

  verify_type: 'DeprecatedToolCalling' | 'ActionStr' | 'Json';

  worse_response: string;
}

export namespace Label {
  export type LabelVerifyResponse = LabelAPI.LabelVerifyResponse;
  export type LabelVerifyParams = LabelAPI.LabelVerifyParams;
}
