// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as RunAsyncAPI from './run-async';

export class RunAsync extends APIResource {
  /**
   * Structure an unstructured data source into the given dataset in an async
   * fashion.
   *
   * Returns a token that can be waited on until the request is finished.
   */
  create(params: RunAsyncCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { dataset_name, custom_instruction, llm, ...body } = params;
    return this._client.post('/structure/run_async', {
      query: { dataset_name, custom_instruction, llm },
      body,
      ...options,
    });
  }
}

export type RunAsyncCreateResponse = unknown;

export type RunAsyncCreateParams =
  | RunAsyncCreateParams.Variant0
  | RunAsyncCreateParams.Variant1
  | RunAsyncCreateParams.Variant2
  | RunAsyncCreateParams.Variant3;

export namespace RunAsyncCreateParams {
  export interface Variant0 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    Text: RunAsyncCreateParams.Variant0.Text;

    /**
     * Query param:
     */
    custom_instruction?: string | null;

    /**
     * Query param:
     */
    llm?: unknown | null;
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
    Document: RunAsyncCreateParams.Variant1.Document;

    /**
     * Query param:
     */
    custom_instruction?: string | null;

    /**
     * Query param:
     */
    llm?: unknown | null;
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
    Web: RunAsyncCreateParams.Variant2.Web;

    /**
     * Query param:
     */
    custom_instruction?: string | null;

    /**
     * Query param:
     */
    llm?: unknown | null;
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
    SECFiling: RunAsyncCreateParams.Variant3.SecFiling;

    /**
     * Query param:
     */
    custom_instruction?: string | null;

    /**
     * Query param:
     */
    llm?: unknown | null;
  }

  export namespace Variant3 {
    export interface SecFiling {
      accession_number?: string | null;

      quarter?: number | null;

      year?: number | null;
    }
  }
}

export namespace RunAsync {
  export import RunAsyncCreateResponse = RunAsyncAPI.RunAsyncCreateResponse;
  export import RunAsyncCreateParams = RunAsyncAPI.RunAsyncCreateParams;
}
