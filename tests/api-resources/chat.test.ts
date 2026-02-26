// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  test('addCollaborator: only required params', async () => {
    const responsePromise = client.chat.addCollaborator('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      email: 'email',
      role: 'viewer',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addCollaborator: required and optional params', async () => {
    const response = await client.chat.addCollaborator('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      email: 'email',
      role: 'viewer',
    });
  });

  test('addGitCommit: only required params', async () => {
    const responsePromise = client.chat.addGitCommit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      commit_hash: 'commit_hash',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addGitCommit: required and optional params', async () => {
    const response = await client.chat.addGitCommit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      commit_hash: 'commit_hash',
    });
  });

  test('adminIssueFound: only required params', async () => {
    const responsePromise = client.chat.adminIssueFound('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      message: 'message',
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

  test('adminIssueFound: required and optional params', async () => {
    const response = await client.chat.adminIssueFound('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      message: 'message',
      title: 'title',
    });
  });

  test('copy: only required params', async () => {
    const responsePromise = client.chat.copy({
      copy_name: 'copy_name',
      source_chat_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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

  test('copy: required and optional params', async () => {
    const response = await client.chat.copy({
      copy_name: 'copy_name',
      source_chat_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      copy_inputs: true,
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('copyNodeOutputByCodeHash: only required params', async () => {
    const responsePromise = client.chat.copyNodeOutputByCodeHash('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code_md5_hash: 'code_md5_hash',
      new_node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('copyNodeOutputByCodeHash: required and optional params', async () => {
    const response = await client.chat.copyNodeOutputByCodeHash('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code_md5_hash: 'code_md5_hash',
      new_node_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('createSession: only required params', async () => {
    const responsePromise = client.chat.createSession({ team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createSession: required and optional params', async () => {
    const response = await client.chat.createSession({
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      config: {
        is_onboarding_session: true,
        llm_key: 'vllm.gpt-5-mini-2025-08-07',
        max_steps: 0,
        reminder_message: 'reminder_message',
        system_prompt: 'system_prompt',
      },
      ephemeral: true,
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('deleteInputFile: only required params', async () => {
    const responsePromise = client.chat.deleteInputFile('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      filenames: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteInputFile: required and optional params', async () => {
    const response = await client.chat.deleteInputFile('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      filenames: ['string'],
    });
  });

  test('deleteSession', async () => {
    const responsePromise = client.chat.deleteSession('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteSession: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.deleteSession('session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getDependencies', async () => {
    const responsePromise = client.chat.getDependencies('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getDependencies: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.getDependencies('session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getGitCommit', async () => {
    const responsePromise = client.chat.getGitCommit('chat_id', 'commit_hash');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getGitCommit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.getGitCommit('chat_id', 'commit_hash', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getPartialChats', async () => {
    const responsePromise = client.chat.getPartialChats('chat_session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getPartialChats: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.getPartialChats('chat_session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('getSession', async () => {
    const responsePromise = client.chat.getSession('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSession: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.chat.getSession('session_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('getSessionTimeline', async () => {
    const responsePromise = client.chat.getSessionTimeline('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getSessionTimeline: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.getSessionTimeline('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('grantAdminOverride: only required params', async () => {
    const responsePromise = client.chat.grantAdminOverride('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      duration_hours: 0,
      role: 'viewer',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('grantAdminOverride: required and optional params', async () => {
    const response = await client.chat.grantAdminOverride('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      duration_hours: 0,
      role: 'viewer',
    });
  });

  test('listCollaborators', async () => {
    const responsePromise = client.chat.listCollaborators('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listCollaborators: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.listCollaborators('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('listInputFiles', async () => {
    const responsePromise = client.chat.listInputFiles('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listInputFiles: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.listInputFiles('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('listSessions: only required params', async () => {
    const responsePromise = client.chat.listSessions({ team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listSessions: required and optional params', async () => {
    const response = await client.chat.listSessions({
      team_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      limit: 0,
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('listTemplates', async () => {
    const responsePromise = client.chat.listTemplates();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listTemplates: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.chat.listTemplates({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('loadFiles: only required params', async () => {
    const responsePromise = client.chat.loadFiles({ chat_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('loadFiles: required and optional params', async () => {
    const response = await client.chat.loadFiles({
      chat_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      commit_hash: 'commit_hash',
    });
  });

  // Mock server doesn't support application/octet-stream responses
  test.skip('loadInputFile: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.loadInputFile('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', 'filename', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('loadInputFiles', async () => {
    const responsePromise = client.chat.loadInputFiles('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('loadInputFiles: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.loadInputFiles('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('loadInputFiles: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.loadInputFiles(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { since: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('makePermanent', async () => {
    const responsePromise = client.chat.makePermanent('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('makePermanent: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.makePermanent('session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('removeCollaborator', async () => {
    const responsePromise = client.chat.removeCollaborator(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeCollaborator: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.removeCollaborator(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('revertToCommit: only required params', async () => {
    const responsePromise = client.chat.revertToCommit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      commit_hash: 'commit_hash',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('revertToCommit: required and optional params', async () => {
    const response = await client.chat.revertToCommit('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      commit_hash: 'commit_hash',
    });
  });

  test('simulatePrompt: only required params', async () => {
    const responsePromise = client.chat.simulatePrompt('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      chat_prompt: {
        decoding_params: { parameters: [{ MaxTokens: 0 }] },
        messages: [{ content: [{ Text: 'Text' }], role: 'user' }],
        metadata: {
          dataset_descriptor: {
            description: 'description',
            name: 'name',
            relationships: [
              {
                description: 'description',
                name: 'name',
                source_table: 'source_table',
                target_table: 'target_table',
              },
            ],
            tables: [
              {
                description: 'description',
                name: 'name',
                properties: [{ description: 'description', name: 'name' }],
              },
            ],
          },
          extracted_entities: [
            {
              entities: [
                {
                  id: 0,
                  properties: { foo: 'string' },
                  type: 'type',
                },
              ],
            },
          ],
          extraction_criteria: [{ relationship_name: 'relationship_name' }],
          formatter_specific: { ImageMeta: { image: 'image' } },
          tool_metadata: [
            {
              description: 'description',
              name: 'Exit',
              regex_validator: 'regex_validator',
            },
          ],
        },
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

  test('simulatePrompt: required and optional params', async () => {
    const response = await client.chat.simulatePrompt('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      chat_prompt: {
        decoding_params: { parameters: [{ MaxTokens: 0 }] },
        messages: [{ content: [{ Text: 'Text' }], role: 'user' }],
        metadata: {
          dataset_descriptor: {
            description: 'description',
            name: 'name',
            relationships: [
              {
                description: 'description',
                name: 'name',
                source_table: 'source_table',
                target_table: 'target_table',
                merge_strategy: {
                  source_cardinality_given_target_match: 0,
                  target_cardinality_given_source_match: 0,
                },
                properties: [
                  {
                    description: 'description',
                    name: 'name',
                    merge_strategy: 'Unique',
                    prop_type: 'String',
                  },
                ],
              },
            ],
            tables: [
              {
                description: 'description',
                name: 'name',
                properties: [
                  {
                    description: 'description',
                    name: 'name',
                    merge_strategy: 'Unique',
                    prop_type: 'String',
                  },
                ],
                expected_cardinality: 0,
                primary_column: 'primary_column',
              },
            ],
            llm_override_field: 'llm_override_field',
          },
          extracted_entities: [
            {
              entities: [
                {
                  id: 0,
                  properties: { foo: 'string' },
                  type: 'type',
                },
              ],
              relationships: [
                {
                  source: 0,
                  target: 0,
                  type: 'type',
                  properties: { foo: 'string' },
                },
              ],
            },
          ],
          extraction_criteria: [{ relationship_name: 'relationship_name' }],
          formatter_specific: {
            ImageMeta: {
              image: 'image',
              document_name: 'document_name',
              document_page: 0,
              ocr_content: 'ocr_content',
            },
          },
          tool_metadata: [
            {
              description: 'description',
              name: 'Exit',
              regex_validator: 'regex_validator',
            },
          ],
          qa_potentially_sus_response: 'qa_potentially_sus_response',
        },
      },
    });
  });

  test('updateSession', async () => {
    const responsePromise = client.chat.updateSession('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateSessionFavorite: only required params', async () => {
    const responsePromise = client.chat.updateSessionFavorite('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      is_favorite: true,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateSessionFavorite: required and optional params', async () => {
    const response = await client.chat.updateSessionFavorite('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      is_favorite: true,
    });
  });

  test('updateVisibility: only required params', async () => {
    const responsePromise = client.chat.updateVisibility('session_id', { visibility: 'private' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateVisibility: required and optional params', async () => {
    const response = await client.chat.updateVisibility('session_id', { visibility: 'private' });
  });

  test('uploadInputFile: only required params', async () => {
    const responsePromise = client.chat.uploadInputFile('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      content_type: 'content_type',
      file_name: 'file_name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadInputFile: required and optional params', async () => {
    const response = await client.chat.uploadInputFile('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      content: await toFile(Buffer.from('# my file contents'), 'README.md'),
      content_type: 'content_type',
      file_name: 'file_name',
    });
  });
});
