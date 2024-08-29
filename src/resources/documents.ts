// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DocumentsAPI from './documents';
import { type Response } from '../_shims/index';

export class Documents extends APIResource {
  /**
   * List all files for your user account in the database.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DocumentListResponse> {
    return this._client.get('/documents/list', options);
  }

  /**
   * Delete a file from the database
   */
  delete(body: DocumentDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete('/documents/delete', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Download a file from the database
   */
  download(body: DocumentDownloadParams, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.post('/documents/download', { body, ...options, __binaryResponse: true });
  }

  /**
   * Add a new file to the database
   */
  upload(body: DocumentUploadParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/documents/upload',
      Core.multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }
}

/**
 * Note: We call it filepathstruct because it otherwise conflicts with the
 * file_path in stainless
 */
export interface FilePath {
  /**
   * The path of the file to delete
   */
  file_path: string;
}

export type DocumentListResponse = Array<DocumentListResponse.DocumentListResponseItem>;

export namespace DocumentListResponse {
  export interface DocumentListResponseItem {
    document_type: 'Text' | 'PDF' | 'SEC' | 'ExecutionHistory';

    name: string;

    content?: Core.Uploadable | null;
  }
}

export interface DocumentDeleteParams {
  /**
   * The path of the file to delete
   */
  file_path: string;
}

export interface DocumentDownloadParams {
  /**
   * The path of the file to delete
   */
  file_path: string;
}

export interface DocumentUploadParams {
  content: Core.Uploadable;

  file_type: 'Text' | 'PDF' | 'SEC' | 'ExecutionHistory';

  path: Core.Uploadable;
}

export namespace Documents {
  export import FilePath = DocumentsAPI.FilePath;
  export import DocumentListResponse = DocumentsAPI.DocumentListResponse;
  export import DocumentDeleteParams = DocumentsAPI.DocumentDeleteParams;
  export import DocumentDownloadParams = DocumentsAPI.DocumentDownloadParams;
  export import DocumentUploadParams = DocumentsAPI.DocumentUploadParams;
}
