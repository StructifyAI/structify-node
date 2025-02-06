// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource structure', () => {
  test('enhance: only required params', async () => {
    const responsePromise = client.structure.enhance({ entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('enhance: required and optional params', async () => {
    const response = await client.structure.enhance({
      entity_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      allow_new_entities: true,
      property_name: 'property_name',
      relationship_name: 'relationship_name',
      special_job_type: 'HumanLLM',
    });
  });

  test('enhanceRelationship: only required params', async () => {
    const responsePromise = client.structure.enhanceRelationship({ relationship_name: 'relationship_name' });
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
      relationship_name: 'relationship_name',
      allow_new_entities: true,
      source_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      special_job_type: 'HumanLLM',
      target_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('runAsync: only required params', async () => {
    const responsePromise = client.structure.runAsync({ name: 'name', structure_input: { SECIngestor: {} } });
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
      structure_input: { SECIngestor: { accession_number: 'accession_number', quarter: 0, year: 0 } },
      extraction_criteria: [{ RelationshipExtraction: { relationship_name: 'relationship_name' } }],
      seeded_entity: {
        entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
        relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
      },
      special_job_type: 'HumanLLM',
    });
  });
});
