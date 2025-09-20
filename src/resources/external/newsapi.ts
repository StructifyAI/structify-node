// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Newsapi extends APIResource {
  /**
   * Search through millions of articles from over 80,000 large and small news
   * sources and blogs
   */
  everything(
    query?: NewsapiEverythingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EverythingResponse>;
  everything(options?: Core.RequestOptions): Core.APIPromise<EverythingResponse>;
  everything(
    query: NewsapiEverythingParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EverythingResponse> {
    if (isRequestOptions(query)) {
      return this.everything({}, query);
    }
    return this._client.get('/external/newsapi/everything', { query, ...options });
  }

  /**
   * Returns the subset of news publishers that top headlines are available from
   */
  sources(query?: NewsapiSourcesParams, options?: Core.RequestOptions): Core.APIPromise<SourcesResponse>;
  sources(options?: Core.RequestOptions): Core.APIPromise<SourcesResponse>;
  sources(
    query: NewsapiSourcesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourcesResponse> {
    if (isRequestOptions(query)) {
      return this.sources({}, query);
    }
    return this._client.get('/external/newsapi/sources', { query, ...options });
  }

  /**
   * Provides live top and breaking headlines for a country, specific category, or
   * specific sources
   */
  topHeadlines(
    query?: NewsapiTopHeadlinesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopHeadlinesResponse>;
  topHeadlines(options?: Core.RequestOptions): Core.APIPromise<TopHeadlinesResponse>;
  topHeadlines(
    query: NewsapiTopHeadlinesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopHeadlinesResponse> {
    if (isRequestOptions(query)) {
      return this.topHeadlines({}, query);
    }
    return this._client.get('/external/newsapi/top-headlines', { query, ...options });
  }
}

export interface EverythingQuery {
  /**
   * A comma-separated string of domains to restrict the search to
   */
  domains?: string | null;

  /**
   * A comma-separated string of domains to remove from the results
   */
  exclude_domains?: string | null;

  /**
   * The oldest article allowed (ISO 8601 format)
   */
  from?: string | null;

  /**
   * The 2-letter ISO-639-1 code of the language you want to get headlines for
   */
  language?: string | null;

  /**
   * Use this to page through the results if the total results found is greater than
   * page size
   */
  page?: number | null;

  /**
   * The number of results to return per page (default: 20, max: 100)
   */
  page_size?: number | null;

  /**
   * Keywords or phrases to search for in the article title and body
   */
  q?: string | null;

  /**
   * Keywords or phrases to search for in the article title only
   */
  q_in_title?: string | null;

  /**
   * The order to sort the articles in
   */
  sort_by?: string | null;

  /**
   * A comma-separated string of sources or blogs to get articles from
   */
  sources?: string | null;

  /**
   * The newest article allowed (ISO 8601 format)
   */
  to?: string | null;
}

export interface EverythingResponse {
  /**
   * The results of the request
   */
  articles: Array<NewsArticle>;

  /**
   * The status of the request
   */
  status: string;

  /**
   * The total number of results available for your request
   */
  total_results: number;
}

export interface NewsArticle {
  /**
   * The date and time that the article was published
   */
  published_at: string;

  source: NewsSource;

  /**
   * The headline or title of the article
   */
  title: string;

  /**
   * The direct URL to the article
   */
  url: string;

  /**
   * The author of the article
   */
  author?: string | null;

  /**
   * The unformatted content of the article
   */
  content?: string | null;

  /**
   * A description or snippet from the article
   */
  description?: string | null;

  /**
   * The URL to a relevant image for the article
   */
  url_to_image?: string | null;
}

export interface NewsSource {
  /**
   * The name of the news source
   */
  name: string;

  /**
   * The identifier id of the news source
   */
  id?: string | null;
}

export interface NewsSourceDetail {
  /**
   * The identifier of the news source
   */
  id: string;

  /**
   * The type of news to expect from this news source
   */
  category: string;

  /**
   * The country this news source is based in (or primarily targets)
   */
  country: string;

  /**
   * A description of the news source
   */
  description: string;

  /**
   * The language that this news source writes in
   */
  language: string;

  /**
   * A display-suitable name for the news source
   */
  name: string;

  /**
   * The URL of the homepage
   */
  url: string;
}

export interface SourcesQuery {
  /**
   * Find sources that display news of this category
   */
  category?: string | null;

  /**
   * Find sources that display news in a specific country
   */
  country?: string | null;

  /**
   * Find sources that display news in a specific language
   */
  language?: string | null;
}

export interface SourcesResponse {
  /**
   * The array of news sources
   */
  sources: Array<NewsSourceDetail>;

  /**
   * The status of the request
   */
  status: string;
}

export interface TopHeadlinesQuery {
  /**
   * The category you want to get headlines for
   */
  category?: string | null;

  /**
   * The 2-letter ISO 3166-1 code of the country you want to get headlines for
   */
  country?: string | null;

  /**
   * Use this to page through the results if the total results found is greater than
   * page size
   */
  page?: number | null;

  /**
   * The number of results to return per page (default: 20, max: 100)
   */
  page_size?: number | null;

  /**
   * Keywords or phrases to search for in the article title and body
   */
  q?: string | null;

  /**
   * A comma-separated string of sources or blogs to get articles from
   */
  sources?: string | null;
}

export interface TopHeadlinesResponse {
  /**
   * The results of the request
   */
  articles: Array<NewsArticle>;

  /**
   * The status of the request
   */
  status: string;

  /**
   * The total number of results available for your request
   */
  total_results: number;
}

export interface NewsapiEverythingParams {
  /**
   * Comma-separated domains
   */
  domains?: string | null;

  /**
   * Domains to exclude
   */
  exclude_domains?: string | null;

  /**
   * Oldest article date (ISO 8601)
   */
  from?: string | null;

  /**
   * Language code (ISO 639-1)
   */
  language?: string | null;

  /**
   * Page number
   */
  page?: number | null;

  /**
   * Results per page (max 100)
   */
  page_size?: number | null;

  /**
   * Keywords
   */
  q?: string | null;

  /**
   * Keywords in title only
   */
  q_in_title?: string | null;

  /**
   * Sort order
   */
  sort_by?: string | null;

  /**
   * Comma-separated sources
   */
  sources?: string | null;

  /**
   * Newest article date (ISO 8601)
   */
  to?: string | null;
}

export interface NewsapiSourcesParams {
  /**
   * News category
   */
  category?: string | null;

  /**
   * Country code
   */
  country?: string | null;

  /**
   * Language code
   */
  language?: string | null;
}

export interface NewsapiTopHeadlinesParams {
  /**
   * Category
   */
  category?: string | null;

  /**
   * Country code (ISO 3166-1)
   */
  country?: string | null;

  /**
   * Page number
   */
  page?: number | null;

  /**
   * Results per page (max 100)
   */
  page_size?: number | null;

  /**
   * Keywords
   */
  q?: string | null;

  /**
   * Comma-separated sources
   */
  sources?: string | null;
}

export declare namespace Newsapi {
  export {
    type EverythingQuery as EverythingQuery,
    type EverythingResponse as EverythingResponse,
    type NewsArticle as NewsArticle,
    type NewsSource as NewsSource,
    type NewsSourceDetail as NewsSourceDetail,
    type SourcesQuery as SourcesQuery,
    type SourcesResponse as SourcesResponse,
    type TopHeadlinesQuery as TopHeadlinesQuery,
    type TopHeadlinesResponse as TopHeadlinesResponse,
    type NewsapiEverythingParams as NewsapiEverythingParams,
    type NewsapiSourcesParams as NewsapiSourcesParams,
    type NewsapiTopHeadlinesParams as NewsapiTopHeadlinesParams,
  };
}
