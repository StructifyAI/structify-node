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
  httpPath: '/chat/sessions/{session_id}/timeline',
  operationId: 'chat_get_session_timeline',
};

export const tool: Tool = {
  name: 'get_session_timeline_chat',
  description: 'Get chronological timeline of messages and commits for a chat session',
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
  return asTextContentResult(await client.chat.getSessionTimeline(session_id));
};

export default { metadata, tool, handler };
