// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class TypeSnippets extends APIResource {
  upsert(
    connectorType: string,
    body: TypeSnippetUpsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Snippet> {
    return this._client.put(`/connector-type-snippets/${connectorType}`, { body, ...options });
  }
}

export interface Snippet {
  id: string;

  connector_type: string;

  created_at: string;

  updated_at: string;

  usage_snippet?: string | null;
}

export interface UpsertRequest {
  usage_snippet?: string | null;
}

export interface TypeSnippetUpsertParams {
  usage_snippet?: string | null;
}

export declare namespace TypeSnippets {
  export {
    type Snippet as Snippet,
    type UpsertRequest as UpsertRequest,
    type TypeSnippetUpsertParams as TypeSnippetUpsertParams,
  };
}
