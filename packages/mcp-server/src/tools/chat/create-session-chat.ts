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
  httpPath: '/chat/sessions',
  operationId: 'chat_create_session',
};

export const tool: Tool = {
  name: 'create_session_chat',
  description: 'Create a new chat session with an initial message',
  inputSchema: {
    type: 'object',
    properties: {
      git_repo_id: {
        type: 'string',
      },
      initial_message: {
        type: 'string',
      },
      project_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.chat.createSession(body));
};

export default { metadata, tool, handler };
