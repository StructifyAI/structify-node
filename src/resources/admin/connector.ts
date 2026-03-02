// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConnectorsAPI from '../connectors/connectors';

export class Connector extends APIResource {
  clone(body: ConnectorCloneParams, options?: Core.RequestOptions): Core.APIPromise<CloneConnectorsResponse> {
    return this._client.post('/admin/connector/clone', { body, ...options });
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

export interface ConnectorCloneParams {
  connectors: Array<CloneConnectorItem>;

  source_membership_id: string;

  source_team_id: string;

  target_team_id: string;
}

export declare namespace Connector {
  export {
    type CloneConnectorItem as CloneConnectorItem,
    type CloneConnectorsRequest as CloneConnectorsRequest,
    type CloneConnectorsResponse as CloneConnectorsResponse,
    type ConnectorCloneParams as ConnectorCloneParams,
  };
}
