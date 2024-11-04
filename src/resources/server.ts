// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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

export declare namespace Server {
  export { type ServerInformation as ServerInformation };
}
