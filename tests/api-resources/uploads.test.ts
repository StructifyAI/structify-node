// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  test('complete: only required params', async () => {
    const responsePromise = client.uploads.complete({
      blob_name: 'blob_name',
      content_type: 'content_type',
      target: 'chat_input',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: required and optional params', async () => {
    const response = await client.uploads.complete({
      blob_name: 'blob_name',
      content_type: 'content_type',
      target: 'chat_input',
      cache_final_rows: 0,
      cache_final_size_bytes: 0,
      cache_max_bytes: 0,
      cache_original_rows: 0,
      cache_original_size_bytes: 0,
      cache_truncated: true,
      chat_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      file_name: 'file_name',
      node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      output_schema: {},
    });
  });

  test('init: only required params', async () => {
    const responsePromise = client.uploads.init({
      content_type: 'content_type',
      file_size: 0,
      target: 'chat_input',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('init: required and optional params', async () => {
    const response = await client.uploads.init({
      content_type: 'content_type',
      file_size: 0,
      target: 'chat_input',
      chat_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
