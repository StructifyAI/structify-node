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
  TrainingDatasetDownloadDatumParams,
  TrainingDatasetGetDatumInfoParams,
  TrainingDatasetGetLabellerStatsParams,
  TrainingDatasetGetLabellerStatsResponse,
  TrainingDatasetGetNextDatumParams,
  TrainingDatasetLabelDatumParams,
  TrainingDatasetListDatumsParams,
  TrainingDatasetListDatumsResponse,
  TrainingDatasetListResponse,
  TrainingDatasetRemoveDatumParams,
  TrainingDatasetSizeParams,
  TrainingDatasetSizeResponse,
  TrainingDatasetSwitchDatasetParams,
  TrainingDatasetUpdateDatumStatusParams,
  TrainingDatasetUploadLabeledStepParams,
  TrainingDatasetVerifyDatumParams,
  TrainingDatasets,
  TrainingDatumResponse,
  UpdateDatumStatusRequest,
} from './training-datasets';
import * as UsersAPI from './users';
import {
  User,
  UserCreateParams,
  UserGetCreditsParams,
  UserGetCreditsResponse,
  UserGetStatsParams,
  UserGetStatsResponse,
  UserListResponse,
  UserSetCreditsParams,
  UserSetCreditsResponse,
  UserUpdateParams,
  Users,
} from './users';

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
    type UserGetCreditsResponse as UserGetCreditsResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserSetCreditsResponse as UserSetCreditsResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserGetCreditsParams as UserGetCreditsParams,
    type UserGetStatsParams as UserGetStatsParams,
    type UserSetCreditsParams as UserSetCreditsParams,
  };

  export {
    TrainingDatasets as TrainingDatasets,
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
    type TrainingDatasetGetNextDatumParams as TrainingDatasetGetNextDatumParams,
    type TrainingDatasetLabelDatumParams as TrainingDatasetLabelDatumParams,
    type TrainingDatasetListDatumsParams as TrainingDatasetListDatumsParams,
    type TrainingDatasetRemoveDatumParams as TrainingDatasetRemoveDatumParams,
    type TrainingDatasetSizeParams as TrainingDatasetSizeParams,
    type TrainingDatasetSwitchDatasetParams as TrainingDatasetSwitchDatasetParams,
    type TrainingDatasetUpdateDatumStatusParams as TrainingDatasetUpdateDatumStatusParams,
    type TrainingDatasetUploadLabeledStepParams as TrainingDatasetUploadLabeledStepParams,
    type TrainingDatasetVerifyDatumParams as TrainingDatasetVerifyDatumParams,
  };
}
