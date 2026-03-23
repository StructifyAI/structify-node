// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connector', () => {
  test('clone: only required params', async () => {
    const responsePromise = client.admin.connector.clone({
      connectors: [
        {
          known_connector_type: 'known_connector_type',
          name: 'name',
          source_connector_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      source_membership_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      source_team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      target_team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('clone: required and optional params', async () => {
    const response = await client.admin.connector.clone({
      connectors: [
        {
          known_connector_type: 'known_connector_type',
          name: 'name',
          source_connector_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      source_membership_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      source_team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      target_team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('listTeamConnectors', async () => {
    const responsePromise = client.admin.connector.listTeamConnectors('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listTeamConnectors: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.admin.connector.listTeamConnectors('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('setDatahubConfig: only required params', async () => {
    const responsePromise = client.admin.connector.setDatahubConfig({
      connector_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setDatahubConfig: required and optional params', async () => {
    const response = await client.admin.connector.setDatahubConfig({
      connector_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      datahub_ingestion_type: 'postgres',
      datahub_secret_map: { foo: 'string' },
    });
  });
});
