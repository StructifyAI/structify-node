// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as StructureAPI from './structure';

export class Structure extends APIResource {
  /**
   * Wait for all specified async tasks to be completed.
   */
  isComplete(body: StructureIsCompleteParams, options?: Core.RequestOptions): Core.APIPromise<IsComplete> {
    return this._client.post('/structure/is_complete', { body, ...options });
  }

  /**
   * Wait for all specified async tasks to be completed.
   */
  jobStatus(body: StructureJobStatusParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/structure/job_status', { body, ...options });
  }

  /**
   * Returns a token that can be waited on until the request is finished.
   */
  runAsync(body: StructureRunAsyncParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/structure/run_async', { body, ...options });
  }
}

export interface IsComplete {
  completed: boolean;
}

export type StructureJobStatusResponse = unknown;

export type StructureRunAsyncResponse = unknown;

export type StructureIsCompleteParams = Array<string>;

export type StructureJobStatusParams = Array<string>;

export type StructureRunAsyncParams = unknown;

export namespace Structure {
  export import IsComplete = StructureAPI.IsComplete;
  export import StructureJobStatusResponse = StructureAPI.StructureJobStatusResponse;
  export import StructureRunAsyncResponse = StructureAPI.StructureRunAsyncResponse;
  export import StructureIsCompleteParams = StructureAPI.StructureIsCompleteParams;
  export import StructureJobStatusParams = StructureAPI.StructureJobStatusParams;
  export import StructureRunAsyncParams = StructureAPI.StructureRunAsyncParams;
}
