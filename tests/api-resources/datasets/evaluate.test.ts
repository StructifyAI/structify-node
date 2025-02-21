// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluate', () => {
  test('list', async () => {
    const responsePromise = client.datasets.evaluate.list();
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
    await expect(client.datasets.evaluate.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.datasets.evaluate.list({ limit: 1, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.datasets.evaluate.delete({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.datasets.evaluate.delete({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  // infinite array recursion unsupported in prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.datasets.evaluate.get({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // infinite array recursion unsupported in prism
  test.skip('get: required and optional params', async () => {
    const response = await client.datasets.evaluate.get({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('run: only required params', async () => {
    const responsePromise = client.datasets.evaluate.run({
      dataset_1: 'dataset_1',
      dataset_2: 'dataset_2',
      dataset_2_is_ground_truth: true,
      email_1: 'email_1',
      email_2: 'email_2',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('run: required and optional params', async () => {
    const response = await client.datasets.evaluate.run({
      dataset_1: 'dataset_1',
      dataset_2: 'dataset_2',
      dataset_2_is_ground_truth: true,
      email_1: 'email_1',
      email_2: 'email_2',
    });
  });

  test('status: only required params', async () => {
    const responsePromise = client.datasets.evaluate.status({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: required and optional params', async () => {
    const response = await client.datasets.evaluate.status({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });
});
