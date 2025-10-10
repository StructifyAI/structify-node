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

export interface GenerateCodeRequest {
  chatSessionId: string;

  prompt: string;

  assistantMessageId?: string | null;

  /**
   * Configuration for chat session with system prompt and LLM key
   */
  config?: GenerateCodeRequest.Config | null;

  triggerWorkflowExecution?: boolean;

  userMessageId?: string | null;
}

export namespace GenerateCodeRequest {
  /**
   * Configuration for chat session with system prompt and LLM key
   */
  export interface Config {
    /**
     * LLM model keys available in the system. Format: <provider>.<model-name>
     */
    llm_key?:
      | 'vllm.gpt-5-mini-2025-08-07'
      | 'vllm.gpt-4.1-mini-2025-04-14'
      | 'vllm.gpt-5-nano-2025-08-07'
      | 'vllm.gpt-5-2025-08-07'
      | 'vllm.ft:gpt-4o-2024-08-06:structify::ADrF00Gq'
      | 'vllm.ft:gpt-4o-mini-2024-07-18:structify::ABCLHTsN'
      | 'vllm.action'
      | 'vllm.dora'
      | 'vllm.boring_dora'
      | 'vllm.claude-3-7-sonnet-20250219'
      | 'vllm.claude-sonnet-4-20250514'
      | 'vllm.qwen-3-coder-480b'
      | 'test_llm.test'
      | 'bedrock.claude-sonnet-4-bedrock'
      | 'bedrock.claude-sonnet-4-5-bedrock'
      | 'gemini.gemini-2.5-pro'
      | 'gemini.gemini-2.5-flash'
      | 'gemini.gemini-2.5-flash-preview-09-2025'
      | null;

    system_prompt?: string | null;
  }
}

export interface InterruptGenerationRequest {
  chatSessionId: string;
}

export interface CodeGenerateCodeParams {
  chatSessionId: string;

  prompt: string;

  assistantMessageId?: string | null;

  /**
   * Configuration for chat session with system prompt and LLM key
   */
  config?: CodeGenerateCodeParams.Config | null;

  triggerWorkflowExecution?: boolean;

  userMessageId?: string | null;
}

export namespace CodeGenerateCodeParams {
  /**
   * Configuration for chat session with system prompt and LLM key
   */
  export interface Config {
    /**
     * LLM model keys available in the system. Format: <provider>.<model-name>
     */
    llm_key?:
      | 'vllm.gpt-5-mini-2025-08-07'
      | 'vllm.gpt-4.1-mini-2025-04-14'
      | 'vllm.gpt-5-nano-2025-08-07'
      | 'vllm.gpt-5-2025-08-07'
      | 'vllm.ft:gpt-4o-2024-08-06:structify::ADrF00Gq'
      | 'vllm.ft:gpt-4o-mini-2024-07-18:structify::ABCLHTsN'
      | 'vllm.action'
      | 'vllm.dora'
      | 'vllm.boring_dora'
      | 'vllm.claude-3-7-sonnet-20250219'
      | 'vllm.claude-sonnet-4-20250514'
      | 'vllm.qwen-3-coder-480b'
      | 'test_llm.test'
      | 'bedrock.claude-sonnet-4-bedrock'
      | 'bedrock.claude-sonnet-4-5-bedrock'
      | 'gemini.gemini-2.5-pro'
      | 'gemini.gemini-2.5-flash'
      | 'gemini.gemini-2.5-flash-preview-09-2025'
      | null;

    system_prompt?: string | null;
  }
}

export interface CodeInterruptGenerationParams {
  chatSessionId: string;
}

export declare namespace Code {
  export {
    type GenerateCodeRequest as GenerateCodeRequest,
    type InterruptGenerationRequest as InterruptGenerationRequest,
    type CodeGenerateCodeParams as CodeGenerateCodeParams,
    type CodeInterruptGenerationParams as CodeInterruptGenerationParams,
  };
}
