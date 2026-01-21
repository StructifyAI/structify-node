// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import {
  type JobsListParams,
  JobsListResponse,
  type ListConnectorCatalogParams,
  ListConnectorCatalogResponse,
} from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AddCollaboratorRequest,
  AdminGrantAccessResponse,
  AdminIssueFoundRequest,
  AdminIssueFoundResponse,
  Chat,
  ChatAddCollaboratorParams,
  ChatAddGitCommitParams,
  ChatAddGitCommitResponse,
  ChatAdminIssueFoundParams,
  ChatCopyNodeOutputByCodeHashParams,
  ChatCopyNodeOutputByCodeHashResponse,
  ChatCopyParams,
  ChatCreateSessionParams,
  ChatDeleteFilesParams,
  ChatDeleteFilesResponse,
  ChatDependency,
  ChatEvent,
  ChatGetGitCommitResponse,
  ChatGetPartialChatsResponse,
  ChatGetSessionTimelineResponse,
  ChatGrantAdminOverrideParams,
  ChatListSessionsParams,
  ChatListTemplatesResponse,
  ChatLoadFilesParams,
  ChatLoadFilesResponse,
  ChatRevertToCommitParams,
  ChatRevertToCommitResponse,
  ChatSession,
  ChatSessionRole,
  ChatSessionUser,
  ChatSessionWithMessages,
  ChatTemplate,
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
  GetDependenciesResponse,
  GrantAdminAccessRequest,
  ListChatSessionsResponse,
  ListCollaboratorsResponse,
  Message,
  ToolInvocation,
  ToolResult,
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
  DatasetAddPropertyParams,
  DatasetCountMissingEmbeddingsParams,
  DatasetCountMissingEmbeddingsResponse,
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
} from './resources/datasets';
import {
  DocumentDeleteParams,
  DocumentDownloadParams,
  DocumentDownloadResponse,
  DocumentListParams,
  DocumentListResponse,
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
  EntityGetParams,
  EntityGetResponse,
  EntityGetSourceEntitiesParams,
  EntityGetSourceEntitiesResponse,
  EntityListJobsParams,
  EntityListJobsResponse,
  EntitySearchParams,
  EntitySearchResponse,
  EntitySummarizeParams,
  EntitySummarizeResponse,
  EntityUpdatePropertyParams,
  EntityUpdatePropertyResponse,
  EntityUploadParquetParams,
  EntityVerifyParams,
  EntityViewParams,
  EntityViewResponse,
} from './resources/entities';
import {
  GetJobEventsResponse,
  JobCancelResponse,
  JobGetScrapersResponse,
  JobGetSourceEntitiesResponse,
  JobListParams,
  JobListResponse,
  JobListResponsesJobsList,
  JobStatusParams,
  JobStatusResponse,
  Jobs,
} from './resources/jobs';
import {
  CreateMatchJobsRequest,
  CreateMatchJobsResponse,
  ListMatchResultsParams,
  Match,
  MatchCreateJobsParams,
  MatchListResultsParams,
  MatchResult,
  MatchResultsJobsList,
} from './resources/match';
import {
  ConnectSession,
  CreateNangoSessionRequest,
  Integration,
  Nango,
  NangoCreateSessionParams,
  NangoCreateSessionResponse,
  NangoListIntegrationsResponse,
} from './resources/nango';
import {
  DeleteProjectResponse,
  Project,
  ProjectCollaboratorInput,
  ProjectGetResponse,
  ProjectMember,
  ProjectUpdateParams,
  ProjectVisibility,
  Projects,
  UpdateProjectRequest,
} from './resources/projects';
import { PublicSessions } from './resources/public-sessions';
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
  ConfirmNodeRequest,
  CreateWorkflowSessionRequest,
  DashboardComponent,
  DashboardLayout,
  EdgeSpec,
  FinalizeDagRequest,
  FinalizeDagResponse,
  GetNodeLogsResponse,
  GetNodeResponse,
  JobEventBody,
  MarkWorkflowSessionErroredRequest,
  NodeSpec,
  RequestConfirmationRequest,
  SessionConfirmNodeParams,
  SessionCreateSessionParams,
  SessionFinalizeDagParams,
  SessionGetEventsParams,
  SessionGetEventsResponse,
  SessionGetNodeProgressResponse,
  SessionKillJobsParams,
  SessionKillJobsResponse,
  SessionMarkErroredParams,
  SessionRequestConfirmationParams,
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
import { Slack, SlackAPIResponse, SlackEventPayload, SlackEventsParams } from './resources/slack';
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
  StructurePdfParams,
  StructurePdfResponse,
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
  SelectTeamResponse,
  Team,
  TeamAcceptInvitationParams,
  TeamAddMemberParams,
  TeamCreateLinkCodeParams,
  TeamCreateParams,
  TeamCreateProjectParams,
  TeamCreditsUsageParams,
  TeamRole,
  TeamSubscriptionStatus,
  TeamUpdateMemberRoleParams,
  TeamUpdateParams,
  TeamWithRole,
  Teams,
  TeamsLinkCodeRequest,
  TeamsLinkCodeResponse,
  UpdateMemberRoleRequest,
  UpdateMemberRoleResponse,
  UpdateTeamRequest,
  UpdateTeamResponse,
  UsageGroupKey,
} from './resources/teams';
import { EstimateCostResponse, Whitelabel } from './resources/whitelabel';
import {
  CreateWikiPageRequest,
  TeamWikiPage,
  UpdateWikiPageRequest,
  Wiki,
  WikiConnectorReference,
  WikiCreateParams,
  WikiListResponse,
  WikiPageWithReferences,
  WikiUpdateParams,
} from './resources/wiki';
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
  WorkflowScheduleGetSessionsParams,
  WorkflowScheduleInfo,
  WorkflowSchedulePauseParams,
  WorkflowScheduleUpdateParams,
} from './resources/workflow-schedule';
import { Admin } from './resources/admin/admin';
import {
  ConnectorAuthMethod,
  ConnectorAuthMethodWithFields,
  ConnectorCatalog,
  ConnectorCatalogListParams,
  ConnectorCatalogListResponse,
  ConnectorCatalogResource,
  ConnectorCatalogWithMethods,
  ConnectorCredentialField,
} from './resources/connector-catalog/connector-catalog';
import {
  Connector,
  ConnectorCategory,
  ConnectorCreateParams,
  ConnectorCreateSecretParams,
  ConnectorDeleteSchemaObjectParams,
  ConnectorExploreParams,
  ConnectorExplorerChat,
  ConnectorGetClarificationRequestsResponse,
  ConnectorGetExplorerChatParams,
  ConnectorGetResponse,
  ConnectorListParams,
  ConnectorListWithSnippetsParams,
  ConnectorListWithSnippetsResponse,
  ConnectorSearchTablesParams,
  ConnectorSearchTablesResponse,
  ConnectorStoreResponse,
  ConnectorSummariesParams,
  ConnectorSummariesRequest,
  ConnectorSummariesResponse,
  ConnectorSummary,
  ConnectorTableInfo,
  ConnectorUpdateColumnParams,
  ConnectorUpdateParams,
  ConnectorUpdateTableParams,
  ConnectorWithSecrets,
  ConnectorWithSecretsJobsList,
  ConnectorWithSnippets,
  Connectors,
  CreateConnectorRequest,
  CreateSecretRequest,
  DeleteSchemaObjectRequest,
  DeleteSchemaObjectResponse,
  ExplorationPhaseID,
  ExplorationRun,
  ExplorationRunsResponse,
  ExplorationStatus,
  ExploreConnectorRequest,
  ExploreStatusResponse,
  ExplorerChatResponse,
  ListTablesResponse,
  LlmInformationStore,
  SchemaObjectID,
  UpdateColumnRequest,
  UpdateConnectorRequest,
  UpdateTableRequest,
  UpdateTableResponse,
} from './resources/connectors/connectors';
import {
  EnrichUserParams,
  JwtToAPITokenRequest,
  RefreshSessionRequest,
  RefreshSessionResponse,
  SurveySubmissionRequest,
  SurveySubmissionResponse,
  TokenResponse,
  UpdateUserParams,
  User,
  UserEnrichParams,
  UserInfo,
  UserJwtToAPITokenParams,
  UserRefreshParams,
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
  apiKey?: string | null | undefined;

  /**
   * Defaults to process.env['STRUCTIFY_SESSION_TOKEN'].
   */
  sessionToken?: string | null | undefined;

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
  apiKey: string | null;
  sessionToken: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Structify API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['STRUCTIFY_API_TOKEN'] ?? null]
   * @param {string | null | undefined} [opts.sessionToken=process.env['STRUCTIFY_SESSION_TOKEN'] ?? null]
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
    apiKey = Core.readEnv('STRUCTIFY_API_TOKEN') ?? null,
    sessionToken = Core.readEnv('STRUCTIFY_SESSION_TOKEN') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      sessionToken,
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
    this.sessionToken = sessionToken;
  }

  whitelabel: API.Whitelabel = new API.Whitelabel(this);
  user: API.User = new API.User(this);
  chat: API.Chat = new API.Chat(this);
  teams: API.Teams = new API.Teams(this);
  wiki: API.Wiki = new API.Wiki(this);
  projects: API.Projects = new API.Projects(this);
  admin: API.Admin = new API.Admin(this);
  datasets: API.Datasets = new API.Datasets(this);
  documents: API.Documents = new API.Documents(this);
  jobs: API.Jobs = new API.Jobs(this);
  match: API.Match = new API.Match(this);
  sessions: API.Sessions = new API.Sessions(this);
  workflowSchedule: API.WorkflowSchedule = new API.WorkflowSchedule(this);
  workflow: API.Workflow = new API.Workflow(this);
  connectors: API.Connectors = new API.Connectors(this);
  connectorCatalog: API.ConnectorCatalogResource = new API.ConnectorCatalogResource(this);
  server: API.Server = new API.Server(this);
  sources: API.Sources = new API.Sources(this);
  entities: API.Entities = new API.Entities(this);
  sandbox: API.SandboxResource = new API.SandboxResource(this);
  scrape: API.Scrape = new API.Scrape(this);
  code: API.Code = new API.Code(this);
  structure: API.Structure = new API.Structure(this);
  publicSessions: API.PublicSessions = new API.PublicSessions(this);
  shared: API.Shared = new API.Shared(this);
  slack: API.Slack = new API.Slack(this);
  nango: API.Nango = new API.Nango(this);

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

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.apiKey && headers['api_key']) {
      return;
    }
    if (customHeaders['api_key'] === null) {
      return;
    }

    if (this.sessionToken && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either apiKey or sessionToken to be set. Or for one of the "api_key" or "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...this.apiKeyAuth(opts),
      ...this.sessionTokenAuth(opts),
    };
  }

  protected apiKeyAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKey == null) {
      return {};
    }
    return { api_key: this.apiKey };
  }

  protected sessionTokenAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.sessionToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.sessionToken}` };
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

Structify.Whitelabel = Whitelabel;
Structify.User = User;
Structify.Chat = Chat;
Structify.Teams = Teams;
Structify.Wiki = Wiki;
Structify.Projects = Projects;
Structify.Admin = Admin;
Structify.Datasets = Datasets;
Structify.DatasetViewRelationshipsResponsesJobsList = DatasetViewRelationshipsResponsesJobsList;
Structify.DatasetViewTableResponsesJobsList = DatasetViewTableResponsesJobsList;
Structify.Documents = Documents;
Structify.Jobs = Jobs;
Structify.JobListResponsesJobsList = JobListResponsesJobsList;
Structify.Match = Match;
Structify.MatchResultsJobsList = MatchResultsJobsList;
Structify.Sessions = Sessions;
Structify.WorkflowSchedule = WorkflowSchedule;
Structify.Workflow = Workflow;
Structify.Connectors = Connectors;
Structify.ConnectorWithSecretsJobsList = ConnectorWithSecretsJobsList;
Structify.ConnectorCatalogResource = ConnectorCatalogResource;
Structify.Server = Server;
Structify.Sources = Sources;
Structify.Entities = Entities;
Structify.SandboxResource = SandboxResource;
Structify.Scrape = Scrape;
Structify.Code = Code;
Structify.Structure = Structure;
Structify.PublicSessions = PublicSessions;
Structify.Shared = Shared;
Structify.Slack = Slack;
Structify.Nango = Nango;

export declare namespace Structify {
  export type RequestOptions = Core.RequestOptions;

  export import JobsList = Pagination.JobsList;
  export { type JobsListParams as JobsListParams, type JobsListResponse as JobsListResponse };

  export import ListConnectorCatalog = Pagination.ListConnectorCatalog;
  export {
    type ListConnectorCatalogParams as ListConnectorCatalogParams,
    type ListConnectorCatalogResponse as ListConnectorCatalogResponse,
  };

  export { Whitelabel as Whitelabel, type EstimateCostResponse as EstimateCostResponse };

  export {
    User as User,
    type EnrichUserParams as EnrichUserParams,
    type JwtToAPITokenRequest as JwtToAPITokenRequest,
    type RefreshSessionRequest as RefreshSessionRequest,
    type RefreshSessionResponse as RefreshSessionResponse,
    type SurveySubmissionRequest as SurveySubmissionRequest,
    type SurveySubmissionResponse as SurveySubmissionResponse,
    type TokenResponse as TokenResponse,
    type UpdateUserParams as UpdateUserParams,
    type UserInfo as UserInfo,
    type UserTransactionsResponse as UserTransactionsResponse,
    type UserUsageResponse as UserUsageResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserEnrichParams as UserEnrichParams,
    type UserJwtToAPITokenParams as UserJwtToAPITokenParams,
    type UserRefreshParams as UserRefreshParams,
    type UserSurveySubmitParams as UserSurveySubmitParams,
    type UserUsageParams as UserUsageParams,
  };

  export {
    Chat as Chat,
    type AddCollaboratorRequest as AddCollaboratorRequest,
    type AdminGrantAccessResponse as AdminGrantAccessResponse,
    type AdminIssueFoundRequest as AdminIssueFoundRequest,
    type AdminIssueFoundResponse as AdminIssueFoundResponse,
    type ChatDependency as ChatDependency,
    type ChatEvent as ChatEvent,
    type ChatSession as ChatSession,
    type ChatSessionRole as ChatSessionRole,
    type ChatSessionUser as ChatSessionUser,
    type ChatSessionWithMessages as ChatSessionWithMessages,
    type ChatTemplate as ChatTemplate,
    type ChatVisibility as ChatVisibility,
    type CopyChatSessionRequest as CopyChatSessionRequest,
    type CreateChatSessionRequest as CreateChatSessionRequest,
    type CreateChatSessionResponse as CreateChatSessionResponse,
    type DeleteChatSessionResponse as DeleteChatSessionResponse,
    type ErrorResponse as ErrorResponse,
    type GetChatSessionResponse as GetChatSessionResponse,
    type GetDependenciesResponse as GetDependenciesResponse,
    type GrantAdminAccessRequest as GrantAdminAccessRequest,
    type ListChatSessionsResponse as ListChatSessionsResponse,
    type ListCollaboratorsResponse as ListCollaboratorsResponse,
    type Message as Message,
    type ToolInvocation as ToolInvocation,
    type ToolResult as ToolResult,
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
    type ChatListTemplatesResponse as ChatListTemplatesResponse,
    type ChatLoadFilesResponse as ChatLoadFilesResponse,
    type ChatRevertToCommitResponse as ChatRevertToCommitResponse,
    type ChatAddCollaboratorParams as ChatAddCollaboratorParams,
    type ChatAddGitCommitParams as ChatAddGitCommitParams,
    type ChatAdminIssueFoundParams as ChatAdminIssueFoundParams,
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
    type SelectTeamResponse as SelectTeamResponse,
    type Team as Team,
    type TeamRole as TeamRole,
    type TeamSubscriptionStatus as TeamSubscriptionStatus,
    type TeamWithRole as TeamWithRole,
    type TeamsLinkCodeRequest as TeamsLinkCodeRequest,
    type TeamsLinkCodeResponse as TeamsLinkCodeResponse,
    type UpdateMemberRoleRequest as UpdateMemberRoleRequest,
    type UpdateMemberRoleResponse as UpdateMemberRoleResponse,
    type UpdateTeamRequest as UpdateTeamRequest,
    type UpdateTeamResponse as UpdateTeamResponse,
    type UsageGroupKey as UsageGroupKey,
    type TeamCreateParams as TeamCreateParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamAcceptInvitationParams as TeamAcceptInvitationParams,
    type TeamAddMemberParams as TeamAddMemberParams,
    type TeamCreateLinkCodeParams as TeamCreateLinkCodeParams,
    type TeamCreateProjectParams as TeamCreateProjectParams,
    type TeamCreditsUsageParams as TeamCreditsUsageParams,
    type TeamUpdateMemberRoleParams as TeamUpdateMemberRoleParams,
  };

  export {
    Wiki as Wiki,
    type CreateWikiPageRequest as CreateWikiPageRequest,
    type TeamWikiPage as TeamWikiPage,
    type UpdateWikiPageRequest as UpdateWikiPageRequest,
    type WikiConnectorReference as WikiConnectorReference,
    type WikiPageWithReferences as WikiPageWithReferences,
    type WikiListResponse as WikiListResponse,
    type WikiCreateParams as WikiCreateParams,
    type WikiUpdateParams as WikiUpdateParams,
  };

  export {
    Projects as Projects,
    type DeleteProjectResponse as DeleteProjectResponse,
    type Project as Project,
    type ProjectCollaboratorInput as ProjectCollaboratorInput,
    type ProjectMember as ProjectMember,
    type ProjectVisibility as ProjectVisibility,
    type UpdateProjectRequest as UpdateProjectRequest,
    type ProjectGetResponse as ProjectGetResponse,
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
    type DatasetCountMissingEmbeddingsResponse as DatasetCountMissingEmbeddingsResponse,
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
    type DatasetCountMissingEmbeddingsParams as DatasetCountMissingEmbeddingsParams,
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
    type DocumentListParams as DocumentListParams,
    type DocumentDeleteParams as DocumentDeleteParams,
    type DocumentDownloadParams as DocumentDownloadParams,
    type DocumentUploadParams as DocumentUploadParams,
  };

  export {
    Jobs as Jobs,
    type GetJobEventsResponse as GetJobEventsResponse,
    type JobListResponse as JobListResponse,
    type JobCancelResponse as JobCancelResponse,
    type JobGetScrapersResponse as JobGetScrapersResponse,
    type JobGetSourceEntitiesResponse as JobGetSourceEntitiesResponse,
    type JobStatusResponse as JobStatusResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
    type JobStatusParams as JobStatusParams,
  };

  export {
    Match as Match,
    type CreateMatchJobsRequest as CreateMatchJobsRequest,
    type CreateMatchJobsResponse as CreateMatchJobsResponse,
    type ListMatchResultsParams as ListMatchResultsParams,
    type MatchResult as MatchResult,
    MatchResultsJobsList as MatchResultsJobsList,
    type MatchCreateJobsParams as MatchCreateJobsParams,
    type MatchListResultsParams as MatchListResultsParams,
  };

  export {
    Sessions as Sessions,
    type AutofixContext as AutofixContext,
    type ConfirmNodeRequest as ConfirmNodeRequest,
    type CreateWorkflowSessionRequest as CreateWorkflowSessionRequest,
    type DashboardComponent as DashboardComponent,
    type DashboardLayout as DashboardLayout,
    type EdgeSpec as EdgeSpec,
    type FinalizeDagRequest as FinalizeDagRequest,
    type FinalizeDagResponse as FinalizeDagResponse,
    type GetNodeLogsResponse as GetNodeLogsResponse,
    type GetNodeResponse as GetNodeResponse,
    type JobEventBody as JobEventBody,
    type MarkWorkflowSessionErroredRequest as MarkWorkflowSessionErroredRequest,
    type NodeSpec as NodeSpec,
    type RequestConfirmationRequest as RequestConfirmationRequest,
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
    type SessionConfirmNodeParams as SessionConfirmNodeParams,
    type SessionCreateSessionParams as SessionCreateSessionParams,
    type SessionFinalizeDagParams as SessionFinalizeDagParams,
    type SessionGetEventsParams as SessionGetEventsParams,
    type SessionKillJobsParams as SessionKillJobsParams,
    type SessionMarkErroredParams as SessionMarkErroredParams,
    type SessionRequestConfirmationParams as SessionRequestConfirmationParams,
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
    type WorkflowScheduleGetAllResponse as WorkflowScheduleGetAllResponse,
    type WorkflowScheduleCreateParams as WorkflowScheduleCreateParams,
    type WorkflowScheduleUpdateParams as WorkflowScheduleUpdateParams,
    type WorkflowScheduleGetSessionsParams as WorkflowScheduleGetSessionsParams,
    type WorkflowSchedulePauseParams as WorkflowSchedulePauseParams,
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
    type ConnectorCategory as ConnectorCategory,
    type ConnectorExplorerChat as ConnectorExplorerChat,
    type ConnectorStoreResponse as ConnectorStoreResponse,
    type ConnectorSummariesRequest as ConnectorSummariesRequest,
    type ConnectorSummary as ConnectorSummary,
    type ConnectorTableInfo as ConnectorTableInfo,
    type ConnectorWithSecrets as ConnectorWithSecrets,
    type ConnectorWithSnippets as ConnectorWithSnippets,
    type CreateConnectorRequest as CreateConnectorRequest,
    type CreateSecretRequest as CreateSecretRequest,
    type DeleteSchemaObjectRequest as DeleteSchemaObjectRequest,
    type DeleteSchemaObjectResponse as DeleteSchemaObjectResponse,
    type ExplorationPhaseID as ExplorationPhaseID,
    type ExplorationRun as ExplorationRun,
    type ExplorationRunsResponse as ExplorationRunsResponse,
    type ExplorationStatus as ExplorationStatus,
    type ExploreConnectorRequest as ExploreConnectorRequest,
    type ExploreStatusResponse as ExploreStatusResponse,
    type ExplorerChatResponse as ExplorerChatResponse,
    type ListTablesResponse as ListTablesResponse,
    type LlmInformationStore as LlmInformationStore,
    type SchemaObjectID as SchemaObjectID,
    type UpdateColumnRequest as UpdateColumnRequest,
    type UpdateConnectorRequest as UpdateConnectorRequest,
    type UpdateTableRequest as UpdateTableRequest,
    type UpdateTableResponse as UpdateTableResponse,
    type ConnectorGetResponse as ConnectorGetResponse,
    type ConnectorGetClarificationRequestsResponse as ConnectorGetClarificationRequestsResponse,
    type ConnectorListWithSnippetsResponse as ConnectorListWithSnippetsResponse,
    type ConnectorSearchTablesResponse as ConnectorSearchTablesResponse,
    type ConnectorSummariesResponse as ConnectorSummariesResponse,
    ConnectorWithSecretsJobsList as ConnectorWithSecretsJobsList,
    type ConnectorCreateParams as ConnectorCreateParams,
    type ConnectorUpdateParams as ConnectorUpdateParams,
    type ConnectorListParams as ConnectorListParams,
    type ConnectorCreateSecretParams as ConnectorCreateSecretParams,
    type ConnectorDeleteSchemaObjectParams as ConnectorDeleteSchemaObjectParams,
    type ConnectorExploreParams as ConnectorExploreParams,
    type ConnectorGetExplorerChatParams as ConnectorGetExplorerChatParams,
    type ConnectorListWithSnippetsParams as ConnectorListWithSnippetsParams,
    type ConnectorSearchTablesParams as ConnectorSearchTablesParams,
    type ConnectorSummariesParams as ConnectorSummariesParams,
    type ConnectorUpdateColumnParams as ConnectorUpdateColumnParams,
    type ConnectorUpdateTableParams as ConnectorUpdateTableParams,
  };

  export {
    ConnectorCatalogResource as ConnectorCatalogResource,
    type ConnectorAuthMethod as ConnectorAuthMethod,
    type ConnectorAuthMethodWithFields as ConnectorAuthMethodWithFields,
    type ConnectorCatalog as ConnectorCatalog,
    type ConnectorCatalogWithMethods as ConnectorCatalogWithMethods,
    type ConnectorCredentialField as ConnectorCredentialField,
    type ConnectorCatalogListResponse as ConnectorCatalogListResponse,
    type ConnectorCatalogListParams as ConnectorCatalogListParams,
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
    type EntityDeleteRelationshipResponse as EntityDeleteRelationshipResponse,
    type EntityDeriveResponse as EntityDeriveResponse,
    type EntityDeriveAllResponse as EntityDeriveAllResponse,
    type EntityGetResponse as EntityGetResponse,
    type EntityGetLocalSubgraphResponse as EntityGetLocalSubgraphResponse,
    type EntityGetSourceEntitiesResponse as EntityGetSourceEntitiesResponse,
    type EntityListJobsResponse as EntityListJobsResponse,
    type EntitySearchResponse as EntitySearchResponse,
    type EntitySummarizeResponse as EntitySummarizeResponse,
    type EntityUpdatePropertyResponse as EntityUpdatePropertyResponse,
    type EntityViewResponse as EntityViewResponse,
    type EntityDeleteParams as EntityDeleteParams,
    type EntityAddParams as EntityAddParams,
    type EntityAddBatchParams as EntityAddBatchParams,
    type EntityAddRelationshipParams as EntityAddRelationshipParams,
    type EntityDeleteRelationshipParams as EntityDeleteRelationshipParams,
    type EntityDeriveParams as EntityDeriveParams,
    type EntityDeriveAllParams as EntityDeriveAllParams,
    type EntityGetParams as EntityGetParams,
    type EntityGetLocalSubgraphParams as EntityGetLocalSubgraphParams,
    type EntityGetSourceEntitiesParams as EntityGetSourceEntitiesParams,
    type EntityListJobsParams as EntityListJobsParams,
    type EntitySearchParams as EntitySearchParams,
    type EntitySummarizeParams as EntitySummarizeParams,
    type EntityUpdatePropertyParams as EntityUpdatePropertyParams,
    type EntityUploadParquetParams as EntityUploadParquetParams,
    type EntityVerifyParams as EntityVerifyParams,
    type EntityViewParams as EntityViewParams,
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
    type SaveRequirement as SaveRequirement,
    type ToolMetadata as ToolMetadata,
    type StructureEnhancePropertyResponse as StructureEnhancePropertyResponse,
    type StructureEnhanceRelationshipResponse as StructureEnhanceRelationshipResponse,
    type StructureFindRelationshipResponse as StructureFindRelationshipResponse,
    type StructureIsCompleteResponse as StructureIsCompleteResponse,
    type StructureJobStatusResponse as StructureJobStatusResponse,
    type StructurePdfResponse as StructurePdfResponse,
    type StructureRunAsyncResponse as StructureRunAsyncResponse,
    type StructureEnhancePropertyParams as StructureEnhancePropertyParams,
    type StructureEnhanceRelationshipParams as StructureEnhanceRelationshipParams,
    type StructureFindRelationshipParams as StructureFindRelationshipParams,
    type StructureIsCompleteParams as StructureIsCompleteParams,
    type StructureJobStatusParams as StructureJobStatusParams,
    type StructurePdfParams as StructurePdfParams,
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

  export {
    Slack as Slack,
    type SlackAPIResponse as SlackAPIResponse,
    type SlackEventPayload as SlackEventPayload,
    type SlackEventsParams as SlackEventsParams,
  };

  export {
    Nango as Nango,
    type ConnectSession as ConnectSession,
    type CreateNangoSessionRequest as CreateNangoSessionRequest,
    type Integration as Integration,
    type NangoCreateSessionResponse as NangoCreateSessionResponse,
    type NangoListIntegrationsResponse as NangoListIntegrationsResponse,
    type NangoCreateSessionParams as NangoCreateSessionParams,
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
