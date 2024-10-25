// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ServerAPI from './server';

export class Server extends APIResource {
  /**
   * Gets the version of the API server.
   */
  version(options?: Core.RequestOptions): Core.APIPromise<ServerInformation> {
    return this._client.get('/server/version', options);
  }
}

export interface ServerInformation {
  version: string;
}

export namespace Server {
  export type ServerInformation = ServerAPI.ServerInformation;
}
