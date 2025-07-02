// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TrainingDatasetsAPI from './training-datasets';
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

  delete(params: TrainingDatasetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { dataset_name } = params;
    return this._client.delete('/admin/training_datasets/delete_dataset', {
      query: { dataset_name },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
    query?: TrainingDatasetGetLabellerStatsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatasetGetLabellerStatsResponse>;
  getLabellerStats(options?: Core.RequestOptions): Core.APIPromise<TrainingDatasetGetLabellerStatsResponse>;
  getLabellerStats(
    query: TrainingDatasetGetLabellerStatsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatasetGetLabellerStatsResponse> {
    if (isRequestOptions(query)) {
      return this.getLabellerStats({}, query);
    }
    return this._client.get('/admin/training_datasets/labeller_stats', { query, ...options });
  }

  /**
   * Returns None if no datum is available.
   */
  getNextForLabeling(
    query: TrainingDatasetGetNextForLabelingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatumResponse | null> {
    return this._client.get('/admin/training_datasets/get_next_for_labeling', { query, ...options });
  }

  /**
   * Returns None if no datum is available.
   */
  getNextForQa(
    query: TrainingDatasetGetNextForQaParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatumResponse | null> {
    return this._client.get('/admin/training_datasets/get_next_for_qa', { query, ...options });
  }

  /**
   * Returns None if no datum is available.
   */
  getNextSuspicious(
    query: TrainingDatasetGetNextSuspiciousParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatumResponse | null> {
    return this._client.get('/admin/training_datasets/get_next_suspicious', { query, ...options });
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
   * Marks a training datum update as suspicious.
   */
  markDatumSuspicious(
    body: TrainingDatasetMarkDatumSuspiciousParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put('/admin/training_datasets/mark_datum_suspicious', {
      body,
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
    const { datum_id } = params;
    return this._client.delete('/admin/training_datasets/remove_from_dataset', {
      query: { datum_id },
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
   * Returns the number of suspicious training datums for the current user's labels.
   */
  suspiciousCount(
    query: TrainingDatasetSuspiciousCountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatasetSuspiciousCountResponse> {
    return this._client.get('/admin/training_datasets/suspicious_count', { query, ...options });
  }

  /**
   * Switches a training datum to a new dataset.
   */
  switchDataset(
    params: TrainingDatasetSwitchDatasetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { dataset_name, datum_id } = params;
    return this._client.post('/admin/training_datasets/switch_dataset', {
      query: { dataset_name, datum_id },
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

  /**
   * Verifies a training datum update.
   */
  verifyDatum(body: TrainingDatasetVerifyDatumParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put('/admin/training_datasets/verify_datum', {
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

export type DatumStatus =
  | 'unlabeled'
  | 'nav_labeled'
  | 'save_labeled'
  | 'nav_verified'
  | 'save_verified'
  | 'pending'
  | 'skipped'
  | 'suspicious_nav'
  | 'suspicious_save'
  | 'potential_suspicious_nav'
  | 'potential_suspicious_save';

export interface LabelingStats {
  author: string;

  capped_prop_count: number;

  count: number;

  dataset: string;

  prop_count: number;

  status: DatumStatus;

  window_start: string;
}

export interface TrainingDatumResponse {
  id: string;

  last_updated: string;

  status: DatumStatus;

  step: TrainingDatumResponse.Step;

  /**
   * All updates for the datum, sorted by ascending timestamp.
   */
  updates: Array<TrainingDatumResponse.Update>;
}

export namespace TrainingDatumResponse {
  export interface Step {
    prompt: StructureAPI.ChatPrompt;

    response: Step.Response;
  }

  export namespace Step {
    export interface Response {
      llm: string;

      text: string;

      tool_calls: Array<Response.ToolCall>;

      reasoning?: string | null;

      thinking?: string | null;
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

  export interface Update {
    id: string;

    author: string;

    status: TrainingDatasetsAPI.DatumStatus;

    timestamp: string;

    response?: Update.Response | null;

    review_message?: string | null;

    to_id?: string | null;
  }

  export namespace Update {
    export interface Response {
      llm: string;

      text: string;

      tool_calls: Array<Response.ToolCall>;

      reasoning?: string | null;

      thinking?: string | null;
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

  status: DatumStatus;

  review_message?: string | null;
}

export type TrainingDatasetListResponse = Array<string>;

export type TrainingDatasetGetLabellerStatsResponse = Array<LabelingStats>;

export type TrainingDatasetListDatumsResponse =
  Array<TrainingDatasetListDatumsResponse.TrainingDatasetListDatumsResponseItem>;

export namespace TrainingDatasetListDatumsResponse {
  export interface TrainingDatasetListDatumsResponseItem {
    id: string;

    nav_labelers: Array<string>;

    nav_verifiers: Array<string>;

    save_labelers: Array<string>;

    save_verifiers: Array<string>;

    status: TrainingDatasetsAPI.DatumStatus;

    updated_at: string;

    origin?:
      | 'human_l_l_m'
      | 'user_reported'
      | 'manual_upload'
      | 'manual_transfer'
      | 'tool_parse_failure'
      | null;
  }
}

export type TrainingDatasetSizeResponse = Array<TrainingDatasetSizeResponse.TrainingDatasetSizeResponseItem>;

export namespace TrainingDatasetSizeResponse {
  export interface TrainingDatasetSizeResponseItem {
    complete_labels: number;

    name: string;

    nav_labels: number;

    nav_verified: number;

    potential_sus_nav_datums: number;

    potential_sus_save_datums: number;

    save_labels: number;

    save_verified: number;

    sus_nav_datums: number;

    sus_save_datums: number;

    total_datums: number;

    unlabeled_datums: number;
  }
}

export interface TrainingDatasetSuspiciousCountResponse {
  count: number;
}

export interface TrainingDatasetDeleteParams {
  dataset_name: string;
}

export interface TrainingDatasetAddParams {
  /**
   * The name of the training dataset to add.
   */
  dataset_name: string;
}

export interface TrainingDatasetAddDatumParams {
  dataset_name: string;

  step_id: string;
}

export interface TrainingDatasetDownloadDatumParams {
  datum_id: string;

  require_labels?: boolean;
}

export interface TrainingDatasetGetDatumInfoParams {
  id: string;
}

export interface TrainingDatasetGetLabellerStatsParams {
  end_date?: string | null;

  labeled_status?: 'None' | 'SuspiciousOnly' | 'VerifiedOnly';

  max_prop_count?: number | null;

  start_date?: string | null;

  time_bucket?: 'Second' | 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Quarter' | 'Year' | 'Decade';
}

export interface TrainingDatasetGetNextForLabelingParams {
  dataset_name: string;

  status: DatumStatus;
}

export interface TrainingDatasetGetNextForQaParams {
  is_final_qa: boolean;

  status: DatumStatus;

  dataset_name?: string | null;
}

export interface TrainingDatasetGetNextSuspiciousParams {
  status: DatumStatus;

  dataset_name?: string | null;

  /**
   * If true, the query will only return datums that are suspicious for the current
   * user. If false, the query will return datums that are suspicious for any author
   * that does not have the Labeler permission.
   */
  user_restriction?: boolean;
}

export interface TrainingDatasetLabelDatumParams {
  id: string;

  status: DatumStatus;

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

  last_updated?: string | null;
}

export interface TrainingDatasetMarkDatumSuspiciousParams {
  id: string;

  message: string;

  status: DatumStatus;

  suspicious_id: string;
}

export interface TrainingDatasetRemoveDatumParams {
  datum_id: string;
}

export interface TrainingDatasetSizeParams {
  dataset_name?: string | null;

  end_date?: string | null;

  start_date?: string | null;
}

export interface TrainingDatasetSuspiciousCountParams {
  status: DatumStatus;

  dataset_name?: string | null;

  /**
   * If true, the query will only return datums that are suspicious for the current
   * user. If false, the query will return datums that are suspicious for any author
   * that does not have the Labeler permission.
   */
  user_restriction?: boolean;
}

export interface TrainingDatasetSwitchDatasetParams {
  dataset_name: string;

  datum_id: string;
}

export interface TrainingDatasetUpdateDatumStatusParams {
  id: string;

  status: DatumStatus;

  review_message?: string | null;
}

export interface TrainingDatasetUploadLabeledStepParams {
  dataset_name: Core.Uploadable;

  step_bytes: Core.Uploadable;
}

export type TrainingDatasetVerifyDatumParams = unknown;

export declare namespace TrainingDatasets {
  export {
    type AddDatumRequest as AddDatumRequest,
    type DatumStatus as DatumStatus,
    type LabelingStats as LabelingStats,
    type TrainingDatumResponse as TrainingDatumResponse,
    type UpdateDatumStatusRequest as UpdateDatumStatusRequest,
    type TrainingDatasetListResponse as TrainingDatasetListResponse,
    type TrainingDatasetGetLabellerStatsResponse as TrainingDatasetGetLabellerStatsResponse,
    type TrainingDatasetListDatumsResponse as TrainingDatasetListDatumsResponse,
    type TrainingDatasetSizeResponse as TrainingDatasetSizeResponse,
    type TrainingDatasetSuspiciousCountResponse as TrainingDatasetSuspiciousCountResponse,
    type TrainingDatasetDeleteParams as TrainingDatasetDeleteParams,
    type TrainingDatasetAddParams as TrainingDatasetAddParams,
    type TrainingDatasetAddDatumParams as TrainingDatasetAddDatumParams,
    type TrainingDatasetDownloadDatumParams as TrainingDatasetDownloadDatumParams,
    type TrainingDatasetGetDatumInfoParams as TrainingDatasetGetDatumInfoParams,
    type TrainingDatasetGetLabellerStatsParams as TrainingDatasetGetLabellerStatsParams,
    type TrainingDatasetGetNextForLabelingParams as TrainingDatasetGetNextForLabelingParams,
    type TrainingDatasetGetNextForQaParams as TrainingDatasetGetNextForQaParams,
    type TrainingDatasetGetNextSuspiciousParams as TrainingDatasetGetNextSuspiciousParams,
    type TrainingDatasetLabelDatumParams as TrainingDatasetLabelDatumParams,
    type TrainingDatasetListDatumsParams as TrainingDatasetListDatumsParams,
    type TrainingDatasetMarkDatumSuspiciousParams as TrainingDatasetMarkDatumSuspiciousParams,
    type TrainingDatasetRemoveDatumParams as TrainingDatasetRemoveDatumParams,
    type TrainingDatasetSizeParams as TrainingDatasetSizeParams,
    type TrainingDatasetSuspiciousCountParams as TrainingDatasetSuspiciousCountParams,
    type TrainingDatasetSwitchDatasetParams as TrainingDatasetSwitchDatasetParams,
    type TrainingDatasetUpdateDatumStatusParams as TrainingDatasetUpdateDatumStatusParams,
    type TrainingDatasetUploadLabeledStepParams as TrainingDatasetUploadLabeledStepParams,
    type TrainingDatasetVerifyDatumParams as TrainingDatasetVerifyDatumParams,
  };
}
