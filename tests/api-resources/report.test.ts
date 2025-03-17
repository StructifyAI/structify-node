// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource report', () => {
  test('missing: only required params', async () => {
    const responsePromise = client.report.missing({ id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('missing: required and optional params', async () => {
    const response = await client.report.missing({ id: 0, property: 'property', source_url: 'source_url' });
  });

  test('relationship: only required params', async () => {
    const responsePromise = client.report.relationship({ relationship_type: 'relationship_type' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('relationship: required and optional params', async () => {
    const response = await client.report.relationship({
      relationship_type: 'relationship_type',
      source_id: 0,
      source_url: 'source_url',
      target_id: 0,
    });
  });

  test('step: only required params', async () => {
    const responsePromise = client.report.step({ step_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('step: required and optional params', async () => {
    const response = await client.report.step({ step_id: 0, message: 'message' });
  });

  test('wrong: only required params', async () => {
    const responsePromise = client.report.wrong({ id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('wrong: required and optional params', async () => {
    const response = await client.report.wrong({ id: 0, property: 'property', source_url: 'source_url' });
  });
});
