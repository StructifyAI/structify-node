// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as VersionAPI from './version';

export class Version extends APIResource {
  /**
   * Gets the version of the API server.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ServerInformation> {
    return this._client.get('/server/version', options);
  }
}

export interface ServerInformation {
  version: string;
}

export namespace Version {
  export import ServerInformation = VersionAPI.ServerInformation;
}
