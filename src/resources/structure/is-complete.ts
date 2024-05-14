// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as IsCompleteAPI from './is-complete';

export class IsComplete extends APIResource {
  /**
   * Wait for all specified async tasks to be completed.
   */
  create(body: IsCompleteCreateParams, options?: Core.RequestOptions): Core.APIPromise<IsComplete> {
    return this._client.post('/structure/is_complete', { body, ...options });
  }
}

export interface IsComplete {
  completed: boolean;
}

export type IsCompleteCreateParams = Array<string>;

export namespace IsComplete {
  export import IsComplete = IsCompleteAPI.IsComplete;
  export import IsCompleteCreateParams = IsCompleteAPI.IsCompleteCreateParams;
}
