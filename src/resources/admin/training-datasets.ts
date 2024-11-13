// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';

export class TrainingDatasets extends APIResource {
  /**
   * Lists all training datasets.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TrainingDatasetListResponse> {
    return this._client.get('/admin/training_datasets/list', options);
  }

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
   * Gets statistics about labellers' work on a dataset.
   */
  getLabellerStats(
    query: TrainingDatasetGetLabellerStatsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatasetGetLabellerStatsResponse> {
    return this._client.get('/admin/training_datasets/labeller_stats', { query, ...options });
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
   * Lists all training datums for a dataset.
   */
  getStepById(
    query: TrainingDatasetGetStepByIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatumResponse> {
    return this._client.get('/admin/training_datasets/get_step_by_id', { query, ...options });
  }

  /**
   * Lists all training datums for a dataset.
   */
  listDatums(
    query: TrainingDatasetListDatumsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatasetListDatumsResponse> {
    return this._client.get('/admin/training_datasets/list_datums', { query, ...options });
  }

  markSuspiciousDatum(
    params: TrainingDatasetMarkSuspiciousDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { reason, step_id } = params;
    return this._client.post('/admin/training_datasets/mark_suspicious_datum', {
      query: { reason, step_id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Removes a training datum from the specified dataset.
   */
  removeDatum(
    params: TrainingDatasetRemoveDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { step_id } = params;
    return this._client.delete('/admin/training_datasets/remove_datum', {
      query: { step_id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
    return this._client.put('/admin/training_datasets/update_datum', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Uploads a new training datum to the specified dataset.
   */
  uploadDatum(body: TrainingDatasetUploadDatumParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/admin/training_datasets/upload_datum',
      Core.multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }
}

export interface AddDatumRequest {
  dataset_name: string;

  step_id: string;
}

export interface TrainingDatumResponse {
  id: string;

  labelers: Array<string>;

  last_updated: string;

  review_messages: Array<string>;

  status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';

  step: StructureAPI.ExecutionStep;

  verifiers: Array<string>;

  last_labeled?: string | null;

  last_verified?: string | null;
}

export interface UpdateDatumRequest {
  id: string;

  status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';

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

    name:
      | 'Save'
      | 'Scroll'
      | 'ScrollToBottom'
      | 'Exit'
      | 'Click'
      | 'Hover'
      | 'Wait'
      | 'Error'
      | 'Google'
      | 'Type';

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

export type TrainingDatasetListResponse = Array<string>;

export type TrainingDatasetGetLabellerStatsResponse =
  Array<TrainingDatasetGetLabellerStatsResponse.TrainingDatasetGetLabellerStatsResponseItem>;

export namespace TrainingDatasetGetLabellerStatsResponse {
  export interface TrainingDatasetGetLabellerStatsResponseItem {
    count: number;

    labeller: string;
  }
}

export type TrainingDatasetListDatumsResponse =
  Array<TrainingDatasetListDatumsResponse.TrainingDatasetListDatumsResponseItem>;

export namespace TrainingDatasetListDatumsResponse {
  export interface TrainingDatasetListDatumsResponseItem {
    id: string;

    labelers: Array<string>;

    last_updated: string;

    review_messages: Array<string>;

    status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';

    last_labeled?: string | null;

    last_verified?: string | null;

    verifiers?: Array<string>;
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

export interface TrainingDatasetGetLabellerStatsParams {
  dataset_name: string;

  status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';

  end_date?: string | null;

  start_date?: string | null;
}

export interface TrainingDatasetGetNextUnverifiedParams {
  dataset_name: string;

  status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';
}

export interface TrainingDatasetGetStepByIDParams {
  step_id: string;
}

export interface TrainingDatasetListDatumsParams {
  dataset_name: string;
}

export interface TrainingDatasetMarkSuspiciousDatumParams {
  reason: string;

  step_id: string;
}

export interface TrainingDatasetRemoveDatumParams {
  step_id: string;
}

export interface TrainingDatasetResetPendingParams {
  dataset_name: string;
}

export interface TrainingDatasetSizeParams {
  dataset_name: string;

  end_date?: string | null;

  start_date?: string | null;

  status?: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious' | null;
}

export interface TrainingDatasetUpdateDatumParams {
  id: string;

  status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';

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

    name:
      | 'Save'
      | 'Scroll'
      | 'ScrollToBottom'
      | 'Exit'
      | 'Click'
      | 'Hover'
      | 'Wait'
      | 'Error'
      | 'Google'
      | 'Type';

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

export interface TrainingDatasetUploadDatumParams {
  dataset_name: Core.Uploadable;

  step_bytes: Core.Uploadable;
}

export declare namespace TrainingDatasets {
  export {
    type AddDatumRequest as AddDatumRequest,
    type TrainingDatumResponse as TrainingDatumResponse,
    type UpdateDatumRequest as UpdateDatumRequest,
    type TrainingDatasetListResponse as TrainingDatasetListResponse,
    type TrainingDatasetGetLabellerStatsResponse as TrainingDatasetGetLabellerStatsResponse,
    type TrainingDatasetListDatumsResponse as TrainingDatasetListDatumsResponse,
    type TrainingDatasetSizeResponse as TrainingDatasetSizeResponse,
    type TrainingDatasetAddParams as TrainingDatasetAddParams,
    type TrainingDatasetAddDatumParams as TrainingDatasetAddDatumParams,
    type TrainingDatasetGetLabellerStatsParams as TrainingDatasetGetLabellerStatsParams,
    type TrainingDatasetGetNextUnverifiedParams as TrainingDatasetGetNextUnverifiedParams,
    type TrainingDatasetGetStepByIDParams as TrainingDatasetGetStepByIDParams,
    type TrainingDatasetListDatumsParams as TrainingDatasetListDatumsParams,
    type TrainingDatasetMarkSuspiciousDatumParams as TrainingDatasetMarkSuspiciousDatumParams,
    type TrainingDatasetRemoveDatumParams as TrainingDatasetRemoveDatumParams,
    type TrainingDatasetResetPendingParams as TrainingDatasetResetPendingParams,
    type TrainingDatasetSizeParams as TrainingDatasetSizeParams,
    type TrainingDatasetUpdateDatumParams as TrainingDatasetUpdateDatumParams,
    type TrainingDatasetUploadDatumParams as TrainingDatasetUploadDatumParams,
  };
}
