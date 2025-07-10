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
  httpPath: '/chat/sessions',
  operationId: 'chat_list_sessions',
};

export const tool: Tool = {
  name: 'list_sessions_chat',
  description: 'List all chat sessions for the authenticated user.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'Maximum number of sessions to return (default: 50)',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.chat.listSessions(body));
};

export default { metadata, tool, handler };
