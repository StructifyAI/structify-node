// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Wiki extends APIResource {
  create(
    teamId: string,
    body: WikiCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WikiCreateResponse> {
    return this._client.post(`/team/${teamId}/wiki`, { body, ...options });
  }

  update(
    teamId: string,
    slug: string,
    body: WikiUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WikiUpdateResponse> {
    return this._client.put(`/team/${teamId}/wiki/${slug}`, { body, ...options });
  }

  list(teamId: string, options?: Core.RequestOptions): Core.APIPromise<WikiListResponse> {
    return this._client.get(`/team/${teamId}/wiki`, options);
  }

  delete(teamId: string, slug: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/team/${teamId}/wiki/${slug}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  get(teamId: string, slug: string, options?: Core.RequestOptions): Core.APIPromise<WikiPageWithReferences> {
    return this._client.get(`/team/${teamId}/wiki/${slug}`, options);
  }
}

export interface CreateWikiPageRequest {
  markdown: string;

  slug: string;

  title: string;
}

export interface UpdateWikiPageRequest {
  markdown: string;

  base_version?: number | null;

  title?: string | null;
}

export interface WikiConnectorReference {
  is_deleted: boolean;

  name: string;

  path: Array<string>;

  reference_id:
    | WikiConnectorReference.Connector
    | WikiConnectorReference.Database
    | WikiConnectorReference.Schema
    | WikiConnectorReference.Table
    | WikiConnectorReference.Column;
}

export namespace WikiConnectorReference {
  export interface Connector {
    id: string;

    reference_type: 'connector';
  }

  export interface Database {
    id: string;

    reference_type: 'database';
  }

  export interface Schema {
    id: string;

    reference_type: 'schema';
  }

  export interface Table {
    id: string;

    reference_type: 'table';
  }

  export interface Column {
    id: string;

    reference_type: 'column';
  }
}

export interface WikiPageWithReferences {
  id: string;

  created_at: string;

  markdown: string;

  references: Array<WikiConnectorReference>;

  slug: string;

  team_id: string;

  title: string;

  updated_at: string;

  version: number;
}

export interface WikiCreateResponse {
  id: string;

  created_at: string;

  markdown: string;

  slug: string;

  team_id: string;

  title: string;

  updated_at: string;

  version: number;
}

export interface WikiUpdateResponse {
  id: string;

  created_at: string;

  markdown: string;

  slug: string;

  team_id: string;

  title: string;

  updated_at: string;

  version: number;
}

export type WikiListResponse = Array<WikiListResponse.WikiListResponseItem>;

export namespace WikiListResponse {
  export interface WikiListResponseItem {
    id: string;

    created_at: string;

    markdown: string;

    slug: string;

    team_id: string;

    title: string;

    updated_at: string;

    version: number;
  }
}

export interface WikiCreateParams {
  markdown: string;

  slug: string;

  title: string;
}

export interface WikiUpdateParams {
  markdown: string;

  base_version?: number | null;

  title?: string | null;
}

export declare namespace Wiki {
  export {
    type CreateWikiPageRequest as CreateWikiPageRequest,
    type UpdateWikiPageRequest as UpdateWikiPageRequest,
    type WikiConnectorReference as WikiConnectorReference,
    type WikiPageWithReferences as WikiPageWithReferences,
    type WikiCreateResponse as WikiCreateResponse,
    type WikiUpdateResponse as WikiUpdateResponse,
    type WikiListResponse as WikiListResponse,
    type WikiCreateParams as WikiCreateParams,
    type WikiUpdateParams as WikiUpdateParams,
  };
}
