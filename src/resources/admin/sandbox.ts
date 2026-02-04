// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { JobsList, type JobsListParams } from '../../pagination';

export class Sandbox extends APIResource {
  list(
    query?: SandboxListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AdminSandboxesJobsList, AdminSandbox>;
  list(options?: Core.RequestOptions): Core.PagePromise<AdminSandboxesJobsList, AdminSandbox>;
  list(
    query: SandboxListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AdminSandboxesJobsList, AdminSandbox> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/admin/sandbox/list', AdminSandboxesJobsList, { query, ...options });
  }
}

export class AdminSandboxesJobsList extends JobsList<AdminSandbox> {}

export interface AdminSandbox {
  id: string;

  created_at: string;

  provider: 'modal' | 'daytona';

  sandbox_type: SandboxType;

  status: 'alive' | 'terminated';

  updated_at: string;

  api_url?: string | null;

  chat_session_id?: string | null;

  exploration_run_id?: string | null;

  latest_node?: string | null;

  provider_id?: string | null;

  tunnel_url?: string | null;
}

export type SandboxType = 'dora' | 'diego';

export interface SandboxListParams extends JobsListParams {}

Sandbox.AdminSandboxesJobsList = AdminSandboxesJobsList;

export declare namespace Sandbox {
  export {
    type AdminSandbox as AdminSandbox,
    type SandboxType as SandboxType,
    AdminSandboxesJobsList as AdminSandboxesJobsList,
    type SandboxListParams as SandboxListParams,
  };
}
