// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'get_credits_admin_users',
  description: 'get the credit balance of a user by email.',
  inputSchema: {
    type: 'object',
    properties: {
      user_email: {
        type: 'string',
      },
      user_token: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.users.getCredits(body);
};

export default { tool, handler };
