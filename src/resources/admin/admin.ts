// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChatTemplatesAPI from './chat-templates';
import {
  AdminChatTemplateListQuery,
  ChatTemplateCreateParams,
  ChatTemplateListParams,
  ChatTemplateListResponse,
  ChatTemplateUpdateParams,
  ChatTemplates,
  CreateChatTemplateRequest,
  UpdateChatTemplateRequest,
} from './chat-templates';
import * as ConnectorAPI from './connector';
import {
  CloneConnectorItem,
  CloneConnectorsRequest,
  CloneConnectorsResponse,
  Connector,
  ConnectorCloneParams,
} from './connector';
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
  JobDeleteParams,
  JobKillByUserParams,
  JobKillByUserResponse,
  JobListParams,
  JobListResponse,
  JobListResponsesJobsList,
  Jobs,
} from './jobs';
import * as SandboxAPI from './sandbox';
import { Sandbox, SandboxListParams } from './sandbox';
import * as TeamsAPI from './teams';
import {
  AdminAddMemberRequest,
  AdminAddMemberResponse,
  AdminListMembersResponse,
  AdminRemoveMemberRequest,
  AdminRemoveMemberResponse,
  AdminTeamsListResponse,
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
  TeamAddMemberParams,
  TeamCancelSubscriptionParams,
  TeamCreateSubscriptionParams,
  TeamExpireGrantsParams,
  TeamExtendTrialParams,
  TeamGrantCreditsParams,
  TeamListParams,
  TeamListResponse,
  TeamRemoveMemberParams,
  TeamUpdateSeatsOverrideParams,
  Teams,
  UpdateSeatsOverrideRequest,
  UpdateSeatsOverrideResponse,
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
  chatTemplates: ChatTemplatesAPI.ChatTemplates = new ChatTemplatesAPI.ChatTemplates(this._client);
  connector: ConnectorAPI.Connector = new ConnectorAPI.Connector(this._client);
}

Admin.Teams = Teams;
Admin.Dataset = Dataset;
Admin.Jobs = Jobs;
Admin.JobListResponsesJobsList = JobListResponsesJobsList;
Admin.Sandbox = Sandbox;
Admin.FunctionalTests = FunctionalTests;
Admin.Users = Users;
Admin.ChatTemplates = ChatTemplates;
Admin.Connector = Connector;

export declare namespace Admin {
  export {
    Teams as Teams,
    type AdminAddMemberRequest as AdminAddMemberRequest,
    type AdminAddMemberResponse as AdminAddMemberResponse,
    type AdminListMembersResponse as AdminListMembersResponse,
    type AdminRemoveMemberRequest as AdminRemoveMemberRequest,
    type AdminRemoveMemberResponse as AdminRemoveMemberResponse,
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
    type UpdateSeatsOverrideRequest as UpdateSeatsOverrideRequest,
    type UpdateSeatsOverrideResponse as UpdateSeatsOverrideResponse,
    type TeamListResponse as TeamListResponse,
    type TeamListParams as TeamListParams,
    type TeamAddMemberParams as TeamAddMemberParams,
    type TeamCancelSubscriptionParams as TeamCancelSubscriptionParams,
    type TeamCreateSubscriptionParams as TeamCreateSubscriptionParams,
    type TeamExpireGrantsParams as TeamExpireGrantsParams,
    type TeamExtendTrialParams as TeamExtendTrialParams,
    type TeamGrantCreditsParams as TeamGrantCreditsParams,
    type TeamRemoveMemberParams as TeamRemoveMemberParams,
    type TeamUpdateSeatsOverrideParams as TeamUpdateSeatsOverrideParams,
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
    type JobListResponse as JobListResponse,
    type JobKillByUserResponse as JobKillByUserResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
    type JobDeleteParams as JobDeleteParams,
    type JobKillByUserParams as JobKillByUserParams,
  };

  export { Sandbox as Sandbox, type SandboxListParams as SandboxListParams };

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

  export {
    ChatTemplates as ChatTemplates,
    type AdminChatTemplateListQuery as AdminChatTemplateListQuery,
    type CreateChatTemplateRequest as CreateChatTemplateRequest,
    type UpdateChatTemplateRequest as UpdateChatTemplateRequest,
    type ChatTemplateListResponse as ChatTemplateListResponse,
    type ChatTemplateCreateParams as ChatTemplateCreateParams,
    type ChatTemplateUpdateParams as ChatTemplateUpdateParams,
    type ChatTemplateListParams as ChatTemplateListParams,
  };

  export {
    Connector as Connector,
    type CloneConnectorItem as CloneConnectorItem,
    type CloneConnectorsRequest as CloneConnectorsRequest,
    type CloneConnectorsResponse as CloneConnectorsResponse,
    type ConnectorCloneParams as ConnectorCloneParams,
  };
}
