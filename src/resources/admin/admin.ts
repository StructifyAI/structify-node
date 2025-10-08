// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatasetAPI from './dataset';
import { AdminDatasetReturn, Dataset, DatasetGetByIDParams } from './dataset';
import * as FunctionalTestsAPI from './functional-tests';
import {
  CreateFunctionalTestRequest,
  FunctionalTest,
  FunctionalTestCreateParams,
  FunctionalTestGetResultsParams,
  FunctionalTestLinkChatParams,
  FunctionalTestListResponse,
  FunctionalTestResultsResponse,
  FunctionalTestUpdateResultsParams,
  FunctionalTests,
  GetResultsQuery,
  LinkChatToFunctionalTestRequest,
  UpdateFunctionalTestResultsRequest,
} from './functional-tests';
import * as HumanLlmAPI from './human-llm';
import {
  HumanLlm,
  HumanLlmAddSearchForJobParams,
  HumanLlmAddToDatasetParams,
  HumanLlmAddToDatasetResponse,
  HumanLlmFinishJobParams,
  HumanLlmFinishJobResponse,
  HumanLlmGetJobsParams,
  HumanLlmGetJobsResponse,
  HumanLlmGetNextStepParams,
  HumanLlmGetNextStepResponse,
  HumanLlmJob,
  HumanLlmPrelabelStepResponse,
  HumanLlmStartNextJobParams,
  HumanLlmUpdateStepParams,
  StepChoices,
} from './human-llm';
import * as JobsAPI from './jobs';
import {
  AdminListJobsRequestParams,
  AdminListJobsResponse,
  AdminListJobsResponsesJobsList,
  JobListParams,
  Jobs,
} from './jobs';
import * as NextActionAPI from './next-action';
import {
  ActionTrainingDataEntry,
  ActionTrainingDataResponse,
  AddActionTrainingDatumRequest,
  DeleteActionTrainingDataParams,
  DeleteActionTrainingDataResponse,
  GetActionTrainingDataParams,
  GetBatchedActionTrainingDataRequest,
  LabelActionTrainingDatumRequest,
  NextAction,
  NextActionAddTrainingDatumParams,
  NextActionDeleteTrainingDataParams,
  NextActionGetBatchedTrainingDataParams,
  NextActionGetTrainingDataParams,
  NextActionGetTrainingDatumParams,
  NextActionLabelTrainingDatumParams,
} from './next-action';
import * as TeamsAPI from './teams';
import {
  AdminTeamsListResponse,
  AdminTeamsListResponsesJobsList,
  CancelSubscriptionRequest,
  CancelSubscriptionResponse,
  CreateSubscriptionResponse,
  CreateTeamSubscriptionRequest,
  GrantCreditsRequest,
  GrantCreditsResponse,
  TeamCancelSubscriptionParams,
  TeamCreateSubscriptionParams,
  TeamGrantCreditsParams,
  TeamListParams,
  Teams,
} from './teams';
import * as TrainingDatasetsAPI from './training-datasets';
import {
  AddDatumRequest,
  DatumStatus,
  LabelingStats,
  TrainingDatasetAddDatumParams,
  TrainingDatasetAddParams,
  TrainingDatasetDeleteParams,
  TrainingDatasetDownloadDatumParams,
  TrainingDatasetGetDatumInfoParams,
  TrainingDatasetGetLabellerStatsParams,
  TrainingDatasetGetLabellerStatsResponse,
  TrainingDatasetGetNextForLabelingParams,
  TrainingDatasetGetNextForQaParams,
  TrainingDatasetGetNextSuspiciousParams,
  TrainingDatasetLabelDatumParams,
  TrainingDatasetListDatumsParams,
  TrainingDatasetListDatumsResponse,
  TrainingDatasetListResponse,
  TrainingDatasetMarkDatumSuspiciousParams,
  TrainingDatasetRemoveDatumParams,
  TrainingDatasetSizeParams,
  TrainingDatasetSizeResponse,
  TrainingDatasetSuspiciousCountParams,
  TrainingDatasetSuspiciousCountResponse,
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
  UserAddCreditsParams,
  UserAddCreditsResponse,
  UserCreateParams,
  UserGetCreditsParams,
  UserGetCreditsResponse,
  UserGetStatsParams,
  UserGetStatsResponse,
  UserListResponse,
  UserSetCreditsParams,
  UserSetCreditsResponse,
  Users,
} from './users';

export class Admin extends APIResource {
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
  dataset: DatasetAPI.Dataset = new DatasetAPI.Dataset(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  humanLlm: HumanLlmAPI.HumanLlm = new HumanLlmAPI.HumanLlm(this._client);
  functionalTests: FunctionalTestsAPI.FunctionalTests = new FunctionalTestsAPI.FunctionalTests(this._client);
  nextAction: NextActionAPI.NextAction = new NextActionAPI.NextAction(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  trainingDatasets: TrainingDatasetsAPI.TrainingDatasets = new TrainingDatasetsAPI.TrainingDatasets(
    this._client,
  );
}

Admin.Teams = Teams;
Admin.AdminTeamsListResponsesJobsList = AdminTeamsListResponsesJobsList;
Admin.Dataset = Dataset;
Admin.Jobs = Jobs;
Admin.AdminListJobsResponsesJobsList = AdminListJobsResponsesJobsList;
Admin.HumanLlm = HumanLlm;
Admin.FunctionalTests = FunctionalTests;
Admin.NextAction = NextAction;
Admin.Users = Users;
Admin.TrainingDatasets = TrainingDatasets;

export declare namespace Admin {
  export {
    Teams as Teams,
    type AdminTeamsListResponse as AdminTeamsListResponse,
    type CancelSubscriptionRequest as CancelSubscriptionRequest,
    type CancelSubscriptionResponse as CancelSubscriptionResponse,
    type CreateSubscriptionResponse as CreateSubscriptionResponse,
    type CreateTeamSubscriptionRequest as CreateTeamSubscriptionRequest,
    type GrantCreditsRequest as GrantCreditsRequest,
    type GrantCreditsResponse as GrantCreditsResponse,
    AdminTeamsListResponsesJobsList as AdminTeamsListResponsesJobsList,
    type TeamListParams as TeamListParams,
    type TeamCancelSubscriptionParams as TeamCancelSubscriptionParams,
    type TeamCreateSubscriptionParams as TeamCreateSubscriptionParams,
    type TeamGrantCreditsParams as TeamGrantCreditsParams,
  };

  export {
    Dataset as Dataset,
    type AdminDatasetReturn as AdminDatasetReturn,
    type DatasetGetByIDParams as DatasetGetByIDParams,
  };

  export {
    Jobs as Jobs,
    type AdminListJobsRequestParams as AdminListJobsRequestParams,
    type AdminListJobsResponse as AdminListJobsResponse,
    AdminListJobsResponsesJobsList as AdminListJobsResponsesJobsList,
    type JobListParams as JobListParams,
  };

  export {
    HumanLlm as HumanLlm,
    type HumanLlmJob as HumanLlmJob,
    type StepChoices as StepChoices,
    type HumanLlmAddToDatasetResponse as HumanLlmAddToDatasetResponse,
    type HumanLlmFinishJobResponse as HumanLlmFinishJobResponse,
    type HumanLlmGetJobsResponse as HumanLlmGetJobsResponse,
    type HumanLlmGetNextStepResponse as HumanLlmGetNextStepResponse,
    type HumanLlmPrelabelStepResponse as HumanLlmPrelabelStepResponse,
    type HumanLlmAddSearchForJobParams as HumanLlmAddSearchForJobParams,
    type HumanLlmAddToDatasetParams as HumanLlmAddToDatasetParams,
    type HumanLlmFinishJobParams as HumanLlmFinishJobParams,
    type HumanLlmGetJobsParams as HumanLlmGetJobsParams,
    type HumanLlmGetNextStepParams as HumanLlmGetNextStepParams,
    type HumanLlmStartNextJobParams as HumanLlmStartNextJobParams,
    type HumanLlmUpdateStepParams as HumanLlmUpdateStepParams,
  };

  export {
    FunctionalTests as FunctionalTests,
    type CreateFunctionalTestRequest as CreateFunctionalTestRequest,
    type FunctionalTest as FunctionalTest,
    type FunctionalTestResultsResponse as FunctionalTestResultsResponse,
    type GetResultsQuery as GetResultsQuery,
    type LinkChatToFunctionalTestRequest as LinkChatToFunctionalTestRequest,
    type UpdateFunctionalTestResultsRequest as UpdateFunctionalTestResultsRequest,
    type FunctionalTestListResponse as FunctionalTestListResponse,
    type FunctionalTestCreateParams as FunctionalTestCreateParams,
    type FunctionalTestGetResultsParams as FunctionalTestGetResultsParams,
    type FunctionalTestLinkChatParams as FunctionalTestLinkChatParams,
    type FunctionalTestUpdateResultsParams as FunctionalTestUpdateResultsParams,
  };

  export {
    NextAction as NextAction,
    type ActionTrainingDataEntry as ActionTrainingDataEntry,
    type ActionTrainingDataResponse as ActionTrainingDataResponse,
    type AddActionTrainingDatumRequest as AddActionTrainingDatumRequest,
    type DeleteActionTrainingDataParams as DeleteActionTrainingDataParams,
    type DeleteActionTrainingDataResponse as DeleteActionTrainingDataResponse,
    type GetActionTrainingDataParams as GetActionTrainingDataParams,
    type GetBatchedActionTrainingDataRequest as GetBatchedActionTrainingDataRequest,
    type LabelActionTrainingDatumRequest as LabelActionTrainingDatumRequest,
    type NextActionAddTrainingDatumParams as NextActionAddTrainingDatumParams,
    type NextActionDeleteTrainingDataParams as NextActionDeleteTrainingDataParams,
    type NextActionGetBatchedTrainingDataParams as NextActionGetBatchedTrainingDataParams,
    type NextActionGetTrainingDataParams as NextActionGetTrainingDataParams,
    type NextActionGetTrainingDatumParams as NextActionGetTrainingDatumParams,
    type NextActionLabelTrainingDatumParams as NextActionLabelTrainingDatumParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserAddCreditsResponse as UserAddCreditsResponse,
    type UserGetCreditsResponse as UserGetCreditsResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserSetCreditsResponse as UserSetCreditsResponse,
    type UserCreateParams as UserCreateParams,
    type UserAddCreditsParams as UserAddCreditsParams,
    type UserGetCreditsParams as UserGetCreditsParams,
    type UserGetStatsParams as UserGetStatsParams,
    type UserSetCreditsParams as UserSetCreditsParams,
  };

  export {
    TrainingDatasets as TrainingDatasets,
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
