// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('createEdge: only required params', async () => {
    const responsePromise = client.sessions.createEdge('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      source_node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      target_node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createEdge: required and optional params', async () => {
    const response = await client.sessions.createEdge('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      source_node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      target_node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('createNode: only required params', async () => {
    const responsePromise = client.sessions.createNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      docstring: 'docstring',
      function_name: 'function_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createNode: required and optional params', async () => {
    const response = await client.sessions.createNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      docstring: 'docstring',
      function_name: 'function_name',
      output_schema: {},
    });
  });

  test('createSession: only required params', async () => {
    const responsePromise = client.sessions.createSession({
      chat_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createSession: required and optional params', async () => {
    const response = await client.sessions.createSession({
      chat_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('getDag', async () => {
    const responsePromise = client.sessions.getDag('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDag: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getDag('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getEvents', async () => {
    const responsePromise = client.sessions.getEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getEvents: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getEvents(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getNodeOutputData: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getNodeOutputData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getNodeProgress', async () => {
    const responsePromise = client.sessions.getNodeProgress('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNodeProgress: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getNodeProgress('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('markErrored: only required params', async () => {
    const responsePromise = client.sessions.markErrored('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      error_message: 'error_message',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('markErrored: required and optional params', async () => {
    const response = await client.sessions.markErrored('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      error_message: 'error_message',
      error_traceback: 'error_traceback',
    });
  });

  test('updateNode: only required params', async () => {
    const responsePromise = client.sessions.updateNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      execution_status: 'Unexecuted',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateNode: required and optional params', async () => {
    const response = await client.sessions.updateNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      execution_status: 'Unexecuted',
      error_message: 'error_message',
      error_traceback: 'error_traceback',
      execution_time_ms: 0,
    });
  });

  test('updateNodeProgress: only required params', async () => {
    const responsePromise = client.sessions.updateNodeProgress('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      progress: { foo: 'bar' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateNodeProgress: required and optional params', async () => {
    const response = await client.sessions.updateNodeProgress('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      progress: { foo: 'bar' },
    });
  });

  test('uploadNodeOutputData: only required params', async () => {
    const responsePromise = client.sessions.uploadNodeOutputData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadNodeOutputData: required and optional params', async () => {
    const response = await client.sessions.uploadNodeOutputData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
