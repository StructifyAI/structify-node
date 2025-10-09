// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  test('addCollaborator: only required params', async () => {
    const responsePromise = client.chat.addCollaborator('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      email: 'email',
      role: 'owner',
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
      role: 'owner',
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

  test('addMessage: only required params', async () => {
    const responsePromise = client.chat.addMessage('session_id', { content: 'content', role: 'role' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addMessage: required and optional params', async () => {
    const response = await client.chat.addMessage('session_id', { content: 'content', role: 'role' });
  });

  test('copy: only required params', async () => {
    const responsePromise = client.chat.copy({
      copy_name: 'copy_name',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      source_chat_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      source_chat_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      copy_inputs: true,
    });
  });

  test('copyNodeOutputByCodeHash: only required params', async () => {
    const responsePromise = client.chat.copyNodeOutputByCodeHash('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      code_md5_hash: 'code_md5_hash',
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
    const responsePromise = client.chat.createSession({ project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
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
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      config: { llm_key: 'vllm.gpt-5-mini-2025-08-07', system_prompt: 'system_prompt' },
      ephemeral: true,
      initial_message: 'initial_message',
    });
  });

  test('deleteFiles: only required params', async () => {
    const responsePromise = client.chat.deleteFiles('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      paths: ['string'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteFiles: required and optional params', async () => {
    const response = await client.chat.deleteFiles('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      paths: ['string'],
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
      role: 'owner',
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
      role: 'owner',
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

  test('listSessions: only required params', async () => {
    const responsePromise = client.chat.listSessions({ project_id: 'project_id', team_id: 'team_id' });
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
      project_id: 'project_id',
      team_id: 'team_id',
      limit: 0,
    });
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

  test('togglePublic: only required params', async () => {
    const responsePromise = client.chat.togglePublic('session_id', { is_public: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('togglePublic: required and optional params', async () => {
    const response = await client.chat.togglePublic('session_id', { is_public: true });
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
});
