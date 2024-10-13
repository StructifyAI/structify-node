// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource label', () => {
  test('verify: only required params', async () => {
    const responsePromise = client.label.verify({
      better_response: 'better_response',
      step_id: 'step_id',
      verify_type: 'DeprecatedToolCalling',
      worse_response: 'worse_response',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('verify: required and optional params', async () => {
    const response = await client.label.verify({
      better_response: 'better_response',
      step_id: 'step_id',
      verify_type: 'DeprecatedToolCalling',
      worse_response: 'worse_response',
    });
  });
});
