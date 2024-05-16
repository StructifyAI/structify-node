// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const structify = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource label', () => {
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

  test('llmAssist: only required params', async () => {
    const responsePromise = structify.label.llmAssist({
      decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
      messages: [
        { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
        { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
        { content: [{ Text: 'string' }, { Text: 'string' }, { Text: 'string' }], role: 'user' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('llmAssist: required and optional params', async () => {
    const response = await structify.label.llmAssist({
      decoding_params: { parameters: [{ MaxTokens: 0 }, { MaxTokens: 0 }, { MaxTokens: 0 }] },
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
          tables: [
            {
              description: 'string',
              name: 'string',
              properties: [
                { description: 'string', name: 'string' },
                { description: 'string', name: 'string' },
                { description: 'string', name: 'string' },
              ],
              relationships: [
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
              relationships: [
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
              relationships: [
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
        tool_metadata: [
          { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
          { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
          { description: 'string', name: 'Save', regex_validator: 'string', tool_validator: {} },
        ],
        web_flags: [
          { ariaLabel: 'string', text: 'string', type: 'string', x: 0, y: 0 },
          { ariaLabel: 'string', text: 'string', type: 'string', x: 0, y: 0 },
          { ariaLabel: 'string', text: 'string', type: 'string', x: 0, y: 0 },
        ],
      },
    });
  });

  test('run: only required params', async () => {
    const responsePromise = structify.label.run({ dataset_name: 'string', Text: { text_content: 'string' } });
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
      Text: { text_content: 'string' },
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
