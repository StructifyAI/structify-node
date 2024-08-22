// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  test('list', async () => {
    const responsePromise = client.documents.list();
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
    await expect(client.documents.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.documents.delete({ file_path: 'file_path' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.documents.delete({ file_path: 'file_path' });
  });

  test('download: required and optional params', async () => {
    const response = await client.documents.download({ file_path: 'file_path' });
  });

  test('upload: only required params', async () => {
    const responsePromise = client.documents.upload({
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      file_type: 'Text',
      path: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: required and optional params', async () => {
    const response = await client.documents.upload({
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      file_type: 'Text',
      path: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
