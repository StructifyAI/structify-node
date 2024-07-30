// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource structure', () => {
  test('isComplete: only required params', async () => {
    const responsePromise = client.structure.isComplete(['string', 'string', 'string']);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('isComplete: required and optional params', async () => {
    const response = await client.structure.isComplete(['string', 'string', 'string']);
  });

  test('jobStatus: only required params', async () => {
    const responsePromise = client.structure.jobStatus(['string', 'string', 'string']);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('jobStatus: required and optional params', async () => {
    const response = await client.structure.jobStatus(['string', 'string', 'string']);
  });

  test('runAsync: only required params', async () => {
    const responsePromise = client.structure.runAsync({
      dataset_name: 'dataset_name',
      structure_input: {
        SECIngestor: {
          extraction_criteria: [
            { RelationshipExtraction: { relationship_name: 'relationship_name' } },
            { RelationshipExtraction: { relationship_name: 'relationship_name' } },
            { RelationshipExtraction: { relationship_name: 'relationship_name' } },
          ],
        },
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

  test('runAsync: required and optional params', async () => {
    const response = await client.structure.runAsync({
      dataset_name: 'dataset_name',
      structure_input: {
        SECIngestor: {
          accession_number: 'accession_number',
          extraction_criteria: [
            { RelationshipExtraction: { relationship_name: 'relationship_name' } },
            { RelationshipExtraction: { relationship_name: 'relationship_name' } },
            { RelationshipExtraction: { relationship_name: 'relationship_name' } },
          ],
          quarter: 0,
          year: 0,
        },
      },
      extraction_criteria: [
        { RelationshipExtraction: { relationship_name: 'relationship_name' } },
        { RelationshipExtraction: { relationship_name: 'relationship_name' } },
        { RelationshipExtraction: { relationship_name: 'relationship_name' } },
      ],
      seeded_entity: {
        entities: [
          { id: 0, properties: { foo: 'string' }, type: 'type' },
          { id: 0, properties: { foo: 'string' }, type: 'type' },
          { id: 0, properties: { foo: 'string' }, type: 'type' },
        ],
        relationships: [
          { source: 0, target: 0, type: 'type' },
          { source: 0, target: 0, type: 'type' },
          { source: 0, target: 0, type: 'type' },
        ],
      },
    });
  });
});
