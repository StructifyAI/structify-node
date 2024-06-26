// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const structify = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource structure', () => {
  test('isComplete: only required params', async () => {
    const responsePromise = structify.structure.isComplete(['string', 'string', 'string']);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('isComplete: required and optional params', async () => {
    const response = await structify.structure.isComplete(['string', 'string', 'string']);
  });

  test('jobStatus: only required params', async () => {
    const responsePromise = structify.structure.jobStatus(['string', 'string', 'string']);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('jobStatus: required and optional params', async () => {
    const response = await structify.structure.jobStatus(['string', 'string', 'string']);
  });

  test('runAsync: only required params', async () => {
    const responsePromise = structify.structure.runAsync({
      dataset_name: 'string',
      structure_input: {
        SECIngestor: {
          extraction_criteria: [
            { property_names: ['string', 'string', 'string'], table_name: 'string' },
            { property_names: ['string', 'string', 'string'], table_name: 'string' },
            { property_names: ['string', 'string', 'string'], table_name: 'string' },
          ],
        },
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('runAsync: required and optional params', async () => {
    const response = await structify.structure.runAsync({
      dataset_name: 'string',
      structure_input: {
        SECIngestor: {
          accession_number: 'string',
          extraction_criteria: [
            { property_names: ['string', 'string', 'string'], table_name: 'string' },
            { property_names: ['string', 'string', 'string'], table_name: 'string' },
            { property_names: ['string', 'string', 'string'], table_name: 'string' },
          ],
          quarter: 0,
          year: 0,
        },
      },
    });
  });
});
