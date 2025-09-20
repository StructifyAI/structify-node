// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Searchapi extends APIResource {
  /**
   * Get flight prices across different dates (calendar view)
   */
  googleFlightsCalendar(
    body: SearchapiGoogleFlightsCalendarParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleFlightsCalendarResponse> {
    return this._client.post('/external/searchapi/flights/calendar', { body, ...options });
  }

  /**
   * Search for airports and locations for flight booking
   */
  googleFlightsLocationSearch(
    body: SearchapiGoogleFlightsLocationSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleFlightsLocationSearchResponse> {
    return this._client.post('/external/searchapi/flights/location_search', { body, ...options });
  }

  /**
   * Search for flight options between airports
   */
  googleFlightsSearch(
    body: SearchapiGoogleFlightsSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleFlightsSearchResponse> {
    return this._client.post('/external/searchapi/flights/search', { body, ...options });
  }

  /**
   * Get detailed information about a specific place
   */
  googleMapsPlaceDetails(
    body: SearchapiGoogleMapsPlaceDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleMapsPlaceDetailsResponse> {
    return this._client.post('/external/searchapi/maps/place', { body, ...options });
  }

  /**
   * Get photos for a specific place
   */
  googleMapsPlacePhotos(
    body: SearchapiGoogleMapsPlacePhotosParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleMapsPlacePhotosResponse> {
    return this._client.post('/external/searchapi/maps/photos', { body, ...options });
  }

  /**
   * Get reviews for a specific place
   */
  googleMapsPlaceReviews(
    body: SearchapiGoogleMapsPlaceReviewsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleMapsPlaceReviewsResponse> {
    return this._client.post('/external/searchapi/maps/reviews', { body, ...options });
  }

  /**
   * Search for places on Google Maps
   */
  googleMapsSearch(
    body: SearchapiGoogleMapsSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleMapsSearchResponse> {
    return this._client.post('/external/searchapi/maps/search', { body, ...options });
  }

  /**
   * Search for academic authors and their publications
   */
  googleScholarAuthorSearch(
    body: SearchapiGoogleScholarAuthorSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleScholarAuthorSearchResponse> {
    return this._client.post('/external/searchapi/scholar/author', { body, ...options });
  }

  /**
   * Get citations for a specific academic publication
   */
  googleScholarCitations(
    body: SearchapiGoogleScholarCitationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleScholarCitationsResponse> {
    return this._client.post('/external/searchapi/scholar/cite', { body, ...options });
  }

  /**
   * Search academic papers and publications on Google Scholar
   */
  googleScholarSearch(
    body: SearchapiGoogleScholarSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchapiGoogleScholarSearchResponse> {
    return this._client.post('/external/searchapi/scholar/search', { body, ...options });
  }

  /**
   * Performs a Google web search using the SearchAPI service
   */
  googleSearch(
    body: SearchapiGoogleSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GoogleSearchResponse> {
    return this._client.post('/external/searchapi/search', { body, ...options });
  }

  /**
   * Search for geographic locations, addresses, and places
   */
  locationSearch(
    body: SearchapiLocationSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationResponse> {
    return this._client.post('/external/searchapi/locations', { body, ...options });
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

export type SearchapiGoogleFlightsCalendarResponse = { [key: string]: unknown };

export type SearchapiGoogleFlightsLocationSearchResponse = { [key: string]: unknown };

export type SearchapiGoogleFlightsSearchResponse = { [key: string]: unknown };

export type SearchapiGoogleMapsPlaceDetailsResponse = { [key: string]: unknown };

export type SearchapiGoogleMapsPlacePhotosResponse = { [key: string]: unknown };

export type SearchapiGoogleMapsPlaceReviewsResponse = { [key: string]: unknown };

export type SearchapiGoogleMapsSearchResponse = Array<GoogleMapsResult>;

export type SearchapiGoogleScholarAuthorSearchResponse = { [key: string]: unknown };

export type SearchapiGoogleScholarCitationsResponse = { [key: string]: unknown };

export type SearchapiGoogleScholarSearchResponse = { [key: string]: unknown };

export interface SearchapiGoogleFlightsCalendarParams {
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

export interface SearchapiGoogleFlightsLocationSearchParams {
  /**
   * Search query for airport/location
   */
  q: string;

  /**
   * Language (optional, e.g. "en")
   */
  hl?: string | null;
}

export interface SearchapiGoogleFlightsSearchParams {
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

export interface SearchapiGoogleMapsPlaceDetailsParams {
  /**
   * Place ID from Google Maps
   */
  place_id: string;

  /**
   * Language (optional, e.g. "en", "es")
   */
  hl?: string | null;
}

export interface SearchapiGoogleMapsPlacePhotosParams {
  /**
   * Place ID from Google Maps
   */
  place_id: string;

  /**
   * Number of photos to return (optional)
   */
  num?: number | null;
}

export interface SearchapiGoogleMapsPlaceReviewsParams {
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

export interface SearchapiGoogleMapsSearchParams {
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

export interface SearchapiGoogleScholarAuthorSearchParams {
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

export interface SearchapiGoogleScholarCitationsParams {
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

export interface SearchapiGoogleScholarSearchParams {
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

export interface SearchapiGoogleSearchParams {
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

export interface SearchapiLocationSearchParams {
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

export declare namespace Searchapi {
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
}
