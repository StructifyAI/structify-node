// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trainingDatasets', () => {
  test('list', async () => {
    const responsePromise = client.admin.trainingDatasets.list();
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
    await expect(client.admin.trainingDatasets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('add: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.add({ dataset_name: 'dataset_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('add: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.add({ dataset_name: 'dataset_name' });
  });

  test('addDatum: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.addDatum({
      dataset_name: 'dataset_name',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addDatum: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.addDatum({
      dataset_name: 'dataset_name',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('getNextUnverified: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.getNextUnverified({ dataset_name: 'dataset_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNextUnverified: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.getNextUnverified({ dataset_name: 'dataset_name' });
  });

  test('getStepById: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.getStepById({
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getStepById: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.getStepById({
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('listDatums: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.listDatums({ dataset_name: 'dataset_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listDatums: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.listDatums({ dataset_name: 'dataset_name' });
  });

  test('resetPending: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.resetPending({ dataset_name: 'dataset_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resetPending: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.resetPending({ dataset_name: 'dataset_name' });
  });

  test('size: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.size({ dataset_name: 'dataset_name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('size: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.size({
      dataset_name: 'dataset_name',
      status: 'Unlabeled',
    });
  });
});
