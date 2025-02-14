// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource structure', () => {
  test('createPlan: only required params', async () => {
    const responsePromise = client.structure.createPlan({ dataset: 'dataset', plan: { steps: [[]] } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createPlan: required and optional params', async () => {
    const response = await client.structure.createPlan({ dataset: 'dataset', plan: { steps: [[]] } });
  });

  test('enhanceProperty: only required params', async () => {
    const responsePromise = client.structure.enhanceProperty({
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      property_name: 'property_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enhanceProperty: required and optional params', async () => {
    const response = await client.structure.enhanceProperty({
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      property_name: 'property_name',
      allow_extra_entities: true,
      special_job_type: 'HumanLLM',
      starting_searches: ['string'],
      starting_urls: ['string'],
    });
  });

  test('enhanceRelationship: only required params', async () => {
    const responsePromise = client.structure.enhanceRelationship({
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      relationship_name: 'relationship_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enhanceRelationship: required and optional params', async () => {
    const response = await client.structure.enhanceRelationship({
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      relationship_name: 'relationship_name',
      allow_extra_entities: true,
      special_job_type: 'HumanLLM',
      starting_searches: ['string'],
      starting_urls: ['string'],
    });
  });

  test('findRelationship: only required params', async () => {
    const responsePromise = client.structure.findRelationship({
      relationship_name: 'relationship_name',
      source_entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      target_entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('findRelationship: required and optional params', async () => {
    const response = await client.structure.findRelationship({
      relationship_name: 'relationship_name',
      source_entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      target_entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      allow_extra_entities: true,
      special_job_type: 'HumanLLM',
      starting_searches: ['string'],
      starting_urls: ['string'],
    });
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

  test('listPlans', async () => {
    const responsePromise = client.structure.listPlans();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listPlans: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.structure.listPlans({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('runAsync: only required params', async () => {
    const responsePromise = client.structure.runAsync({
      name: 'name',
      structure_input: { PDFIngestor: { path: 'path' } },
    });
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
      name: 'name',
      structure_input: { PDFIngestor: { path: 'path' } },
      extraction_criteria: [{ RelationshipExtraction: { relationship_name: 'relationship_name' } }],
      seeded_entity: {
        entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
        relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
      },
      special_job_type: 'HumanLLM',
    });
  });
});
