// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ApolloAPI from './apollo';
import {
  Apollo,
  ApolloCompaniesSearchParams,
  ApolloOrganizationJobPostingsParams,
  ApolloOrganizationsEnrichParams,
  ApolloPeopleMatchParams,
  ApolloPeopleSearchParams,
  CompaniesSearchRequest,
  CompaniesSearchResponse,
  CompanySearchResult,
  EnrichedOrganization,
  JobPosting,
  JobPostingsQuery,
  JobPostingsResponse,
  OrganizationDetail,
  OrganizationEnrichQuery,
  PeopleMatchRequest,
  PeopleMatchResponse,
  PeopleSearchRequest,
  PeopleSearchResponse,
  PersonMatch,
  PersonSearchResult,
} from './apollo';
import * as NewsapiAPI from './newsapi';
import {
  EverythingQuery,
  EverythingResponse,
  NewsArticle,
  NewsSource,
  NewsSourceDetail,
  Newsapi,
  NewsapiEverythingParams,
  NewsapiSourcesParams,
  NewsapiTopHeadlinesParams,
  SourcesQuery,
  SourcesResponse,
  TopHeadlinesQuery,
  TopHeadlinesResponse,
} from './newsapi';
import * as SearchapiAPI from './searchapi';
import {
  FlightCalendarRequest,
  FlightLocationSearchRequest,
  GoogleFlightsSearchRequest,
  GoogleMapsResult,
  GoogleMapsSearchRequest,
  GoogleScholarSearchRequest,
  GoogleSearchRequest,
  GoogleSearchResponse,
  GoogleSearchResult,
  LocationCoordinates,
  LocationResponse,
  LocationResult,
  LocationSearchRequest,
  PlaceDetailsRequest,
  PlacePhotosRequest,
  PlaceReviewsRequest,
  ScholarAuthorSearchRequest,
  ScholarCiteRequest,
  Searchapi,
  SearchapiGoogleFlightsCalendarParams,
  SearchapiGoogleFlightsCalendarResponse,
  SearchapiGoogleFlightsLocationSearchParams,
  SearchapiGoogleFlightsLocationSearchResponse,
  SearchapiGoogleFlightsSearchParams,
  SearchapiGoogleFlightsSearchResponse,
  SearchapiGoogleMapsPlaceDetailsParams,
  SearchapiGoogleMapsPlaceDetailsResponse,
  SearchapiGoogleMapsPlacePhotosParams,
  SearchapiGoogleMapsPlacePhotosResponse,
  SearchapiGoogleMapsPlaceReviewsParams,
  SearchapiGoogleMapsPlaceReviewsResponse,
  SearchapiGoogleMapsSearchParams,
  SearchapiGoogleMapsSearchResponse,
  SearchapiGoogleScholarAuthorSearchParams,
  SearchapiGoogleScholarAuthorSearchResponse,
  SearchapiGoogleScholarCitationsParams,
  SearchapiGoogleScholarCitationsResponse,
  SearchapiGoogleScholarSearchParams,
  SearchapiGoogleScholarSearchResponse,
  SearchapiGoogleSearchParams,
  SearchapiLocationSearchParams,
} from './searchapi';

export class External extends APIResource {
  newsapi: NewsapiAPI.Newsapi = new NewsapiAPI.Newsapi(this._client);
  searchapi: SearchapiAPI.Searchapi = new SearchapiAPI.Searchapi(this._client);
  apollo: ApolloAPI.Apollo = new ApolloAPI.Apollo(this._client);

  /**
   * This endpoint provides web search functionality by leveraging the existing agent
   * search infrastructure.
   */
  search(body: ExternalSearchParams, options?: Core.RequestOptions): Core.APIPromise<ExternalSearchResponse> {
    return this._client.post('/external/search', { body, ...options });
  }
}

export interface SearchRequest {
  /**
   * The search query
   */
  query: string;
}

export type ExternalSearchResponse = Array<ExternalSearchResponse.ExternalSearchResponseItem>;

export namespace ExternalSearchResponse {
  export interface ExternalSearchResponseItem {
    /**
     * Description/snippet of the search result
     */
    description: string;

    /**
     * The search query that produced this result
     */
    query: string;

    /**
     * Title of the search result
     */
    title: string;

    /**
     * URL of the search result
     */
    url: string;
  }
}

export interface ExternalSearchParams {
  /**
   * The search query
   */
  query: string;
}

External.Newsapi = Newsapi;
External.Searchapi = Searchapi;
External.Apollo = Apollo;

export declare namespace External {
  export {
    type SearchRequest as SearchRequest,
    type ExternalSearchResponse as ExternalSearchResponse,
    type ExternalSearchParams as ExternalSearchParams,
  };

  export {
    Newsapi as Newsapi,
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

  export {
    Searchapi as Searchapi,
    type FlightCalendarRequest as FlightCalendarRequest,
    type FlightLocationSearchRequest as FlightLocationSearchRequest,
    type GoogleFlightsSearchRequest as GoogleFlightsSearchRequest,
    type GoogleMapsResult as GoogleMapsResult,
    type GoogleMapsSearchRequest as GoogleMapsSearchRequest,
    type GoogleScholarSearchRequest as GoogleScholarSearchRequest,
    type GoogleSearchRequest as GoogleSearchRequest,
    type GoogleSearchResponse as GoogleSearchResponse,
    type GoogleSearchResult as GoogleSearchResult,
    type LocationCoordinates as LocationCoordinates,
    type LocationResponse as LocationResponse,
    type LocationResult as LocationResult,
    type LocationSearchRequest as LocationSearchRequest,
    type PlaceDetailsRequest as PlaceDetailsRequest,
    type PlacePhotosRequest as PlacePhotosRequest,
    type PlaceReviewsRequest as PlaceReviewsRequest,
    type ScholarAuthorSearchRequest as ScholarAuthorSearchRequest,
    type ScholarCiteRequest as ScholarCiteRequest,
    type SearchapiGoogleFlightsCalendarResponse as SearchapiGoogleFlightsCalendarResponse,
    type SearchapiGoogleFlightsLocationSearchResponse as SearchapiGoogleFlightsLocationSearchResponse,
    type SearchapiGoogleFlightsSearchResponse as SearchapiGoogleFlightsSearchResponse,
    type SearchapiGoogleMapsPlaceDetailsResponse as SearchapiGoogleMapsPlaceDetailsResponse,
    type SearchapiGoogleMapsPlacePhotosResponse as SearchapiGoogleMapsPlacePhotosResponse,
    type SearchapiGoogleMapsPlaceReviewsResponse as SearchapiGoogleMapsPlaceReviewsResponse,
    type SearchapiGoogleMapsSearchResponse as SearchapiGoogleMapsSearchResponse,
    type SearchapiGoogleScholarAuthorSearchResponse as SearchapiGoogleScholarAuthorSearchResponse,
    type SearchapiGoogleScholarCitationsResponse as SearchapiGoogleScholarCitationsResponse,
    type SearchapiGoogleScholarSearchResponse as SearchapiGoogleScholarSearchResponse,
    type SearchapiGoogleFlightsCalendarParams as SearchapiGoogleFlightsCalendarParams,
    type SearchapiGoogleFlightsLocationSearchParams as SearchapiGoogleFlightsLocationSearchParams,
    type SearchapiGoogleFlightsSearchParams as SearchapiGoogleFlightsSearchParams,
    type SearchapiGoogleMapsPlaceDetailsParams as SearchapiGoogleMapsPlaceDetailsParams,
    type SearchapiGoogleMapsPlacePhotosParams as SearchapiGoogleMapsPlacePhotosParams,
    type SearchapiGoogleMapsPlaceReviewsParams as SearchapiGoogleMapsPlaceReviewsParams,
    type SearchapiGoogleMapsSearchParams as SearchapiGoogleMapsSearchParams,
    type SearchapiGoogleScholarAuthorSearchParams as SearchapiGoogleScholarAuthorSearchParams,
    type SearchapiGoogleScholarCitationsParams as SearchapiGoogleScholarCitationsParams,
    type SearchapiGoogleScholarSearchParams as SearchapiGoogleScholarSearchParams,
    type SearchapiGoogleSearchParams as SearchapiGoogleSearchParams,
    type SearchapiLocationSearchParams as SearchapiLocationSearchParams,
  };

  export {
    Apollo as Apollo,
    type CompaniesSearchRequest as CompaniesSearchRequest,
    type CompaniesSearchResponse as CompaniesSearchResponse,
    type CompanySearchResult as CompanySearchResult,
    type EnrichedOrganization as EnrichedOrganization,
    type JobPosting as JobPosting,
    type JobPostingsQuery as JobPostingsQuery,
    type JobPostingsResponse as JobPostingsResponse,
    type OrganizationDetail as OrganizationDetail,
    type OrganizationEnrichQuery as OrganizationEnrichQuery,
    type PeopleMatchRequest as PeopleMatchRequest,
    type PeopleMatchResponse as PeopleMatchResponse,
    type PeopleSearchRequest as PeopleSearchRequest,
    type PeopleSearchResponse as PeopleSearchResponse,
    type PersonMatch as PersonMatch,
    type PersonSearchResult as PersonSearchResult,
    type ApolloCompaniesSearchParams as ApolloCompaniesSearchParams,
    type ApolloOrganizationJobPostingsParams as ApolloOrganizationJobPostingsParams,
    type ApolloOrganizationsEnrichParams as ApolloOrganizationsEnrichParams,
    type ApolloPeopleMatchParams as ApolloPeopleMatchParams,
    type ApolloPeopleSearchParams as ApolloPeopleSearchParams,
  };
}
