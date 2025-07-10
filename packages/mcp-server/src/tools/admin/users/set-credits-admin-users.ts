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
  httpPath: '/admin/users/set_credits',
  operationId: 'admin_user_set_credits',
};

export const tool: Tool = {
  name: 'set_credits_admin_users',
  description: 'set the credit balance of  a user, returing that new credit balance.',
  inputSchema: {
    type: 'object',
    properties: {
      credit_count: {
        type: 'integer',
      },
      user_email: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.users.setCredits(body));
};

export default { metadata, tool, handler };
