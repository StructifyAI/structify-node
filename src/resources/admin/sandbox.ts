// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SandboxAPI from '../sandbox';
import { SandboxesJobsList } from '../sandbox';
import { type JobsListParams } from '../../pagination';

export class Sandbox extends APIResource {
  list(
    query?: SandboxListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SandboxesJobsList, SandboxAPI.Sandbox>;
  list(options?: Core.RequestOptions): Core.PagePromise<SandboxesJobsList, SandboxAPI.Sandbox>;
  list(
    query: SandboxListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SandboxesJobsList, SandboxAPI.Sandbox> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/admin/sandbox/list', SandboxesJobsList, { query, ...options });
  }
}

export interface SandboxListParams extends JobsListParams {}

export declare namespace Sandbox {
  export { type SandboxListParams as SandboxListParams };
}

export { SandboxesJobsList };
