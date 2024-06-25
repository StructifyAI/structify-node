// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as LlmAssistAPI from './llm-assist';

export class LlmAssist extends APIResource {
  /**
   * web requests that would be cancelled by cloudflare in prod.
   */
  retrieve(uuid: string, options?: Core.RequestOptions): Core.APIPromise<LlmAssistRetrieveResponse> {
    return this._client.get(`/label/llm_assist/${uuid}`, options);
  }
}

export type ToolInput =
  | ToolInput.Save
  | ToolInput.Scroll
  | ToolInput.Exit
  | ToolInput.Click
  | ToolInput.Hover
  | ToolInput.Wait
  | ToolInput.Error
  | ToolInput.Google
  | ToolInput.Type;

export namespace ToolInput {
  export interface Save {
    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs.
     */
    Save: Save.Save;
  }

  export namespace Save {
    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs.
     */
    export interface Save {
      entities?: Array<Save.Entity>;

      relationships?: Array<Save.Relationship>;
    }

    export namespace Save {
      export interface Entity {
        id: number;

        properties: Record<string, string>;

        type: string;
      }

      export interface Relationship {
        source: number;

        target: number;

        type: string;
      }
    }
  }

  export interface Scroll {
    /**
     * For tools with no inputs.
     */
    Scroll: Scroll.Scroll;
  }

  export namespace Scroll {
    /**
     * For tools with no inputs.
     */
    export interface Scroll {
      /**
       * OpenAI Requires an argument, so we put a dummy one here.
       */
      reason: string;
    }
  }

  export interface Exit {
    /**
     * For tools with no inputs.
     */
    Exit: Exit.Exit;
  }

  export namespace Exit {
    /**
     * For tools with no inputs.
     */
    export interface Exit {
      /**
       * OpenAI Requires an argument, so we put a dummy one here.
       */
      reason: string;
    }
  }

  export interface Click {
    Click: Click.Click;
  }

  export namespace Click {
    export interface Click {
      flag: number;
    }
  }

  export interface Hover {
    Hover: Hover.Hover;
  }

  export namespace Hover {
    export interface Hover {
      flag: number;
    }
  }

  export interface Wait {
    Wait: Wait.Wait;
  }

  export namespace Wait {
    export interface Wait {
      /**
       * Time in seconds to wait
       */
      seconds: number;
    }
  }

  export interface Error {
    Error: Error.Error;
  }

  export namespace Error {
    export interface Error {
      error: string;
    }
  }

  export interface Google {
    Google: Google.Google;
  }

  export namespace Google {
    export interface Google {
      query: string;
    }
  }

  export interface Type {
    Type: Type.Type;
  }

  export namespace Type {
    export interface Type {
      flag: number;

      input: string;
    }
  }
}

export type LlmAssistRetrieveResponse = Array<ToolInput>;

export namespace LlmAssist {
  export import ToolInput = LlmAssistAPI.ToolInput;
  export import LlmAssistRetrieveResponse = LlmAssistAPI.LlmAssistRetrieveResponse;
}
