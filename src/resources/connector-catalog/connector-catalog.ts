// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AdminAPI from './admin';
import {
  Admin,
  AdminBatchCreateCredentialFieldsParams,
  AdminBatchCreateCredentialFieldsResponse,
  AdminCreateAuthMethodParams,
  AdminCreateCatalogParams,
  AdminCreateCredentialFieldParams,
  AdminListNangoPendingResponse,
  AdminUpdateAuthMethodParams,
  AdminUpdateCatalogParams,
  AdminUpdateCredentialFieldParams,
  BatchCreateCredentialFieldsRequest,
  CreateAuthMethodRequest,
  CreateCatalogRequest,
  CreateCredentialFieldRequest,
  PendingNangoIntegration,
  UpdateAuthMethodRequest,
  UpdateCatalogRequest,
  UpdateCredentialFieldRequest,
} from './admin';

export class ConnectorCatalogResource extends APIResource {
  admin: AdminAPI.Admin = new AdminAPI.Admin(this._client);

  /**
   * List all connector catalog entries with their active auth methods
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ConnectorCatalogListResponse> {
    return this._client.get('/connector-catalog', options);
  }

  /**
   * Get a connector catalog entry by slug with its active auth methods
   */
  get(slug: string, options?: Core.RequestOptions): Core.APIPromise<ConnectorCatalogWithMethods> {
    return this._client.get(`/connector-catalog/${slug}`, options);
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
}

export interface ConnectorCatalog {
  id: string;

  categories: Array<string | null>;

  created_at: string;

  name: string;

  slug: string;

  updated_at: string;

  description?: string | null;

  logo_path?: string | null;

  priority?: number | null;
}

export interface ConnectorCatalogWithMethods extends ConnectorCatalog {
  auth_methods: Array<ConnectorAuthMethodWithFields>;
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

export type ConnectorCatalogListResponse = Array<ConnectorCatalogWithMethods>;

ConnectorCatalogResource.Admin = Admin;

export declare namespace ConnectorCatalogResource {
  export {
    type ConnectorAuthMethod as ConnectorAuthMethod,
    type ConnectorAuthMethodWithFields as ConnectorAuthMethodWithFields,
    type ConnectorCatalog as ConnectorCatalog,
    type ConnectorCatalogWithMethods as ConnectorCatalogWithMethods,
    type ConnectorCredentialField as ConnectorCredentialField,
    type ConnectorCatalogListResponse as ConnectorCatalogListResponse,
  };

  export {
    Admin as Admin,
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
