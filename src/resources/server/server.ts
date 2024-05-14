// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as VersionAPI from './version';

export class Server extends APIResource {
  version: VersionAPI.Version = new VersionAPI.Version(this._client);
}

export namespace Server {
  export import Version = VersionAPI.Version;
  export import ServerInformation = VersionAPI.ServerInformation;
}
