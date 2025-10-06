// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Code extends APIResource {
  /**
   * Events are streamed via WebSocket connection. This endpoint returns immediately
   * after starting the generation process.
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

  assistantMessageId?: string | null;

  systemPrompt?: string | null;

  triggerWorkflowExecution?: boolean;

  userMessageId?: string | null;
}

export interface CodeGenerateCodeParams {
  chatSessionId: string;

  prompt: string;

  assistantMessageId?: string | null;

  systemPrompt?: string | null;

  triggerWorkflowExecution?: boolean;

  userMessageId?: string | null;
}

export declare namespace Code {
  export {
    type GenerateCodeRequest as GenerateCodeRequest,
    type CodeGenerateCodeParams as CodeGenerateCodeParams,
  };
}
