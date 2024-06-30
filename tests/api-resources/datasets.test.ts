// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structify';
import { Response } from 'node-fetch';

const structify = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasets', () => {
  test('create: only required params', async () => {
    const responsePromise = structify.datasets.create({
      description: 'string',
      name: 'string',
      relationships: [
        { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
        { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
        { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
      ],
      tables: [
        {
          description: 'string',
          name: 'string',
          properties: [
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
          ],
        },
        {
          description: 'string',
          name: 'string',
          properties: [
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
          ],
        },
        {
          description: 'string',
          name: 'string',
          properties: [
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
          ],
        },
      ],
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
    const response = await structify.datasets.create({
      description: 'string',
      name: 'string',
      relationships: [
        { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
        { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
        { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
      ],
      tables: [
        {
          description: 'string',
          name: 'string',
          properties: [
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
          ],
        },
        {
          description: 'string',
          name: 'string',
          properties: [
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
          ],
        },
        {
          description: 'string',
          name: 'string',
          properties: [
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
            { description: 'string', name: 'string' },
          ],
        },
      ],
    });
  });

  test('list', async () => {
    const responsePromise = structify.datasets.list();
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
    await expect(structify.datasets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = structify.datasets.delete({ name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await structify.datasets.delete({ name: 'string' });
  });

  test('get: only required params', async () => {
    const responsePromise = structify.datasets.get({ name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await structify.datasets.get({ name: 'string' });
  });

  test('view: only required params', async () => {
    const responsePromise = structify.datasets.view({ dataset_name: 'string', table_name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('view: required and optional params', async () => {
    const response = await structify.datasets.view({
      dataset_name: 'string',
      table_name: 'string',
      limit: 0,
      skip: 0,
    });
  });
});
