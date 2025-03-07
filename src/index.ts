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
  EntityAddResponse,
  EntityDeleteParams,
  EntityDeleteResponse,
  EntityGetLocalSubgraphParams,
  EntityGetLocalSubgraphResponse,
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
import { ImageGetResponse, Images } from './resources/images';
import {
  JobCancelResponse,
  JobDeleteResponse,
  JobGetResponse,
  JobGetStepGraphResponse,
  JobGetStepsResponse,
  JobListParams,
  JobListResponse,
  JobListResponsesJobsList,
  Jobs,
} from './resources/jobs';
import {
  EnhanceProperty,
  EnhanceRelationship,
  FindRelationship,
  Plan,
  PlanCreateParams,
  PlanCreateResponse,
  PlanListResponse,
  PlanPauseAllParams,
  PlanPauseAllResponse,
  PlanResource,
  PlanResumeAllParams,
  PlanResumeAllResponse,
} from './resources/plan';
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
import { Server, ServerInformation } from './resources/server';
import {
  DatasetDescriptor,
  Entity,
  Image,
  KnowledgeGraph,
  MatchedEntity,
  PropertyType,
  Relationship,
  Shared,
  Table,
} from './resources/shared';
import { Source, SourceListParams, SourceListResponse, Sources } from './resources/sources';
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
  TokenResponse,
  User,
  UserInfo,
  UserTransactionsResponse,
  UserUsageParams,
  UserUsageResponse,
} from './resources/user';
import { Admin } from './resources/admin/admin';
import {
  DatasetCreateParams,
  DatasetDeleteParams,
  DatasetGetParams,
  DatasetGetResponse,
  DatasetListResponse,
  DatasetMatchParams,
  DatasetMatchResponse,
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
  MergeStrategy,
  RelationshipMergeStrategy,
} from './resources/datasets/datasets';

const environments = {
  production: 'https://api.structify.ai',
  deployment: 'http://localhost:8080',
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
   * - `deployment` corresponds to `http://localhost:8080`
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
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  user: API.User = new API.User(this);
  admin: API.Admin = new API.Admin(this);
  datasets: API.Datasets = new API.Datasets(this);
  documents: API.Documents = new API.Documents(this);
  jobs: API.Jobs = new API.Jobs(this);
  server: API.Server = new API.Server(this);
  sources: API.Sources = new API.Sources(this);
  entities: API.Entities = new API.Entities(this);
  images: API.Images = new API.Images(this);
  plan: API.PlanResource = new API.PlanResource(this);
  report: API.Report = new API.Report(this);
  structure: API.Structure = new API.Structure(this);
  shared: API.Shared = new API.Shared(this);

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
Structify.Admin = Admin;
Structify.Datasets = Datasets;
Structify.DatasetViewRelationshipsResponsesJobsList = DatasetViewRelationshipsResponsesJobsList;
Structify.DatasetViewTableResponsesJobsList = DatasetViewTableResponsesJobsList;
Structify.Documents = Documents;
Structify.Jobs = Jobs;
Structify.JobListResponsesJobsList = JobListResponsesJobsList;
Structify.Server = Server;
Structify.Sources = Sources;
Structify.Entities = Entities;
Structify.Images = Images;
Structify.PlanResource = PlanResource;
Structify.Report = Report;
Structify.Structure = Structure;
Structify.Shared = Shared;
export declare namespace Structify {
  export type RequestOptions = Core.RequestOptions;

  export import JobsList = Pagination.JobsList;
  export { type JobsListParams as JobsListParams, type JobsListResponse as JobsListResponse };

  export {
    User as User,
    type TokenResponse as TokenResponse,
    type UserInfo as UserInfo,
    type UserTransactionsResponse as UserTransactionsResponse,
    type UserUsageResponse as UserUsageResponse,
    type UserUsageParams as UserUsageParams,
  };

  export { Admin as Admin };

  export {
    Datasets as Datasets,
    type MergeConfig as MergeConfig,
    type MergeStrategy as MergeStrategy,
    type RelationshipMergeStrategy as RelationshipMergeStrategy,
    type DatasetListResponse as DatasetListResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetMatchResponse as DatasetMatchResponse,
    type DatasetViewRelationshipsResponse as DatasetViewRelationshipsResponse,
    type DatasetViewTableResponse as DatasetViewTableResponse,
    type DatasetViewTablesWithRelationshipsResponse as DatasetViewTablesWithRelationshipsResponse,
    DatasetViewRelationshipsResponsesJobsList as DatasetViewRelationshipsResponsesJobsList,
    DatasetViewTableResponsesJobsList as DatasetViewTableResponsesJobsList,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetDeleteParams as DatasetDeleteParams,
    type DatasetGetParams as DatasetGetParams,
    type DatasetMatchParams as DatasetMatchParams,
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
    type JobListResponse as JobListResponse,
    type JobDeleteResponse as JobDeleteResponse,
    type JobCancelResponse as JobCancelResponse,
    type JobGetResponse as JobGetResponse,
    type JobGetStepGraphResponse as JobGetStepGraphResponse,
    type JobGetStepsResponse as JobGetStepsResponse,
    JobListResponsesJobsList as JobListResponsesJobsList,
    type JobListParams as JobListParams,
  };

  export { Server as Server, type ServerInformation as ServerInformation };

  export {
    Sources as Sources,
    type Source as Source,
    type SourceListResponse as SourceListResponse,
    type SourceListParams as SourceListParams,
  };

  export {
    Entities as Entities,
    type EntityDeleteResponse as EntityDeleteResponse,
    type EntityAddResponse as EntityAddResponse,
    type EntityAddBatchResponse as EntityAddBatchResponse,
    type EntityGetResponse as EntityGetResponse,
    type EntityGetLocalSubgraphResponse as EntityGetLocalSubgraphResponse,
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
    type EntityGetParams as EntityGetParams,
    type EntityGetLocalSubgraphParams as EntityGetLocalSubgraphParams,
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

  export { Images as Images, type ImageGetResponse as ImageGetResponse };

  export {
    PlanResource as PlanResource,
    type EnhanceProperty as EnhanceProperty,
    type EnhanceRelationship as EnhanceRelationship,
    type FindRelationship as FindRelationship,
    type Plan as Plan,
    type PlanCreateResponse as PlanCreateResponse,
    type PlanListResponse as PlanListResponse,
    type PlanPauseAllResponse as PlanPauseAllResponse,
    type PlanResumeAllResponse as PlanResumeAllResponse,
    type PlanCreateParams as PlanCreateParams,
    type PlanPauseAllParams as PlanPauseAllParams,
    type PlanResumeAllParams as PlanResumeAllParams,
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

  export {
    Shared as Shared,
    type DatasetDescriptor as DatasetDescriptor,
    type Entity as Entity,
    type Image as Image,
    type KnowledgeGraph as KnowledgeGraph,
    type MatchedEntity as MatchedEntity,
    type PropertyType as PropertyType,
    type Relationship as Relationship,
    type Table as Table,
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
