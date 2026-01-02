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
  FunctionalTestSystemPromptResponse,
  FunctionalTestUpdateResultsParams,
  FunctionalTests,
  GetResultsQuery,
  LinkChatToFunctionalTestRequest,
  UpdateFunctionalTestResultsRequest,
} from './functional-tests';
import * as JobsAPI from './jobs';
import {
  AdminDeleteJobsRequest,
  AdminDeleteJobsResponse,
  AdminListJobsRequestParams,
  AdminListJobsResponse,
  AdminListJobsResponsesJobsList,
  JobDeleteParams,
  JobListParams,
  Jobs,
} from './jobs';
import * as SandboxAPI from './sandbox';
import { AdminSandbox, AdminSandboxesJobsList, Sandbox, SandboxListParams, SandboxType } from './sandbox';
import * as TeamsAPI from './teams';
import {
  AdminTeamsListResponse,
  AdminTeamsListResponsesJobsList,
  CancelSubscriptionRequest,
  CancelSubscriptionResponse,
  CreateSubscriptionResponse,
  CreateTeamSubscriptionRequest,
  ExpireGrantsRequest,
  ExpireGrantsResponse,
  ExtendTrialRequest,
  ExtendTrialResponse,
  GrantCreditsRequest,
  GrantCreditsResponse,
  TeamCancelSubscriptionParams,
  TeamCreateSubscriptionParams,
  TeamExpireGrantsParams,
  TeamExtendTrialParams,
  TeamGrantCreditsParams,
  TeamListParams,
  Teams,
} from './teams';
import * as UsersAPI from './users';
import {
  ImpersonateRequest,
  ImpersonateResponse,
  User,
  UserCreateParams,
  UserGetStatsParams,
  UserGetStatsResponse,
  UserImpersonateParams,
  UserListResponse,
  Users,
} from './users';

export class Admin extends APIResource {
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
  dataset: DatasetAPI.Dataset = new DatasetAPI.Dataset(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  sandbox: SandboxAPI.Sandbox = new SandboxAPI.Sandbox(this._client);
  functionalTests: FunctionalTestsAPI.FunctionalTests = new FunctionalTestsAPI.FunctionalTests(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Admin.Teams = Teams;
Admin.AdminTeamsListResponsesJobsList = AdminTeamsListResponsesJobsList;
Admin.Dataset = Dataset;
Admin.Jobs = Jobs;
Admin.AdminListJobsResponsesJobsList = AdminListJobsResponsesJobsList;
Admin.Sandbox = Sandbox;
Admin.AdminSandboxesJobsList = AdminSandboxesJobsList;
Admin.FunctionalTests = FunctionalTests;
Admin.Users = Users;

export declare namespace Admin {
  export {
    Teams as Teams,
    type AdminTeamsListResponse as AdminTeamsListResponse,
    type CancelSubscriptionRequest as CancelSubscriptionRequest,
    type CancelSubscriptionResponse as CancelSubscriptionResponse,
    type CreateSubscriptionResponse as CreateSubscriptionResponse,
    type CreateTeamSubscriptionRequest as CreateTeamSubscriptionRequest,
    type ExpireGrantsRequest as ExpireGrantsRequest,
    type ExpireGrantsResponse as ExpireGrantsResponse,
    type ExtendTrialRequest as ExtendTrialRequest,
    type ExtendTrialResponse as ExtendTrialResponse,
    type GrantCreditsRequest as GrantCreditsRequest,
    type GrantCreditsResponse as GrantCreditsResponse,
    AdminTeamsListResponsesJobsList as AdminTeamsListResponsesJobsList,
    type TeamListParams as TeamListParams,
    type TeamCancelSubscriptionParams as TeamCancelSubscriptionParams,
    type TeamCreateSubscriptionParams as TeamCreateSubscriptionParams,
    type TeamExpireGrantsParams as TeamExpireGrantsParams,
    type TeamExtendTrialParams as TeamExtendTrialParams,
    type TeamGrantCreditsParams as TeamGrantCreditsParams,
  };

  export {
    Dataset as Dataset,
    type AdminDatasetReturn as AdminDatasetReturn,
    type DatasetGetByIDParams as DatasetGetByIDParams,
  };

  export {
    Jobs as Jobs,
    type AdminDeleteJobsRequest as AdminDeleteJobsRequest,
    type AdminDeleteJobsResponse as AdminDeleteJobsResponse,
    type AdminListJobsRequestParams as AdminListJobsRequestParams,
    type AdminListJobsResponse as AdminListJobsResponse,
    AdminListJobsResponsesJobsList as AdminListJobsResponsesJobsList,
    type JobListParams as JobListParams,
    type JobDeleteParams as JobDeleteParams,
  };

  export {
    Sandbox as Sandbox,
    type AdminSandbox as AdminSandbox,
    type SandboxType as SandboxType,
    AdminSandboxesJobsList as AdminSandboxesJobsList,
    type SandboxListParams as SandboxListParams,
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
    type FunctionalTestSystemPromptResponse as FunctionalTestSystemPromptResponse,
    type FunctionalTestCreateParams as FunctionalTestCreateParams,
    type FunctionalTestGetResultsParams as FunctionalTestGetResultsParams,
    type FunctionalTestLinkChatParams as FunctionalTestLinkChatParams,
    type FunctionalTestUpdateResultsParams as FunctionalTestUpdateResultsParams,
  };

  export {
    Users as Users,
    type ImpersonateRequest as ImpersonateRequest,
    type ImpersonateResponse as ImpersonateResponse,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserCreateParams as UserCreateParams,
    type UserGetStatsParams as UserGetStatsParams,
    type UserImpersonateParams as UserImpersonateParams,
  };
}
