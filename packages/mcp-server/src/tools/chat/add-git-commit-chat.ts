// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/chat/sessions/{session_id}/commits',
  operationId: 'chat_add_git_commit',
};

export const tool: Tool = {
  name: 'add_git_commit_chat',
  description: 'Add a git commit to a chat session',
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
      },
      commit_hash: {
        type: 'string',
        description: 'The git commit hash (must be 40 characters)',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  return asTextContentResult(await client.chat.addGitCommit(session_id, body));
};

export default { metadata, tool, handler };
