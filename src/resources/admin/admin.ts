// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TrainingDatasetsAPI from './training-datasets';
import * as UsersAPI from './users';

export class Admin extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  trainingDatasets: TrainingDatasetsAPI.TrainingDatasets = new TrainingDatasetsAPI.TrainingDatasets(
    this._client,
  );
}

export namespace Admin {
  export import Users = UsersAPI.Users;
  export type User = UsersAPI.User;
  export type UserListResponse = UsersAPI.UserListResponse;
  export import TrainingDatasets = TrainingDatasetsAPI.TrainingDatasets;
  export type AddDatumRequest = TrainingDatasetsAPI.AddDatumRequest;
  export type TrainingDatumResponse = TrainingDatasetsAPI.TrainingDatumResponse;
  export type UpdateDatumRequest = TrainingDatasetsAPI.UpdateDatumRequest;
  export type TrainingDatasetListResponse = TrainingDatasetsAPI.TrainingDatasetListResponse;
  export type TrainingDatasetListDatumsResponse = TrainingDatasetsAPI.TrainingDatasetListDatumsResponse;
  export type TrainingDatasetSizeResponse = TrainingDatasetsAPI.TrainingDatasetSizeResponse;
  export type TrainingDatasetAddParams = TrainingDatasetsAPI.TrainingDatasetAddParams;
  export type TrainingDatasetAddDatumParams = TrainingDatasetsAPI.TrainingDatasetAddDatumParams;
  export type TrainingDatasetGetNextUnverifiedParams =
    TrainingDatasetsAPI.TrainingDatasetGetNextUnverifiedParams;
  export type TrainingDatasetGetStepByIDParams = TrainingDatasetsAPI.TrainingDatasetGetStepByIDParams;
  export type TrainingDatasetListDatumsParams = TrainingDatasetsAPI.TrainingDatasetListDatumsParams;
  export type TrainingDatasetRemoveDatumParams = TrainingDatasetsAPI.TrainingDatasetRemoveDatumParams;
  export type TrainingDatasetResetPendingParams = TrainingDatasetsAPI.TrainingDatasetResetPendingParams;
  export type TrainingDatasetSizeParams = TrainingDatasetsAPI.TrainingDatasetSizeParams;
  export type TrainingDatasetUpdateDatumParams = TrainingDatasetsAPI.TrainingDatasetUpdateDatumParams;
}
