// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflow', () => {
  test('create: only required params', async () => {
    const responsePromise = client.workflow.create({
      dataset_name: 'dataset_name',
      workflow: {
        name: 'name',
        starting_step: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        starting_table: 'starting_table',
        steps: [
          {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            children: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
            operation: { EnhanceProperties: ['string'] },
            table_name: 'table_name',
          },
        ],
      },
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
    const response = await client.workflow.create({
      dataset_name: 'dataset_name',
      workflow: {
        name: 'name',
        starting_step: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        starting_table: 'starting_table',
        steps: [
          {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            children: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
            operation: { EnhanceProperties: ['string'] },
            table_name: 'table_name',
          },
        ],
        default_banned_domains: ['string'],
        default_stop_conditions: {
          max_steps_without_save: 0,
          max_errors: 0,
          max_execution_time_secs: 0,
          max_total_steps: 0,
        },
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.workflow.update({
      dataset_name: 'dataset_name',
      workflow: {
        name: 'name',
        starting_step: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        starting_table: 'starting_table',
        steps: [
          {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            children: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
            operation: { EnhanceProperties: ['string'] },
            table_name: 'table_name',
          },
        ],
      },
      workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.workflow.update({
      dataset_name: 'dataset_name',
      workflow: {
        name: 'name',
        starting_step: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        starting_table: 'starting_table',
        steps: [
          {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            children: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
            operation: { EnhanceProperties: ['string'] },
            table_name: 'table_name',
          },
        ],
        default_banned_domains: ['string'],
        default_stop_conditions: {
          max_steps_without_save: 0,
          max_errors: 0,
          max_execution_time_secs: 0,
          max_total_steps: 0,
        },
      },
      workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('list', async () => {
    const responsePromise = client.workflow.list();
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
    await expect(client.workflow.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflow.list({ dataset_name: 'dataset_name' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workflow.delete({ workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.workflow.delete({ workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workflow.get({ workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.workflow.get({ workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  test('jobProgress: only required params', async () => {
    const responsePromise = client.workflow.jobProgress({
      workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('jobProgress: required and optional params', async () => {
    const response = await client.workflow.jobProgress({
      workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('jobs: only required params', async () => {
    const responsePromise = client.workflow.jobs({ workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('jobs: required and optional params', async () => {
    const response = await client.workflow.jobs({
      workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      status: 'Queued',
      step_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('trigger: only required params', async () => {
    const responsePromise = client.workflow.trigger({
      entity_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('trigger: required and optional params', async () => {
    const response = await client.workflow.trigger({
      entity_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
      workflow_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      banned_domains: ['string'],
      stop_config: {
        max_steps_without_save: 0,
        max_errors: 0,
        max_execution_time_secs: 0,
        max_total_steps: 0,
      },
    });
  });
});
