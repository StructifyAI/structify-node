// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const structify = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource label', () => {
  test('update: only required params', async () => {
    const responsePromise = structify.label.update({
      date: '2019-12-27T18:11:19.117Z',
      steps: [
        {
          prompt: {
            decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
            messages: [
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
            ],
          },
          response: {
            completion_tokens: 0,
            cost: 0,
            llm: 'string',
            prompt_tokens: 0,
            text: 'string',
            tool_calls: [
              { input: { Save: {} }, name: 'Save' },
              { input: { Save: {} }, name: 'Save' },
              { input: { Save: {} }, name: 'Save' },
            ],
          },
        },
        {
          prompt: {
            decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
            messages: [
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
            ],
          },
          response: {
            completion_tokens: 0,
            cost: 0,
            llm: 'string',
            prompt_tokens: 0,
            text: 'string',
            tool_calls: [
              { input: { Save: {} }, name: 'Save' },
              { input: { Save: {} }, name: 'Save' },
              { input: { Save: {} }, name: 'Save' },
            ],
          },
        },
        {
          prompt: {
            decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
            messages: [
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
            ],
          },
          response: {
            completion_tokens: 0,
            cost: 0,
            llm: 'string',
            prompt_tokens: 0,
            text: 'string',
            tool_calls: [
              { input: { Save: {} }, name: 'Save' },
              { input: { Save: {} }, name: 'Save' },
              { input: { Save: {} }, name: 'Save' },
            ],
          },
        },
      ],
      uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await structify.label.update({
      date: '2019-12-27T18:11:19.117Z',
      steps: [
        {
          prompt: {
            decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
            human_llm_metadata: {
              descriptor: {
                description: 'string',
                name: 'string',
                relationships: [
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                ],
                tables: [
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                ],
              },
              run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_email: 'string',
            },
            messages: [
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
            ],
            metadata: {
              conditioning_prompt: 'string',
              dataset_descriptor: {
                description: 'string',
                name: 'string',
                relationships: [
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                ],
                tables: [
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                ],
              },
              extracted_entities: [
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
              ],
              screenshot: await toFile(Buffer.from('# my file contents'), 'README.md'),
              tool_metadata: [
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
              ],
              url: 'string',
              web_flags: [
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
              ],
            },
          },
          response: {
            completion_tokens: 0,
            cost: 0,
            llm: 'string',
            prompt_tokens: 0,
            text: 'string',
            tool_calls: [
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
            ],
          },
        },
        {
          prompt: {
            decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
            human_llm_metadata: {
              descriptor: {
                description: 'string',
                name: 'string',
                relationships: [
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                ],
                tables: [
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                ],
              },
              run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_email: 'string',
            },
            messages: [
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
            ],
            metadata: {
              conditioning_prompt: 'string',
              dataset_descriptor: {
                description: 'string',
                name: 'string',
                relationships: [
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                ],
                tables: [
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                ],
              },
              extracted_entities: [
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
              ],
              screenshot: await toFile(Buffer.from('# my file contents'), 'README.md'),
              tool_metadata: [
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
              ],
              url: 'string',
              web_flags: [
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
              ],
            },
          },
          response: {
            completion_tokens: 0,
            cost: 0,
            llm: 'string',
            prompt_tokens: 0,
            text: 'string',
            tool_calls: [
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
            ],
          },
        },
        {
          prompt: {
            decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
            human_llm_metadata: {
              descriptor: {
                description: 'string',
                name: 'string',
                relationships: [
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                ],
                tables: [
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                ],
              },
              run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              user_email: 'string',
            },
            messages: [
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
              { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
            ],
            metadata: {
              conditioning_prompt: 'string',
              dataset_descriptor: {
                description: 'string',
                name: 'string',
                relationships: [
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                  { description: 'string', name: 'string', source_table: 'string', target_table: 'string' },
                ],
                tables: [
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                  {
                    description: 'string',
                    name: 'string',
                    properties: [
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                      { description: 'string', name: 'string' },
                    ],
                  },
                ],
              },
              extracted_entities: [
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
                {
                  entities: [
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                    { id: 0, properties: { foo: 'string' }, type: 'string' },
                  ],
                  relationships: [
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                    { source: 0, target: 0, type: 'string' },
                  ],
                },
              ],
              screenshot: await toFile(Buffer.from('# my file contents'), 'README.md'),
              tool_metadata: [
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
                { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
              ],
              url: 'string',
              web_flags: [
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
                { ariaLabel: 'string', height: 0, text: 'string', type: 'string', width: 0, x: 0, y: 0 },
              ],
            },
          },
          response: {
            completion_tokens: 0,
            cost: 0,
            llm: 'string',
            prompt_tokens: 0,
            text: 'string',
            tool_calls: [
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
              {
                input: {
                  Save: {
                    entities: [
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                      { id: 0, properties: { foo: 'string' }, type: 'string' },
                    ],
                    relationships: [
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                      { source: 0, target: 0, type: 'string' },
                    ],
                  },
                },
                name: 'Save',
                result: { ToolQueued: 'string' },
              },
            ],
          },
        },
      ],
      uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('getMessages', async () => {
    const responsePromise = structify.label.getMessages();
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
    await expect(structify.label.getMessages({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('getMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      structify.label.getMessages(
        { uuid: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('llmAssist', async () => {
    const responsePromise = structify.label.llmAssist('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      structify.label.llmAssist('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('run: only required params', async () => {
    const responsePromise = structify.label.run({ dataset_name: 'string', SECIngestor: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('run: required and optional params', async () => {
    const response = await structify.label.run({
      dataset_name: 'string',
      SECIngestor: { accession_number: 'string', quarter: 0, year: 0 },
      custom_instruction: 'string',
    });
  });

  test('submit: only required params', async () => {
    const responsePromise = structify.label.submit('string', [{ Save: {} }, { Save: {} }, { Save: {} }]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submit: required and optional params', async () => {
    const response = await structify.label.submit('string', [
      {
        Save: {
          entities: [
            { id: 0, properties: { foo: 'string' }, type: 'string' },
            { id: 0, properties: { foo: 'string' }, type: 'string' },
            { id: 0, properties: { foo: 'string' }, type: 'string' },
          ],
          relationships: [
            { source: 0, target: 0, type: 'string' },
            { source: 0, target: 0, type: 'string' },
            { source: 0, target: 0, type: 'string' },
          ],
        },
      },
      {
        Save: {
          entities: [
            { id: 0, properties: { foo: 'string' }, type: 'string' },
            { id: 0, properties: { foo: 'string' }, type: 'string' },
            { id: 0, properties: { foo: 'string' }, type: 'string' },
          ],
          relationships: [
            { source: 0, target: 0, type: 'string' },
            { source: 0, target: 0, type: 'string' },
            { source: 0, target: 0, type: 'string' },
          ],
        },
      },
      {
        Save: {
          entities: [
            { id: 0, properties: { foo: 'string' }, type: 'string' },
            { id: 0, properties: { foo: 'string' }, type: 'string' },
            { id: 0, properties: { foo: 'string' }, type: 'string' },
          ],
          relationships: [
            { source: 0, target: 0, type: 'string' },
            { source: 0, target: 0, type: 'string' },
            { source: 0, target: 0, type: 'string' },
          ],
        },
      },
    ]);
  });
});
