// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/chat/sessions/{session_id}',
  operationId: 'chat_delete_session',
};

export const tool: Tool = {
  name: 'delete_session_chat',
  description: 'Delete a chat session',
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
  return asTextContentResult(await client.chat.deleteSession(session_id));
};

export default { metadata, tool, handler };
