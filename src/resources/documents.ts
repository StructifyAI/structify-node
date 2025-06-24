// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SharedAPI from './shared';

export class Documents extends APIResource {
  /**
   * List all files for your user account in the database.
   */
  list(query?: DocumentListParams, options?: Core.RequestOptions): Core.APIPromise<DocumentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DocumentListResponse>;
  list(
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/documents/list', { query, ...options });
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
  download(
    body: DocumentDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentDownloadResponse> {
    return this._client.post('/documents/download', { body, ...options });
  }

  /**
   * Returns the structured data as JSON.
   */
  structure(
    params: DocumentStructureParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentStructureResponse> {
    const { dataset_descriptor, ...body } = params;
    return this._client.post(
      '/documents/structure',
      Core.multipartFormRequestOptions({ query: { dataset_descriptor }, body, ...options }),
    );
  }

  /**
   * Add a new file to the database
   */
  upload(params: DocumentUploadParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { dataset, ...body } = params;
    return this._client.post(
      '/documents/upload',
      Core.multipartFormRequestOptions({
        query: { dataset },
        body,
        ...options,
        headers: { Accept: '*/*', ...options?.headers },
      }),
    );
  }
}

export type DocumentListResponse = Array<DocumentListResponse.DocumentListResponseItem>;

export namespace DocumentListResponse {
  export interface DocumentListResponseItem {
    id: string;

    created_at: string;

    file_bytes: Core.Uploadable;

    file_type: 'Text' | 'PDF' | 'SEC';

    name: string;

    user_id: string;

    created_from_job?: string | null;

    dataset_id?: string | null;
  }
}

export interface DocumentDownloadResponse {
  content: Core.Uploadable;
}

export type DocumentStructureResponse = Record<string, unknown>;

export interface DocumentListParams {
  dataset?: string | null;
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

export interface DocumentStructureParams {
  /**
   * Query param: A dataset is where you put multiple referential schemas.
   *
   * A dataset is a complete namespace where all references between schemas are held
   * within the dataset.
   */
  dataset_descriptor: SharedAPI.DatasetDescriptor;

  /**
   * Body param:
   */
  content: Core.Uploadable;
}

export interface DocumentUploadParams {
  /**
   * Body param:
   */
  content: Core.Uploadable;

  /**
   * Body param:
   */
  file_type: 'Text' | 'PDF' | 'SEC';

  /**
   * Body param:
   */
  path: Core.Uploadable;

  /**
   * Query param:
   */
  dataset?: string | null;
}

export declare namespace Documents {
  export {
    type DocumentListResponse as DocumentListResponse,
    type DocumentDownloadResponse as DocumentDownloadResponse,
    type DocumentStructureResponse as DocumentStructureResponse,
    type DocumentListParams as DocumentListParams,
    type DocumentDeleteParams as DocumentDeleteParams,
    type DocumentDownloadParams as DocumentDownloadParams,
    type DocumentStructureParams as DocumentStructureParams,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
