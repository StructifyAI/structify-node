// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as DocumentsAPI from './documents';
import { type Uploadable, multipartFormRequestOptions } from '../core';
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
  delete(path: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/documents/delete/${path}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Download a file from the database
   */
  download(path: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/documents/download/${path}`, { ...options, __binaryResponse: true });
  }

  /**
   * Get all sources for a given entity
   */
  getSources(query: DocumentGetSourcesParams, options?: Core.RequestOptions): Core.APIPromise<SourceNode> {
    return this._client.get('/source/get_sources', { query, ...options });
  }

  /**
   * Add a new file to the database
   */
  upload(body: DocumentUploadParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/documents/upload',
      multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }
}

export interface SourceNode {
  extra_properties: Record<string, string | null | boolean | null | number | null>;

  link: SourceNode.Web | SourceNode.Document | 'None';

  location: SourceNode.Text | SourceNode.Visual | 'None';
}

export namespace SourceNode {
  export interface Web {
    Web: Web.Web;
  }

  export namespace Web {
    export interface Web {
      url: string;
    }
  }

  export interface Document {
    Document: Document.Document;
  }

  export namespace Document {
    export interface Document {
      name: string;
    }
  }

  export interface Text {
    Text: Text.Text;
  }

  export namespace Text {
    export interface Text {
      byte_offset: number;
    }
  }

  export interface Visual {
    Visual: Visual.Visual;
  }

  export namespace Visual {
    export interface Visual {
      x: number;

      y: number;
    }
  }
}

export interface UserFile {
  document_type: 'Text' | 'Pdf' | 'SEC' | 'ExecutionHistory';

  name: string;

  content?: Uploadable | null;
}

export type DocumentListResponse = Array<UserFile>;

export interface DocumentGetSourcesParams {
  /**
   * Id of the entity to get sources for
   */
  id: number;
}

export interface DocumentUploadParams {
  content: Uploadable;

  file_type: 'Text' | 'Pdf' | 'SEC' | 'ExecutionHistory';

  path: Uploadable;
}

export namespace Documents {
  export import SourceNode = DocumentsAPI.SourceNode;
  export import UserFile = DocumentsAPI.UserFile;
  export import DocumentListResponse = DocumentsAPI.DocumentListResponse;
  export import DocumentGetSourcesParams = DocumentsAPI.DocumentGetSourcesParams;
  export import DocumentUploadParams = DocumentsAPI.DocumentUploadParams;
}
