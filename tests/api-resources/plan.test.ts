// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource plan', () => {
  test('create: only required params', async () => {
    const responsePromise = client.plan.create({
      dataset: 'dataset',
      plan: { steps: [{ entity_id: 0, property_name: 'property_name' }] },
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
    const response = await client.plan.create({
      dataset: 'dataset',
      plan: {
        steps: [
          {
            entity_id: 0,
            property_name: 'property_name',
            allow_extra_entities: true,
            starting_searches: ['string'],
            starting_urls: ['string'],
          },
        ],
      },
    });
  });

  test('list', async () => {
    const responsePromise = client.plan.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.plan.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('pauseAll: only required params', async () => {
    const responsePromise = client.plan.pauseAll({ dataset_name: 'dataset_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pauseAll: required and optional params', async () => {
    const response = await client.plan.pauseAll({ dataset_name: 'dataset_name' });
  });

  test('resumeAll: only required params', async () => {
    const responsePromise = client.plan.resumeAll({ dataset_name: 'dataset_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resumeAll: required and optional params', async () => {
    const response = await client.plan.resumeAll({ dataset_name: 'dataset_name' });
  });
});
