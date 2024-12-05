// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HumanLlmAPI from './human-llm';
import {
  HumanLlm,
  HumanLlmAddSearchForJobParams,
  HumanLlmFinishJobParams,
  HumanLlmFinishJobResponse,
  HumanLlmGetJobsParams,
  HumanLlmGetJobsResponse,
  HumanLlmGetNextStepParams,
  HumanLlmJob,
  HumanLlmPrelabelStepResponse,
  HumanLlmStartNextJobParams,
  HumanLlmUpdateStepParams,
  StepChoices,
} from './human-llm';
import * as TrainingDatasetsAPI from './training-datasets';
import {
  AddDatumRequest,
  TrainingDatasetAddDatumParams,
  TrainingDatasetAddParams,
  TrainingDatasetGetLabellerStatsParams,
  TrainingDatasetGetLabellerStatsResponse,
  TrainingDatasetGetNextUnverifiedParams,
  TrainingDatasetGetStepByIDParams,
  TrainingDatasetListDatumsParams,
  TrainingDatasetListDatumsResponse,
  TrainingDatasetListResponse,
  TrainingDatasetMarkSuspiciousDatumParams,
  TrainingDatasetRemoveDatumParams,
  TrainingDatasetResetPendingParams,
  TrainingDatasetSizeParams,
  TrainingDatasetSizeResponse,
  TrainingDatasetUpdateDatumParams,
  TrainingDatasetUploadDatumParams,
  TrainingDatasets,
  TrainingDatumResponse,
  UpdateDatumRequest,
} from './training-datasets';
import * as UsersAPI from './users';
import { User, UserCreateParams, UserListResponse, Users } from './users';

export class Admin extends APIResource {
  humanLlm: HumanLlmAPI.HumanLlm = new HumanLlmAPI.HumanLlm(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  trainingDatasets: TrainingDatasetsAPI.TrainingDatasets = new TrainingDatasetsAPI.TrainingDatasets(
    this._client,
  );
}

Admin.HumanLlm = HumanLlm;
Admin.Users = Users;
Admin.TrainingDatasets = TrainingDatasets;

export declare namespace Admin {
  export {
    HumanLlm as HumanLlm,
    type HumanLlmJob as HumanLlmJob,
    type StepChoices as StepChoices,
    type HumanLlmFinishJobResponse as HumanLlmFinishJobResponse,
    type HumanLlmGetJobsResponse as HumanLlmGetJobsResponse,
    type HumanLlmPrelabelStepResponse as HumanLlmPrelabelStepResponse,
    type HumanLlmAddSearchForJobParams as HumanLlmAddSearchForJobParams,
    type HumanLlmFinishJobParams as HumanLlmFinishJobParams,
    type HumanLlmGetJobsParams as HumanLlmGetJobsParams,
    type HumanLlmGetNextStepParams as HumanLlmGetNextStepParams,
    type HumanLlmStartNextJobParams as HumanLlmStartNextJobParams,
    type HumanLlmUpdateStepParams as HumanLlmUpdateStepParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
  };

  export {
    TrainingDatasets as TrainingDatasets,
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
