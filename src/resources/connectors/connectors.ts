// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChatAPI from '../chat';
import * as StructureAPI from '../structure';
import * as TypeSnippetsAPI from './type-snippets';
import { Snippet, TypeSnippetUpsertParams, TypeSnippets, UpsertRequest } from './type-snippets';
import { JobsList, type JobsListParams } from '../../pagination';

export class Connectors extends APIResource {
  typeSnippets: TypeSnippetsAPI.TypeSnippets = new TypeSnippetsAPI.TypeSnippets(this._client);

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

  /**
   * This endpoint queues DiscoverColumns jobs for all tables in a DataHub connector.
   * It's designed for DataHub connectors where tables are pre-populated from DataHub
   * metadata.
   */
  exploreDatahubTables(
    connectorId: string,
    body: ConnectorExploreDatahubTablesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExploreDatahubTablesResponse> {
    return this._client.post(`/${connectorId}/explore_datahub_tables`, { body, ...options });
  }

  get(connectorId: string, options?: Core.RequestOptions): Core.APIPromise<ConnectorGetResponse> {
    return this._client.get(`/connectors/${connectorId}`, options);
  }

  /**
   * Get all clarification requests for a connector
   */
  getClarificationRequests(
    connectorId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorGetClarificationRequestsResponse> {
    return this._client.get(`/connectors/${connectorId}/clarification-requests`, options);
  }

  /**
   * Get all exploration runs for a connector (requires debug permission)
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
   * Returns chats for all phases (table discovery, column discovery for each table,
   * etc.)
   */
  getExplorerChat(
    connectorId: string,
    query: ConnectorGetExplorerChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExplorerChatResponse> {
    return this._client.get(`/connectors/${connectorId}/explore/chat`, { query, ...options });
  }

  getStore(connectorId: string, options?: Core.RequestOptions): Core.APIPromise<ConnectorStoreResponse> {
    return this._client.get(`/connectors/${connectorId}/store`, options);
  }

  ingestDatahub(
    body: ConnectorIngestDatahubParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IngestDatahubResponse> {
    return this._client.post('/connectors/ingest-datahub', { body, ...options });
  }

  listWithSnippets(
    query: ConnectorListWithSnippetsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorListWithSnippetsResponse> {
    return this._client.get('/connectors/with-snippets', { query, ...options });
  }
}

export class ConnectorWithSecretsJobsList extends JobsList<ConnectorWithSecrets> {}

export interface Connector {
  id: string;

  created_at: string;

  exploration_status: ExplorationStatus;

  known_connector_type: string;

  name: string;

  team_id: string;

  updated_at: string;

  connector_category?: ConnectorCategory | null;

  datahub_urn?: string | null;

  description?: string | null;

  exploration_error?: string | null;

  exploration_started_at?: string | null;

  pipedream_account_id?: string | null;

  refresh_script?: string | null;

  usage_snippet_override?: string | null;
}

export type ConnectorCategory = 'RelationalDatabase' | 'ApiTabular';

/**
 * Connector explorer chat with deserialized ChatPrompt for API responses
 */
export interface ConnectorExplorerChat {
  id: string;

  chat_events: Array<ChatAPI.ChatEvent>;

  chat_prompt: StructureAPI.ChatPrompt;

  connector_id: string;

  created_at: string;

  exploration_run_id: string;

  /**
   * Identifies the phase of connector exploration
   *
   * This enum is used to track which phase of exploration a chat session belongs to.
   * It's stored as JSONB in the database to allow for flexible phase identification.
   */
  phase_id: ExplorationPhaseID;
}

export interface ConnectorStoreResponse {
  /**
   * Information store for connector schema
   *
   * Hierarchical structure: Connector → Database → Schema → Table → Column Works for
   * both relational databases and API-based data. Distinguishes between the two by
   * presence of `endpoint` on tables:
   *
   * - Relational DB: all tables have `endpoint: None`
   * - API: all tables have `endpoint: Some(...)`
   */
  store?: LlmInformationStore | null;
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

export interface ConnectorWithSnippets extends Connector {
  usage_snippet_global?: string | null;
}

export interface CreateConnectorRequest {
  known_connector_type: string;

  name: string;

  team_id: string;

  description?: string | null;

  pipedream_account_id?: string | null;

  pipedream_project_id?: string | null;

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

/**
 * Identifies the phase of connector exploration
 *
 * This enum is used to track which phase of exploration a chat session belongs to.
 * It's stored as JSONB in the database to allow for flexible phase identification.
 */
export type ExplorationPhaseID =
  | ExplorationPhaseID.DiscoverDatabases
  | ExplorationPhaseID.DiscoverSchemas
  | ExplorationPhaseID.DiscoverTables
  | ExplorationPhaseID.DiscoverColumns
  | ExplorationPhaseID.DiscoverAPIResources
  | ExplorationPhaseID.DiscoverAPIFields;

export namespace ExplorationPhaseID {
  /**
   * First phase: discovering all databases in the connector
   */
  export interface DiscoverDatabases {
    connector_id: string;

    type: 'discover_databases';
  }

  /**
   * Second phase: discovering all schemas in a database
   */
  export interface DiscoverSchemas {
    database_id: string;

    database_name: string;

    type: 'discover_schemas';
  }

  /**
   * Third phase: discovering all tables in a schema
   */
  export interface DiscoverTables {
    schema_id: string;

    schema_name: string;

    type: 'discover_tables';
  }

  /**
   * Fourth phase: discovering columns for a specific table
   */
  export interface DiscoverColumns {
    table_id: string;

    table_name: string;

    type: 'discover_columns';
  }

  /**
   * Initial phase: discovering all API resources
   */
  export interface DiscoverAPIResources {
    connector_id: string;

    type: 'discover_api_resources';
  }

  /**
   * Second phase: discovering fields for a specific API resource
   */
  export interface DiscoverAPIFields {
    resource_name: string;

    table_id: string;

    type: 'discover_api_fields';
  }
}

export interface ExplorationRun {
  created_at: string;

  run_id: string;
}

export interface ExplorationRunsResponse {
  runs: Array<ExplorationRun>;
}

export type ExplorationStatus = 'NotStarted' | 'Running' | 'Completed' | 'Failed';

export type ExploreDatahubTablesRequest = unknown;

export interface ExploreDatahubTablesResponse {
  jobs_queued: number;

  tables_found: number;
}

export interface ExploreStatusResponse {
  status: ExplorationStatus;

  error?: string | null;

  started_at?: string | null;
}

export interface ExplorerChatResponse {
  chats: Array<ConnectorExplorerChat>;
}

export interface IngestDatahubRequest {
  connector_id: string;
}

export interface IngestDatahubResponse {
  job_id: string;
}

/**
 * Information store for connector schema
 *
 * Hierarchical structure: Connector → Database → Schema → Table → Column Works for
 * both relational databases and API-based data. Distinguishes between the two by
 * presence of `endpoint` on tables:
 *
 * - Relational DB: all tables have `endpoint: None`
 * - API: all tables have `endpoint: Some(...)`
 */
export interface LlmInformationStore {
  /**
   * List of databases in this connector
   */
  databases: Array<LlmInformationStore.Database>;

  /**
   * Whether this store uses default auto-generated database/schema names (i.e.,
   * database and schema names match the connector name). When true, UIs should hide
   * the database/schema hierarchy. When false, UIs should show the full database →
   * schema → table hierarchy.
   */
  uses_default_hierarchy: boolean;
}

export namespace LlmInformationStore {
  /**
   * Database within a connector
   */
  export interface Database {
    name: string;

    schemas: Array<Database.Schema>;

    description?: string | null;

    notes?: string | null;
  }

  export namespace Database {
    /**
     * Schema within a database
     */
    export interface Schema {
      name: string;

      tables: Array<Schema.Table>;

      description?: string | null;

      notes?: string | null;
    }

    export namespace Schema {
      /**
       * Represents a table (for relational databases) or resource (for APIs)
       */
      export interface Table {
        /**
         * List of columns in this table/resource
         */
        columns: Array<Table.Column>;

        /**
         * Name of the table or resource
         */
        name: string;

        /**
         * Optional description
         */
        description?: string | null;

        /**
         * API endpoint (None for relational DB tables, Some for API resources)
         */
        endpoint?: string | null;

        /**
         * Optional notes
         */
        notes?: string | null;
      }

      export namespace Table {
        /**
         * Represents a column in a table or API resource
         */
        export interface Column {
          /**
           * Name of the column
           */
          name: string;

          /**
           * SQL type of the column (e.g., "VARCHAR(255)", "INTEGER") or API field type
           */
          type: string;

          /**
           * Additional notes about the column
           */
          notes?: string | null;
        }
      }
    }
  }
}

export interface UpdateConnectorRequest {
  description?: string | null;

  known_connector_type?: string | null;

  name?: string | null;

  refresh_script?: string | null;

  usage_snippet_override?: string | null;
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

export interface ConnectorGetClarificationRequestsResponse {
  requests: Array<ConnectorGetClarificationRequestsResponse.Request>;
}

export namespace ConnectorGetClarificationRequestsResponse {
  export interface Request {
    id: string;

    created_at: string;

    question: string;

    resolved: boolean;

    table_id: string;

    updated_at: string;

    column_id?: string | null;
  }
}

export type ConnectorListWithSnippetsResponse = Array<ConnectorWithSnippets>;

export interface ConnectorCreateParams {
  known_connector_type: string;

  name: string;

  team_id: string;

  description?: string | null;

  pipedream_account_id?: string | null;

  pipedream_project_id?: string | null;

  refresh_script?: string | null;

  /**
   * Optional secrets/environment variables for the connector
   */
  secrets?: { [key: string]: string };
}

export interface ConnectorUpdateParams {
  description?: string | null;

  known_connector_type?: string | null;

  name?: string | null;

  refresh_script?: string | null;

  usage_snippet_override?: string | null;
}

export interface ConnectorListParams extends JobsListParams {
  /**
   * Team ID to list connectors for
   */
  team_id: string;
}

export interface ConnectorCreateSecretParams {
  secret_name: string;

  secret_value: string;
}

export type ConnectorExploreDatahubTablesParams = ExploreDatahubTablesRequest;

export interface ConnectorGetExplorerChatParams {
  /**
   * Exploration run ID (required)
   */
  run_id: string;
}

export interface ConnectorIngestDatahubParams {
  connector_id: string;
}

export interface ConnectorListWithSnippetsParams {
  /**
   * Team ID to list connectors for
   */
  team_id: string;
}

Connectors.ConnectorWithSecretsJobsList = ConnectorWithSecretsJobsList;
Connectors.TypeSnippets = TypeSnippets;

export declare namespace Connectors {
  export {
    type Connector as Connector,
    type ConnectorCategory as ConnectorCategory,
    type ConnectorExplorerChat as ConnectorExplorerChat,
    type ConnectorStoreResponse as ConnectorStoreResponse,
    type ConnectorWithSecrets as ConnectorWithSecrets,
    type ConnectorWithSnippets as ConnectorWithSnippets,
    type CreateConnectorRequest as CreateConnectorRequest,
    type CreateSecretRequest as CreateSecretRequest,
    type ExplorationPhaseID as ExplorationPhaseID,
    type ExplorationRun as ExplorationRun,
    type ExplorationRunsResponse as ExplorationRunsResponse,
    type ExplorationStatus as ExplorationStatus,
    type ExploreDatahubTablesRequest as ExploreDatahubTablesRequest,
    type ExploreDatahubTablesResponse as ExploreDatahubTablesResponse,
    type ExploreStatusResponse as ExploreStatusResponse,
    type ExplorerChatResponse as ExplorerChatResponse,
    type IngestDatahubRequest as IngestDatahubRequest,
    type IngestDatahubResponse as IngestDatahubResponse,
    type LlmInformationStore as LlmInformationStore,
    type UpdateConnectorRequest as UpdateConnectorRequest,
    type ConnectorGetResponse as ConnectorGetResponse,
    type ConnectorGetClarificationRequestsResponse as ConnectorGetClarificationRequestsResponse,
    type ConnectorListWithSnippetsResponse as ConnectorListWithSnippetsResponse,
    ConnectorWithSecretsJobsList as ConnectorWithSecretsJobsList,
    type ConnectorCreateParams as ConnectorCreateParams,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorCreateSecretParams as ConnectorCreateSecretParams,
    type ConnectorExploreDatahubTablesParams as ConnectorExploreDatahubTablesParams,
    type ConnectorGetExplorerChatParams as ConnectorGetExplorerChatParams,
    type ConnectorIngestDatahubParams as ConnectorIngestDatahubParams,
    type ConnectorListWithSnippetsParams as ConnectorListWithSnippetsParams,
  };

  export {
    TypeSnippets as TypeSnippets,
    type Snippet as Snippet,
    type UpsertRequest as UpsertRequest,
    type TypeSnippetUpsertParams as TypeSnippetUpsertParams,
  };
}
