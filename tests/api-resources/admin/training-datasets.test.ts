// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
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

  test('getLabellerStats: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.getLabellerStats({ status: 'Unlabeled' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getLabellerStats: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.getLabellerStats({
      status: 'Unlabeled',
      dataset_name: 'dataset_name',
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
    });
  });

  test('getNextUnverified: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.getNextUnverified({
      dataset_name: 'dataset_name',
      status: 'Unlabeled',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNextUnverified: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.getNextUnverified({
      dataset_name: 'dataset_name',
      status: 'Unlabeled',
    });
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

  test('markSuspiciousDatum: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.markSuspiciousDatum({
      reason: 'reason',
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

  test('markSuspiciousDatum: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.markSuspiciousDatum({
      reason: 'reason',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('removeDatum: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.removeDatum({
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

  test('removeDatum: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.removeDatum({
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
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
      end_date: '2019-12-27T18:11:19.117Z',
      start_date: '2019-12-27T18:11:19.117Z',
      status: 'Unlabeled',
    });
  });

  test('updateDatum: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.updateDatum({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: 'Unlabeled',
      updated_tool_calls: [
        { input: { Save: {} }, name: 'Save' },
        { input: { Save: {} }, name: 'Save' },
        { input: { Save: {} }, name: 'Save' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateDatum: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.updateDatum({
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: 'Unlabeled',
      updated_tool_calls: [
        {
          input: {
            Save: {
              entities: [
                { id: 0, properties: { foo: 'string' }, type: 'type' },
                { id: 0, properties: { foo: 'string' }, type: 'type' },
                { id: 0, properties: { foo: 'string' }, type: 'type' },
              ],
              relationships: [
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
              ],
            },
          },
          name: 'Save',
          result: { ToolQueued: 'ToolQueued' },
        },
        {
          input: {
            Save: {
              entities: [
                { id: 0, properties: { foo: 'string' }, type: 'type' },
                { id: 0, properties: { foo: 'string' }, type: 'type' },
                { id: 0, properties: { foo: 'string' }, type: 'type' },
              ],
              relationships: [
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
              ],
            },
          },
          name: 'Save',
          result: { ToolQueued: 'ToolQueued' },
        },
        {
          input: {
            Save: {
              entities: [
                { id: 0, properties: { foo: 'string' }, type: 'type' },
                { id: 0, properties: { foo: 'string' }, type: 'type' },
                { id: 0, properties: { foo: 'string' }, type: 'type' },
              ],
              relationships: [
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
                { source: 0, target: 0, type: 'type', properties: { foo: 'string' } },
              ],
            },
          },
          name: 'Save',
          result: { ToolQueued: 'ToolQueued' },
        },
      ],
    });
  });

  test('uploadDatum: only required params', async () => {
    const responsePromise = client.admin.trainingDatasets.uploadDatum({
      dataset_name: await toFile(Buffer.from('# my file contents'), 'README.md'),
      step_bytes: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadDatum: required and optional params', async () => {
    const response = await client.admin.trainingDatasets.uploadDatum({
      dataset_name: await toFile(Buffer.from('# my file contents'), 'README.md'),
      step_bytes: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
