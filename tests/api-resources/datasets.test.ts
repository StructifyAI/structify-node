// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.datasets.create({
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
            { description: 'description', name: 'name' },
            { description: 'description', name: 'name' },
            { description: 'description', name: 'name' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', name: 'name' },
            { description: 'description', name: 'name' },
            { description: 'description', name: 'name' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', name: 'name' },
            { description: 'description', name: 'name' },
            { description: 'description', name: 'name' },
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
    const response = await client.datasets.create({
      description: 'description',
      name: 'name',
      relationships: [
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
          properties: [
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
          properties: [
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          source_table: 'source_table',
          target_table: 'target_table',
          properties: [
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
          ],
        },
      ],
      tables: [
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
          ],
        },
        {
          description: 'description',
          name: 'name',
          properties: [
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
            { description: 'description', name: 'name', merge_strategy: 'Unique', prop_type: 'String' },
          ],
        },
      ],
    });
  });

  test('list', async () => {
    const responsePromise = client.datasets.list();
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
    await expect(client.datasets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.datasets.delete({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.datasets.delete({ name: 'name' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.datasets.get({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.datasets.get({ name: 'name' });
  });

  test('viewRelationships: only required params', async () => {
    const responsePromise = client.datasets.viewRelationships({ dataset: 'dataset', name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('viewRelationships: required and optional params', async () => {
    const response = await client.datasets.viewRelationships({
      dataset: 'dataset',
      name: 'name',
      limit: 0,
      offset: 0,
    });
  });

  test('viewTable: only required params', async () => {
    const responsePromise = client.datasets.viewTable({ dataset: 'dataset', name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('viewTable: required and optional params', async () => {
    const response = await client.datasets.viewTable({
      dataset: 'dataset',
      name: 'name',
      limit: 0,
      offset: 0,
    });
  });
});
