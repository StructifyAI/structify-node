// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';
import { type Response as FetchResponse } from '../../_shims/index';

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
   * Lists all training datums for a dataset.
   */
  downloadDatum(
    query: TrainingDatasetDownloadDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FetchResponse> {
    return this._client.get('/admin/training_datasets/download_datum_step', {
      query,
      ...options,
      headers: { Accept: 'application/octet-stream', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * This includes the status, step, last updated time, and all updates. If the datum
   * does not exist, a 204 status is returned.
   */
  getDatumInfo(
    query: TrainingDatasetGetDatumInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatumResponse> {
    return this._client.get('/admin/training_datasets/get_datum_info', { query, ...options });
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
   * Updates the status and content of an existing training datum.
   */
  labelDatum(body: TrainingDatasetLabelDatumParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/admin/training_datasets/label_datum', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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

  /**
   * Removes a training datum from the specified dataset.
   */
  removeDatum(
    params: TrainingDatasetRemoveDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { step_id } = params;
    return this._client.delete('/admin/training_datasets/remove_from_dataset', {
      query: { step_id },
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
   * Switches a training datum to a new dataset.
   */
  switchDataset(
    params: TrainingDatasetSwitchDatasetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { dataset_name, step_id } = params;
    return this._client.post('/admin/training_datasets/switch_dataset', {
      query: { dataset_name, step_id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  updateDatumStatus(
    body: TrainingDatasetUpdateDatumStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/admin/training_datasets/update_datum_status', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Uploads a new training datum to the specified dataset.
   */
  uploadLabeledStep(
    body: TrainingDatasetUploadLabeledStepParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(
      '/admin/training_datasets/upload_labeled_step',
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

  last_updated: string;

  status:
    | 'Unlabeled'
    | 'NavLabeled'
    | 'SaveLabeled'
    | 'Verified'
    | 'Pending'
    | 'Skipped'
    | 'SuspiciousNav'
    | 'SuspiciousSave';

  step: StructureAPI.ExecutionStep;

  updates: Array<TrainingDatumResponse.Update>;
}

export namespace TrainingDatumResponse {
  export interface Update {
    id: string;

    author: string;

    status:
      | 'Unlabeled'
      | 'NavLabeled'
      | 'SaveLabeled'
      | 'Verified'
      | 'Pending'
      | 'Skipped'
      | 'SuspiciousNav'
      | 'SuspiciousSave';

    timestamp: string;

    response?: Update.Response | null;

    review_message?: string | null;

    verified_update_id?: string | null;
  }

  export namespace Update {
    export interface Response {
      llm: string;

      text: string;

      tool_calls: Array<Response.ToolCall>;
    }

    export namespace Response {
      export interface ToolCall {
        input:
          | ToolCall.Save
          | ToolCall.Scroll
          | ToolCall.ScrollToBottom
          | ToolCall.Exit
          | ToolCall.Click
          | ToolCall.Hover
          | ToolCall.Wait
          | ToolCall.Error
          | ToolCall.Google
          | ToolCall.Type;

        name:
          | 'Exit'
          | 'Save'
          | 'Wait'
          | 'Type'
          | 'Scroll'
          | 'ScrollToBottom'
          | 'Click'
          | 'Hover'
          | 'Error'
          | 'Google';

        result?: ToolCall.ToolQueued | ToolCall.ToolFail | ToolCall.InputParseFail | ToolCall.Success | null;
      }

      export namespace ToolCall {
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

        export interface ScrollToBottom {
          /**
           * For tools with no inputs.
           */
          ScrollToBottom: ScrollToBottom.ScrollToBottom;
        }

        export namespace ScrollToBottom {
          /**
           * For tools with no inputs.
           */
          export interface ScrollToBottom {
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
  }
}

export interface UpdateDatumStatusRequest {
  id: string;

  status:
    | 'Unlabeled'
    | 'NavLabeled'
    | 'SaveLabeled'
    | 'Verified'
    | 'Pending'
    | 'Skipped'
    | 'SuspiciousNav'
    | 'SuspiciousSave';

  review_message?: string | null;
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

    last_updated: string;

    nav_labelers: Array<string>;

    save_labelers: Array<string>;

    status:
      | 'Unlabeled'
      | 'NavLabeled'
      | 'SaveLabeled'
      | 'Verified'
      | 'Pending'
      | 'Skipped'
      | 'SuspiciousNav'
      | 'SuspiciousSave';

    verifiers: Array<string>;
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

export interface TrainingDatasetDownloadDatumParams {
  step_id: string;
}

export interface TrainingDatasetGetDatumInfoParams {
  id: string;
}

export interface TrainingDatasetGetLabellerStatsParams {
  status:
    | 'Unlabeled'
    | 'NavLabeled'
    | 'SaveLabeled'
    | 'Verified'
    | 'Pending'
    | 'Skipped'
    | 'SuspiciousNav'
    | 'SuspiciousSave';

  dataset_name?: string | null;

  end_date?: string | null;

  start_date?: string | null;
}

export interface TrainingDatasetGetNextUnverifiedParams {
  dataset_name: string;

  status:
    | 'Unlabeled'
    | 'NavLabeled'
    | 'SaveLabeled'
    | 'Verified'
    | 'Pending'
    | 'Skipped'
    | 'SuspiciousNav'
    | 'SuspiciousSave';
}

export interface TrainingDatasetLabelDatumParams {
  id: string;

  updated_tool_calls: Array<TrainingDatasetLabelDatumParams.UpdatedToolCall>;
}

export namespace TrainingDatasetLabelDatumParams {
  export interface UpdatedToolCall {
    input:
      | UpdatedToolCall.Save
      | UpdatedToolCall.Scroll
      | UpdatedToolCall.ScrollToBottom
      | UpdatedToolCall.Exit
      | UpdatedToolCall.Click
      | UpdatedToolCall.Hover
      | UpdatedToolCall.Wait
      | UpdatedToolCall.Error
      | UpdatedToolCall.Google
      | UpdatedToolCall.Type;

    name:
      | 'Exit'
      | 'Save'
      | 'Wait'
      | 'Type'
      | 'Scroll'
      | 'ScrollToBottom'
      | 'Click'
      | 'Hover'
      | 'Error'
      | 'Google';

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

    export interface ScrollToBottom {
      /**
       * For tools with no inputs.
       */
      ScrollToBottom: ScrollToBottom.ScrollToBottom;
    }

    export namespace ScrollToBottom {
      /**
       * For tools with no inputs.
       */
      export interface ScrollToBottom {
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

export interface TrainingDatasetListDatumsParams {
  dataset_name: string;
}

export interface TrainingDatasetRemoveDatumParams {
  step_id: string;
}

export interface TrainingDatasetSizeParams {
  dataset_name: string;

  end_date?: string | null;

  start_date?: string | null;

  status?:
    | 'Unlabeled'
    | 'NavLabeled'
    | 'SaveLabeled'
    | 'Verified'
    | 'Pending'
    | 'Skipped'
    | 'SuspiciousNav'
    | 'SuspiciousSave'
    | null;
}

export interface TrainingDatasetSwitchDatasetParams {
  dataset_name: string;

  step_id: string;
}

export interface TrainingDatasetUpdateDatumStatusParams {
  id: string;

  status:
    | 'Unlabeled'
    | 'NavLabeled'
    | 'SaveLabeled'
    | 'Verified'
    | 'Pending'
    | 'Skipped'
    | 'SuspiciousNav'
    | 'SuspiciousSave';

  review_message?: string | null;
}

export interface TrainingDatasetUploadLabeledStepParams {
  dataset_name: Core.Uploadable;

  step_bytes: Core.Uploadable;
}

export declare namespace TrainingDatasets {
  export {
    type AddDatumRequest as AddDatumRequest,
    type TrainingDatumResponse as TrainingDatumResponse,
    type UpdateDatumStatusRequest as UpdateDatumStatusRequest,
    type TrainingDatasetListResponse as TrainingDatasetListResponse,
    type TrainingDatasetGetLabellerStatsResponse as TrainingDatasetGetLabellerStatsResponse,
    type TrainingDatasetListDatumsResponse as TrainingDatasetListDatumsResponse,
    type TrainingDatasetSizeResponse as TrainingDatasetSizeResponse,
    type TrainingDatasetAddParams as TrainingDatasetAddParams,
    type TrainingDatasetAddDatumParams as TrainingDatasetAddDatumParams,
    type TrainingDatasetDownloadDatumParams as TrainingDatasetDownloadDatumParams,
    type TrainingDatasetGetDatumInfoParams as TrainingDatasetGetDatumInfoParams,
    type TrainingDatasetGetLabellerStatsParams as TrainingDatasetGetLabellerStatsParams,
    type TrainingDatasetGetNextUnverifiedParams as TrainingDatasetGetNextUnverifiedParams,
    type TrainingDatasetLabelDatumParams as TrainingDatasetLabelDatumParams,
    type TrainingDatasetListDatumsParams as TrainingDatasetListDatumsParams,
    type TrainingDatasetRemoveDatumParams as TrainingDatasetRemoveDatumParams,
    type TrainingDatasetSizeParams as TrainingDatasetSizeParams,
    type TrainingDatasetSwitchDatasetParams as TrainingDatasetSwitchDatasetParams,
    type TrainingDatasetUpdateDatumStatusParams as TrainingDatasetUpdateDatumStatusParams,
    type TrainingDatasetUploadLabeledStepParams as TrainingDatasetUploadLabeledStepParams,
  };
}
