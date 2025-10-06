// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource functionalTests', () => {
  test('create', async () => {
    const responsePromise = client.admin.functionalTests.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.admin.functionalTests.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.admin.functionalTests.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('getResults', async () => {
    const responsePromise = client.admin.functionalTests.getResults();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getResults: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.functionalTests.getResults({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getResults: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.functionalTests.getResults(
        { functional_test_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', sample_name: 'sample_name' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('linkChat: only required params', async () => {
    const responsePromise = client.admin.functionalTests.linkChat({
      chat_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      functional_test_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      results: { foo: 'bar' },
      sample_name: 'sample_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('linkChat: required and optional params', async () => {
    const response = await client.admin.functionalTests.linkChat({
      chat_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      functional_test_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      results: { foo: 'bar' },
      sample_name: 'sample_name',
    });
  });

  test('updateResults: only required params', async () => {
    const responsePromise = client.admin.functionalTests.updateResults({
      chat_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      functional_test_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      results: { foo: 'bar' },
      sample_name: 'sample_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateResults: required and optional params', async () => {
    const response = await client.admin.functionalTests.updateResults({
      chat_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      functional_test_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      results: { foo: 'bar' },
      sample_name: 'sample_name',
    });
  });
});
