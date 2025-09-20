// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource searchapi', () => {
  test('googleFlightsCalendar: only required params', async () => {
    const responsePromise = client.external.searchapi.googleFlightsCalendar({
      arrival_id: 'arrival_id',
      departure_id: 'departure_id',
      outbound_date: 'outbound_date',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleFlightsCalendar: required and optional params', async () => {
    const response = await client.external.searchapi.googleFlightsCalendar({
      arrival_id: 'arrival_id',
      departure_id: 'departure_id',
      outbound_date: 'outbound_date',
      currency: 'currency',
      hl: 'hl',
      return_date: 'return_date',
    });
  });

  test('googleFlightsLocationSearch: only required params', async () => {
    const responsePromise = client.external.searchapi.googleFlightsLocationSearch({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleFlightsLocationSearch: required and optional params', async () => {
    const response = await client.external.searchapi.googleFlightsLocationSearch({ q: 'q', hl: 'hl' });
  });

  test('googleFlightsSearch: only required params', async () => {
    const responsePromise = client.external.searchapi.googleFlightsSearch({
      arrival_id: 'arrival_id',
      departure_id: 'departure_id',
      outbound_date: 'outbound_date',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleFlightsSearch: required and optional params', async () => {
    const response = await client.external.searchapi.googleFlightsSearch({
      arrival_id: 'arrival_id',
      departure_id: 'departure_id',
      outbound_date: 'outbound_date',
      adults: 0,
      children: 0,
      currency: 'currency',
      hl: 'hl',
      infants_in_seat: 0,
      infants_on_lap: 0,
      return_date: 'return_date',
      travel_class: 'travel_class',
    });
  });

  test('googleMapsPlaceDetails: only required params', async () => {
    const responsePromise = client.external.searchapi.googleMapsPlaceDetails({ place_id: 'place_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleMapsPlaceDetails: required and optional params', async () => {
    const response = await client.external.searchapi.googleMapsPlaceDetails({
      place_id: 'place_id',
      hl: 'hl',
    });
  });

  test('googleMapsPlacePhotos: only required params', async () => {
    const responsePromise = client.external.searchapi.googleMapsPlacePhotos({ place_id: 'place_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleMapsPlacePhotos: required and optional params', async () => {
    const response = await client.external.searchapi.googleMapsPlacePhotos({ place_id: 'place_id', num: 0 });
  });

  test('googleMapsPlaceReviews: only required params', async () => {
    const responsePromise = client.external.searchapi.googleMapsPlaceReviews({ place_id: 'place_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleMapsPlaceReviews: required and optional params', async () => {
    const response = await client.external.searchapi.googleMapsPlaceReviews({
      place_id: 'place_id',
      hl: 'hl',
      num: 0,
    });
  });

  test('googleMapsSearch: only required params', async () => {
    const responsePromise = client.external.searchapi.googleMapsSearch({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleMapsSearch: required and optional params', async () => {
    const response = await client.external.searchapi.googleMapsSearch({ q: 'q', gl: 'gl', hl: 'hl', num: 0 });
  });

  test('googleScholarAuthorSearch: only required params', async () => {
    const responsePromise = client.external.searchapi.googleScholarAuthorSearch({ author: 'author' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleScholarAuthorSearch: required and optional params', async () => {
    const response = await client.external.searchapi.googleScholarAuthorSearch({
      author: 'author',
      hl: 'hl',
      num: 0,
      start: 0,
    });
  });

  test('googleScholarCitations: only required params', async () => {
    const responsePromise = client.external.searchapi.googleScholarCitations({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleScholarCitations: required and optional params', async () => {
    const response = await client.external.searchapi.googleScholarCitations({
      q: 'q',
      hl: 'hl',
      num: 0,
      start: 0,
    });
  });

  test('googleScholarSearch: only required params', async () => {
    const responsePromise = client.external.searchapi.googleScholarSearch({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleScholarSearch: required and optional params', async () => {
    const response = await client.external.searchapi.googleScholarSearch({
      q: 'q',
      as_yhi: 0,
      as_ylo: 0,
      hl: 'hl',
      num: 0,
      start: 0,
    });
  });

  test('googleSearch: only required params', async () => {
    const responsePromise = client.external.searchapi.googleSearch({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('googleSearch: required and optional params', async () => {
    const response = await client.external.searchapi.googleSearch({
      q: 'q',
      gl: 'gl',
      hl: 'hl',
      num: 0,
      start: 0,
    });
  });

  test('locationSearch: only required params', async () => {
    const responsePromise = client.external.searchapi.locationSearch({ q: 'q' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('locationSearch: required and optional params', async () => {
    const response = await client.external.searchapi.locationSearch({ q: 'q', gl: 'gl', hl: 'hl', num: 0 });
  });
});
