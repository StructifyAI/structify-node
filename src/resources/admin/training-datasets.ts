// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as StructureAPI from '../structure';

export class TrainingDatasets extends APIResource {
  /**
   * Lists all training datasets.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TrainingDatasetListResponse> {
    return this._client.get('/admin/training_datasets/list', options);
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
  listDatums(
    query: TrainingDatasetListDatumsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatasetListDatumsResponse> {
    return this._client.get('/admin/training_datasets/list_datums', { query, ...options });
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
}

export interface AddDatumRequest {
  dataset_name: string;

  step_id: string;
}

export interface TrainingDatumResponse {
  id: string;

  last_updated: string;

  status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';

  step: StructureAPI.ExecutionStep;
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

    status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';
  }
}

export type TrainingDatasetSizeResponse = number;

export interface TrainingDatasetAddDatumParams {
  dataset_name: string;

  step_id: string;
}

export interface TrainingDatasetGetLabellerStatsParams {
  status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';

  dataset_name?: string | null;

  end_date?: string | null;

  start_date?: string | null;
}

export interface TrainingDatasetGetNextUnverifiedParams {
  dataset_name: string;

  status: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious';
}

export interface TrainingDatasetListDatumsParams {
  dataset_name: string;
}

export interface TrainingDatasetSizeParams {
  dataset_name: string;

  end_date?: string | null;

  start_date?: string | null;

  status?: 'Unlabeled' | 'Labeled' | 'Verified' | 'Pending' | 'Skipped' | 'Suspicious' | null;
}

export interface TrainingDatasetSwitchDatasetParams {
  dataset_name: string;

  step_id: string;
}

export type TrainingDatasetUpdateDatumStatusParams = unknown;

export declare namespace TrainingDatasets {
  export {
    type AddDatumRequest as AddDatumRequest,
    type TrainingDatumResponse as TrainingDatumResponse,
    type TrainingDatasetListResponse as TrainingDatasetListResponse,
    type TrainingDatasetGetLabellerStatsResponse as TrainingDatasetGetLabellerStatsResponse,
    type TrainingDatasetListDatumsResponse as TrainingDatasetListDatumsResponse,
    type TrainingDatasetSizeResponse as TrainingDatasetSizeResponse,
    type TrainingDatasetAddDatumParams as TrainingDatasetAddDatumParams,
    type TrainingDatasetGetLabellerStatsParams as TrainingDatasetGetLabellerStatsParams,
    type TrainingDatasetGetNextUnverifiedParams as TrainingDatasetGetNextUnverifiedParams,
    type TrainingDatasetListDatumsParams as TrainingDatasetListDatumsParams,
    type TrainingDatasetSizeParams as TrainingDatasetSizeParams,
    type TrainingDatasetSwitchDatasetParams as TrainingDatasetSwitchDatasetParams,
    type TrainingDatasetUpdateDatumStatusParams as TrainingDatasetUpdateDatumStatusParams,
  };
}
