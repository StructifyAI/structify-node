// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource wiki', () => {
  test('create: only required params', async () => {
    const responsePromise = client.wiki.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: { foo: 'bar' },
      slug: 'slug',
      title: 'title',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.wiki.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: { foo: 'bar' },
      slug: 'slug',
      title: 'title',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.wiki.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'slug', {
      content: { foo: 'bar' },
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
    const response = await client.wiki.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'slug', {
      content: { foo: 'bar' },
      title: 'title',
    });
  });

  test('list', async () => {
    const responsePromise = client.wiki.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    await expect(
      client.wiki.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.wiki.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'slug');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.wiki.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'slug', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.wiki.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'slug');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.wiki.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'slug', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });
});
