// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource structure', () => {
  test('enhanceProperty: only required params', async () => {
    const responsePromise = client.structure.enhanceProperty({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enhanceProperty: required and optional params', async () => {
    const response = await client.structure.enhanceProperty({ special_job_type: 'HumanLLM' });
  });

  test('enhanceRelationship: only required params', async () => {
    const responsePromise = client.structure.enhanceRelationship({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enhanceRelationship: required and optional params', async () => {
    const response = await client.structure.enhanceRelationship({ special_job_type: 'HumanLLM' });
  });

  test('findRelationship: only required params', async () => {
    const responsePromise = client.structure.findRelationship({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('findRelationship: required and optional params', async () => {
    const response = await client.structure.findRelationship({ special_job_type: 'HumanLLM' });
  });

  test('isComplete: only required params', async () => {
    const responsePromise = client.structure.isComplete(['string']);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('isComplete: required and optional params', async () => {
    const response = await client.structure.isComplete(['string']);
  });

  test('jobStatus: only required params', async () => {
    const responsePromise = client.structure.jobStatus(['string']);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('jobStatus: required and optional params', async () => {
    const response = await client.structure.jobStatus(['string']);
  });

  test('runAsync: only required params', async () => {
    const responsePromise = client.structure.runAsync({ dataset: 'dataset', source: { path: 'path' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('runAsync: required and optional params', async () => {
    const response = await client.structure.runAsync({
      dataset: 'dataset',
      source: { path: 'path' },
      save_requirement: [{ relationship_name: 'relationship_name' }],
      seeded_entity: {
        entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
        relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
      },
      special_job_type: 'HumanLLM',
    });
  });
});
