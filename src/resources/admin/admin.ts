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
  export import User = UsersAPI.User;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import TrainingDatasets = TrainingDatasetsAPI.TrainingDatasets;
  export import AddDatumRequest = TrainingDatasetsAPI.AddDatumRequest;
  export import TrainingDatumResponse = TrainingDatasetsAPI.TrainingDatumResponse;
  export import UpdateDatumRequest = TrainingDatasetsAPI.UpdateDatumRequest;
  export import TrainingDatasetListResponse = TrainingDatasetsAPI.TrainingDatasetListResponse;
  export import TrainingDatasetSizeResponse = TrainingDatasetsAPI.TrainingDatasetSizeResponse;
  export import TrainingDatasetAddParams = TrainingDatasetsAPI.TrainingDatasetAddParams;
  export import TrainingDatasetAddDatumParams = TrainingDatasetsAPI.TrainingDatasetAddDatumParams;
  export import TrainingDatasetGetNextUnverifiedParams = TrainingDatasetsAPI.TrainingDatasetGetNextUnverifiedParams;
  export import TrainingDatasetResetPendingParams = TrainingDatasetsAPI.TrainingDatasetResetPendingParams;
  export import TrainingDatasetSizeParams = TrainingDatasetsAPI.TrainingDatasetSizeParams;
  export import TrainingDatasetUpdateDatumParams = TrainingDatasetsAPI.TrainingDatasetUpdateDatumParams;
}
