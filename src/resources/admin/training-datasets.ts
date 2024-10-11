// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TrainingDatasetsAPI from './training-datasets';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';

export class TrainingDatasets extends APIResource {
  /**
   * Creates a new training dataset with the given name.
   */
  add(params: TrainingDatasetAddParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { dataset_name } = params;
    return this._client.post('/admin/training_datasets/add_dataset', {
      query: { dataset_name },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Adds a new training datum to the specified dataset.
   */
  addDatum(body: TrainingDatasetAddDatumParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/admin/training_datasets/add_datum', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieves the next unverified training datum from the specified dataset.
   */
  getNextUnverified(
    query: TrainingDatasetGetNextUnverifiedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatumResponse> {
    return this._client.get('/admin/training_datasets/next_unverified', { query, ...options });
  }

  /**
   * Resets all pending training data in the specified dataset back to unverified.
   */
  resetPending(
    params: TrainingDatasetResetPendingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { dataset_name } = params;
    return this._client.post('/admin/training_datasets/reset_pending', {
      query: { dataset_name },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns the number of training data in the specified dataset, filtered by
   * status.
   */
  size(
    body: TrainingDatasetSizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatasetSizeResponse> {
    return this._client.post('/admin/training_datasets/size', { body, ...options });
  }

  /**
   * Updates the status and content of an existing training datum.
   */
  updateDatum(body: TrainingDatasetUpdateDatumParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/admin/training_data/update_datum', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AddDatumRequest {
  dataset_name: string;

  step_id: string;
}

export interface TrainingDatumResponse {
  id: string;

  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  step: StructureAPI.ExecutionStep;
}

export interface UpdateDatumRequest {
  id: string;

  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  updated_tool_calls: Array<UpdateDatumRequest.UpdatedToolCall>;
}

export namespace UpdateDatumRequest {
  export interface UpdatedToolCall {
    input:
      | UpdatedToolCall.Save
      | UpdatedToolCall.Scroll
      | UpdatedToolCall.Exit
      | UpdatedToolCall.Click
      | UpdatedToolCall.Hover
      | UpdatedToolCall.Wait
      | UpdatedToolCall.Error
      | UpdatedToolCall.Google
      | UpdatedToolCall.Type;

    name: 'Save' | 'Scroll' | 'Exit' | 'Click' | 'Hover' | 'Wait' | 'Error' | 'Google' | 'Type';

    result?:
      | UpdatedToolCall.ToolQueued
      | UpdatedToolCall.ToolFail
      | UpdatedToolCall.InputParseFail
      | UpdatedToolCall.Success
      | null;
  }

  export namespace UpdatedToolCall {
    export interface Save {
      /**
       * Knowledge graph info structured to deserialize and display in the same format
       * that the LLM outputs. Also the first representation of an LLM output in the
       * pipeline from raw tool output to being merged into a Neo4j DB
       */
      Save: SharedAPI.KnowledgeGraph;
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
         * Dummy argument
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
         * Dummy argument
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
        seconds?: number;
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

export type TrainingDatasetSizeResponse = number;

export interface TrainingDatasetAddParams {
  dataset_name: string;
}

export interface TrainingDatasetAddDatumParams {
  dataset_name: string;

  step_id: string;
}

export interface TrainingDatasetGetNextUnverifiedParams {
  dataset_name: string;
}

export interface TrainingDatasetResetPendingParams {
  dataset_name: string;
}

export interface TrainingDatasetSizeParams {
  dataset_name: string;

  status?: 'Unverified' | 'Verified' | 'Pending' | 'Skipped' | null;
}

export interface TrainingDatasetUpdateDatumParams {
  id: string;

  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  updated_tool_calls: Array<TrainingDatasetUpdateDatumParams.UpdatedToolCall>;
}

export namespace TrainingDatasetUpdateDatumParams {
  export interface UpdatedToolCall {
    input:
      | UpdatedToolCall.Save
      | UpdatedToolCall.Scroll
      | UpdatedToolCall.Exit
      | UpdatedToolCall.Click
      | UpdatedToolCall.Hover
      | UpdatedToolCall.Wait
      | UpdatedToolCall.Error
      | UpdatedToolCall.Google
      | UpdatedToolCall.Type;

    name: 'Save' | 'Scroll' | 'Exit' | 'Click' | 'Hover' | 'Wait' | 'Error' | 'Google' | 'Type';

    result?:
      | UpdatedToolCall.ToolQueued
      | UpdatedToolCall.ToolFail
      | UpdatedToolCall.InputParseFail
      | UpdatedToolCall.Success
      | null;
  }

  export namespace UpdatedToolCall {
    export interface Save {
      /**
       * Knowledge graph info structured to deserialize and display in the same format
       * that the LLM outputs. Also the first representation of an LLM output in the
       * pipeline from raw tool output to being merged into a Neo4j DB
       */
      Save: SharedAPI.KnowledgeGraph;
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
         * Dummy argument
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
         * Dummy argument
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
        seconds?: number;
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

export namespace TrainingDatasets {
  export import AddDatumRequest = TrainingDatasetsAPI.AddDatumRequest;
  export import TrainingDatumResponse = TrainingDatasetsAPI.TrainingDatumResponse;
  export import UpdateDatumRequest = TrainingDatasetsAPI.UpdateDatumRequest;
  export import TrainingDatasetSizeResponse = TrainingDatasetsAPI.TrainingDatasetSizeResponse;
  export import TrainingDatasetAddParams = TrainingDatasetsAPI.TrainingDatasetAddParams;
  export import TrainingDatasetAddDatumParams = TrainingDatasetsAPI.TrainingDatasetAddDatumParams;
  export import TrainingDatasetGetNextUnverifiedParams = TrainingDatasetsAPI.TrainingDatasetGetNextUnverifiedParams;
  export import TrainingDatasetResetPendingParams = TrainingDatasetsAPI.TrainingDatasetResetPendingParams;
  export import TrainingDatasetSizeParams = TrainingDatasetsAPI.TrainingDatasetSizeParams;
  export import TrainingDatasetUpdateDatumParams = TrainingDatasetsAPI.TrainingDatasetUpdateDatumParams;
}
