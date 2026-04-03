// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

/**
 * Code generation endpoints
 */
export class Code extends APIResource {
  applyManualEdit(
    chatId: string,
    body: CodeApplyManualEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/code/apply-manual-edit/${chatId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

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

  /**
   * This sets an interrupt flag that will cause the generation to stop gracefully at
   * the next checkpoint (before publishing the next event).
   */
  interruptGeneration(
    body: CodeInterruptGenerationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/code/interrupt-generation', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ApplyManualEditRequest {
  code: string;

  filename: string;
}

export interface GenerateCodeRequest {
  chatSessionId: string;

  prompt: string;

  assistantMessageId?: string | null;

  /**
   * Configuration for chat session with system prompt and LLM key
   */
  config?: GenerateCodeRequest.Config | null;

  connectorIds?: Array<string>;

  filePaths?: Array<string>;

  overridePreviousMessageId?: string | null;

  triggerWorkflowExecution?: boolean;

  userMessageId?: string | null;
}

export namespace GenerateCodeRequest {
  /**
   * Configuration for chat session with system prompt and LLM key
   */
  export interface Config {
    /**
     * LLM model keys available in the system.
     */
    llm_key?:
      | 'claude-sonnet-4-5'
      | 'claude-opus-4-5'
      | 'claude-opus-4-6'
      | 'claude-haiku-4-5'
      | 'gpt-5-mini'
      | 'gpt-5-nano'
      | 'gpt-5'
      | 'gemini-2.5-pro'
      | 'gemini-2.5-flash'
      | 'gemini-3-flash-preview'
      | 'gemini-3.1-flash-lite-preview'
      | 'test_llm.test'
      | null;

    max_steps?: number | null;

    reminder_message?: string | null;

    system_prompt?: string | null;
  }
}

export interface InterruptGenerationRequest {
  chatSessionId: string;
}

export interface CodeApplyManualEditParams {
  code: string;

  filename: string;
}

export interface CodeGenerateCodeParams {
  chatSessionId: string;

  prompt: string;

  assistantMessageId?: string | null;

  /**
   * Configuration for chat session with system prompt and LLM key
   */
  config?: CodeGenerateCodeParams.Config | null;

  connectorIds?: Array<string>;

  filePaths?: Array<string>;

  overridePreviousMessageId?: string | null;

  triggerWorkflowExecution?: boolean;

  userMessageId?: string | null;
}

export namespace CodeGenerateCodeParams {
  /**
   * Configuration for chat session with system prompt and LLM key
   */
  export interface Config {
    /**
     * LLM model keys available in the system.
     */
    llm_key?:
      | 'claude-sonnet-4-5'
      | 'claude-opus-4-5'
      | 'claude-opus-4-6'
      | 'claude-haiku-4-5'
      | 'gpt-5-mini'
      | 'gpt-5-nano'
      | 'gpt-5'
      | 'gemini-2.5-pro'
      | 'gemini-2.5-flash'
      | 'gemini-3-flash-preview'
      | 'gemini-3.1-flash-lite-preview'
      | 'test_llm.test'
      | null;

    max_steps?: number | null;

    reminder_message?: string | null;

    system_prompt?: string | null;
  }
}

export interface CodeInterruptGenerationParams {
  chatSessionId: string;
}

export declare namespace Code {
  export {
    type ApplyManualEditRequest as ApplyManualEditRequest,
    type GenerateCodeRequest as GenerateCodeRequest,
    type InterruptGenerationRequest as InterruptGenerationRequest,
    type CodeApplyManualEditParams as CodeApplyManualEditParams,
    type CodeGenerateCodeParams as CodeGenerateCodeParams,
    type CodeInterruptGenerationParams as CodeInterruptGenerationParams,
  };
}
