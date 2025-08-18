// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SessionsAPI from './sessions';
import { type Response } from '../_shims/index';

export class PublicSessions extends APIResource {
  getLatestWorkflow(chatSessionId: string, options?: Core.RequestOptions): Core.APIPromise<WorkflowDag> {
    return this._client.get(`/public/chat/${chatSessionId}/latest-workflow`, options);
  }

  getNodeOutputData(nodeId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/public/nodes/${nodeId}/output_data`, {
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface WorkflowDag {
  edges: Array<SessionsAPI.WorkflowSessionEdge>;

  nodes: Array<SessionsAPI.WorkflowSessionNode>;

  session_id: string;

  error?: string | null;

  error_traceback?: string | null;
}

export declare namespace PublicSessions {
  export { type WorkflowDag as WorkflowDag };
}
