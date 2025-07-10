// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/chat/sessions/{chat_id}/commits/{commit_hash}',
  operationId: 'get_git_commit',
};

export const tool: Tool = {
  name: 'get_git_commit_chat',
  description: 'Get a specific git commit by its hash for a chat session',
  inputSchema: {
    type: 'object',
    properties: {
      chat_id: {
        type: 'string',
      },
      commit_hash: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { chat_id, commit_hash, ...body } = args as any;
  return asTextContentResult(await client.chat.getGitCommit(chat_id, commit_hash));
};

export default { metadata, tool, handler };
