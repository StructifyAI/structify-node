// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource nextAction', () => {
  test('addTrainingDatum: only required params', async () => {
    const responsePromise = client.admin.nextAction.addTrainingDatum({
      input: {
        all_steps: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
        descriptor: {
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
        extraction_criteria: [{ relationship_name: 'relationship_name' }],
        previous_queries: ['string'],
        seeded_kg: {
          entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
          relationships: [{ source: 0, target: 0, type: 'type' }],
        },
      },
      label: 'label',
      output: { SelectedStep: { step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' } },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addTrainingDatum: required and optional params', async () => {
    const response = await client.admin.nextAction.addTrainingDatum({
      input: {
        all_steps: [
          {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            action_name: 'action_name',
            metadata: { foo: 'string' },
          },
        ],
        descriptor: {
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
        extraction_criteria: [{ relationship_name: 'relationship_name' }],
        previous_queries: ['string'],
        seeded_kg: {
          entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
          relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
        },
      },
      label: 'label',
      output: { SelectedStep: { step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' } },
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('deleteTrainingData: only required params', async () => {
    const responsePromise = client.admin.nextAction.deleteTrainingData({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteTrainingData: required and optional params', async () => {
    const response = await client.admin.nextAction.deleteTrainingData({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('getTrainingData', async () => {
    const responsePromise = client.admin.nextAction.getTrainingData();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getTrainingData: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.nextAction.getTrainingData({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getTrainingData: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.nextAction.getTrainingData(
        {
          from_date: '2019-12-27T18:11:19.117Z',
          job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          limit: 0,
          offset: 0,
          status: 'HumanLLMLabel',
          to_date: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getTrainingDatum: only required params', async () => {
    const responsePromise = client.admin.nextAction.getTrainingDatum({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getTrainingDatum: required and optional params', async () => {
    const response = await client.admin.nextAction.getTrainingDatum({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('labelTrainingDatum: only required params', async () => {
    const responsePromise = client.admin.nextAction.labelTrainingDatum({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      label: 'label',
      output: { SelectedStep: { step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' } },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('labelTrainingDatum: required and optional params', async () => {
    const response = await client.admin.nextAction.labelTrainingDatum({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      label: 'label',
      output: { SelectedStep: { step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' } },
    });
  });
});
