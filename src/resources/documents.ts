// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as DocumentsAPI from './documents';
import { multipartFormRequestOptions } from '../core';

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
  delete(path: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/documents/delete/${path}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Download a file from the database
   */
  download(id: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/documents/download/${id}`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Add a new file to the database
   */
  upload(params: DocumentUploadParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { doctype, path, body } = params;
    return this._client.post(
      '/documents/upload',
      multipartFormRequestOptions({
        query: { doctype, path },
        body: body,
        ...options,
        headers: { Accept: '*/*', ...options?.headers },
      }),
    );
  }
}

export type DocumentListResponse = Array<string>;

export type DocumentDownloadResponse = string;

export interface DocumentUploadParams {
  /**
   * Query param:
   */
  doctype: 'Text' | 'Pdf' | 'SEC' | 'ExecutionHistory';

  /**
   * Query param: The path you want to upload the file to.
   */
  path: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace Documents {
  export import DocumentListResponse = DocumentsAPI.DocumentListResponse;
  export import DocumentDownloadResponse = DocumentsAPI.DocumentDownloadResponse;
  export import DocumentUploadParams = DocumentsAPI.DocumentUploadParams;
}
