// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { JobsList, type JobsListParams } from '../../pagination';

export class Sandbox extends APIResource {
  list(
    query?: SandboxListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AdminSandboxResponsesJobsList, AdminSandboxResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<AdminSandboxResponsesJobsList, AdminSandboxResponse>;
  list(
    query: SandboxListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AdminSandboxResponsesJobsList, AdminSandboxResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/admin/sandbox/list', AdminSandboxResponsesJobsList, {
      query,
      ...options,
    });
  }
}

export class AdminSandboxResponsesJobsList extends JobsList<AdminSandboxResponse> {}

export type AdminSandboxResponse = AdminSandboxResponse.Dora | AdminSandboxResponse.Diego;

export namespace AdminSandboxResponse {
  export interface Dora {
    id: string;

    chat_session_id: string;

    created_at: string;

    modal_id: string;

    modal_url: string;

    sandbox_type: 'dora';

    status: 'alive' | 'terminated';

    updated_at: string;

    latest_node?: string | null;
  }

  export interface Diego {
    id: string;

    active_count: number;

    created_at: string;

    exploration_run_id: string;

    sandbox_type: 'diego';

    status: 'alive' | 'terminated';

    updated_at: string;

    modal_id?: string | null;

    modal_url?: string | null;
  }
}

export interface SandboxListParams extends JobsListParams {}

Sandbox.AdminSandboxResponsesJobsList = AdminSandboxResponsesJobsList;

export declare namespace Sandbox {
  export {
    type AdminSandboxResponse as AdminSandboxResponse,
    AdminSandboxResponsesJobsList as AdminSandboxResponsesJobsList,
    type SandboxListParams as SandboxListParams,
  };
}
