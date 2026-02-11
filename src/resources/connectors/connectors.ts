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

  addSchemaObject(
    connectorId: string,
    body: ConnectorAddSchemaObjectParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorAddSchemaObjectResponse> {
    return this._client.post(`/connectors/${connectorId}/schema_object`, { body, ...options });
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

  deleteSchemaObject(
    connectorId: string,
    body: ConnectorDeleteSchemaObjectParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeleteSchemaObjectResponse> {
    return this._client.delete(`/connectors/${connectorId}/schema_object`, { body, ...options });
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

  explore(
    connectorId: string,
    body: ConnectorExploreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/connectors/${connectorId}/explore`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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

  /**
   * Returns all tables across all databases and schemas for the given connector.
   * Useful for finding table IDs to pass to the explore endpoint for single-table
   * exploration.
   */
  listTables(connectorId: string, options?: Core.RequestOptions): Core.APIPromise<ListTablesResponse> {
    return this._client.get(`/connectors/${connectorId}/tables`, options);
  }

  listWithSnippets(
    query: ConnectorListWithSnippetsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorListWithSnippetsResponse> {
    return this._client.get('/connectors/with-snippets', { query, ...options });
  }

  /**
   * Mark a clarification request as resolved
   */
  resolveClarification(clarificationId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.patch(`/connectors/clarification-requests/${clarificationId}/resolve`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  searchTables(
    query: ConnectorSearchTablesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorSearchTablesResponse> {
    return this._client.get('/connectors/search-tables', { query, ...options });
  }

  summaries(
    body: ConnectorSummariesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorSummariesResponse> {
    return this._client.post('/connectors/summaries', { body, ...options });
  }

  /**
   * Update column metadata (notes)
   */
  updateColumn(
    columnId: string,
    body: ConnectorUpdateColumnParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.patch(`/connectors/columns/${columnId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update table metadata (description or notes)
   */
  updateTable(
    tableId: string,
    body: ConnectorUpdateTableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateTableResponse> {
    return this._client.patch(`/connectors/tables/${tableId}`, { body, ...options });
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

  deleted_at?: string | null;

  description?: string | null;

  exploration_error?: string | null;

  exploration_started_at?: string | null;

  nango_connection_id?: string | null;

  nango_integration_id?: string | null;

  pipedream_account_id?: string | null;

  pipedream_external_id?: string | null;

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

export interface ConnectorSummariesRequest {
  connector_ids: Array<string>;

  team_id: string;
}

export interface ConnectorSummary {
  id: string;

  name: string;

  /**
   * Base64 data URI for the logo (e.g., "data:image/svg+xml;base64,...")
   */
  logo_url?: string | null;
}

export interface ConnectorTableInfo {
  id: string;

  name: string;

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

export interface ConnectorWithSnippets extends Connector {
  usage_snippet_global?: string | null;
}

export interface CreateConnectorRequest {
  known_connector_type: string;

  name: string;

  team_id: string;

  description?: string | null;

  /**
   * Nango connection ID for OAuth token management
   */
  nango_connection_id?: string | null;

  /**
   * Nango integration ID (e.g., "linear", "slack")
   */
  nango_integration_id?: string | null;

  pipedream_account_id?: string | null;

  /**
   * Unique external ID for Pipedream routing (required for Pipedream connectors)
   */
  pipedream_external_id?: string | null;

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

export type DeleteSchemaObjectRequest =
  | DeleteSchemaObjectRequest.UnionMember0
  | DeleteSchemaObjectRequest.UnionMember1
  | DeleteSchemaObjectRequest.UnionMember2
  | DeleteSchemaObjectRequest.UnionMember3;

export namespace DeleteSchemaObjectRequest {
  export interface UnionMember0 {
    id: string;

    type: 'column';
  }

  export interface UnionMember1 {
    id: string;

    type: 'table';
  }

  export interface UnionMember2 {
    id: string;

    type: 'schema';
  }

  export interface UnionMember3 {
    id: string;

    type: 'database';
  }
}

export interface DeleteSchemaObjectResponse {
  /**
   * The ID of the schema object that was deleted
   */
  object_id: string;

  /**
   * The type of schema object that was deleted
   */
  object_type: string;
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

export interface ExploreConnectorRequest {
  database_id?: string | null;

  schema_id?: string | null;

  /**
   * Which exploration stage to run
   */
  stage?: 'both' | 'ingestion' | 'annotation' | null;

  table_id?: string | null;
}

export interface ExploreStatusResponse {
  status: ExplorationStatus;

  error?: string | null;

  started_at?: string | null;
}

export interface ExplorerChatResponse {
  chats: Array<ConnectorExplorerChat>;
}

export interface ListTablesResponse {
  tables: Array<ConnectorTableInfo>;
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
    id: string;

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
      id: string;

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
        id: string;

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
          id: string;

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

export type SchemaObjectID =
  | SchemaObjectID.Column
  | SchemaObjectID.Table
  | SchemaObjectID.Schema
  | SchemaObjectID.Database;

export namespace SchemaObjectID {
  export interface Column {
    id: string;

    type: 'column';
  }

  export interface Table {
    id: string;

    type: 'table';
  }

  export interface Schema {
    id: string;

    type: 'schema';
  }

  export interface Database {
    id: string;

    type: 'database';
  }
}

export interface UpdateColumnRequest {
  notes?: string | null;
}

export interface UpdateConnectorRequest {
  description?: string | null;

  known_connector_type?: string | null;

  name?: string | null;

  refresh_script?: string | null;

  usage_snippet_override?: string | null;
}

export interface UpdateTableRequest {
  description?: string | null;

  notes?: string | null;
}

export interface UpdateTableResponse {
  /**
   * Represents a table (for relational databases) or resource (for APIs)
   */
  table: UpdateTableResponse.Table;
}

export namespace UpdateTableResponse {
  /**
   * Represents a table (for relational databases) or resource (for APIs)
   */
  export interface Table {
    id: string;

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
      id: string;

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

export type ConnectorAddSchemaObjectResponse =
  | ConnectorAddSchemaObjectResponse.UnionMember0
  | ConnectorAddSchemaObjectResponse.UnionMember1
  | ConnectorAddSchemaObjectResponse.UnionMember2
  | ConnectorAddSchemaObjectResponse.UnionMember3;

export namespace ConnectorAddSchemaObjectResponse {
  export interface UnionMember0 {
    id: string;

    type: 'database';
  }

  export interface UnionMember1 {
    id: string;

    type: 'schema';
  }

  export interface UnionMember2 {
    id: string;

    type: 'table';
  }

  export interface UnionMember3 {
    id: string;

    type: 'column';
  }
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

    column_name?: string | null;

    database_name?: string | null;

    schema_name?: string | null;

    table_name?: string | null;
  }
}

export type ConnectorListWithSnippetsResponse = Array<ConnectorWithSnippets>;

export interface ConnectorSearchTablesResponse {
  ranked_results: Array<ConnectorSearchTablesResponse.RankedResult>;

  raw_results: Array<ConnectorSearchTablesResponse.RawResult>;

  rerank_scores: Array<ConnectorSearchTablesResponse.RerankScore>;
}

export namespace ConnectorSearchTablesResponse {
  /**
   * Result struct for connector table search
   */
  export interface RankedResult {
    columns: Array<RankedResult.Column>;

    database_name: string;

    schema_name: string;

    /**
     * Search relevance score (0 = exact match, higher = less relevant)
     */
    score: number;

    /**
     * Represents a table (for relational databases) or resource (for APIs)
     */
    table: RankedResult.Table;
  }

  export namespace RankedResult {
    /**
     * Represents a column in a table or API resource
     */
    export interface Column {
      id: string;

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

    /**
     * Represents a table (for relational databases) or resource (for APIs)
     */
    export interface Table {
      id: string;

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
        id: string;

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

  /**
   * Result struct for connector table search
   */
  export interface RawResult {
    columns: Array<RawResult.Column>;

    database_name: string;

    schema_name: string;

    /**
     * Search relevance score (0 = exact match, higher = less relevant)
     */
    score: number;

    /**
     * Represents a table (for relational databases) or resource (for APIs)
     */
    table: RawResult.Table;
  }

  export namespace RawResult {
    /**
     * Represents a column in a table or API resource
     */
    export interface Column {
      id: string;

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

    /**
     * Represents a table (for relational databases) or resource (for APIs)
     */
    export interface Table {
      id: string;

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
        id: string;

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

  export interface RerankScore {
    index: number;

    relevance_score: number;

    text?: string | null;
  }
}

export type ConnectorSummariesResponse = Array<ConnectorSummary>;

export interface ConnectorCreateParams {
  known_connector_type: string;

  name: string;

  team_id: string;

  description?: string | null;

  /**
   * Nango connection ID for OAuth token management
   */
  nango_connection_id?: string | null;

  /**
   * Nango integration ID (e.g., "linear", "slack")
   */
  nango_integration_id?: string | null;

  pipedream_account_id?: string | null;

  /**
   * Unique external ID for Pipedream routing (required for Pipedream connectors)
   */
  pipedream_external_id?: string | null;

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

export type ConnectorAddSchemaObjectParams =
  | ConnectorAddSchemaObjectParams.Variant0
  | ConnectorAddSchemaObjectParams.Variant1
  | ConnectorAddSchemaObjectParams.Variant2
  | ConnectorAddSchemaObjectParams.Variant3;

export declare namespace ConnectorAddSchemaObjectParams {
  export interface Variant0 {
    name: string;

    type: 'database';

    description?: string | null;

    notes?: string | null;
  }

  export interface Variant1 {
    database_id: string;

    name: string;

    type: 'schema';

    description?: string | null;

    notes?: string | null;
  }

  export interface Variant2 {
    name: string;

    schema_id: string;

    type: 'table';

    description?: string | null;

    endpoint?: string | null;

    notes?: string | null;
  }

  export interface Variant3 {
    column_type: string;

    name: string;

    table_id: string;

    type: 'column';

    notes?: string | null;
  }
}

export interface ConnectorCreateSecretParams {
  secret_name: string;

  secret_value: string;
}

export type ConnectorDeleteSchemaObjectParams =
  | ConnectorDeleteSchemaObjectParams.Variant0
  | ConnectorDeleteSchemaObjectParams.Variant1
  | ConnectorDeleteSchemaObjectParams.Variant2
  | ConnectorDeleteSchemaObjectParams.Variant3;

export declare namespace ConnectorDeleteSchemaObjectParams {
  export interface Variant0 {
    id: string;

    type: 'column';
  }

  export interface Variant1 {
    id: string;

    type: 'table';
  }

  export interface Variant2 {
    id: string;

    type: 'schema';
  }

  export interface Variant3 {
    id: string;

    type: 'database';
  }
}

export interface ConnectorExploreParams {
  database_id?: string | null;

  schema_id?: string | null;

  /**
   * Which exploration stage to run
   */
  stage?: 'both' | 'ingestion' | 'annotation' | null;

  table_id?: string | null;
}

export interface ConnectorGetExplorerChatParams {
  /**
   * Exploration run ID (required)
   */
  run_id: string;
}

export interface ConnectorListWithSnippetsParams {
  /**
   * Team ID to list connectors for
   */
  team_id: string;
}

export interface ConnectorSearchTablesParams {
  /**
   * Search query string
   */
  query: string;

  /**
   * Team ID to search tables for
   */
  team_id: string;
}

export interface ConnectorSummariesParams {
  connector_ids: Array<string>;

  team_id: string;
}

export interface ConnectorUpdateColumnParams {
  notes?: string | null;
}

export interface ConnectorUpdateTableParams {
  description?: string | null;

  notes?: string | null;
}

Connectors.ConnectorWithSecretsJobsList = ConnectorWithSecretsJobsList;
Connectors.TypeSnippets = TypeSnippets;

export declare namespace Connectors {
  export {
    type Connector as Connector,
    type ConnectorCategory as ConnectorCategory,
    type ConnectorExplorerChat as ConnectorExplorerChat,
    type ConnectorStoreResponse as ConnectorStoreResponse,
    type ConnectorSummariesRequest as ConnectorSummariesRequest,
    type ConnectorSummary as ConnectorSummary,
    type ConnectorTableInfo as ConnectorTableInfo,
    type ConnectorWithSecrets as ConnectorWithSecrets,
    type ConnectorWithSnippets as ConnectorWithSnippets,
    type CreateConnectorRequest as CreateConnectorRequest,
    type CreateSecretRequest as CreateSecretRequest,
    type DeleteSchemaObjectRequest as DeleteSchemaObjectRequest,
    type DeleteSchemaObjectResponse as DeleteSchemaObjectResponse,
    type ExplorationPhaseID as ExplorationPhaseID,
    type ExplorationRun as ExplorationRun,
    type ExplorationRunsResponse as ExplorationRunsResponse,
    type ExplorationStatus as ExplorationStatus,
    type ExploreConnectorRequest as ExploreConnectorRequest,
    type ExploreStatusResponse as ExploreStatusResponse,
    type ExplorerChatResponse as ExplorerChatResponse,
    type ListTablesResponse as ListTablesResponse,
    type LlmInformationStore as LlmInformationStore,
    type SchemaObjectID as SchemaObjectID,
    type UpdateColumnRequest as UpdateColumnRequest,
    type UpdateConnectorRequest as UpdateConnectorRequest,
    type UpdateTableRequest as UpdateTableRequest,
    type UpdateTableResponse as UpdateTableResponse,
    type ConnectorAddSchemaObjectResponse as ConnectorAddSchemaObjectResponse,
    type ConnectorGetResponse as ConnectorGetResponse,
    type ConnectorGetClarificationRequestsResponse as ConnectorGetClarificationRequestsResponse,
    type ConnectorListWithSnippetsResponse as ConnectorListWithSnippetsResponse,
    type ConnectorSearchTablesResponse as ConnectorSearchTablesResponse,
    type ConnectorSummariesResponse as ConnectorSummariesResponse,
    ConnectorWithSecretsJobsList as ConnectorWithSecretsJobsList,
    type ConnectorCreateParams as ConnectorCreateParams,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorAddSchemaObjectParams as ConnectorAddSchemaObjectParams,
    type ConnectorCreateSecretParams as ConnectorCreateSecretParams,
    type ConnectorDeleteSchemaObjectParams as ConnectorDeleteSchemaObjectParams,
    type ConnectorExploreParams as ConnectorExploreParams,
    type ConnectorGetExplorerChatParams as ConnectorGetExplorerChatParams,
    type ConnectorListWithSnippetsParams as ConnectorListWithSnippetsParams,
    type ConnectorSearchTablesParams as ConnectorSearchTablesParams,
    type ConnectorSummariesParams as ConnectorSummariesParams,
    type ConnectorUpdateColumnParams as ConnectorUpdateColumnParams,
    type ConnectorUpdateTableParams as ConnectorUpdateTableParams,
  };

  export {
    TypeSnippets as TypeSnippets,
    type Snippet as Snippet,
    type UpsertRequest as UpsertRequest,
    type TypeSnippetUpsertParams as TypeSnippetUpsertParams,
  };
}
