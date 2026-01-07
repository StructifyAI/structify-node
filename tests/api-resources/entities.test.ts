// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('delete: only required params', async () => {
    const responsePromise = client.entities.delete({
      dataset: 'dataset',
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
      dataset: 'dataset',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('add: only required params', async () => {
    const responsePromise = client.entities.add({
      dataset: 'dataset',
      entity_graph: {
        entities: [
          {
            id: 0,
            properties: { foo: 'string' },
            type: 'type',
          },
        ],
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

  test('add: required and optional params', async () => {
    const response = await client.entities.add({
      dataset: 'dataset',
      entity_graph: {
        entities: [
          {
            id: 0,
            properties: { foo: 'string' },
            type: 'type',
          },
        ],
        relationships: [
          {
            source: 0,
            target: 0,
            type: 'type',
            properties: { foo: 'string' },
          },
        ],
      },
      attempt_merge: true,
      source: 'None',
    });
  });

  test('addBatch: only required params', async () => {
    const responsePromise = client.entities.addBatch({
      dataset: 'dataset',
      entity_graphs: [
        {
          entities: [
            {
              id: 0,
              properties: { foo: 'string' },
              type: 'type',
            },
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

  test('addBatch: required and optional params', async () => {
    const response = await client.entities.addBatch({
      dataset: 'dataset',
      entity_graphs: [
        {
          entities: [
            {
              id: 0,
              properties: { foo: 'string' },
              type: 'type',
            },
          ],
          relationships: [
            {
              source: 0,
              target: 0,
              type: 'type',
              properties: { foo: 'string' },
            },
          ],
        },
      ],
      attempt_merge: true,
      skip_malformed_entities: true,
      source: 'None',
    });
  });

  test('addRelationship: only required params', async () => {
    const responsePromise = client.entities.addRelationship({
      dataset: 'dataset',
      from_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      relationship_type: 'relationship_type',
      to_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addRelationship: required and optional params', async () => {
    const response = await client.entities.addRelationship({
      dataset: 'dataset',
      from_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      relationship_type: 'relationship_type',
      to_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      properties: { foo: 'string' },
    });
  });

  test('deleteRelationship: only required params', async () => {
    const responsePromise = client.entities.deleteRelationship({
      dataset: 'dataset',
      relationship_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteRelationship: required and optional params', async () => {
    const response = await client.entities.deleteRelationship({
      dataset: 'dataset',
      relationship_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('derive: only required params', async () => {
    const responsePromise = client.entities.derive({
      dataset: 'dataset',
      derived_property: 'derived_property',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      instructions: 'instructions',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('derive: required and optional params', async () => {
    const response = await client.entities.derive({
      dataset: 'dataset',
      derived_property: 'derived_property',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      instructions: 'instructions',
      node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('deriveAll: only required params', async () => {
    const responsePromise = client.entities.deriveAll({
      dataset: 'dataset',
      derived_property: 'derived_property',
      instructions: 'instructions',
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

  test('deriveAll: required and optional params', async () => {
    const response = await client.entities.deriveAll({
      dataset: 'dataset',
      derived_property: 'derived_property',
      instructions: 'instructions',
      table_name: 'table_name',
      node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.entities.get({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      resolve_id: true,
    });
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

  test('listJobs: only required params', async () => {
    const responsePromise = client.entities.listJobs({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listJobs: required and optional params', async () => {
    const response = await client.entities.listJobs({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('search: only required params', async () => {
    const responsePromise = client.entities.search({
      dataset: 'dataset',
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
      dataset: 'dataset',
      query: 'query',
      table_name: 'table_name',
    });
  });

  test('summarize: only required params', async () => {
    const responsePromise = client.entities.summarize({
      dataset: 'dataset',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      properties: ['string'],
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
      dataset: 'dataset',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      properties: ['string'],
      extra_instructions: ['string'],
    });
  });

  test('updateProperty: only required params', async () => {
    const responsePromise = client.entities.updateProperty({
      dataset: 'dataset',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      properties: { foo: 'string' },
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
      dataset: 'dataset',
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      properties: { foo: 'string' },
      source: 'None',
    });
  });

  test('uploadParquet: only required params', async () => {
    const responsePromise = client.entities.uploadParquet({
      dataset: 'dataset',
      table_name: 'table_name',
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

  test('uploadParquet: required and optional params', async () => {
    const response = await client.entities.uploadParquet({
      dataset: 'dataset',
      table_name: 'table_name',
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  test('verify: only required params', async () => {
    const responsePromise = client.entities.verify({
      dataset: 'dataset',
      entity_graph: {
        entities: [
          {
            id: 0,
            properties: { foo: 'string' },
            type: 'type',
          },
        ],
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

  test('verify: required and optional params', async () => {
    const response = await client.entities.verify({
      dataset: 'dataset',
      entity_graph: {
        entities: [
          {
            id: 0,
            properties: { foo: 'string' },
            type: 'type',
          },
        ],
        relationships: [
          {
            source: 0,
            target: 0,
            type: 'type',
            properties: { foo: 'string' },
          },
        ],
      },
      fix: true,
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
    const response = await client.entities.view({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      resolve_id: true,
    });
  });
});
