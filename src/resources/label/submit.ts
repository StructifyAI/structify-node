// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as SubmitAPI from './submit';
import * as LlmAssistAPI from './llm-assist';

export class Submit extends APIResource {
  /**
   * Submit a label as part of the human LLM.
   */
  create(uuid: string, body: SubmitCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post(`/label/submit/${uuid}`, {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type SubmitCreateResponse = string;

export type SubmitCreateParams = Array<LlmAssistAPI.ToolInput> | null;

export namespace Submit {
  export import SubmitCreateResponse = SubmitAPI.SubmitCreateResponse;
  export import SubmitCreateParams = SubmitAPI.SubmitCreateParams;
}
