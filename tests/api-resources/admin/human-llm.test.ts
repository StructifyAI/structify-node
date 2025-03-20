// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource humanLlm', () => {
  test('addSearchForJob: only required params', async () => {
    const responsePromise = client.admin.humanLlm.addSearchForJob({
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      search_query: 'search_query',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addSearchForJob: required and optional params', async () => {
    const response = await client.admin.humanLlm.addSearchForJob({
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      search_query: 'search_query',
    });
  });

  test('addToDataset: only required params', async () => {
    const responsePromise = client.admin.humanLlm.addToDataset({
      extraction_criteria_met: true,
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tool_calls: [{ input: { Save: {} }, name: 'Exit' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addToDataset: required and optional params', async () => {
    const response = await client.admin.humanLlm.addToDataset({
      extraction_criteria_met: true,
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tool_calls: [
        {
          input: {
            Save: {
              entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
              relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
            },
          },
          name: 'Exit',
          result: { ToolQueued: 'ToolQueued' },
        },
      ],
    });
  });

  test('finishJob: only required params', async () => {
    const responsePromise = client.admin.humanLlm.finishJob({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: 'Queued',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('finishJob: required and optional params', async () => {
    const response = await client.admin.humanLlm.finishJob({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: 'Queued',
    });
  });

  test('getJobs', async () => {
    const responsePromise = client.admin.humanLlm.getJobs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getJobs: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.admin.humanLlm.getJobs({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('getJobs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.humanLlm.getJobs({ status: 'Queued' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

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

  test('prelabelStep', async () => {
    const responsePromise = client.admin.humanLlm.prelabelStep('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('prelabelStep: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.humanLlm.prelabelStep('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
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

  test('startNextJob: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.humanLlm.startNextJob(
        { job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('updateStep: only required params', async () => {
    const responsePromise = client.admin.humanLlm.updateStep({
      extraction_criteria_met: true,
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tool_calls: [{ input: { Save: {} }, name: 'Exit' }],
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
      extraction_criteria_met: true,
      job_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      tool_calls: [
        {
          input: {
            Save: {
              entities: [{ id: 0, properties: { foo: 'string' }, type: 'type' }],
              relationships: [{ source: 0, target: 0, type: 'type', properties: { foo: 'string' } }],
            },
          },
          name: 'Exit',
          result: { ToolQueued: 'ToolQueued' },
        },
      ],
    });
  });
});
