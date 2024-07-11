// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

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
  environment?: Environment;

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
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
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
  runs: API.Runs = new API.Runs(this);
  server: API.Server = new API.Server(this);
  sources: API.Sources = new API.Sources(this);
  structure: API.Structure = new API.Structure(this);
  label: API.Label = new API.Label(this);
  usage: API.Usage = new API.Usage(this);
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

  static Structify = this;

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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Structify {
  export import RequestOptions = Core.RequestOptions;

  export import RunsList = Pagination.RunsList;
  export import RunsListParams = Pagination.RunsListParams;
  export import RunsListResponse = Pagination.RunsListResponse;

  export import User = API.User;
  export import NewToken = API.NewToken;
  export import UserInfo = API.UserInfo;

  export import Admin = API.Admin;

  export import Datasets = API.Datasets;
  export import Dataset = API.Dataset;
  export import DatasetDescriptor = API.DatasetDescriptor;
  export import DatasetListResponse = API.DatasetListResponse;
  export import DatasetViewResponse = API.DatasetViewResponse;
  export import DatasetViewResponsesRunsList = API.DatasetViewResponsesRunsList;
  export import DatasetCreateParams = API.DatasetCreateParams;
  export import DatasetDeleteParams = API.DatasetDeleteParams;
  export import DatasetGetParams = API.DatasetGetParams;
  export import DatasetViewParams = API.DatasetViewParams;

  export import Documents = API.Documents;
  export import DocumentListResponse = API.DocumentListResponse;
  export import DocumentUploadParams = API.DocumentUploadParams;

  export import Runs = API.Runs;
  export import RunListResponse = API.RunListResponse;
  export import RunDeleteResponse = API.RunDeleteResponse;
  export import RunCancelResponse = API.RunCancelResponse;
  export import RunGetResponse = API.RunGetResponse;
  export import RunListResponsesRunsList = API.RunListResponsesRunsList;
  export import RunListParams = API.RunListParams;

  export import Server = API.Server;
  export import ServerInformation = API.ServerInformation;

  export import Sources = API.Sources;
  export import Source = API.Source;
  export import SourceListResponse = API.SourceListResponse;
  export import SourceListParams = API.SourceListParams;

  export import Structure = API.Structure;
  export import ChatPrompt = API.ChatPrompt;
  export import ExecutionStep = API.ExecutionStep;
  export import ExtractionCriteria = API.ExtractionCriteria;
  export import ToolMetadata = API.ToolMetadata;
  export import StructureIsCompleteResponse = API.StructureIsCompleteResponse;
  export import StructureJobStatusResponse = API.StructureJobStatusResponse;
  export import StructureRunAsyncResponse = API.StructureRunAsyncResponse;
  export import StructureIsCompleteParams = API.StructureIsCompleteParams;
  export import StructureJobStatusParams = API.StructureJobStatusParams;
  export import StructureRunAsyncParams = API.StructureRunAsyncParams;

  export import Label = API.Label;
  export import LabelUpdateResponse = API.LabelUpdateResponse;
  export import LabelGetMessagesResponse = API.LabelGetMessagesResponse;
  export import LabelLlmAssistResponse = API.LabelLlmAssistResponse;
  export import LabelRunResponse = API.LabelRunResponse;
  export import LabelSubmitResponse = API.LabelSubmitResponse;
  export import LabelUpdateParams = API.LabelUpdateParams;
  export import LabelGetMessagesParams = API.LabelGetMessagesParams;
  export import LabelRunParams = API.LabelRunParams;
  export import LabelSubmitParams = API.LabelSubmitParams;

  export import Usage = API.Usage;
  export import UsageGetJobInfoResponse = API.UsageGetJobInfoResponse;
  export import UsageGetJobInfoParams = API.UsageGetJobInfoParams;

  export import Shared = API.Shared;
  export import Entity = API.Entity;
  export import KnowledgeGraph = API.KnowledgeGraph;
  export import Relationship = API.Relationship;
}

export default Structify;
