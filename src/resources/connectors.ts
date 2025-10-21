// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ConnectorsAPI from './connectors';
import * as StructureAPI from './structure';
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

  explore(connectorId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/connectors/${connectorId}/explore`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  get(connectorId: string, options?: Core.RequestOptions): Core.APIPromise<ConnectorGetResponse> {
    return this._client.get(`/connectors/${connectorId}`, options);
  }

  /**
   * Get all exploration runs for a connector (admin only)
   */
  getExplorationRuns(
    connectorId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExplorationRunsResponse> {
    return this._client.get(`/connectors/${connectorId}/explore/runs`, options);
  }

  getExplorationStatus(
    connectorId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExploreStatusResponse> {
    return this._client.get(`/connectors/${connectorId}/explore/status`, options);
  }

  /**
   * Get chat from a connector exploration run (admin only)
   */
  getExplorerChat(
    connectorId: string,
    query: ConnectorGetExplorerChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExplorerChatResponse> {
    return this._client.get(`/connectors/${connectorId}/explore/chat`, { query, ...options });
  }
}

export class ConnectorWithSecretsJobsList extends JobsList<ConnectorWithSecrets> {}

export interface Connector {
  id: string;

  created_at: string;

  known_connector_type:
    | 'Slack'
    | 'Confluence'
    | 'GoogleDrive'
    | 'Snowflake'
    | 'Hubspot'
    | 'Salesforce'
    | 'Supabase'
    | 'Sharepoint'
    | 'Notion'
    | 'Jira'
    | 'Linear'
    | 'Intercom'
    | 'Gmail'
    | 'Airtable'
    | 'Trello'
    | 'Postgresql'
    | 'Sap'
    | 'Oracle'
    | 'Manual';

  llm_information_store: string;

  name: string;

  project_id: string;

  updated_at: string;

  description?: string | null;

  exploration_error?: string | null;

  exploration_started_at?: string | null;

  exploration_status?: ExplorationStatus | null;

  refresh_script?: string | null;
}

/**
 * Represents a column in a relational database table
 */
export interface ConnectorColumnDescriptor {
  /**
   * Name of the column
   */
  name: string;

  /**
   * SQL type of the column (e.g., "VARCHAR(255)", "INTEGER", "TIMESTAMP")
   */
  type: string;

  /**
   * Additional notes about the column (e.g., "NOT NULL", "PRIMARY KEY", "UNIQUE",
   * constraints)
   */
  notes?: string | null;
}

/**
 * Connector explorer chat with deserialized ChatPrompt for API responses
 */
export interface ConnectorExplorerChat {
  id: string;

  chat_prompt: StructureAPI.ChatPrompt;

  connector_id: string;

  created_at: string;

  exploration_run_id: string;
}

/**
 * Descriptor for a relational database connector
 */
export interface ConnectorRelationalDatabaseDescriptor {
  /**
   * List of tables in the database
   */
  tables: Array<ConnectorTableDescriptor>;
}

/**
 * Represents a table in a relational database
 */
export interface ConnectorTableDescriptor {
  /**
   * List of columns in this table
   */
  columns: Array<ConnectorColumnDescriptor>;

  /**
   * Name of the table
   */
  name: string;

  /**
   * Optional description of what this table contains
   */
  description?: string | null;

  /**
   * Optional notes about the table (e.g., constraints, indexes, relationships)
   */
  notes?: string | null;
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
  known_connector_type:
    | 'Slack'
    | 'Confluence'
    | 'GoogleDrive'
    | 'Snowflake'
    | 'Hubspot'
    | 'Salesforce'
    | 'Supabase'
    | 'Sharepoint'
    | 'Notion'
    | 'Jira'
    | 'Linear'
    | 'Intercom'
    | 'Gmail'
    | 'Airtable'
    | 'Trello'
    | 'Postgresql'
    | 'Sap'
    | 'Oracle'
    | 'Manual';

  llm_information_store: string;

  name: string;

  project_id: string;

  description?: string | null;

  refresh_script?: string | null;

  /**
   * Optional secrets/environment variables for the connector
   */
  secrets?: { [key: string]: string };
}

export interface CreateSecretRequest {
  secret_name: string;

  secret_value: string;
}

export interface ExplorationRun {
  created_at: string;

  run_id: string;
}

export interface ExplorationRunsResponse {
  runs: Array<ExplorationRun>;
}

export type ExplorationStatus = 'NotStarted' | 'Running' | 'Completed' | 'Failed';

export interface ExploreStatusResponse {
  status: ExplorationStatus;

  error?: string | null;

  /**
   * Information store for LLM context about a connector
   *
   * This enum represents different types of connector information that can be
   * provided to LLMs for context. It's stored as JSON in the database.
   *
   * When deserializing from the database, we attempt to parse into the most specific
   * variant first (RelationalDatabase), and fall back to Other if the structure
   * doesn't match.
   */
  result?: LlmInformationStore | null;

  started_at?: string | null;
}

export interface ExplorerChatResponse {
  /**
   * Connector explorer chat with deserialized ChatPrompt for API responses
   */
  chat: ConnectorExplorerChat;
}

/**
 * Information store for LLM context about a connector
 *
 * This enum represents different types of connector information that can be
 * provided to LLMs for context. It's stored as JSON in the database.
 *
 * When deserializing from the database, we attempt to parse into the most specific
 * variant first (RelationalDatabase), and fall back to Other if the structure
 * doesn't match.
 */
export type LlmInformationStore = LlmInformationStore.RelationalDatabase | LlmInformationStore.Other;

export namespace LlmInformationStore {
  /**
   * Descriptor for a relational database connector
   */
  export interface RelationalDatabase extends ConnectorsAPI.ConnectorRelationalDatabaseDescriptor {
    type: 'relational_database';
  }

  /**
   * Catch-all for other connector types or unstructured information Contains raw
   * string data
   */
  export interface Other {
    data: string;

    type: 'other';
  }
}

export interface UpdateConnectorRequest {
  description?: string | null;

  known_connector_type?:
    | 'Slack'
    | 'Confluence'
    | 'GoogleDrive'
    | 'Snowflake'
    | 'Hubspot'
    | 'Salesforce'
    | 'Supabase'
    | 'Sharepoint'
    | 'Notion'
    | 'Jira'
    | 'Linear'
    | 'Intercom'
    | 'Gmail'
    | 'Airtable'
    | 'Trello'
    | 'Postgresql'
    | 'Sap'
    | 'Oracle'
    | 'Manual'
    | null;

  llm_information_store?: string | null;

  name?: string | null;

  refresh_script?: string | null;
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
  known_connector_type:
    | 'Slack'
    | 'Confluence'
    | 'GoogleDrive'
    | 'Snowflake'
    | 'Hubspot'
    | 'Salesforce'
    | 'Supabase'
    | 'Sharepoint'
    | 'Notion'
    | 'Jira'
    | 'Linear'
    | 'Intercom'
    | 'Gmail'
    | 'Airtable'
    | 'Trello'
    | 'Postgresql'
    | 'Sap'
    | 'Oracle'
    | 'Manual';

  llm_information_store: string;

  name: string;

  project_id: string;

  description?: string | null;

  refresh_script?: string | null;

  /**
   * Optional secrets/environment variables for the connector
   */
  secrets?: { [key: string]: string };
}

export interface ConnectorUpdateParams {
  description?: string | null;

  known_connector_type?:
    | 'Slack'
    | 'Confluence'
    | 'GoogleDrive'
    | 'Snowflake'
    | 'Hubspot'
    | 'Salesforce'
    | 'Supabase'
    | 'Sharepoint'
    | 'Notion'
    | 'Jira'
    | 'Linear'
    | 'Intercom'
    | 'Gmail'
    | 'Airtable'
    | 'Trello'
    | 'Postgresql'
    | 'Sap'
    | 'Oracle'
    | 'Manual'
    | null;

  llm_information_store?: string | null;

  name?: string | null;

  refresh_script?: string | null;
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

export interface ConnectorGetExplorerChatParams {
  /**
   * Exploration run ID (required)
   */
  run_id: string;
}

Connectors.ConnectorWithSecretsJobsList = ConnectorWithSecretsJobsList;

export declare namespace Connectors {
  export {
    type Connector as Connector,
    type ConnectorColumnDescriptor as ConnectorColumnDescriptor,
    type ConnectorExplorerChat as ConnectorExplorerChat,
    type ConnectorRelationalDatabaseDescriptor as ConnectorRelationalDatabaseDescriptor,
    type ConnectorTableDescriptor as ConnectorTableDescriptor,
    type ConnectorWithSecrets as ConnectorWithSecrets,
    type CreateConnectorRequest as CreateConnectorRequest,
    type CreateSecretRequest as CreateSecretRequest,
    type ExplorationRun as ExplorationRun,
    type ExplorationRunsResponse as ExplorationRunsResponse,
    type ExplorationStatus as ExplorationStatus,
    type ExploreStatusResponse as ExploreStatusResponse,
    type ExplorerChatResponse as ExplorerChatResponse,
    type LlmInformationStore as LlmInformationStore,
    type UpdateConnectorRequest as UpdateConnectorRequest,
    type ConnectorGetResponse as ConnectorGetResponse,
    ConnectorWithSecretsJobsList as ConnectorWithSecretsJobsList,
    type ConnectorCreateParams as ConnectorCreateParams,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorCreateSecretParams as ConnectorCreateSecretParams,
    type ConnectorGetExplorerChatParams as ConnectorGetExplorerChatParams,
  };
}
