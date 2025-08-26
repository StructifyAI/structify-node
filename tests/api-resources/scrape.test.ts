// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scrape', () => {
  test('list: only required params', async () => {
    const responsePromise = client.scrape.list({
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
      input: { Direct: { url: 'url' } },
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

  test('list: required and optional params', async () => {
    const response = await client.scrape.list({
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
      input: { Direct: { url: 'url' } },
      table_name: 'table_name',
      dataset_name: 'dataset_name',
      node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      stop_config: {
        max_steps_without_save: 0,
        max_errors: 0,
        max_execution_time_secs: 0,
        max_total_steps: 0,
      },
      use_proxy: true,
    });
  });

  test('scrape: only required params', async () => {
    const responsePromise = client.scrape.scrape({
      dataset_name: 'dataset_name',
      extraction_criteria: [{ relationship_name: 'relationship_name' }],
      url: 'url',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scrape: required and optional params', async () => {
    const response = await client.scrape.scrape({
      dataset_name: 'dataset_name',
      extraction_criteria: [{ relationship_name: 'relationship_name' }],
      url: 'url',
      node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      seeded_kg: {
        entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
        relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
      },
      stop_config: {
        max_steps_without_save: 0,
        max_errors: 0,
        max_execution_time_secs: 0,
        max_total_steps: 0,
      },
      use_proxy: true,
    });
  });
});
