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
      role: 'owner',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
      role: 'owner',
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('addGitCommit: only required params', async () => {
    const responsePromise = client.chat.addGitCommit('session_id', { commit_hash: 'commit_hash' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addGitCommit: required and optional params', async () => {
    const response = await client.chat.addGitCommit('session_id', { commit_hash: 'commit_hash' });
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

  test('copyNodeOutputByCodeHash: only required params', async () => {
    const responsePromise = client.chat.copyNodeOutputByCodeHash('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('copyNodeOutputByCodeHash: required and optional params', async () => {
    const response = await client.chat.copyNodeOutputByCodeHash('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
  });

  test('createSession: only required params', async () => {
    const responsePromise = client.chat.createSession({
      git_application_token: 'git_application_token',
      initial_message: 'initial_message',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.chat.createSession({
      git_application_token: 'git_application_token',
      initial_message: 'initial_message',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const responsePromise = client.chat.getSessionTimeline('session_id');
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
      client.chat.getSessionTimeline('session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
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

  test('listSessions', async () => {
    const responsePromise = client.chat.listSessions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listSessions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.chat.listSessions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Structify.NotFoundError,
    );
  });

  test('listSessions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.listSessions({ limit: 0 }, { path: '/_stainless_unknown_path' }),
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
});
