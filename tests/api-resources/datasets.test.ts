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
      description: 'description',
      name: 'name',
      relationships: [
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
        },
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
        },
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
        },
      ],
      tables: [
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
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
      description: 'description',
      name: 'name',
      relationships: [
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
        },
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
        },
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
        },
      ],
      tables: [
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
            { description: 'description', merge_strategy: {}, name: 'name' },
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
    const responsePromise = structify.datasets.delete({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await structify.datasets.delete({ name: 'name' });
  });

  test('get: only required params', async () => {
    const responsePromise = structify.datasets.get({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await structify.datasets.get({ name: 'name' });
  });

  test('view: only required params', async () => {
    const responsePromise = structify.datasets.view({
      dataset_name: 'dataset_name',
      requested_type: 'Entities',
    });
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
      dataset_name: 'dataset_name',
      requested_type: 'Entities',
      limit: 0,
      offset: 0,
      relationship_name: 'relationship_name',
      table_name: 'table_name',
    });
  });
});
