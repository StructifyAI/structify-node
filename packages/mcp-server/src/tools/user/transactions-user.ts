// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'transactions_user',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Structify, args: any) => {
  const {} = args;
  return client.user.transactions();
};

export default { metadata, tool, handler };
