// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource teams', () => {
  test('list', async () => {
    const responsePromise = client.admin.teams.list();
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
    await expect(client.admin.teams.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.teams.list({ limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('cancelSubscription: only required params', async () => {
    const responsePromise = client.admin.teams.cancelSubscription({
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancelSubscription: required and optional params', async () => {
    const response = await client.admin.teams.cancelSubscription({
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('createSubscription: only required params', async () => {
    const responsePromise = client.admin.teams.createSubscription({
      billing_interval: 'billing_interval',
      is_active: true,
      subscription_tier: 'free',
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createSubscription: required and optional params', async () => {
    const response = await client.admin.teams.createSubscription({
      billing_interval: 'billing_interval',
      is_active: true,
      subscription_tier: 'free',
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      external_customer_id: 'external_customer_id',
      external_price_id: 'external_price_id',
      external_subscription_id: 'external_subscription_id',
    });
  });

  test('grantCredits: only required params', async () => {
    const responsePromise = client.admin.teams.grantCredits({
      amount: 0,
      source_type: 'source_type',
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('grantCredits: required and optional params', async () => {
    const response = await client.admin.teams.grantCredits({
      amount: 0,
      source_type: 'source_type',
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      expires_at: '2019-12-27T18:11:19.117Z',
      source_ref: 'source_ref',
      starts_at: '2019-12-27T18:11:19.117Z',
    });
  });
});
