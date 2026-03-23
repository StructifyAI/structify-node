// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConnectorsAPI from '../connectors/connectors';

/**
 * Admin endpoints
 */
export class Connector extends APIResource {
  clone(body: ConnectorCloneParams, options?: Core.RequestOptions): Core.APIPromise<CloneConnectorsResponse> {
    return this._client.post('/admin/connector/clone', { body, ...options });
  }

  setDatahubConfig(
    body: ConnectorSetDatahubConfigParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectorsAPI.Connector> {
    return this._client.post('/admin/connector/datahub-config', { body, ...options });
  }
}

export interface CloneConnectorItem {
  known_connector_type: string;

  name: string;

  source_connector_id: string;
}

export interface CloneConnectorsRequest {
  connectors: Array<CloneConnectorItem>;

  source_membership_id: string;

  source_team_id: string;

  target_team_id: string;
}

export interface CloneConnectorsResponse {
  connectors: Array<ConnectorsAPI.Connector>;
}

/**
 * Keys used in the datahub secret map, each corresponding to a field in the
 * ingestion request.
 */
export type DatahubIngestionKey =
  | 'host'
  | 'port'
  | 'database'
  | 'username'
  | 'password'
  | 'account_id'
  | 'warehouse'
  | 'role'
  | 'instance_url'
  | 'access_token'
  | 'project_id'
  | 'credential_json';

export type DatahubIngestionType = 'postgres' | 'snowflake' | 'salesforce' | 'hubspot' | 'bigquery';

/**
 * Maps DatahubIngestionKey to the name of the connector secret that holds the
 * value.
 */
export type DatahubSecretMap = { [key: string]: string };

export interface SetDatahubConfigRequest {
  connector_id: string;

  datahub_ingestion_type?: DatahubIngestionType | null;

  /**
   * Maps DatahubIngestionKey to the name of the connector secret that holds the
   * value.
   */
  datahub_secret_map?: DatahubSecretMap | null;
}

export interface ConnectorCloneParams {
  connectors: Array<CloneConnectorItem>;

  source_membership_id: string;

  source_team_id: string;

  target_team_id: string;
}

export interface ConnectorSetDatahubConfigParams {
  connector_id: string;

  datahub_ingestion_type?: DatahubIngestionType | null;

  /**
   * Maps DatahubIngestionKey to the name of the connector secret that holds the
   * value.
   */
  datahub_secret_map?: DatahubSecretMap | null;
}

export declare namespace Connector {
  export {
    type CloneConnectorItem as CloneConnectorItem,
    type CloneConnectorsRequest as CloneConnectorsRequest,
    type CloneConnectorsResponse as CloneConnectorsResponse,
    type DatahubIngestionKey as DatahubIngestionKey,
    type DatahubIngestionType as DatahubIngestionType,
    type DatahubSecretMap as DatahubSecretMap,
    type SetDatahubConfigRequest as SetDatahubConfigRequest,
    type ConnectorCloneParams as ConnectorCloneParams,
    type ConnectorSetDatahubConfigParams as ConnectorSetDatahubConfigParams,
  };
}
