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
      ],
      tables: [
        {
          description: 'description',
          name: 'name',
          properties: [{ description: 'description', name: 'name' }],
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
          merge_strategy: {
            Probabilistic: {
              source_cardinality_given_target_match: 0,
              target_cardinality_given_source_match: 0,
            },
          },
          properties: [
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
          ],
          expected_cardinality: 0,
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

  test('match: only required params', async () => {
    const responsePromise = client.datasets.match({ dataset: 'dataset', query_kg: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('match: required and optional params', async () => {
    const response = await client.datasets.match({
      dataset: 'dataset',
      query_kg: {
        entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
        relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
      },
      match_threshold: 0,
    });
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
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      last_updated: '2019-12-27T18:11:19.117Z',
      limit: 0,
      offset: 0,
      sort_by: { col_id: 'creation_time', sort: 'asc' },
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
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      last_updated: '2019-12-27T18:11:19.117Z',
      limit: 0,
      offset: 0,
      sort_by: { col_id: 'creation_time', sort: 'asc' },
    });
  });

  test('viewTablesWithRelationships: only required params', async () => {
    const responsePromise = client.datasets.viewTablesWithRelationships({ dataset: 'dataset', name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('viewTablesWithRelationships: required and optional params', async () => {
    const response = await client.datasets.viewTablesWithRelationships({
      dataset: 'dataset',
      name: 'name',
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      last_updated: '2019-12-27T18:11:19.117Z',
      limit: 0,
      offset: 0,
      sort_by: { col_id: 'creation_time', sort: 'asc' },
    });
  });
});
