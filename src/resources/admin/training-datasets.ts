// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TrainingDatasetsAPI from './training-datasets';
import * as StructureAPI from '../structure';

export class TrainingDatasets extends APIResource {
  /**
   * Creates a new training dataset with the given name.
   */
  add(body: TrainingDatasetAddParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/admin/training_datasets', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Adds a new training datum to the specified dataset.
   */
  addDatum(
    name: string,
    body: TrainingDatasetAddDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/admin/training_datasets/${name}/data`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Retrieves the next unverified training datum from the specified dataset.
   */
  getNextUnverified(name: string, options?: Core.RequestOptions): Core.APIPromise<TrainingDatumResponse> {
    return this._client.get(`/admin/training_datasets/${name}/next_unverified`, options);
  }

  /**
   * Resets all pending training data in the specified dataset back to unverified.
   */
  resetPending(name: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/admin/training_datasets/${name}/reset_pending`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns the number of training data in the specified dataset, filtered by
   * status.
   */
  size(name: string, options?: Core.RequestOptions): Core.APIPromise<TrainingDatasetSizeResponse> {
    return this._client.get(`/admin/training_datasets/${name}/size`, options);
  }

  /**
   * Updates the status and content of an existing training datum.
   */
  updateDatum(
    id: string,
    body: TrainingDatasetUpdateDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/admin/training_data/${id}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AddDatasetRequest {
  name: string;
}

export interface AddDatumRequest {
  step: StructureAPI.ExecutionStep;
}

export interface GetSizeQuery {
  status?: 'Unverified' | 'Verified' | 'Pending' | 'Skipped' | null;
}

export interface TrainingDatumResponse {
  id: string;

  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  step: StructureAPI.ExecutionStep;
}

export interface UpdateDatumRequest {
  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  step: StructureAPI.ExecutionStep;
}

export type TrainingDatasetSizeResponse = number;

export interface TrainingDatasetAddParams {
  name: string;
}

export interface TrainingDatasetAddDatumParams {
  step: StructureAPI.ExecutionStep;
}

export interface TrainingDatasetUpdateDatumParams {
  status: 'Unverified' | 'Verified' | 'Pending' | 'Skipped';

  step: StructureAPI.ExecutionStep;
}

export namespace TrainingDatasets {
  export import AddDatasetRequest = TrainingDatasetsAPI.AddDatasetRequest;
  export import AddDatumRequest = TrainingDatasetsAPI.AddDatumRequest;
  export import GetSizeQuery = TrainingDatasetsAPI.GetSizeQuery;
  export import TrainingDatumResponse = TrainingDatasetsAPI.TrainingDatumResponse;
  export import UpdateDatumRequest = TrainingDatasetsAPI.UpdateDatumRequest;
  export import TrainingDatasetSizeResponse = TrainingDatasetsAPI.TrainingDatasetSizeResponse;
  export import TrainingDatasetAddParams = TrainingDatasetsAPI.TrainingDatasetAddParams;
  export import TrainingDatasetAddDatumParams = TrainingDatasetsAPI.TrainingDatasetAddDatumParams;
  export import TrainingDatasetUpdateDatumParams = TrainingDatasetsAPI.TrainingDatasetUpdateDatumParams;
}
