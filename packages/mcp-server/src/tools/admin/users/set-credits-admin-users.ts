// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.users',
  operation: 'write',
  tags: [],
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

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.users.setCredits(body);
};

export default { metadata, tool, handler };
