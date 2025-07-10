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
  httpPath: '/chat/sessions/{session_id}/messages',
  operationId: 'chat_add_message',
};

export const tool: Tool = {
  name: 'add_message_chat',
  description: 'Add a message to a chat session',
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
      },
      content: {
        type: 'string',
      },
      role: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  return asTextContentResult(await client.chat.addMessage(session_id, body));
};

export default { metadata, tool, handler };
