// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Wiki extends APIResource {
  create(
    teamId: string,
    body: WikiCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamWikiPage> {
    return this._client.post(`/team/${teamId}/wiki`, { body, ...options });
  }

  update(
    teamId: string,
    slug: string,
    body: WikiUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TeamWikiPage> {
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
  content: { [key: string]: unknown };

  slug: string;

  title: string;
}

export interface TeamWikiPage {
  id: string;

  content: { [key: string]: unknown };

  created_at: string;

  created_by: string;

  slug: string;

  team_id: string;

  title: string;

  updated_at: string;

  deleted_at?: string | null;
}

export interface UpdateWikiPageRequest {
  content: { [key: string]: unknown };

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
  export interface Connector {}

  export interface Database {}

  export interface Schema {}

  export interface Table {}

  export interface Column {}
}

export interface WikiPageWithReferences extends TeamWikiPage {
  references: Array<WikiConnectorReference>;
}

export type WikiListResponse = Array<TeamWikiPage>;

export interface WikiCreateParams {
  content: { [key: string]: unknown };

  slug: string;

  title: string;
}

export interface WikiUpdateParams {
  content: { [key: string]: unknown };

  title?: string | null;
}

export declare namespace Wiki {
  export {
    type CreateWikiPageRequest as CreateWikiPageRequest,
    type TeamWikiPage as TeamWikiPage,
    type UpdateWikiPageRequest as UpdateWikiPageRequest,
    type WikiConnectorReference as WikiConnectorReference,
    type WikiPageWithReferences as WikiPageWithReferences,
    type WikiListResponse as WikiListResponse,
    type WikiCreateParams as WikiCreateParams,
    type WikiUpdateParams as WikiUpdateParams,
  };
}
