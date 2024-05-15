// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as LabelAPI from './label';
import { type Uploadable } from '../core';

export class Label extends APIResource {
  /**
   * web requests that would be cancelled by cloudflare in prod.
   */
  getMessages(
    query?: LabelGetMessagesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelGetMessagesResponse | null>;
  getMessages(options?: Core.RequestOptions): Core.APIPromise<LabelGetMessagesResponse | null>;
  getMessages(
    query: LabelGetMessagesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LabelGetMessagesResponse | null> {
    if (isRequestOptions(query)) {
      return this.getMessages({}, query);
    }
    return this._client.get('/label/refresh', { query, ...options });
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
}

/**
 * Our generic definition of a message to a chat agent.
 */
export interface LabelGetMessagesResponse {
  /**
   * We want this to be a vec of contents so we can accurately capture an
   * interleaving of images and text.
   *
   * This is meant to be a completely raw, unprocessed representation of the text.
   * Don't take stuff out.
   */
  content: Array<LabelGetMessagesResponse.Text | LabelGetMessagesResponse.Image>;

  role: 'user' | 'system' | 'assistant';
}

export namespace LabelGetMessagesResponse {
  export interface Text {
    Text: string;
  }

  export interface Image {
    Image: Uploadable;
  }
}

export interface LabelGetMessagesParams {
  uuid?: string | null;
}

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

export namespace Label {
  export import LabelGetMessagesResponse = LabelAPI.LabelGetMessagesResponse;
  export import LabelGetMessagesParams = LabelAPI.LabelGetMessagesParams;
  export import LabelRunParams = LabelAPI.LabelRunParams;
}
