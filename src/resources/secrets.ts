// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Secrets extends APIResource {
  /**
   * Create a new project secret using envelope encryption with Google Cloud KMS
   */
  create(projectId: string, body: SecretCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/project/${projectId}/secrets`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update an existing project secret with a new value
   */
  update(
    projectId: string,
    secretName: string,
    body: SecretUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateSecretResponse> {
    return this._client.put(`/project/${projectId}/secrets/${secretName}`, { body, ...options });
  }

  /**
   * List all project secrets (metadata only, no sensitive data)
   */
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<SecretListResponse> {
    return this._client.get(`/project/${projectId}/secrets`, options);
  }

  /**
   * Delete a project secret by name
   */
  delete(projectId: string, secretName: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/project/${projectId}/secrets/${secretName}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get a secret by name
   */
  get(
    projectId: string,
    secretName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetSecretResponse> {
    return this._client.get(`/project/${projectId}/secrets/${secretName}`, options);
  }
}

export interface CreateSecretRequest {
  secret_name: string;

  secret_value: string;
}

export interface GetSecretResponse {
  created_at: string;

  secret_name: string;

  secret_value: string;

  updated_at: string;
}

export interface ProjectSecret {
  id: string;

  ciphertext: Core.Uploadable;

  created_at: string;

  kms_key_version: string;

  nonce: Core.Uploadable;

  secret_name: string;

  updated_at: string;

  wrapped_dek: Core.Uploadable;

  connector_id?: string | null;

  project_id?: string | null;

  workflow_schedule_id?: string | null;
}

/**
 * Response model for listing secrets (without sensitive data)
 */
export interface ProjectSecretSummary {
  id: string;

  created_at: string;

  secret_name: string;

  updated_at: string;
}

export interface UpdateSecretRequest {
  /**
   * The new secret value to encrypt and store
   */
  secret_value: string;
}

export interface UpdateSecretResponse {
  secret_name: string;

  updated_at: string;
}

export type SecretListResponse = Array<ProjectSecretSummary>;

export interface SecretCreateParams {
  secret_name: string;

  secret_value: string;
}

export interface SecretUpdateParams {
  /**
   * The new secret value to encrypt and store
   */
  secret_value: string;
}

export declare namespace Secrets {
  export {
    type CreateSecretRequest as CreateSecretRequest,
    type GetSecretResponse as GetSecretResponse,
    type ProjectSecret as ProjectSecret,
    type ProjectSecretSummary as ProjectSecretSummary,
    type UpdateSecretRequest as UpdateSecretRequest,
    type UpdateSecretResponse as UpdateSecretResponse,
    type SecretListResponse as SecretListResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
  };
}
