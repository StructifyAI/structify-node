// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { JobsList, type JobsListParams } from '../pagination';

export class Connectors extends APIResource {
  create(body: ConnectorCreateParams, options?: Core.RequestOptions): Core.APIPromise<Connector> {
    return this._client.post('/connectors', { body, ...options });
  }

  update(
    connectorId: string,
    body: ConnectorUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.patch(`/connectors/${connectorId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  list(
    query: ConnectorListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConnectorWithSecretsJobsList, ConnectorWithSecrets> {
    return this._client.getAPIList('/connectors', ConnectorWithSecretsJobsList, { query, ...options });
  }

  delete(connectorId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/connectors/${connectorId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  createSecret(
    connectorId: string,
    body: ConnectorCreateSecretParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/connectors/${connectorId}/secrets`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  deleteSecret(
    connectorId: string,
    secretName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/connectors/${connectorId}/secrets/${secretName}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  get(connectorId: string, options?: Core.RequestOptions): Core.APIPromise<ConnectorGetResponse> {
    return this._client.get(`/connectors/${connectorId}`, options);
  }
}

export class ConnectorWithSecretsJobsList extends JobsList<ConnectorWithSecrets> {}

export interface Connector {
  id: string;

  created_at: string;

  llm_information_store: string;

  name: string;

  project_id: string;

  updated_at: string;

  description?: string | null;
}

export interface ConnectorWithSecrets extends Connector {
  secrets: Array<ConnectorWithSecrets.Secret>;
}

export namespace ConnectorWithSecrets {
  /**
   * Response model for listing secrets (without sensitive data)
   */
  export interface Secret {
    id: string;

    created_at: string;

    secret_name: string;

    updated_at: string;
  }
}

export interface CreateConnectorRequest {
  llm_information_store: string;

  name: string;

  project_id: string;

  description?: string | null;

  /**
   * Optional secrets/environment variables for the connector
   */
  secrets?: { [key: string]: string };
}

export interface CreateSecretRequest {
  secret_name: string;

  secret_value: string;
}

export interface UpdateConnectorRequest {
  description?: string | null;

  llm_information_store?: string | null;

  name?: string | null;
}

export interface ConnectorGetResponse extends Connector {
  secrets: Array<ConnectorGetResponse.Secret>;
}

export namespace ConnectorGetResponse {
  /**
   * Result of getting a secret
   */
  export interface Secret {
    created_at: string;

    secret_name: string;

    secret_value: string;

    updated_at: string;
  }
}

export interface ConnectorCreateParams {
  llm_information_store: string;

  name: string;

  project_id: string;

  description?: string | null;

  /**
   * Optional secrets/environment variables for the connector
   */
  secrets?: { [key: string]: string };
}

export interface ConnectorUpdateParams {
  description?: string | null;

  llm_information_store?: string | null;

  name?: string | null;
}

export interface ConnectorListParams extends JobsListParams {
  /**
   * Project ID to list connectors for
   */
  project_id: string;
}

export interface ConnectorCreateSecretParams {
  secret_name: string;

  secret_value: string;
}

Connectors.ConnectorWithSecretsJobsList = ConnectorWithSecretsJobsList;

export declare namespace Connectors {
  export {
    type Connector as Connector,
    type ConnectorWithSecrets as ConnectorWithSecrets,
    type CreateConnectorRequest as CreateConnectorRequest,
    type CreateSecretRequest as CreateSecretRequest,
    type UpdateConnectorRequest as UpdateConnectorRequest,
    type ConnectorGetResponse as ConnectorGetResponse,
    ConnectorWithSecretsJobsList as ConnectorWithSecretsJobsList,
    type ConnectorCreateParams as ConnectorCreateParams,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorCreateSecretParams as ConnectorCreateSecretParams,
  };
}
