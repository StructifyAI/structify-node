// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Code extends APIResource {
  /**
   * Protocol:
   *
   * - event: `token` — data is a JSON object: `{ "delta": string }` containing the
   *   next chunk.
   * - event: `tool_call` — data is a JSON object: `{ "tool_call": object }` with
   *   tool call information.
   * - event: `tool_result` — data is a JSON object:
   *   `{ "tool_call": object, "result_text": string }` with tool results.
   * - event: `error` — data is a JSON object: `{ "message": string }` describing the
   *   error.
   */
  generateCode(body: CodeGenerateCodeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/code/generate-code', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface GenerateCodeRequest {
  chatSessionId: string;

  prompt: string;

  fileContents?: Array<GenerateCodeRequest.FileContent>;
}

export namespace GenerateCodeRequest {
  export interface FileContent {
    content: string;

    path: string;
  }
}

export interface CodeGenerateCodeParams {
  chatSessionId: string;

  prompt: string;

  fileContents?: Array<CodeGenerateCodeParams.FileContent>;
}

export namespace CodeGenerateCodeParams {
  export interface FileContent {
    content: string;

    path: string;
  }
}

export declare namespace Code {
  export {
    type GenerateCodeRequest as GenerateCodeRequest,
    type CodeGenerateCodeParams as CodeGenerateCodeParams,
  };
}
