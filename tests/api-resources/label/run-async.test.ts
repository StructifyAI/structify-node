// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const structify = new Structify({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource runAsync', () => {
  test('create: only required params', async () => {
    const responsePromise = structify.label.runAsync.create({
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

  test('create: required and optional params', async () => {
    const response = await structify.label.runAsync.create({
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
