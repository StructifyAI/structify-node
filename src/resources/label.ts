// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as LabelAPI from './label';
import { type Uploadable } from '../core';

export class Label extends APIResource {
  /**
   * web requests that would be cancelled by cloudflare in prod.
   */
  getMessages(options?: Core.RequestOptions): Core.APIPromise<LabelGetMessagesResponse | null> {
    return this._client.get('/label/refresh', options);
  }

  /**
   * Returns a token that can be waited on until the request is finished.
   */
  run(params: LabelRunParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { dataset_name, custom_instruction, ...body } = params;
    return this._client.post('/label/run_async', {
      query: { dataset_name, custom_instruction },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Submit a label as part of the human LLM.
   */
  submit(body: LabelSubmitParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/label/submit', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface LabelGetMessagesResponse {
  img: Uploadable;

  text: string;

  uuid: string;
}

export type LabelSubmitResponse = string;

export type LabelRunParams =
  | LabelRunParams.Variant0
  | LabelRunParams.Variant1
  | LabelRunParams.Variant2
  | LabelRunParams.Variant3;

export namespace LabelRunParams {
  export interface Variant0 {
    /**
     * Query param:
     */
    dataset_name: string;

    /**
     * Body param:
     */
    Text: LabelRunParams.Variant0.Text;

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
    Document: LabelRunParams.Variant1.Document;

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
    Web: LabelRunParams.Variant2.Web;

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
    SECFiling: LabelRunParams.Variant3.SecFiling;

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

export interface LabelSubmitParams {
  _text: string;

  uuid: string;
}

export namespace Label {
  export import LabelGetMessagesResponse = LabelAPI.LabelGetMessagesResponse;
  export import LabelSubmitResponse = LabelAPI.LabelSubmitResponse;
  export import LabelRunParams = LabelAPI.LabelRunParams;
  export import LabelSubmitParams = LabelAPI.LabelSubmitParams;
}
