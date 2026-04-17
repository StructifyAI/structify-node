// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

/**
 * Team wiki page management endpoints
 */
export class Wiki extends APIResource {
  create(teamId: string, body: WikiCreateParams, options?: Core.RequestOptions): Core.APIPromise<WikiPage> {
    return this._client.post(`/team/${teamId}/wiki`, { body, ...options });
  }

  update(
    teamId: string,
    slug: string,
    body: WikiUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WikiPage> {
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

  get(teamId: string, slug: string, options?: Core.RequestOptions): Core.APIPromise<WikiPage> {
    return this._client.get(`/team/${teamId}/wiki/${slug}`, options);
  }
}

export interface CreateWikiPageRequest {
  markdown: string;

  slug: string;

  title: string;

  chat_session_id?: string | null;

  usage_guidance?: string | null;
}

export interface UpdateWikiPageRequest {
  markdown: string;

  base_version?: number | null;

  chat_session_id?: string | null;

  title?: string | null;

  usage_guidance?: string | null;
}

export interface WikiPage {
  id: string;

  created_at: string;

  created_by: string;

  markdown: string;

  slug: string;

  team_id: string;

  title: string;

  updated_at: string;

  version: number;

  approved_at?: string | null;

  approved_by?: string | null;

  chat_session_id?: string | null;

  usage_guidance?: string | null;
}

export type WikiListResponse = Array<WikiPage>;

export interface WikiCreateParams {
  markdown: string;

  slug: string;

  title: string;

  chat_session_id?: string | null;

  usage_guidance?: string | null;
}

export interface WikiUpdateParams {
  markdown: string;

  base_version?: number | null;

  chat_session_id?: string | null;

  title?: string | null;

  usage_guidance?: string | null;
}

export declare namespace Wiki {
  export {
    type CreateWikiPageRequest as CreateWikiPageRequest,
    type UpdateWikiPageRequest as UpdateWikiPageRequest,
    type WikiPage as WikiPage,
    type WikiListResponse as WikiListResponse,
    type WikiCreateParams as WikiCreateParams,
    type WikiUpdateParams as WikiUpdateParams,
  };
}
