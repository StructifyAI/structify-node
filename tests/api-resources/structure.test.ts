// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource structure', () => {
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
      stop_config: {
        max_steps_without_save: 0,
        max_errors: 0,
        max_execution_time_secs: 0,
        max_total_steps: 0,
      },
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
      stop_config: {
        max_steps_without_save: 0,
        max_errors: 0,
        max_execution_time_secs: 0,
        max_total_steps: 0,
      },
    });
  });

  test('findRelationship: only required params', async () => {
    const responsePromise = client.structure.findRelationship({
      from_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      relationship_name: 'relationship_name',
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

  test('findRelationship: required and optional params', async () => {
    const response = await client.structure.findRelationship({
      from_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      relationship_name: 'relationship_name',
      to_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      allow_extra_entities: true,
      special_job_type: 'HumanLLM',
      starting_searches: ['string'],
      starting_urls: ['string'],
      stop_config: {
        max_steps_without_save: 0,
        max_errors: 0,
        max_execution_time_secs: 0,
        max_total_steps: 0,
      },
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
    const responsePromise = client.structure.jobStatus({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('jobStatus: required and optional params', async () => {
    const response = await client.structure.jobStatus({
      dataset_name: 'dataset_name',
      job_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
    });
  });

  test('runAsync: only required params', async () => {
    const responsePromise = client.structure.runAsync({
      dataset: 'dataset',
      source: { PDF: { path: 'path' } },
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
      dataset: 'dataset',
      source: { PDF: { path: 'path' } },
      save_requirement: [{ relationship_name: 'relationship_name' }],
      seeded_entity: {
        entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
        relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
      },
      special_job_type: 'HumanLLM',
      stop_config: {
        max_steps_without_save: 0,
        max_errors: 0,
        max_execution_time_secs: 0,
        max_total_steps: 0,
      },
    });
  });
});
