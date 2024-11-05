// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource humanLlm', () => {
  test('getNextStep: only required params', async () => {
    const responsePromise = client.admin.humanLlm.getNextStep({
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNextStep: required and optional params', async () => {
    const response = await client.admin.humanLlm.getNextStep({
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('startNextJob', async () => {
    const responsePromise = client.admin.humanLlm.startNextJob();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('startNextJob: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.admin.humanLlm.startNextJob({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('updateStep: only required params', async () => {
    const responsePromise = client.admin.humanLlm.updateStep({
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tool_calls: [
        { input: { Save: {} }, name: 'Save' },
        { input: { Save: {} }, name: 'Save' },
        { input: { Save: {} }, name: 'Save' },
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

  test('updateStep: required and optional params', async () => {
    const response = await client.admin.humanLlm.updateStep({
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    });
  });
});
