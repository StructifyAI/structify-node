// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/users/get_stats',
  operationId: 'admin_user_stats',
};

export const tool: Tool = {
  name: 'get_stats_admin_users',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      bucket: {
        type: 'string',
        enum: ['Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Quarter', 'Year', 'Decade'],
      },
      end_date: {
        type: 'string',
        format: 'date-time',
      },
      start_date: {
        type: 'string',
        format: 'date-time',
      },
      user_email: {
        type: 'string',
      },
      user_token: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.users.getStats(body));
};

export default { metadata, tool, handler };
