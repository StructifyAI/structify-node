// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class FunctionalTests extends APIResource {
  /**
   * Creates a new functional test with optional model and prompt overrides.
   */
  create(body: FunctionalTestCreateParams, options?: Core.RequestOptions): Core.APIPromise<FunctionalTest> {
    return this._client.post('/admin/functional_tests/create', { body, ...options });
  }

  /**
   * Gets all functional tests with their overrides and creation dates, ordered by
   * most recent first.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FunctionalTestListResponse> {
    return this._client.get('/admin/functional_tests/list', options);
  }

  /**
   * Gets all results and chat IDs for either a specific functional test or a
   * specific sample name. Must provide either functional_test_id or sample_name, but
   * not both.
   */
  getResults(
    query?: FunctionalTestGetResultsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FunctionalTestResultsResponse>;
  getResults(options?: Core.RequestOptions): Core.APIPromise<FunctionalTestResultsResponse>;
  getResults(
    query: FunctionalTestGetResultsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FunctionalTestResultsResponse> {
    if (isRequestOptions(query)) {
      return this.getResults({}, query);
    }
    return this._client.get('/admin/functional_tests/results', { query, ...options });
  }

  /**
   * Links a chat session to a functional test with a specific sample name and
   * initial results.
   */
  linkChat(body: FunctionalTestLinkChatParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/admin/functional_tests/link', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Updates the results for a specific chat session linked to a functional test.
   */
  updateResults(
    body: FunctionalTestUpdateResultsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put('/admin/functional_tests/update_results', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CreateFunctionalTestRequest {
  model_override?: string | null;

  prompt_override?: string | null;
}

export interface FunctionalTest {
  id: string;

  created_at: string;

  created_by: string;

  model_override?: string | null;

  prompt_override?: string | null;
}

export interface FunctionalTestResultsResponse {
  results: Array<FunctionalTestResultsResponse.Result>;

  functional_test_id?: string | null;

  sample_name?: string | null;
}

export namespace FunctionalTestResultsResponse {
  export interface Result {
    chat_session_id: string;

    results: { [key: string]: unknown };

    sample_name: string;
  }
}

export interface GetResultsQuery {
  functional_test_id?: string | null;

  sample_name?: string | null;
}

export interface LinkChatToFunctionalTestRequest {
  chat_session_id: string;

  functional_test_id: string;

  results: { [key: string]: unknown };

  sample_name: string;
}

export interface UpdateFunctionalTestResultsRequest {
  chat_session_id: string;

  functional_test_id: string;

  results: { [key: string]: unknown };

  sample_name: string;
}

export type FunctionalTestListResponse = Array<FunctionalTestListResponse.FunctionalTestListResponseItem>;

export namespace FunctionalTestListResponse {
  export interface FunctionalTestListResponseItem {
    id: string;

    created_at: string;

    created_by: string;

    created_by_email: string;

    model_override?: string | null;

    prompt_override?: string | null;
  }
}

export interface FunctionalTestCreateParams {
  model_override?: string | null;

  prompt_override?: string | null;
}

export interface FunctionalTestGetResultsParams {
  functional_test_id?: string | null;

  sample_name?: string | null;
}

export interface FunctionalTestLinkChatParams {
  chat_session_id: string;

  functional_test_id: string;

  results: { [key: string]: unknown };

  sample_name: string;
}

export interface FunctionalTestUpdateResultsParams {
  chat_session_id: string;

  functional_test_id: string;

  results: { [key: string]: unknown };

  sample_name: string;
}

export declare namespace FunctionalTests {
  export {
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
}
