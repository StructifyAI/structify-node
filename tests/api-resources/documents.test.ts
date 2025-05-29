// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('list', async () => {
    const responsePromise = client.documents.list();
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
    await expect(client.documents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.documents.list({ dataset: 'dataset' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.documents.delete({ file_path: 'file_path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.documents.delete({ file_path: 'file_path' });
  });

  test('download: only required params', async () => {
    const responsePromise = client.documents.download({ file_path: 'file_path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('download: required and optional params', async () => {
    const response = await client.documents.download({ file_path: 'file_path' });
  });

  test('structure: only required params', async () => {
    const responsePromise = client.documents.structure({
      dataset_descriptor: {
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
      },
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('structure: required and optional params', async () => {
    const response = await client.documents.structure({
      dataset_descriptor: {
        description: 'description',
        name: 'name',
        relationships: [
          {
            description: 'description',
            name: 'name',
            source_table: 'source_table',
            target_table: 'target_table',
            merge_strategy: {
              source_cardinality_given_target_match: 0,
              target_cardinality_given_source_match: 0,
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
            primary_column: 'primary_column',
          },
        ],
        llm_override_field: 'llm_override_field',
      },
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  test('upload: only required params', async () => {
    const responsePromise = client.documents.upload({
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      file_type: 'Text',
      path: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: required and optional params', async () => {
    const response = await client.documents.upload({
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      file_type: 'Text',
      path: await toFile(Buffer.from('# my file contents'), 'README.md'),
      dataset: 'dataset',
    });
  });
});
