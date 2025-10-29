// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type JobsListParams, JobsListResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AddChatMessageRequest,
  AddChatMessageResponse,
  AddCollaboratorRequest,
  AdminGrantAccessResponse,
  Chat,
  ChatAddCollaboratorParams,
  ChatAddGitCommitParams,
  ChatAddGitCommitResponse,
  ChatAddMessageParams,
  ChatCopyNodeOutputByCodeHashParams,
  ChatCopyNodeOutputByCodeHashResponse,
  ChatCopyParams,
  ChatCreateSessionParams,
  ChatDeleteFilesParams,
  ChatDeleteFilesResponse,
  ChatEvent,
  ChatGetGitCommitResponse,
  ChatGetPartialChatsResponse,
  ChatGetSessionTimelineResponse,
  ChatGrantAdminOverrideParams,
  ChatListSessionsParams,
  ChatLoadFilesParams,
  ChatLoadFilesResponse,
  ChatRevertToCommitParams,
  ChatRevertToCommitResponse,
  ChatSession,
  ChatSessionRole,
  ChatSessionUser,
  ChatSessionWithMessages,
  ChatUpdateSessionFavoriteParams,
  ChatUpdateSessionParams,
  ChatUpdateVisibilityParams,
  ChatVisibility,
  CopyChatSessionRequest,
  CreateChatSessionRequest,
  CreateChatSessionResponse,
  DeleteChatSessionResponse,
  ErrorResponse,
  GetChatSessionResponse,
  GrantAdminAccessRequest,
  ListChatSessionsResponse,
  ListCollaboratorsResponse,
  Message,
  UpdateChatSessionFavoriteRequest,
  UpdateChatSessionRequest,
  UpdateVisibilityRequest,
  UpdateVisibilityResponse,
} from './resources/chat';
import {
  Code,
  CodeGenerateCodeParams,
  CodeInterruptGenerationParams,
  GenerateCodeRequest,
  InterruptGenerationRequest,
} from './resources/code';
import {
  Connector,
  ConnectorColumnDescriptor,
  ConnectorCreateParams,
  ConnectorCreateSecretParams,
  ConnectorExplorerChat,
  ConnectorGetExplorerChatParams,
  ConnectorGetResponse,
  ConnectorListParams,
  ConnectorRelationalDatabaseDescriptor,
  ConnectorTableDescriptor,
  ConnectorUpdateParams,
  ConnectorWithSecrets,
  ConnectorWithSecretsJobsList,
  Connectors,
  CreateConnectorRequest,
  CreateSecretRequest,
  ExplorationRun,
  ExplorationRunsResponse,
  ExplorationStatus,
  ExploreStatusResponse,
  ExplorerChatResponse,
  LlmInformationStore,
  UpdateConnectorRequest,
} from './resources/connectors';
import {
  DocumentDeleteParams,
  DocumentDownloadParams,
  DocumentDownloadResponse,
  DocumentListParams,
  DocumentListResponse,
  DocumentStructureParams,
  DocumentStructureResponse,
  DocumentUploadParams,
  Documents,
} from './resources/documents';
import {
  Entities,
  EntityAddBatchParams,
  EntityAddBatchResponse,
  EntityAddParams,
  EntityAddRelationshipParams,
  EntityAddRelationshipResponse,
  EntityAddResponse,
  EntityAgentMergeParams,
  EntityAgentMergeResponse,
  EntityDeleteParams,
  EntityDeleteRelationshipParams,
  EntityDeleteRelationshipResponse,
  EntityDeleteResponse,
  EntityDeriveAllParams,
  EntityDeriveAllResponse,
  EntityDeriveParams,
  EntityDeriveResponse,
  EntityGetLocalSubgraphParams,
  EntityGetLocalSubgraphResponse,
  EntityGetMergesParams,
  EntityGetMergesResponse,
  EntityGetParams,
  EntityGetResponse,
  EntityGetSourceEntitiesParams,
  EntityGetSourceEntitiesResponse,
  EntityListJobsParams,
  EntityListJobsResponse,
  EntityMergeParams,
  EntityMergeResponse,
  EntitySearchParams,
  EntitySearchResponse,
  EntitySummarizeParams,
  EntitySummarizeResponse,
  EntityTriggerMergeParams,
  EntityTriggerMergeResponse,
  EntityUpdatePropertyParams,
  EntityUpdatePropertyResponse,
  EntityVerifyParams,
  EntityViewParams,
  EntityViewResponse,
} from './resources/entities';
import {
  JobCancelResponse,
  JobDeleteResponse,
  JobGetResponse,
  JobGetScrapersResponse,
  JobGetSourceEntitiesResponse,
  JobGetStepGraphResponse,
  JobGetStepResponse,
  JobGetStepsResponse,
  JobListParams,
  JobListResponse,
  JobListResponsesJobsList,
  JobStatusParams,
  JobStatusResponse,
  Jobs,
} from './resources/jobs';
import {
  DeleteProjectResponse,
  Project,
  ProjectUpdateParams,
  Projects,
  UpdateProjectRequest,
} from './resources/projects';
import { PublicSessions } from './resources/public-sessions';
import {
  Report,
  ReportMissingParams,
  ReportMissingResponse,
  ReportRelationshipParams,
  ReportRelationshipResponse,
  ReportStepParams,
  ReportStepResponse,
  ReportWrongParams,
  ReportWrongResponse,
} from './resources/report';
import {
  GetSandboxRequest,
  Sandbox,
  SandboxCreateParams,
  SandboxGetParams,
  SandboxListResponse,
  SandboxResource,
  SandboxUpdateStatusParams,
} from './resources/sandbox';
import {
  Scrape,
  ScrapeListParams,
  ScrapeListRequest,
  ScrapeListResponse,
  ScrapeRequest,
  ScrapeScrapeParams,
  ScrapeScrapeResponse,
} from './resources/scrape';
import { Server, ServerInformation } from './resources/server';
import {
  AutofixContext,
  CreateWorkflowEdgeRequest,
  CreateWorkflowNodeRequest,
  CreateWorkflowSessionRequest,
  DashboardComponent,
  DashboardLayout,
  GetNodeLogsResponse,
  JobEventBody,
  MarkWorkflowSessionErroredRequest,
  SessionCreateEdgeParams,
  SessionCreateNodeParams,
  SessionCreateSessionParams,
  SessionGetEventsParams,
  SessionGetEventsResponse,
  SessionGetNodeProgressResponse,
  SessionKillJobsParams,
  SessionKillJobsResponse,
  SessionMarkErroredParams,
  SessionUpdateNodeParams,
  SessionUpdateNodeProgressParams,
  SessionUploadDashboardLayoutParams,
  SessionUploadNodeOutputDataParams,
  SessionUploadNodeVisualizationOutputParams,
  Sessions,
  UpdateWorkflowNodeProgressRequest,
  UpdateWorkflowNodeRequest,
  UploadDashboardLayoutRequest,
  UploadNodeVisualizationOutputRequest,
  WorkflowDag,
  WorkflowNodeExecutionStatus,
  WorkflowNodeLog,
  WorkflowSession,
  WorkflowSessionEdge,
  WorkflowSessionNode,
} from './resources/sessions';
import {
  DatasetDescriptor,
  Entity,
  EntityMatch,
  Image,
  KnowledgeGraph,
  PropertyType,
  Relationship,
  Shared,
  Table,
} from './resources/shared';
import {
  Slack,
  SlackAPIResponse,
  SlackConnectionStatus,
  SlackEventPayload,
  SlackEventsParams,
  SlackUserMappingParams,
  SlackUserMappingRequest,
  SlackUserMappingResponse,
} from './resources/slack';
import {
  DeleteSourceEntityParams,
  DeleteSourceEntityResponse,
  DeleteSourceRelationshipParams,
  DeleteSourceRelationshipResponse,
  Source,
  SourceDeleteEntityParams,
  SourceDeleteRelationshipParams,
  SourceListParams,
  SourceListResponse,
  Sources,
} from './resources/sources';
import {
  ChatPrompt,
  ExecutionStep,
  SaveRequirement,
  Structure,
  StructureEnhancePropertyParams,
  StructureEnhancePropertyResponse,
  StructureEnhanceRelationshipParams,
  StructureEnhanceRelationshipResponse,
  StructureFindRelationshipParams,
  StructureFindRelationshipResponse,
  StructureIsCompleteParams,
  StructureIsCompleteResponse,
  StructureJobStatusParams,
  StructureJobStatusResponse,
  StructureRunAsyncParams,
  StructureRunAsyncResponse,
  ToolMetadata,
} from './resources/structure';
import {
  AcceptInvitationRequest,
  AcceptInvitationResponse,
  AddMemberRequest,
  AddMemberResponse,
  CreateProjectRequest,
  CreateTeamRequest,
  CreateTeamResponse,
  CreditsUsageRequest,
  CreditsUsageResponse,
  CreditsUsageTimeseriesPoint,
  DeleteTeamResponse,
  GetTeamResponse,
  Granularity,
  InvitationDetailsResponse,
  ListMembersResponse,
  ListProjectsResponse,
  ListTeamsResponse,
  RemoveMemberResponse,
  Team,
  TeamAcceptInvitationParams,
  TeamAddMemberParams,
  TeamCreateParams,
  TeamCreateProjectParams,
  TeamCreditsUsageParams,
  TeamRole,
  TeamSubscriptionStatus,
  TeamUpdateMemberRoleParams,
  TeamUpdateParams,
  TeamWithRole,
  Teams,
  UpdateMemberRoleRequest,
  UpdateMemberRoleResponse,
  UpdateTeamRequest,
  UpdateTeamResponse,
  UsageGroupKey,
  UserTeam,
} from './resources/teams';
import {
  RunWorkflowRequest,
  StopWorkflowRequest,
  Workflow,
  WorkflowRunParams,
  WorkflowStopParams,
} from './resources/workflow';
import {
  CreateWorkflowScheduleRequest,
  GetWorkflowScheduleSessionsRequest,
  GetWorkflowScheduleSessionsResponse,
  UpdateWorkflowScheduleRequest,
  WorkflowSchedule,
  WorkflowScheduleCreateParams,
  WorkflowScheduleGetAllResponse,
  WorkflowScheduleGetResponse,
  WorkflowScheduleGetSessionsParams,
  WorkflowScheduleInfo,
  WorkflowScheduleUpdateParams,
} from './resources/workflow-schedule';
import { Admin } from './resources/admin/admin';
import {
  DatasetAddPropertyParams,
  DatasetCreateParams,
  DatasetCreateResponse,
  DatasetDeleteParams,
  DatasetEnrichmentProgressParams,
  DatasetEnrichmentProgressResponse,
  DatasetExportToCsvParams,
  DatasetExportToExcelParams,
  DatasetGetParams,
  DatasetGetResponse,
  DatasetListResponse,
  DatasetMatchParams,
  DatasetMatchResponse,
  DatasetRemovePropertyParams,
  DatasetReorderPropertiesParams,
  DatasetSetPrimaryColumnParams,
  DatasetUpdatePropertyParams,
  DatasetUpdateRelationshipParams,
  DatasetViewRelationshipsParams,
  DatasetViewRelationshipsResponse,
  DatasetViewRelationshipsResponsesJobsList,
  DatasetViewTableParams,
  DatasetViewTableResponse,
  DatasetViewTableResponsesJobsList,
  DatasetViewTablesWithRelationshipsParams,
  DatasetViewTablesWithRelationshipsResponse,
  Datasets,
  MergeConfig,
  RelationshipMergeStrategy,
  Strategy,
} from './resources/datasets/datasets';
import { External } from './resources/external/external';
import {
  SurveySubmissionRequest,
  SurveySubmissionResponse,
  TokenResponse,
  UpdateUserParams,
  User,
  UserInfo,
  UserSurveySubmitParams,
  UserTransactionsResponse,
  UserUpdateParams,
  UserUsageParams,
  UserUsageResponse,
} from './resources/user/user';

const environments = {
  production: 'https://api.structify.ai',
  development: 'http://localhost:8080',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['STRUCTIFY_API_TOKEN'].
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.structify.ai`
   * - `development` corresponds to `http://localhost:8080`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['STRUCTIFY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Structify API.
 */
export class Structify extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Structify API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['STRUCTIFY_API_TOKEN'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['STRUCTIFY_BASE_URL'] ?? https://api.structify.ai] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STRUCTIFY_BASE_URL'),
    apiKey = Core.readEnv('STRUCTIFY_API_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.StructifyError(
        "The STRUCTIFY_API_TOKEN environment variable is missing or empty; either provide it, or instantiate the Structify client with an apiKey option, like new Structify({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.StructifyError(
        'Ambiguous URL; The `baseURL` option (or STRUCTIFY_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      baseURLOverridden: baseURL ? baseURL !== environments[options.environment || 'production'] : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  user: API.User = new API.User(this);
  chat: API.Chat = new API.Chat(this);
  teams: API.Teams = new API.Teams(this);
  projects: API.Projects = new API.Projects(this);
  admin: API.Admin = new API.Admin(this);
  datasets: API.Datasets = new API.Datasets(this);
  documents: API.Documents = new API.Documents(this);
  jobs: API.Jobs = new API.Jobs(this);
  sessions: API.Sessions = new API.Sessions(this);
  workflowSchedule: API.WorkflowSchedule = new API.WorkflowSchedule(this);
  workflow: API.Workflow = new API.Workflow(this);
  connectors: API.Connectors = new API.Connectors(this);
  server: API.Server = new API.Server(this);
  sources: API.Sources = new API.Sources(this);
  entities: API.Entities = new API.Entities(this);
  report: API.Report = new API.Report(this);
  sandbox: API.SandboxResource = new API.SandboxResource(this);
  scrape: API.Scrape = new API.Scrape(this);
  code: API.Code = new API.Code(this);
  structure: API.Structure = new API.Structure(this);
  publicSessions: API.PublicSessions = new API.PublicSessions(this);
  shared: API.Shared = new API.Shared(this);
  external: API.External = new API.External(this);
  slack: API.Slack = new API.Slack(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { api_key: this.apiKey };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Structify = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static StructifyError = Errors.StructifyError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Structify.User = User;
Structify.Chat = Chat;
Structify.Teams = Teams;
Structify.Projects = Projects;
Structify.Admin = Admin;
Structify.Datasets = Datasets;
Structify.DatasetViewRelationshipsResponsesJobsList = DatasetViewRelationshipsResponsesJobsList;
Structify.DatasetViewTableResponsesJobsList = DatasetViewTableResponsesJobsList;
Structify.Documents = Documents;
Structify.Jobs = Jobs;
Structify.JobListResponsesJobsList = JobListResponsesJobsList;
Structify.Sessions = Sessions;
Structify.WorkflowSchedule = WorkflowSchedule;
Structify.Workflow = Workflow;
Structify.Connectors = Connectors;
Structify.ConnectorWithSecretsJobsList = ConnectorWithSecretsJobsList;
Structify.Server = Server;
Structify.Sources = Sources;
Structify.Entities = Entities;
Structify.Report = Report;
Structify.SandboxResource = SandboxResource;
Structify.Scrape = Scrape;
Structify.Code = Code;
Structify.Structure = Structure;
Structify.PublicSessions = PublicSessions;
Structify.Shared = Shared;
Structify.External = External;
Structify.Slack = Slack;

export declare namespace Structify {
  export type RequestOptions = Core.RequestOptions;

  export import JobsList = Pagination.JobsList;
  export { type JobsListParams as JobsListParams, type JobsListResponse as JobsListResponse };

  export {
    User as User,
    type SurveySubmissionRequest as SurveySubmissionRequest,
    type SurveySubmissionResponse as SurveySubmissionResponse,
    type TokenResponse as TokenResponse,
    type UpdateUserParams as UpdateUserParams,
    type UserInfo as UserInfo,
    type UserTransactionsResponse as UserTransactionsResponse,
    type UserUsageResponse as UserUsageResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserSurveySubmitParams as UserSurveySubmitParams,
    type UserUsageParams as UserUsageParams,
  };

  export {
    Chat as Chat,
    type AddChatMessageRequest as AddChatMessageRequest,
    type AddChatMessageResponse as AddChatMessageResponse,
    type AddCollaboratorRequest as AddCollaboratorRequest,
    type AdminGrantAccessResponse as AdminGrantAccessResponse,
    type ChatEvent as ChatEvent,
    type ChatSession as ChatSession,
    type ChatSessionRole as ChatSessionRole,
    type ChatSessionUser as ChatSessionUser,
    type ChatSessionWithMessages as ChatSessionWithMessages,
    type ChatVisibility as ChatVisibility,
    type CopyChatSessionRequest as CopyChatSessionRequest,
    type CreateChatSessionRequest as CreateChatSessionRequest,
    type CreateChatSessionResponse as CreateChatSessionResponse,
    type DeleteChatSessionResponse as DeleteChatSessionResponse,
    type ErrorResponse as ErrorResponse,
    type GetChatSessionResponse as GetChatSessionResponse,
    type GrantAdminAccessRequest as GrantAdminAccessRequest,
    type ListChatSessionsResponse as ListChatSessionsResponse,
    type ListCollaboratorsResponse as ListCollaboratorsResponse,
    type Message as Message,
    type UpdateChatSessionFavoriteRequest as UpdateChatSessionFavoriteRequest,
    type UpdateChatSessionRequest as UpdateChatSessionRequest,
    type UpdateVisibilityRequest as UpdateVisibilityRequest,
    type UpdateVisibilityResponse as UpdateVisibilityResponse,
    type ChatAddGitCommitResponse as ChatAddGitCommitResponse,
    type ChatCopyNodeOutputByCodeHashResponse as ChatCopyNodeOutputByCodeHashResponse,
    type ChatDeleteFilesResponse as ChatDeleteFilesResponse,
    type ChatGetGitCommitResponse as ChatGetGitCommitResponse,
    type ChatGetPartialChatsResponse as ChatGetPartialChatsResponse,
    type ChatGetSessionTimelineResponse as ChatGetSessionTimelineResponse,
    type ChatLoadFilesResponse as ChatLoadFilesResponse,
    type ChatRevertToCommitResponse as ChatRevertToCommitResponse,
    type ChatAddCollaboratorParams as ChatAddCollaboratorParams,
    type ChatAddGitCommitParams as ChatAddGitCommitParams,
    type ChatAddMessageParams as ChatAddMessageParams,
    type ChatCopyParams as ChatCopyParams,
    type ChatCopyNodeOutputByCodeHashParams as ChatCopyNodeOutputByCodeHashParams,
    type ChatCreateSessionParams as ChatCreateSessionParams,
    type ChatDeleteFilesParams as ChatDeleteFilesParams,
    type ChatGrantAdminOverrideParams as ChatGrantAdminOverrideParams,
    type ChatListSessionsParams as ChatListSessionsParams,
    type ChatLoadFilesParams as ChatLoadFilesParams,
    type ChatRevertToCommitParams as ChatRevertToCommitParams,
    type ChatUpdateSessionParams as ChatUpdateSessionParams,
    type ChatUpdateSessionFavoriteParams as ChatUpdateSessionFavoriteParams,
    type ChatUpdateVisibilityParams as ChatUpdateVisibilityParams,
  };

  export {
    Teams as Teams,
    type AcceptInvitationRequest as AcceptInvitationRequest,
    type AcceptInvitationResponse as AcceptInvitationResponse,
    type AddMemberRequest as AddMemberRequest,
    type AddMemberResponse as AddMemberResponse,
    type CreateProjectRequest as CreateProjectRequest,
    type CreateTeamRequest as CreateTeamRequest,
    type CreateTeamResponse as CreateTeamResponse,
    type CreditsUsageRequest as CreditsUsageRequest,
    type CreditsUsageResponse as CreditsUsageResponse,
    type CreditsUsageTimeseriesPoint as CreditsUsageTimeseriesPoint,
    type DeleteTeamResponse as DeleteTeamResponse,
    type GetTeamResponse as GetTeamResponse,
    type Granularity as Granularity,
    type InvitationDetailsResponse as InvitationDetailsResponse,
    type ListMembersResponse as ListMembersResponse,
    type ListProjectsResponse as ListProjectsResponse,
    type ListTeamsResponse as ListTeamsResponse,
    type RemoveMemberResponse as RemoveMemberResponse,
    type Team as Team,
    type TeamRole as TeamRole,
    type TeamSubscriptionStatus as TeamSubscriptionStatus,
    type TeamWithRole as TeamWithRole,
    type UpdateMemberRoleRequest as UpdateMemberRoleRequest,
    type UpdateMemberRoleResponse as UpdateMemberRoleResponse,
    type UpdateTeamRequest as UpdateTeamRequest,
    type UpdateTeamResponse as UpdateTeamResponse,
    type UsageGroupKey as UsageGroupKey,
    type UserTeam as UserTeam,
    type TeamCreateParams as TeamCreateParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamAcceptInvitationParams as TeamAcceptInvitationParams,
    type TeamAddMemberParams as TeamAddMemberParams,
    type TeamCreateProjectParams as TeamCreateProjectParams,
    type TeamCreditsUsageParams as TeamCreditsUsageParams,
    type TeamUpdateMemberRoleParams as TeamUpdateMemberRoleParams,
  };

  export {
    Projects as Projects,
    type DeleteProjectResponse as DeleteProjectResponse,
    type Project as Project,
    type UpdateProjectRequest as UpdateProjectRequest,
    type ProjectUpdateParams as ProjectUpdateParams,
  };

  export { Admin as Admin };

  export {
    Datasets as Datasets,
    type MergeConfig as MergeConfig,
    type RelationshipMergeStrategy as RelationshipMergeStrategy,
    type Strategy as Strategy,
    type DatasetCreateResponse as DatasetCreateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetEnrichmentProgressResponse as DatasetEnrichmentProgressResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetMatchResponse as DatasetMatchResponse,
    type DatasetViewRelationshipsResponse as DatasetViewRelationshipsResponse,
    type DatasetViewTableResponse as DatasetViewTableResponse,
    type DatasetViewTablesWithRelationshipsResponse as DatasetViewTablesWithRelationshipsResponse,
    DatasetViewRelationshipsResponsesJobsList as DatasetViewRelationshipsResponsesJobsList,
    DatasetViewTableResponsesJobsList as DatasetViewTableResponsesJobsList,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetAddPropertyParams as DatasetAddPropertyParams,
    type DatasetEnrichmentProgressParams as DatasetEnrichmentProgressParams,
    type DatasetExportToCsvParams as DatasetExportToCsvParams,
    type DatasetExportToExcelParams as DatasetExportToExcelParams,
    type DatasetGetParams as DatasetGetParams,
    type DatasetMatchParams as DatasetMatchParams,
    type DatasetRemovePropertyParams as DatasetRemovePropertyParams,
    type DatasetReorderPropertiesParams as DatasetReorderPropertiesParams,
    type DatasetSetPrimaryColumnParams as DatasetSetPrimaryColumnParams,
    type DatasetUpdatePropertyParams as DatasetUpdatePropertyParams,
    type DatasetUpdateRelationshipParams as DatasetUpdateRelationshipParams,
    type DatasetViewRelationshipsParams as DatasetViewRelationshipsParams,
    type DatasetViewTableParams as DatasetViewTableParams,
    type DatasetViewTablesWithRelationshipsParams as DatasetViewTablesWithRelationshipsParams,
  };

  export {
    Documents as Documents,
    type DocumentListResponse as DocumentListResponse,
    type DocumentDownloadResponse as DocumentDownloadResponse,
    type DocumentStructureResponse as DocumentStructureResponse,
    type DocumentListParams as DocumentListParams,
    type DocumentDeleteParams as DocumentDeleteParams,
    type DocumentDownloadParams as DocumentDownloadParams,
    type DocumentStructureParams as DocumentStructureParams,
    type DocumentUploadParams as DocumentUploadParams,
  };

  export {
    Jobs as Jobs,
    type JobListResponse as JobListResponse,
    type JobDeleteResponse as JobDeleteResponse,
    type JobCancelResponse as JobCancelResponse,
    type JobGetResponse as JobGetResponse,
    type JobGetScrapersResponse as JobGetScrapersResponse,
    type JobGetSourceEntitiesResponse as JobGetSourceEntitiesResponse,
    type JobGetStepResponse as JobGetStepResponse,
    type JobGetStepGraphResponse as JobGetStepGraphResponse,
    type JobGetStepsResponse as JobGetStepsResponse,
    type JobStatusResponse as JobStatusResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
    type JobStatusParams as JobStatusParams,
  };

  export {
    Sessions as Sessions,
    type AutofixContext as AutofixContext,
    type CreateWorkflowEdgeRequest as CreateWorkflowEdgeRequest,
    type CreateWorkflowNodeRequest as CreateWorkflowNodeRequest,
    type CreateWorkflowSessionRequest as CreateWorkflowSessionRequest,
    type DashboardComponent as DashboardComponent,
    type DashboardLayout as DashboardLayout,
    type GetNodeLogsResponse as GetNodeLogsResponse,
    type JobEventBody as JobEventBody,
    type MarkWorkflowSessionErroredRequest as MarkWorkflowSessionErroredRequest,
    type UpdateWorkflowNodeProgressRequest as UpdateWorkflowNodeProgressRequest,
    type UpdateWorkflowNodeRequest as UpdateWorkflowNodeRequest,
    type UploadDashboardLayoutRequest as UploadDashboardLayoutRequest,
    type UploadNodeVisualizationOutputRequest as UploadNodeVisualizationOutputRequest,
    type WorkflowDag as WorkflowDag,
    type WorkflowNodeExecutionStatus as WorkflowNodeExecutionStatus,
    type WorkflowNodeLog as WorkflowNodeLog,
    type WorkflowSession as WorkflowSession,
    type WorkflowSessionEdge as WorkflowSessionEdge,
    type WorkflowSessionNode as WorkflowSessionNode,
    type SessionGetEventsResponse as SessionGetEventsResponse,
    type SessionGetNodeProgressResponse as SessionGetNodeProgressResponse,
    type SessionKillJobsResponse as SessionKillJobsResponse,
    type SessionCreateEdgeParams as SessionCreateEdgeParams,
    type SessionCreateNodeParams as SessionCreateNodeParams,
    type SessionCreateSessionParams as SessionCreateSessionParams,
    type SessionGetEventsParams as SessionGetEventsParams,
    type SessionKillJobsParams as SessionKillJobsParams,
    type SessionMarkErroredParams as SessionMarkErroredParams,
    type SessionUpdateNodeParams as SessionUpdateNodeParams,
    type SessionUpdateNodeProgressParams as SessionUpdateNodeProgressParams,
    type SessionUploadDashboardLayoutParams as SessionUploadDashboardLayoutParams,
    type SessionUploadNodeOutputDataParams as SessionUploadNodeOutputDataParams,
    type SessionUploadNodeVisualizationOutputParams as SessionUploadNodeVisualizationOutputParams,
  };

  export {
    WorkflowSchedule as WorkflowSchedule,
    type CreateWorkflowScheduleRequest as CreateWorkflowScheduleRequest,
    type GetWorkflowScheduleSessionsRequest as GetWorkflowScheduleSessionsRequest,
    type GetWorkflowScheduleSessionsResponse as GetWorkflowScheduleSessionsResponse,
    type UpdateWorkflowScheduleRequest as UpdateWorkflowScheduleRequest,
    type WorkflowScheduleInfo as WorkflowScheduleInfo,
    type WorkflowScheduleGetResponse as WorkflowScheduleGetResponse,
    type WorkflowScheduleGetAllResponse as WorkflowScheduleGetAllResponse,
    type WorkflowScheduleCreateParams as WorkflowScheduleCreateParams,
    type WorkflowScheduleUpdateParams as WorkflowScheduleUpdateParams,
    type WorkflowScheduleGetSessionsParams as WorkflowScheduleGetSessionsParams,
  };

  export {
    Workflow as Workflow,
    type RunWorkflowRequest as RunWorkflowRequest,
    type StopWorkflowRequest as StopWorkflowRequest,
    type WorkflowRunParams as WorkflowRunParams,
    type WorkflowStopParams as WorkflowStopParams,
  };

  export {
    Connectors as Connectors,
    type Connector as Connector,
    type ConnectorColumnDescriptor as ConnectorColumnDescriptor,
    type ConnectorExplorerChat as ConnectorExplorerChat,
    type ConnectorRelationalDatabaseDescriptor as ConnectorRelationalDatabaseDescriptor,
    type ConnectorTableDescriptor as ConnectorTableDescriptor,
    type ConnectorWithSecrets as ConnectorWithSecrets,
    type CreateConnectorRequest as CreateConnectorRequest,
    type CreateSecretRequest as CreateSecretRequest,
    type ExplorationRun as ExplorationRun,
    type ExplorationRunsResponse as ExplorationRunsResponse,
    type ExplorationStatus as ExplorationStatus,
    type ExploreStatusResponse as ExploreStatusResponse,
    type ExplorerChatResponse as ExplorerChatResponse,
    type LlmInformationStore as LlmInformationStore,
    type UpdateConnectorRequest as UpdateConnectorRequest,
    type ConnectorGetResponse as ConnectorGetResponse,
    ConnectorWithSecretsJobsList as ConnectorWithSecretsJobsList,
    type ConnectorCreateParams as ConnectorCreateParams,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorCreateSecretParams as ConnectorCreateSecretParams,
    type ConnectorGetExplorerChatParams as ConnectorGetExplorerChatParams,
  };

  export { Server as Server, type ServerInformation as ServerInformation };

  export {
    Sources as Sources,
    type DeleteSourceEntityParams as DeleteSourceEntityParams,
    type DeleteSourceEntityResponse as DeleteSourceEntityResponse,
    type DeleteSourceRelationshipParams as DeleteSourceRelationshipParams,
    type DeleteSourceRelationshipResponse as DeleteSourceRelationshipResponse,
    type Source as Source,
    type SourceListResponse as SourceListResponse,
    type SourceListParams as SourceListParams,
    type SourceDeleteEntityParams as SourceDeleteEntityParams,
    type SourceDeleteRelationshipParams as SourceDeleteRelationshipParams,
  };

  export {
    Entities as Entities,
    type EntityDeleteResponse as EntityDeleteResponse,
    type EntityAddResponse as EntityAddResponse,
    type EntityAddBatchResponse as EntityAddBatchResponse,
    type EntityAddRelationshipResponse as EntityAddRelationshipResponse,
    type EntityAgentMergeResponse as EntityAgentMergeResponse,
    type EntityDeleteRelationshipResponse as EntityDeleteRelationshipResponse,
    type EntityDeriveResponse as EntityDeriveResponse,
    type EntityDeriveAllResponse as EntityDeriveAllResponse,
    type EntityGetResponse as EntityGetResponse,
    type EntityGetLocalSubgraphResponse as EntityGetLocalSubgraphResponse,
    type EntityGetMergesResponse as EntityGetMergesResponse,
    type EntityGetSourceEntitiesResponse as EntityGetSourceEntitiesResponse,
    type EntityListJobsResponse as EntityListJobsResponse,
    type EntityMergeResponse as EntityMergeResponse,
    type EntitySearchResponse as EntitySearchResponse,
    type EntitySummarizeResponse as EntitySummarizeResponse,
    type EntityTriggerMergeResponse as EntityTriggerMergeResponse,
    type EntityUpdatePropertyResponse as EntityUpdatePropertyResponse,
    type EntityViewResponse as EntityViewResponse,
    type EntityDeleteParams as EntityDeleteParams,
    type EntityAddParams as EntityAddParams,
    type EntityAddBatchParams as EntityAddBatchParams,
    type EntityAddRelationshipParams as EntityAddRelationshipParams,
    type EntityAgentMergeParams as EntityAgentMergeParams,
    type EntityDeleteRelationshipParams as EntityDeleteRelationshipParams,
    type EntityDeriveParams as EntityDeriveParams,
    type EntityDeriveAllParams as EntityDeriveAllParams,
    type EntityGetParams as EntityGetParams,
    type EntityGetLocalSubgraphParams as EntityGetLocalSubgraphParams,
    type EntityGetMergesParams as EntityGetMergesParams,
    type EntityGetSourceEntitiesParams as EntityGetSourceEntitiesParams,
    type EntityListJobsParams as EntityListJobsParams,
    type EntityMergeParams as EntityMergeParams,
    type EntitySearchParams as EntitySearchParams,
    type EntitySummarizeParams as EntitySummarizeParams,
    type EntityTriggerMergeParams as EntityTriggerMergeParams,
    type EntityUpdatePropertyParams as EntityUpdatePropertyParams,
    type EntityVerifyParams as EntityVerifyParams,
    type EntityViewParams as EntityViewParams,
  };

  export {
    Report as Report,
    type ReportMissingResponse as ReportMissingResponse,
    type ReportRelationshipResponse as ReportRelationshipResponse,
    type ReportStepResponse as ReportStepResponse,
    type ReportWrongResponse as ReportWrongResponse,
    type ReportMissingParams as ReportMissingParams,
    type ReportRelationshipParams as ReportRelationshipParams,
    type ReportStepParams as ReportStepParams,
    type ReportWrongParams as ReportWrongParams,
  };

  export {
    SandboxResource as SandboxResource,
    type GetSandboxRequest as GetSandboxRequest,
    type Sandbox as Sandbox,
    type SandboxListResponse as SandboxListResponse,
    type SandboxCreateParams as SandboxCreateParams,
    type SandboxGetParams as SandboxGetParams,
    type SandboxUpdateStatusParams as SandboxUpdateStatusParams,
  };

  export {
    Scrape as Scrape,
    type ScrapeListRequest as ScrapeListRequest,
    type ScrapeRequest as ScrapeRequest,
    type ScrapeListResponse as ScrapeListResponse,
    type ScrapeScrapeResponse as ScrapeScrapeResponse,
    type ScrapeListParams as ScrapeListParams,
    type ScrapeScrapeParams as ScrapeScrapeParams,
  };

  export {
    Code as Code,
    type GenerateCodeRequest as GenerateCodeRequest,
    type InterruptGenerationRequest as InterruptGenerationRequest,
    type CodeGenerateCodeParams as CodeGenerateCodeParams,
    type CodeInterruptGenerationParams as CodeInterruptGenerationParams,
  };

  export {
    Structure as Structure,
    type ChatPrompt as ChatPrompt,
    type ExecutionStep as ExecutionStep,
    type SaveRequirement as SaveRequirement,
    type ToolMetadata as ToolMetadata,
    type StructureEnhancePropertyResponse as StructureEnhancePropertyResponse,
    type StructureEnhanceRelationshipResponse as StructureEnhanceRelationshipResponse,
    type StructureFindRelationshipResponse as StructureFindRelationshipResponse,
    type StructureIsCompleteResponse as StructureIsCompleteResponse,
    type StructureJobStatusResponse as StructureJobStatusResponse,
    type StructureRunAsyncResponse as StructureRunAsyncResponse,
    type StructureEnhancePropertyParams as StructureEnhancePropertyParams,
    type StructureEnhanceRelationshipParams as StructureEnhanceRelationshipParams,
    type StructureFindRelationshipParams as StructureFindRelationshipParams,
    type StructureIsCompleteParams as StructureIsCompleteParams,
    type StructureJobStatusParams as StructureJobStatusParams,
    type StructureRunAsyncParams as StructureRunAsyncParams,
  };

  export { PublicSessions as PublicSessions };

  export {
    Shared as Shared,
    type DatasetDescriptor as DatasetDescriptor,
    type Entity as Entity,
    type EntityMatch as EntityMatch,
    type Image as Image,
    type KnowledgeGraph as KnowledgeGraph,
    type PropertyType as PropertyType,
    type Relationship as Relationship,
    type Table as Table,
  };

  export { External as External };

  export {
    Slack as Slack,
    type SlackAPIResponse as SlackAPIResponse,
    type SlackConnectionStatus as SlackConnectionStatus,
    type SlackEventPayload as SlackEventPayload,
    type SlackUserMappingRequest as SlackUserMappingRequest,
    type SlackUserMappingResponse as SlackUserMappingResponse,
    type SlackEventsParams as SlackEventsParams,
    type SlackUserMappingParams as SlackUserMappingParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  StructifyError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Structify;
