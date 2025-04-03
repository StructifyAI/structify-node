// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.users',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_admin_users',
  description: 'Lists all the users in the system along with their associated API tokens.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Structify, args: any) => {
  const {} = args;
  return client.admin.users.list();
};

export default { metadata, tool, handler };
