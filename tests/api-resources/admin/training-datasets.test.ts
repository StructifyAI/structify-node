// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trainingDatasets', () => {
  test('add: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.add({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.add({ name: 'name' });
  });

  test('addDatum: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.addDatum('name', {
      step: {
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        prompt: {
          decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
          messages: [
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
          ],
          metadata: {
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
                {
                  description: 'description',
                  name: 'name',
                  source_table: 'source_table',
                  target_table: 'target_table',
                },
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
                  properties: [
                    { description: 'description', name: 'name' },
                    { description: 'description', name: 'name' },
                    { description: 'description', name: 'name' },
                  ],
                },
                {
                  description: 'description',
                  name: 'name',
                  properties: [
                    { description: 'description', name: 'name' },
                    { description: 'description', name: 'name' },
                    { description: 'description', name: 'name' },
                  ],
                },
                {
                  description: 'description',
                  name: 'name',
                  properties: [
                    { description: 'description', name: 'name' },
                    { description: 'description', name: 'name' },
                    { description: 'description', name: 'name' },
                  ],
                },
              ],
            },
            extracted_entities: [{}, {}, {}],
            extraction_criteria: [
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
            ],
            tool_metadata: [
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
            ],
          },
        },
        response: {
          completion_tokens: 0,
          cost: 0,
          llm: 'llm',
          prompt_tokens: 0,
          text: 'text',
          tool_calls: [
            { input: { Save: {} }, name: 'Save' },
            { input: { Save: {} }, name: 'Save' },
            { input: { Save: {} }, name: 'Save' },
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

  test('addDatum: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.addDatum('name', {
      step: {
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        prompt: {
          decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
          messages: [
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
          ],
          metadata: {
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
                    Probabilistic: {
                      source_cardinality_given_target_match: 0,
                      target_cardinality_given_source_match: 0,
                    },
                  },
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                },
                {
                  description: 'description',
                  name: 'name',
                  source_table: 'source_table',
                  target_table: 'target_table',
                  merge_strategy: {
                    Probabilistic: {
                      source_cardinality_given_target_match: 0,
                      target_cardinality_given_source_match: 0,
                    },
                  },
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                },
                {
                  description: 'description',
                  name: 'name',
                  source_table: 'source_table',
                  target_table: 'target_table',
                  merge_strategy: {
                    Probabilistic: {
                      source_cardinality_given_target_match: 0,
                      target_cardinality_given_source_match: 0,
                    },
                  },
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                },
              ],
              tables: [
                {
                  description: 'description',
                  name: 'name',
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                  expected_cardinality: 0,
                },
                {
                  description: 'description',
                  name: 'name',
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                  expected_cardinality: 0,
                },
                {
                  description: 'description',
                  name: 'name',
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                  expected_cardinality: 0,
                },
              ],
            },
            extracted_entities: [
              {
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
              {
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
              {
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
            ],
            extraction_criteria: [
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
            ],
            tool_metadata: [
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
            ],
            ocr_content: 'ocr_content',
            screenshot: await toFile(Buffer.from('# my file contents'), 'README.md'),
            url: 'url',
            web_flags: [
              {
                ariaLabel: 'ariaLabel',
                type: 'type',
                x: 0,
                y: 0,
                height: 0,
                href: 'href',
                number: 0,
                text: 'text',
                width: 0,
              },
              {
                ariaLabel: 'ariaLabel',
                type: 'type',
                x: 0,
                y: 0,
                height: 0,
                href: 'href',
                number: 0,
                text: 'text',
                width: 0,
              },
              {
                ariaLabel: 'ariaLabel',
                type: 'type',
                x: 0,
                y: 0,
                height: 0,
                href: 'href',
                number: 0,
                text: 'text',
                width: 0,
              },
            ],
          },
        },
        response: {
          completion_tokens: 0,
          cost: 0,
          llm: 'llm',
          prompt_tokens: 0,
          text: 'text',
          tool_calls: [
            {
              input: {
                Save: {
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
              },
              name: 'Save',
              result: { ToolQueued: 'ToolQueued' },
            },
            {
              input: {
                Save: {
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
              },
              name: 'Save',
              result: { ToolQueued: 'ToolQueued' },
            },
            {
              input: {
                Save: {
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
              },
              name: 'Save',
              result: { ToolQueued: 'ToolQueued' },
            },
          ],
        },
      },
    });
  });

  test('getNextUnverified', async () => {
    const responsePromise = client.admin.trainingDatasets.getNextUnverified('name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNextUnverified: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.trainingDatasets.getNextUnverified('name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('resetPending', async () => {
    const responsePromise = client.admin.trainingDatasets.resetPending('name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resetPending: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.trainingDatasets.resetPending('name', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('updateDatum: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.updateDatum(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        status: 'Unverified',
        step: {
          id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          prompt: {
            decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
            messages: [
              { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
              { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
              { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
            ],
            metadata: {
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
                  {
                    description: 'description',
                    name: 'name',
                    source_table: 'source_table',
                    target_table: 'target_table',
                  },
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
                    properties: [
                      { description: 'description', name: 'name' },
                      { description: 'description', name: 'name' },
                      { description: 'description', name: 'name' },
                    ],
                  },
                  {
                    description: 'description',
                    name: 'name',
                    properties: [
                      { description: 'description', name: 'name' },
                      { description: 'description', name: 'name' },
                      { description: 'description', name: 'name' },
                    ],
                  },
                  {
                    description: 'description',
                    name: 'name',
                    properties: [
                      { description: 'description', name: 'name' },
                      { description: 'description', name: 'name' },
                      { description: 'description', name: 'name' },
                    ],
                  },
                ],
              },
              extracted_entities: [{}, {}, {}],
              extraction_criteria: [
                { RelationshipExtraction: { relationship_name: 'relationship_name' } },
                { RelationshipExtraction: { relationship_name: 'relationship_name' } },
                { RelationshipExtraction: { relationship_name: 'relationship_name' } },
              ],
              tool_metadata: [
                {
                  description: 'description',
                  name: 'Save',
                  regex_validator: 'regex_validator',
                  tool_validator: { foo: 'bar' },
                },
                {
                  description: 'description',
                  name: 'Save',
                  regex_validator: 'regex_validator',
                  tool_validator: { foo: 'bar' },
                },
                {
                  description: 'description',
                  name: 'Save',
                  regex_validator: 'regex_validator',
                  tool_validator: { foo: 'bar' },
                },
              ],
            },
          },
          response: {
            completion_tokens: 0,
            cost: 0,
            llm: 'llm',
            prompt_tokens: 0,
            text: 'text',
            tool_calls: [
              { input: { Save: {} }, name: 'Save' },
              { input: { Save: {} }, name: 'Save' },
              { input: { Save: {} }, name: 'Save' },
            ],
          },
        },
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateDatum: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.updateDatum('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      status: 'Unverified',
      step: {
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        prompt: {
          decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
          messages: [
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
            { content: [{ Text: 'Text' }, { Text: 'Text' }, { Text: 'Text' }], role: 'user' },
          ],
          metadata: {
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
                    Probabilistic: {
                      source_cardinality_given_target_match: 0,
                      target_cardinality_given_source_match: 0,
                    },
                  },
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                },
                {
                  description: 'description',
                  name: 'name',
                  source_table: 'source_table',
                  target_table: 'target_table',
                  merge_strategy: {
                    Probabilistic: {
                      source_cardinality_given_target_match: 0,
                      target_cardinality_given_source_match: 0,
                    },
                  },
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                },
                {
                  description: 'description',
                  name: 'name',
                  source_table: 'source_table',
                  target_table: 'target_table',
                  merge_strategy: {
                    Probabilistic: {
                      source_cardinality_given_target_match: 0,
                      target_cardinality_given_source_match: 0,
                    },
                  },
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                },
              ],
              tables: [
                {
                  description: 'description',
                  name: 'name',
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                  expected_cardinality: 0,
                },
                {
                  description: 'description',
                  name: 'name',
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                  expected_cardinality: 0,
                },
                {
                  description: 'description',
                  name: 'name',
                  properties: [
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                    {
                      description: 'description',
                      name: 'name',
                      merge_strategy: 'Unique',
                      prop_type: 'String',
                    },
                  ],
                  expected_cardinality: 0,
                },
              ],
            },
            extracted_entities: [
              {
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
              {
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
              {
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
            ],
            extraction_criteria: [
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
              { RelationshipExtraction: { relationship_name: 'relationship_name' } },
            ],
            tool_metadata: [
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
              {
                description: 'description',
                name: 'Save',
                regex_validator: 'regex_validator',
                tool_validator: { foo: 'bar' },
              },
            ],
            ocr_content: 'ocr_content',
            screenshot: await toFile(Buffer.from('# my file contents'), 'README.md'),
            url: 'url',
            web_flags: [
              {
                ariaLabel: 'ariaLabel',
                type: 'type',
                x: 0,
                y: 0,
                height: 0,
                href: 'href',
                number: 0,
                text: 'text',
                width: 0,
              },
              {
                ariaLabel: 'ariaLabel',
                type: 'type',
                x: 0,
                y: 0,
                height: 0,
                href: 'href',
                number: 0,
                text: 'text',
                width: 0,
              },
              {
                ariaLabel: 'ariaLabel',
                type: 'type',
                x: 0,
                y: 0,
                height: 0,
                href: 'href',
                number: 0,
                text: 'text',
                width: 0,
              },
            ],
          },
        },
        response: {
          completion_tokens: 0,
          cost: 0,
          llm: 'llm',
          prompt_tokens: 0,
          text: 'text',
          tool_calls: [
            {
              input: {
                Save: {
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
              },
              name: 'Save',
              result: { ToolQueued: 'ToolQueued' },
            },
            {
              input: {
                Save: {
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
              },
              name: 'Save',
              result: { ToolQueued: 'ToolQueued' },
            },
            {
              input: {
                Save: {
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
              },
              name: 'Save',
              result: { ToolQueued: 'ToolQueued' },
            },
          ],
        },
      },
    });
  });
});
