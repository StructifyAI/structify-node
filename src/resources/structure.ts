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
  runAsync(params: StructureRunAsyncParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { dataset_name, custom_instruction, ...body } = params;
    return this._client.post('/structure/run_async', {
      query: { dataset_name, custom_instruction },
      body,
      ...options,
    });
  }
}

export interface IsComplete {
  completed: boolean;
}

export type StructureJobStatusResponse = unknown;

export type StructureRunAsyncResponse = unknown;

export type StructureIsCompleteParams = Array<string>;

export type StructureJobStatusParams = Array<string>;

export type StructureRunAsyncParams =
  | StructureRunAsyncParams.Variant0
  | StructureRunAsyncParams.Variant1
  | StructureRunAsyncParams.Variant2
  | StructureRunAsyncParams.Variant3;

export namespace StructureRunAsyncParams {
  export interface Variant0 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    Text: StructureRunAsyncParams.Variant0.Text;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant0 {
    export interface Text {
      text_content: string;
    }
  }

  export interface Variant1 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    Document: StructureRunAsyncParams.Variant1.Document;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant1 {
    export interface Document {
      path: string;
    }
  }

  export interface Variant2 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    Web: StructureRunAsyncParams.Variant2.Web;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant2 {
    export interface Web {
      phrase: string;

      starting_website?: string | null;
    }
  }

  export interface Variant3 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    SECFiling: StructureRunAsyncParams.Variant3.SecFiling;

    /**
     * Query param:
     */
    custom_instruction?: string | null;
  }

  export namespace Variant3 {
    export interface SecFiling {
      accession_number?: string | null;

      quarter?: number | null;

      year?: number | null;
    }
  }
}

export namespace Structure {
  export import IsComplete = StructureAPI.IsComplete;
  export import StructureJobStatusResponse = StructureAPI.StructureJobStatusResponse;
  export import StructureRunAsyncResponse = StructureAPI.StructureRunAsyncResponse;
  export import StructureIsCompleteParams = StructureAPI.StructureIsCompleteParams;
  export import StructureJobStatusParams = StructureAPI.StructureJobStatusParams;
  export import StructureRunAsyncParams = StructureAPI.StructureRunAsyncParams;
}
