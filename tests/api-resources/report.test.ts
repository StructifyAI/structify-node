// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource report', () => {
  test('missing: only required params', async () => {
    const responsePromise = client.report.missing({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('missing: required and optional params', async () => {
    const response = await client.report.missing({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      property: 'property',
      source_url: 'source_url',
    });
  });

  test('relationship: only required params', async () => {
    const responsePromise = client.report.relationship({ label: 'label' });
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
      label: 'label',
      from_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      source_url: 'source_url',
      to_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('step: only required params', async () => {
    const responsePromise = client.report.step({ step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('step: required and optional params', async () => {
    const response = await client.report.step({
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      message: 'message',
    });
  });

  test('wrong: only required params', async () => {
    const responsePromise = client.report.wrong({ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('wrong: required and optional params', async () => {
    const response = await client.report.wrong({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      property: 'property',
      source_url: 'source_url',
    });
  });
});
