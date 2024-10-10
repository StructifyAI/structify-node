// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TrainingDatasetsAPI from './training-datasets';
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
    query: TrainingDatasetSizeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TrainingDatasetSizeResponse> {
    return this._client.get('/admin/training_datasets/size', options);
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

  step: StructureAPI.ExecutionStep;
}

export interface TrainingDatumResponse {
  id: string;

  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  step: StructureAPI.ExecutionStep;
}

export interface UpdateDatumRequest {
  id: string;

  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  step: StructureAPI.ExecutionStep;
}

export type TrainingDatasetSizeResponse = number;

export interface TrainingDatasetAddParams {
  dataset_name: string;
}

export interface TrainingDatasetAddDatumParams {
  dataset_name: string;

  step: StructureAPI.ExecutionStep;
}

export interface TrainingDatasetGetNextUnverifiedParams {
  dataset_name: string;
}

export interface TrainingDatasetResetPendingParams {
  dataset_name: string;
}

export interface TrainingDatasetSizeParams {}

export interface TrainingDatasetUpdateDatumParams {
  id: string;

  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  step: StructureAPI.ExecutionStep;
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
