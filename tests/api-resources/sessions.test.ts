// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('confirmNode: only required params', async () => {
    const responsePromise = client.sessions.confirmNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      confirmed: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('confirmNode: required and optional params', async () => {
    const response = await client.sessions.confirmNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      confirmed: true,
    });
  });

  test('createSession: only required params', async () => {
    const responsePromise = client.sessions.createSession({
      chat_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createSession: required and optional params', async () => {
    const response = await client.sessions.createSession({
      chat_session_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      parent_chat_message_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      workflow_schedule_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('editNodeOutput: only required params', async () => {
    const responsePromise = client.sessions.editNodeOutput('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      edits: [
        {
          column_name: 'column_name',
          row_index: 0,
          value: 'value',
          type: 'edit_cell',
        },
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

  test('editNodeOutput: required and optional params', async () => {
    const response = await client.sessions.editNodeOutput('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      edits: [
        {
          column_name: 'column_name',
          row_index: 0,
          value: 'value',
          type: 'edit_cell',
        },
      ],
    });
  });

  test('finalizeDag: only required params', async () => {
    const responsePromise = client.sessions.finalizeDag('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      edges: [{ source_node_index: 0, target_node_index: 0 }],
      nodes: [
        {
          code: 'code',
          code_md5_hash: 'code_md5_hash',
          docstring: 'docstring',
          function_name: 'function_name',
        },
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

  test('finalizeDag: required and optional params', async () => {
    const response = await client.sessions.finalizeDag('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      edges: [{ source_node_index: 0, target_node_index: 0 }],
      nodes: [
        {
          code: 'code',
          code_md5_hash: 'code_md5_hash',
          docstring: 'docstring',
          function_name: 'function_name',
          connector_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      ],
      dashboard_layout: {
        dashboards: [
          {
            components: [
              {
                node_name: 'node_name',
                title: 'title',
                description: 'description',
                span: 0,
              },
            ],
            controls: [
              {
                id: 'id',
                field: 'field',
                label: 'label',
                options: [{ label: 'label', value: 'value' }],
                type: 'dropdown',
                default_value: 'default_value',
              },
            ],
            datasetNodeName: 'datasetNodeName',
            description: 'description',
            title: 'title',
          },
        ],
        title: 'title',
        description: 'description',
      },
    });
  });

  test('getDag', async () => {
    const responsePromise = client.sessions.getDag('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDag: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getDag('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getEvents', async () => {
    const responsePromise = client.sessions.getEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getEvents: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getEvents('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getEvents: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getEvents(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          limit: 0,
          offset: 0,
          search_term: 'search_term',
          status: 'Queued',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getNode', async () => {
    const responsePromise = client.sessions.getNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNode: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getNodeLogs', async () => {
    const responsePromise = client.sessions.getNodeLogs('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNodeLogs: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getNodeLogs('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getNodeOutputData: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getNodeOutputData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getNodeProgress', async () => {
    const responsePromise = client.sessions.getNodeProgress('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getNodeProgress: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.getNodeProgress('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('killJobs', async () => {
    const responsePromise = client.sessions.killJobs('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('markErrored: only required params', async () => {
    const responsePromise = client.sessions.markErrored('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      error_message: 'error_message',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('markErrored: required and optional params', async () => {
    const response = await client.sessions.markErrored('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      error_message: 'error_message',
      autofix: true,
      autofix_context: 'creation',
      error_traceback: 'error_traceback',
    });
  });

  test('requestConfirmation: only required params', async () => {
    const responsePromise = client.sessions.requestConfirmation('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      operation: 'tag',
      row_count: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('requestConfirmation: required and optional params', async () => {
    const response = await client.sessions.requestConfirmation('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      operation: 'tag',
      row_count: 0,
    });
  });

  test('updateNode: only required params', async () => {
    const responsePromise = client.sessions.updateNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      execution_status: 'Unexecuted',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateNode: required and optional params', async () => {
    const response = await client.sessions.updateNode('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      execution_status: 'Unexecuted',
      error_message: 'error_message',
      error_traceback: 'error_traceback',
      execution_time_ms: 0,
    });
  });

  test('updateNodeProgress: only required params', async () => {
    const responsePromise = client.sessions.updateNodeProgress('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      current: 0,
      elapsed_seconds: 0,
      title: 'title',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateNodeProgress: required and optional params', async () => {
    const response = await client.sessions.updateNodeProgress('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      current: 0,
      elapsed_seconds: 0,
      title: 'title',
      total: 0,
    });
  });

  test('uploadDashboardLayout: only required params', async () => {
    const responsePromise = client.sessions.uploadDashboardLayout('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      layout: { dashboards: [{ components: [{ node_name: 'node_name', title: 'title' }] }], title: 'title' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadDashboardLayout: required and optional params', async () => {
    const response = await client.sessions.uploadDashboardLayout('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      layout: {
        dashboards: [
          {
            components: [
              {
                node_name: 'node_name',
                title: 'title',
                description: 'description',
                span: 0,
              },
            ],
            controls: [
              {
                id: 'id',
                field: 'field',
                label: 'label',
                options: [{ label: 'label', value: 'value' }],
                type: 'dropdown',
                default_value: 'default_value',
              },
            ],
            datasetNodeName: 'datasetNodeName',
            description: 'description',
            title: 'title',
          },
        ],
        title: 'title',
        description: 'description',
      },
    });
  });

  test('uploadNodeOutputData: only required params', async () => {
    const responsePromise = client.sessions.uploadNodeOutputData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadNodeOutputData: required and optional params', async () => {
    const response = await client.sessions.uploadNodeOutputData('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      output_schema: 'output_schema',
    });
  });

  test('uploadNodeVisualizationOutput: only required params', async () => {
    const responsePromise = client.sessions.uploadNodeVisualizationOutput(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { visualization_output: { foo: 'bar' } },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadNodeVisualizationOutput: required and optional params', async () => {
    const response = await client.sessions.uploadNodeVisualizationOutput(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { visualization_output: { foo: 'bar' } },
    );
  });
});
