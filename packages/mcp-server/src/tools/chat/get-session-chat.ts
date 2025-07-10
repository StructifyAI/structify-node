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
  httpPath: '/chat/sessions/{session_id}',
  operationId: 'chat_get_session',
};

export const tool: Tool = {
  name: 'get_session_chat',
  description: 'Get a chat session with all its messages',
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  return asTextContentResult(await client.chat.getSession(session_id));
};

export default { metadata, tool, handler };
