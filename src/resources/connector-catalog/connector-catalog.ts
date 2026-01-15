// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AdminAPI from './admin';
import {
  Admin,
  AdminBatchCreateCredentialFieldsParams,
  AdminBatchCreateCredentialFieldsResponse,
  AdminBatchCreateScopesParams,
  AdminCreateAuthMethodParams,
  AdminCreateCatalogParams,
  AdminCreateCredentialFieldParams,
  AdminCreateScopeParams,
  AdminListNangoPendingResponse,
  AdminListScopesParams,
  AdminUpdateAuthMethodParams,
  AdminUpdateCatalogParams,
  AdminUpdateCredentialFieldParams,
  AdminUpdateScopeParams,
  AdminUploadLogoParams,
  BatchCreateCredentialFieldsRequest,
  BatchCreateScopesRequest,
  BatchCreateScopesResponse,
  ConnectorAuthMethodScope,
  CreateAuthMethodRequest,
  CreateCatalogRequest,
  CreateCredentialFieldRequest,
  CreateScopeRequest,
  ListScopesResponse,
  PendingNangoIntegration,
  UpdateAuthMethodRequest,
  UpdateCatalogRequest,
  UpdateCredentialFieldRequest,
  UpdateScopeRequest,
  UploadLogoResponse,
} from './admin';
import { type Response } from '../../_shims/index';

export class ConnectorCatalogResource extends APIResource {
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);

  /**
   * List all connector catalog entries with their active auth methods and logos
   */
  list(
    query?: ConnectorCatalogListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorCatalogListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ConnectorCatalogListResponse>;
  list(
    query: ConnectorCatalogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorCatalogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/connector-catalog', { query, ...options });
  }

  /**
   * Get a connector catalog entry by slug with its active auth methods
   */
  get(slug: string, options?: Core.RequestOptions): Core.APIPromise<ConnectorCatalogWithMethods> {
    return this._client.get(`/connector-catalog/${slug}`, options);
  }

  getLogo(slug: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/connector-catalog/${slug}/logo`, {
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface ConnectorAuthMethod {
  id: string;

  auth_type: 'credentials' | 'oauth_nango';

  connector_catalog_id: string;

  created_at: string;

  is_active: boolean;

  priority: number;

  updated_at: string;

  label?: string | null;

  nango_integration_key?: string | null;
}

export interface ConnectorAuthMethodWithFields extends ConnectorAuthMethod {
  credential_fields: Array<ConnectorCredentialField>;

  scopes: Array<AdminAPI.ConnectorAuthMethodScope>;
}

export interface ConnectorCatalog {
  id: string;

  categories: Array<string | null>;

  created_at: string;

  name: string;

  slug: string;

  updated_at: string;

  description?: string | null;

  priority?: number | null;
}

export interface ConnectorCatalogWithMethods extends ConnectorCatalog {
  auth_methods: Array<ConnectorAuthMethodWithFields>;

  /**
   * Base64 data URI for the logo (e.g., "data:image/svg+xml;base64,...")
   */
  logo_url?: string | null;
}

export interface ConnectorCredentialField {
  id: string;

  auth_method_id: string;

  created_at: string;

  display_order: number;

  field_type: string;

  is_optional: boolean;

  name: string;

  updated_at: string;

  default_value?: string | null;

  description?: string | null;

  label?: string | null;

  options?: unknown;
}

export interface ConnectorCatalogListResponse {
  /**
   * Counts of catalog entries grouped by primary category.
   */
  category_counts: Array<ConnectorCatalogListResponse.CategoryCount>;

  items: Array<ConnectorCatalogWithMethods>;

  total_count: number;
}

export namespace ConnectorCatalogListResponse {
  export interface CategoryCount {
    /**
     * Primary category label used for catalog filtering.
     */
    category: string;

    /**
     * Number of catalog entries in this category.
     */
    count: number;
  }
}

export interface ConnectorCatalogListParams {
  limit?: number;

  offset?: number;

  /**
   * Optional search query to filter by name, slug, or category (case-insensitive
   * substring match)
   */
  search?: string | null;
}

ConnectorCatalogResource.Admin = Admin;

export declare namespace ConnectorCatalogResource {
  export {
    type ConnectorAuthMethod as ConnectorAuthMethod,
    type ConnectorAuthMethodWithFields as ConnectorAuthMethodWithFields,
    type ConnectorCatalog as ConnectorCatalog,
    type ConnectorCatalogWithMethods as ConnectorCatalogWithMethods,
    type ConnectorCredentialField as ConnectorCredentialField,
    type ConnectorCatalogListResponse as ConnectorCatalogListResponse,
    type ConnectorCatalogListParams as ConnectorCatalogListParams,
  };

  export {
    Admin as Admin,
    type BatchCreateCredentialFieldsRequest as BatchCreateCredentialFieldsRequest,
    type BatchCreateScopesRequest as BatchCreateScopesRequest,
    type BatchCreateScopesResponse as BatchCreateScopesResponse,
    type ConnectorAuthMethodScope as ConnectorAuthMethodScope,
    type CreateAuthMethodRequest as CreateAuthMethodRequest,
    type CreateCatalogRequest as CreateCatalogRequest,
    type CreateCredentialFieldRequest as CreateCredentialFieldRequest,
    type CreateScopeRequest as CreateScopeRequest,
    type ListScopesResponse as ListScopesResponse,
    type PendingNangoIntegration as PendingNangoIntegration,
    type UpdateAuthMethodRequest as UpdateAuthMethodRequest,
    type UpdateCatalogRequest as UpdateCatalogRequest,
    type UpdateCredentialFieldRequest as UpdateCredentialFieldRequest,
    type UpdateScopeRequest as UpdateScopeRequest,
    type UploadLogoResponse as UploadLogoResponse,
    type AdminBatchCreateCredentialFieldsResponse as AdminBatchCreateCredentialFieldsResponse,
    type AdminListNangoPendingResponse as AdminListNangoPendingResponse,
    type AdminBatchCreateCredentialFieldsParams as AdminBatchCreateCredentialFieldsParams,
    type AdminBatchCreateScopesParams as AdminBatchCreateScopesParams,
    type AdminCreateAuthMethodParams as AdminCreateAuthMethodParams,
    type AdminCreateCatalogParams as AdminCreateCatalogParams,
    type AdminCreateCredentialFieldParams as AdminCreateCredentialFieldParams,
    type AdminCreateScopeParams as AdminCreateScopeParams,
    type AdminListScopesParams as AdminListScopesParams,
    type AdminUpdateAuthMethodParams as AdminUpdateAuthMethodParams,
    type AdminUpdateCatalogParams as AdminUpdateCatalogParams,
    type AdminUpdateCredentialFieldParams as AdminUpdateCredentialFieldParams,
    type AdminUpdateScopeParams as AdminUpdateScopeParams,
    type AdminUploadLogoParams as AdminUploadLogoParams,
  };
}
