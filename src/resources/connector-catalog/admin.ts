// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConnectorCatalogAPI from './connector-catalog';

export class Admin extends APIResource {
  /**
   * Batch create connector credential fields
   */
  batchCreateCredentialFields(
    body: AdminBatchCreateCredentialFieldsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminBatchCreateCredentialFieldsResponse> {
    return this._client.post('/admin/connector-catalog/credential-fields/batch', { body, ...options });
  }

  /**
   * Create a new connector auth method
   */
  createAuthMethod(
    body: AdminCreateAuthMethodParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorCatalogAPI.ConnectorAuthMethod> {
    return this._client.post('/admin/connector-catalog/auth-methods', { body, ...options });
  }

  /**
   * Create a new connector catalog entry
   */
  createCatalog(
    body: AdminCreateCatalogParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorCatalogAPI.ConnectorCatalog> {
    return this._client.post('/admin/connector-catalog', { body, ...options });
  }

  /**
   * Create a new connector credential field
   */
  createCredentialField(
    body: AdminCreateCredentialFieldParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorCatalogAPI.ConnectorCredentialField> {
    return this._client.post('/admin/connector-catalog/credential-fields', { body, ...options });
  }

  /**
   * Delete a connector credential field
   */
  deleteCredentialField(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/admin/connector-catalog/credential-fields/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List Nango integrations that are not yet in the connector catalog
   */
  listNangoPending(options?: Core.RequestOptions): Core.APIPromise<AdminListNangoPendingResponse> {
    return this._client.get('/admin/connector-catalog/nango-pending', options);
  }

  /**
   * Update a connector auth method
   */
  updateAuthMethod(
    id: string,
    body: AdminUpdateAuthMethodParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorCatalogAPI.ConnectorAuthMethod> {
    return this._client.patch(`/admin/connector-catalog/auth-methods/${id}`, { body, ...options });
  }

  /**
   * Update a connector catalog entry
   */
  updateCatalog(
    id: string,
    body: AdminUpdateCatalogParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorCatalogAPI.ConnectorCatalog> {
    return this._client.patch(`/admin/connector-catalog/${id}`, { body, ...options });
  }

  /**
   * Update a connector credential field
   */
  updateCredentialField(
    id: string,
    body: AdminUpdateCredentialFieldParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorCatalogAPI.ConnectorCredentialField> {
    return this._client.patch(`/admin/connector-catalog/credential-fields/${id}`, { body, ...options });
  }
}

export interface BatchCreateCredentialFieldsRequest {
  fields: Array<CreateCredentialFieldRequest>;
}

export interface CreateAuthMethodRequest {
  auth_type: 'credentials' | 'oauth_nango';

  connector_catalog_id: string;

  is_active: boolean;

  priority: number;

  label?: string | null;

  nango_integration_key?: string | null;
}

export interface CreateCatalogRequest {
  name: string;

  slug: string;

  categories?: Array<string>;

  description?: string | null;

  logo_path?: string | null;

  priority?: number | null;
}

export interface CreateCredentialFieldRequest {
  auth_method_id: string;

  display_order: number;

  field_type: string;

  is_optional: boolean;

  name: string;

  default_value?: string | null;

  description?: string | null;

  label?: string | null;

  options?: unknown;
}

export interface PendingNangoIntegration {
  provider: string;

  unique_key: string;

  display_name?: string | null;

  logo_url?: string | null;
}

export interface UpdateAuthMethodRequest {
  is_active?: boolean | null;

  label?: string | null;

  priority?: number | null;
}

export interface UpdateCatalogRequest {
  categories?: Array<string> | null;

  description?: string | null;

  logo_path?: string | null;

  name?: string | null;

  priority?: number | null;
}

export interface UpdateCredentialFieldRequest {
  default_value?: string | null;

  description?: string | null;

  display_order?: number | null;

  field_type?: string | null;

  is_optional?: boolean | null;

  label?: string | null;

  name?: string | null;

  options?: unknown;
}

export type AdminBatchCreateCredentialFieldsResponse = Array<ConnectorCatalogAPI.ConnectorCredentialField>;

export type AdminListNangoPendingResponse = Array<PendingNangoIntegration>;

export interface AdminBatchCreateCredentialFieldsParams {
  fields: Array<CreateCredentialFieldRequest>;
}

export interface AdminCreateAuthMethodParams {
  auth_type: 'credentials' | 'oauth_nango';

  connector_catalog_id: string;

  is_active: boolean;

  priority: number;

  label?: string | null;

  nango_integration_key?: string | null;
}

export interface AdminCreateCatalogParams {
  name: string;

  slug: string;

  categories?: Array<string>;

  description?: string | null;

  logo_path?: string | null;

  priority?: number | null;
}

export interface AdminCreateCredentialFieldParams {
  auth_method_id: string;

  display_order: number;

  field_type: string;

  is_optional: boolean;

  name: string;

  default_value?: string | null;

  description?: string | null;

  label?: string | null;

  options?: unknown;
}

export interface AdminUpdateAuthMethodParams {
  is_active?: boolean | null;

  label?: string | null;

  priority?: number | null;
}

export interface AdminUpdateCatalogParams {
  categories?: Array<string> | null;

  description?: string | null;

  logo_path?: string | null;

  name?: string | null;

  priority?: number | null;
}

export interface AdminUpdateCredentialFieldParams {
  default_value?: string | null;

  description?: string | null;

  display_order?: number | null;

  field_type?: string | null;

  is_optional?: boolean | null;

  label?: string | null;

  name?: string | null;

  options?: unknown;
}

export declare namespace Admin {
  export {
    type BatchCreateCredentialFieldsRequest as BatchCreateCredentialFieldsRequest,
    type CreateAuthMethodRequest as CreateAuthMethodRequest,
    type CreateCatalogRequest as CreateCatalogRequest,
    type CreateCredentialFieldRequest as CreateCredentialFieldRequest,
    type PendingNangoIntegration as PendingNangoIntegration,
    type UpdateAuthMethodRequest as UpdateAuthMethodRequest,
    type UpdateCatalogRequest as UpdateCatalogRequest,
    type UpdateCredentialFieldRequest as UpdateCredentialFieldRequest,
    type AdminBatchCreateCredentialFieldsResponse as AdminBatchCreateCredentialFieldsResponse,
    type AdminListNangoPendingResponse as AdminListNangoPendingResponse,
    type AdminBatchCreateCredentialFieldsParams as AdminBatchCreateCredentialFieldsParams,
    type AdminCreateAuthMethodParams as AdminCreateAuthMethodParams,
    type AdminCreateCatalogParams as AdminCreateCatalogParams,
    type AdminCreateCredentialFieldParams as AdminCreateCredentialFieldParams,
    type AdminUpdateAuthMethodParams as AdminUpdateAuthMethodParams,
    type AdminUpdateCatalogParams as AdminUpdateCatalogParams,
    type AdminUpdateCredentialFieldParams as AdminUpdateCredentialFieldParams,
  };
}
