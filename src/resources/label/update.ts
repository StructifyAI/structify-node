// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as UpdateAPI from './update';
import * as LlmAssistAPI from './llm-assist';

export class Update extends APIResource {
  /**
   * Submit a label as part of the human LLM.
   */
  create(
    runUuid: string,
    runIdx: number,
    body: UpdateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post(`/label/update/${runUuid}/${runIdx}`, {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type UpdateCreateResponse = string;

export type UpdateCreateParams = Array<UpdateCreateParams.Body>;

export namespace UpdateCreateParams {
  export interface Body {
    input: LlmAssistAPI.ToolInput;

    name: 'Save' | 'Scroll' | 'Exit' | 'Click' | 'Hover' | 'Wait' | 'Error' | 'Google' | 'Type';

    result?: Body.ToolQueued | Body.ToolFail | Body.InputParseFail | Body.Success | null;
  }

  export namespace Body {
    export interface ToolQueued {
      ToolQueued: string;
    }

    export interface ToolFail {
      ToolFail: string;
    }

    export interface InputParseFail {
      InputParseFail: string;
    }

    export interface Success {
      Success: string;
    }
  }
}

export namespace Update {
  export import UpdateCreateResponse = UpdateAPI.UpdateCreateResponse;
  export import UpdateCreateParams = UpdateAPI.UpdateCreateParams;
}
