// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as RunAPI from './run';

export class Run extends APIResource {
  /**
   * There's a couple of different types of sources. Right now, you can either add a
   * file path or the internet as a whole. In the future, we'll allow you to pare
   * down the internet to a specific domain or criterium.
   */
  create(params: RunCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { dataset_name, custom_instruction, ...body } = params;
    return this._client.post('/structure/run', {
      query: { dataset_name, custom_instruction },
      body,
      ...options,
    });
  }
}

export type RunCreateResponse = unknown;

export type RunCreateParams =
  | RunCreateParams.Variant0
  | RunCreateParams.Variant1
  | RunCreateParams.Variant2
  | RunCreateParams.Variant3;

export namespace RunCreateParams {
  export interface Variant0 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    Text: RunCreateParams.Variant0.Text;

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
    Document: RunCreateParams.Variant1.Document;

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
    Web: RunCreateParams.Variant2.Web;

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
    SECFiling: RunCreateParams.Variant3.SecFiling;

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

export namespace Run {
  export import RunCreateResponse = RunAPI.RunCreateResponse;
  export import RunCreateParams = RunAPI.RunCreateParams;
}
