// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.entities.delete({
      dataset_name: 'dataset_name',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.entities.delete({
      dataset_name: 'dataset_name',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('add: only required params', async () => {
    const responsePromise = client.entities.add({ dataset_name: 'dataset_name', kg: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.entities.add({
      dataset_name: 'dataset_name',
      kg: {
        entities: [
          { id: 0, properties: { foo: 'string' }, type: 'type' },
          { id: 0, properties: { foo: 'string' }, type: 'type' },
          { id: 0, properties: { foo: 'string' }, type: 'type' },
        ],
        relationships: [
          { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
          { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
          { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
        ],
      },
      attempt_merge: true,
      source: 'None',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.entities.get({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.entities.get({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('getLocalSubgraph: only required params', async () => {
    const responsePromise = client.entities.getLocalSubgraph({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getLocalSubgraph: required and optional params', async () => {
    const response = await client.entities.getLocalSubgraph({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      radius: 0,
    });
  });

  test('getSourceEntities: only required params', async () => {
    const responsePromise = client.entities.getSourceEntities({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSourceEntities: required and optional params', async () => {
    const response = await client.entities.getSourceEntities({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('merge: only required params', async () => {
    const responsePromise = client.entities.merge({
      entity_1_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      entity_2_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('merge: required and optional params', async () => {
    const response = await client.entities.merge({
      entity_1_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      entity_2_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('search: only required params', async () => {
    const responsePromise = client.entities.search({
      dataset_name: 'dataset_name',
      query: 'query',
      table_name: 'table_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.entities.search({
      dataset_name: 'dataset_name',
      query: 'query',
      table_name: 'table_name',
    });
  });

  test('summarize: only required params', async () => {
    const responsePromise = client.entities.summarize({
      dataset_name: 'dataset_name',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      properties: ['string', 'string', 'string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summarize: required and optional params', async () => {
    const response = await client.entities.summarize({
      dataset_name: 'dataset_name',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      properties: ['string', 'string', 'string'],
      extra_instructions: ['string', 'string', 'string'],
    });
  });

  test('updateProperty: only required params', async () => {
    const responsePromise = client.entities.updateProperty({
      dataset_name: 'dataset_name',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      prop_name: 'prop_name',
      prop_value: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateProperty: required and optional params', async () => {
    const response = await client.entities.updateProperty({
      dataset_name: 'dataset_name',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      prop_name: 'prop_name',
      prop_value: 'string',
    });
  });

  test('view: only required params', async () => {
    const responsePromise = client.entities.view({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('view: required and optional params', async () => {
    const response = await client.entities.view({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });
});
