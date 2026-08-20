// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource code', () => {
  test('applyManualEdit: only required params', async () => {
    const responsePromise = client.code.applyManualEdit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code: 'code',
      filename: 'filename',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('applyManualEdit: required and optional params', async () => {
    const response = await client.code.applyManualEdit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code: 'code',
      filename: 'filename',
      run_pipeline: true,
    });
  });

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
      assistantMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      config: {
        llm_key: 'claude-sonnet-4-5',
        max_steps: 0,
        reminder_message: 'reminder_message',
        system_prompt: 'system_prompt',
      },
      connectorIds: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      filePaths: ['string'],
      overridePreviousMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      triggerWorkflowExecution: true,
      userMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('interruptGeneration: only required params', async () => {
    const responsePromise = client.code.interruptGeneration({
      chatSessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('interruptGeneration: required and optional params', async () => {
    const response = await client.code.interruptGeneration({
      chatSessionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
