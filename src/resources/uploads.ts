// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SessionsAPI from './sessions';

export class Uploads extends APIResource {
  complete(
    body: UploadCompleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SignedUploadCompleteResponse> {
    return this._client.post('/chat/input-files/upload/complete', { body, ...options });
  }

  /**
   * Upload an input file to a chat session's bucket storage
   */
  init(body: UploadInitParams, options?: Core.RequestOptions): Core.APIPromise<SignedUploadInitResponse> {
    return this._client.post('/chat/input-files/upload/init', { body, ...options });
  }
}

export interface SignedUploadCompleteRequest {
  blob_name: string;

  content_type: string;

  target: SignedUploadTarget;

  cache_final_rows?: number | null;

  cache_final_size_bytes?: number | null;

  cache_max_bytes?: number | null;

  cache_original_rows?: number | null;

  cache_original_size_bytes?: number | null;

  cache_truncated?: boolean | null;

  chat_id?: string | null;

  file_name?: string | null;

  node_id?: string | null;

  output_schema?: unknown;
}

export interface SignedUploadCompleteResponse {
  file?: SignedUploadCompleteResponse.File | null;

  node?: SessionsAPI.WorkflowSessionNode | null;
}

export namespace SignedUploadCompleteResponse {
  export interface File {
    chat_session_id: string;

    content_type: string;

    created_at: string;

    file_size: number;

    filename: string;
  }
}

export interface SignedUploadInitRequest {
  content_type: string;

  file_size: number;

  target: SignedUploadTarget;

  chat_id?: string | null;

  node_id?: string | null;
}

export interface SignedUploadInitResponse {
  blob_name: string;

  expires_at: string;

  required_headers: { [key: string]: string };

  upload_url: string;
}

export type SignedUploadTarget = 'chat_input' | 'workflow_node_output';

export interface UploadCompleteParams {
  blob_name: string;

  content_type: string;

  target: SignedUploadTarget;

  cache_final_rows?: number | null;

  cache_final_size_bytes?: number | null;

  cache_max_bytes?: number | null;

  cache_original_rows?: number | null;

  cache_original_size_bytes?: number | null;

  cache_truncated?: boolean | null;

  chat_id?: string | null;

  file_name?: string | null;

  node_id?: string | null;

  output_schema?: unknown;
}

export interface UploadInitParams {
  content_type: string;

  file_size: number;

  target: SignedUploadTarget;

  chat_id?: string | null;

  node_id?: string | null;
}

export declare namespace Uploads {
  export {
    type SignedUploadCompleteRequest as SignedUploadCompleteRequest,
    type SignedUploadCompleteResponse as SignedUploadCompleteResponse,
    type SignedUploadInitRequest as SignedUploadInitRequest,
    type SignedUploadInitResponse as SignedUploadInitResponse,
    type SignedUploadTarget as SignedUploadTarget,
    type UploadCompleteParams as UploadCompleteParams,
    type UploadInitParams as UploadInitParams,
  };
}
