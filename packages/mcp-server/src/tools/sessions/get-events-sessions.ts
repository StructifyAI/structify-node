// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sessions/{session_id}/events',
  operationId: 'get_session_events',
};

export const tool: Tool = {
  name: 'get_events_sessions',
  description: "Get events from all jobs in a session's event queue (without removing them).",
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of events to fetch (default: 100).',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  return asTextContentResult(await client.sessions.getEvents(session_id, body));
};

export default { metadata, tool, handler };
