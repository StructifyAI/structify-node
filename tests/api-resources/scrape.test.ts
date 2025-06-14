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
      table_name: 'table_name',
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
      table_name: 'table_name',
      url: 'url',
      max_steps_without_save: 0,
    });
  });
});
