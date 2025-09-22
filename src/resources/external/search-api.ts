// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class SearchAPI extends APIResource {
  /**
   * Get flight prices across different dates (calendar view)
   */
  googleFlightsCalendar(
    body: SearchAPIGoogleFlightsCalendarParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleFlightsCalendarResponse> {
    return this._client.post('/external/search/flights/calendar', { body, ...options });
  }

  /**
   * Search for airports and locations for flight booking
   */
  googleFlightsLocationSearch(
    body: SearchAPIGoogleFlightsLocationSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleFlightsLocationSearchResponse> {
    return this._client.post('/external/search/flights/location_search', { body, ...options });
  }

  /**
   * Search for flight options between airports
   */
  googleFlightsSearch(
    body: SearchAPIGoogleFlightsSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleFlightsSearchResponse> {
    return this._client.post('/external/search/flights/search', { body, ...options });
  }

  /**
   * Get detailed information about a specific place
   */
  googleMapsPlaceDetails(
    body: SearchAPIGoogleMapsPlaceDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleMapsPlaceDetailsResponse> {
    return this._client.post('/external/search/maps/place', { body, ...options });
  }

  /**
   * Get photos for a specific place
   */
  googleMapsPlacePhotos(
    body: SearchAPIGoogleMapsPlacePhotosParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleMapsPlacePhotosResponse> {
    return this._client.post('/external/search/maps/photos', { body, ...options });
  }

  /**
   * Get reviews for a specific place
   */
  googleMapsPlaceReviews(
    body: SearchAPIGoogleMapsPlaceReviewsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleMapsPlaceReviewsResponse> {
    return this._client.post('/external/search/maps/reviews', { body, ...options });
  }

  /**
   * Search for places on Google Maps
   */
  googleMapsSearch(
    body: SearchAPIGoogleMapsSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleMapsSearchResponse> {
    return this._client.post('/external/search/maps/search', { body, ...options });
  }

  /**
   * Search for academic authors and their publications
   */
  googleScholarAuthorSearch(
    body: SearchAPIGoogleScholarAuthorSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleScholarAuthorSearchResponse> {
    return this._client.post('/external/search/scholar/author', { body, ...options });
  }

  /**
   * Get citations for a specific academic publication
   */
  googleScholarCitations(
    body: SearchAPIGoogleScholarCitationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleScholarCitationsResponse> {
    return this._client.post('/external/search/scholar/cite', { body, ...options });
  }

  /**
   * Search academic papers and publications on Google Scholar
   */
  googleScholarSearch(
    body: SearchAPIGoogleScholarSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchAPIGoogleScholarSearchResponse> {
    return this._client.post('/external/search/scholar/search', { body, ...options });
  }

  /**
   * Performs a Google web search using the SearchAPI service
   */
  googleSearch(
    body: SearchAPIGoogleSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GoogleSearchResponse> {
    return this._client.post('/external/search/search', { body, ...options });
  }

  /**
   * Search for geographic locations, addresses, and places
   */
  locationSearch(
    body: SearchAPILocationSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationResponse> {
    return this._client.post('/external/search/locations', { body, ...options });
  }
}

export interface FlightCalendarRequest {
  /**
   * Arrival airport code
   */
  arrival_id: string;

  /**
   * Departure airport code
   */
  departure_id: string;

  /**
   * Outbound date (YYYY-MM-DD format)
   */
  outbound_date: string;

  /**
   * Currency (optional, e.g. "USD")
   */
  currency?: string | null;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Return date (YYYY-MM-DD format, optional)
   */
  return_date?: string | null;
}

export interface FlightLocationSearchRequest {
  /**
   * Search query for airport/location
   */
  q: string;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;
}

export interface GoogleFlightsSearchRequest {
  /**
   * Arrival airport code (e.g., "JFK", "LAX")
   */
  arrival_id: string;

  /**
   * Departure airport code (e.g., "JFK", "LAX")
   */
  departure_id: string;

  /**
   * Outbound date (YYYY-MM-DD format)
   */
  outbound_date: string;

  /**
   * Number of adults (optional, default 1)
   */
  adults?: number | null;

  /**
   * Number of children (optional, default 0)
   */
  children?: number | null;

  /**
   * Currency (optional, e.g. "USD")
   */
  currency?: string | null;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of infants on lap (optional, default 0)
   */
  infants_in_seat?: number | null;

  /**
   * Number of infants in seat (optional, default 0)
   */
  infants_on_lap?: number | null;

  /**
   * Return date (YYYY-MM-DD format, optional for one-way)
   */
  return_date?: string | null;

  /**
   * Travel class (optional: "economy", "premium_economy", "business", "first")
   */
  travel_class?: string | null;
}

export interface GoogleMapsResult {
  /**
   * Place name/title
   */
  title: string;

  /**
   * Address
   */
  address?: string | null;

  /**
   * Coordinates
   */
  coordinates?: unknown;

  /**
   * Phone number
   */
  phone?: string | null;

  /**
   * Place ID
   */
  place_id?: string | null;

  /**
   * Rating (1-5 stars)
   */
  rating?: number | null;

  /**
   * Number of reviews
   */
  reviews?: number | null;

  /**
   * Place type (restaurant, hotel, etc.)
   */
  type_?: string | null;

  /**
   * Website URL
   */
  website?: string | null;
}

export interface GoogleMapsSearchRequest {
  /**
   * The search query (e.g., "restaurants near me")
   */
  q: string;

  /**
   * Geographic location (optional, e.g. "us", "uk")
   */
  gl?: string | null;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional)
   */
  num?: number | null;
}

export interface GoogleScholarSearchRequest {
  /**
   * The search query
   */
  q: string;

  /**
   * Year range end (optional, e.g. 2023)
   */
  as_yhi?: number | null;

  /**
   * Year range start (optional, e.g. 2020)
   */
  as_ylo?: number | null;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional)
   */
  num?: number | null;

  /**
   * Starting result index (optional)
   */
  start?: number | null;
}

export interface GoogleSearchRequest {
  /**
   * The search query
   */
  q: string;

  /**
   * Geographic location (optional, e.g. "us", "uk")
   */
  gl?: string | null;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional, max 100)
   */
  num?: number | null;

  /**
   * Starting result index (optional)
   */
  start?: number | null;
}

export interface GoogleSearchResponse {
  /**
   * Array of search results
   */
  organic_results: Array<GoogleSearchResult>;

  /**
   * Related searches
   */
  related_searches?: Array<{ [key: string]: unknown }> | null;

  /**
   * Total number of results found
   */
  search_information?: unknown;
}

export interface GoogleSearchResult {
  /**
   * Search result URL
   */
  link: string;

  /**
   * Search result snippet/description
   */
  snippet: string;

  /**
   * Search result title
   */
  title: string;

  /**
   * Display URL
   */
  display_link?: string | null;
}

export interface LocationCoordinates {
  /**
   * Latitude
   */
  lat: number;

  /**
   * Longitude
   */
  lng: number;
}

export interface LocationResponse {
  /**
   * Array of location results
   */
  locations: Array<LocationResult>;

  /**
   * Search information
   */
  search_information?: unknown;
}

export interface LocationResult {
  /**
   * Location name
   */
  name: string;

  /**
   * Full address
   */
  address?: string | null;

  coordinates?: LocationCoordinates | null;

  /**
   * Location type (city, country, etc.)
   */
  location_type?: string | null;

  /**
   * Place ID (if available)
   */
  place_id?: string | null;
}

export interface LocationSearchRequest {
  /**
   * The location query to search for
   */
  q: string;

  /**
   * Geographic location bias (optional, e.g. "us", "uk")
   */
  gl?: string | null;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional)
   */
  num?: number | null;
}

export interface PlaceDetailsRequest {
  /**
   * Place ID from Google Maps
   */
  place_id: string;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;
}

export interface PlacePhotosRequest {
  /**
   * Place ID from Google Maps
   */
  place_id: string;

  /**
   * Number of photos to return (optional)
   */
  num?: number | null;
}

export interface PlaceReviewsRequest {
  /**
   * Place ID from Google Maps
   */
  place_id: string;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;

  /**
   * Number of reviews to return (optional)
   */
  num?: number | null;
}

export interface ScholarAuthorSearchRequest {
  /**
   * Author name to search for
   */
  author: string;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional)
   */
  num?: number | null;

  /**
   * Starting result index (optional)
   */
  start?: number | null;
}

export interface ScholarCiteRequest {
  /**
   * The publication ID to get citations for
   */
  q: string;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of citations to return (optional)
   */
  num?: number | null;

  /**
   * Starting result index (optional)
   */
  start?: number | null;
}

export type SearchAPIGoogleFlightsCalendarResponse = { [key: string]: unknown };

export type SearchAPIGoogleFlightsLocationSearchResponse = { [key: string]: unknown };

export type SearchAPIGoogleFlightsSearchResponse = { [key: string]: unknown };

export type SearchAPIGoogleMapsPlaceDetailsResponse = { [key: string]: unknown };

export type SearchAPIGoogleMapsPlacePhotosResponse = { [key: string]: unknown };

export type SearchAPIGoogleMapsPlaceReviewsResponse = { [key: string]: unknown };

export type SearchAPIGoogleMapsSearchResponse = Array<GoogleMapsResult>;

export type SearchAPIGoogleScholarAuthorSearchResponse = { [key: string]: unknown };

export type SearchAPIGoogleScholarCitationsResponse = { [key: string]: unknown };

export type SearchAPIGoogleScholarSearchResponse = { [key: string]: unknown };

export interface SearchAPIGoogleFlightsCalendarParams {
  /**
   * Arrival airport code
   */
  arrival_id: string;

  /**
   * Departure airport code
   */
  departure_id: string;

  /**
   * Outbound date (YYYY-MM-DD format)
   */
  outbound_date: string;

  /**
   * Currency (optional, e.g. "USD")
   */
  currency?: string | null;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Return date (YYYY-MM-DD format, optional)
   */
  return_date?: string | null;
}

export interface SearchAPIGoogleFlightsLocationSearchParams {
  /**
   * Search query for airport/location
   */
  q: string;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;
}

export interface SearchAPIGoogleFlightsSearchParams {
  /**
   * Arrival airport code (e.g., "JFK", "LAX")
   */
  arrival_id: string;

  /**
   * Departure airport code (e.g., "JFK", "LAX")
   */
  departure_id: string;

  /**
   * Outbound date (YYYY-MM-DD format)
   */
  outbound_date: string;

  /**
   * Number of adults (optional, default 1)
   */
  adults?: number | null;

  /**
   * Number of children (optional, default 0)
   */
  children?: number | null;

  /**
   * Currency (optional, e.g. "USD")
   */
  currency?: string | null;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of infants on lap (optional, default 0)
   */
  infants_in_seat?: number | null;

  /**
   * Number of infants in seat (optional, default 0)
   */
  infants_on_lap?: number | null;

  /**
   * Return date (YYYY-MM-DD format, optional for one-way)
   */
  return_date?: string | null;

  /**
   * Travel class (optional: "economy", "premium_economy", "business", "first")
   */
  travel_class?: string | null;
}

export interface SearchAPIGoogleMapsPlaceDetailsParams {
  /**
   * Place ID from Google Maps
   */
  place_id: string;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;
}

export interface SearchAPIGoogleMapsPlacePhotosParams {
  /**
   * Place ID from Google Maps
   */
  place_id: string;

  /**
   * Number of photos to return (optional)
   */
  num?: number | null;
}

export interface SearchAPIGoogleMapsPlaceReviewsParams {
  /**
   * Place ID from Google Maps
   */
  place_id: string;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;

  /**
   * Number of reviews to return (optional)
   */
  num?: number | null;
}

export interface SearchAPIGoogleMapsSearchParams {
  /**
   * The search query (e.g., "restaurants near me")
   */
  q: string;

  /**
   * Geographic location (optional, e.g. "us", "uk")
   */
  gl?: string | null;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional)
   */
  num?: number | null;
}

export interface SearchAPIGoogleScholarAuthorSearchParams {
  /**
   * Author name to search for
   */
  author: string;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional)
   */
  num?: number | null;

  /**
   * Starting result index (optional)
   */
  start?: number | null;
}

export interface SearchAPIGoogleScholarCitationsParams {
  /**
   * The publication ID to get citations for
   */
  q: string;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of citations to return (optional)
   */
  num?: number | null;

  /**
   * Starting result index (optional)
   */
  start?: number | null;
}

export interface SearchAPIGoogleScholarSearchParams {
  /**
   * The search query
   */
  q: string;

  /**
   * Year range end (optional, e.g. 2023)
   */
  as_yhi?: number | null;

  /**
   * Year range start (optional, e.g. 2020)
   */
  as_ylo?: number | null;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional)
   */
  num?: number | null;

  /**
   * Starting result index (optional)
   */
  start?: number | null;
}

export interface SearchAPIGoogleSearchParams {
  /**
   * The search query
   */
  q: string;

  /**
   * Geographic location (optional, e.g. "us", "uk")
   */
  gl?: string | null;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional, max 100)
   */
  num?: number | null;

  /**
   * Starting result index (optional)
   */
  start?: number | null;
}

export interface SearchAPILocationSearchParams {
  /**
   * The location query to search for
   */
  q: string;

  /**
   * Geographic location bias (optional, e.g. "us", "uk")
   */
  gl?: string | null;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;

  /**
   * Number of results to return (optional)
   */
  num?: number | null;
}

export declare namespace SearchAPI {
  export {
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
    type SearchAPIGoogleFlightsCalendarResponse as SearchAPIGoogleFlightsCalendarResponse,
    type SearchAPIGoogleFlightsLocationSearchResponse as SearchAPIGoogleFlightsLocationSearchResponse,
    type SearchAPIGoogleFlightsSearchResponse as SearchAPIGoogleFlightsSearchResponse,
    type SearchAPIGoogleMapsPlaceDetailsResponse as SearchAPIGoogleMapsPlaceDetailsResponse,
    type SearchAPIGoogleMapsPlacePhotosResponse as SearchAPIGoogleMapsPlacePhotosResponse,
    type SearchAPIGoogleMapsPlaceReviewsResponse as SearchAPIGoogleMapsPlaceReviewsResponse,
    type SearchAPIGoogleMapsSearchResponse as SearchAPIGoogleMapsSearchResponse,
    type SearchAPIGoogleScholarAuthorSearchResponse as SearchAPIGoogleScholarAuthorSearchResponse,
    type SearchAPIGoogleScholarCitationsResponse as SearchAPIGoogleScholarCitationsResponse,
    type SearchAPIGoogleScholarSearchResponse as SearchAPIGoogleScholarSearchResponse,
    type SearchAPIGoogleFlightsCalendarParams as SearchAPIGoogleFlightsCalendarParams,
    type SearchAPIGoogleFlightsLocationSearchParams as SearchAPIGoogleFlightsLocationSearchParams,
    type SearchAPIGoogleFlightsSearchParams as SearchAPIGoogleFlightsSearchParams,
    type SearchAPIGoogleMapsPlaceDetailsParams as SearchAPIGoogleMapsPlaceDetailsParams,
    type SearchAPIGoogleMapsPlacePhotosParams as SearchAPIGoogleMapsPlacePhotosParams,
    type SearchAPIGoogleMapsPlaceReviewsParams as SearchAPIGoogleMapsPlaceReviewsParams,
    type SearchAPIGoogleMapsSearchParams as SearchAPIGoogleMapsSearchParams,
    type SearchAPIGoogleScholarAuthorSearchParams as SearchAPIGoogleScholarAuthorSearchParams,
    type SearchAPIGoogleScholarCitationsParams as SearchAPIGoogleScholarCitationsParams,
    type SearchAPIGoogleScholarSearchParams as SearchAPIGoogleScholarSearchParams,
    type SearchAPIGoogleSearchParams as SearchAPIGoogleSearchParams,
    type SearchAPILocationSearchParams as SearchAPILocationSearchParams,
  };
}
