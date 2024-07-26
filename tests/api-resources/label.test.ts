// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource label', () => {
  test('getMessages', async () => {
    const responsePromise = client.label.getMessages();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getMessages: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.label.getMessages({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('getMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.label.getMessages(
        { uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('llmAssist', async () => {
    const responsePromise = client.label.llmAssist('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('llmAssist: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.label.llmAssist('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('run: only required params', async () => {
    const responsePromise = client.label.run({
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

  test('run: required and optional params', async () => {
    const response = await client.label.run({
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

  test('submit: only required params', async () => {
    const responsePromise = client.label.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', [
      { Save: {} },
      { Save: {} },
      { Save: {} },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submit: required and optional params', async () => {
    const response = await client.label.submit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', [
      {
        Save: {
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
      },
      {
        Save: {
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
      },
      {
        Save: {
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
      },
    ]);
  });
});
