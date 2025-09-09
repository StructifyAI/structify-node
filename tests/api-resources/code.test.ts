// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource code', () => {
  test('generateCode: only required params', async () => {
    const responsePromise = client.code.generateCode({
      chatSessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      prompt: 'prompt',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateCode: required and optional params', async () => {
    const response = await client.code.generateCode({
      chatSessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      prompt: 'prompt',
      fileContents: [{ content: 'content', path: 'path' }],
      model: {},
    });
  });
});
