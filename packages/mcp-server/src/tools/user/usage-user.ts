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
  name: 'usage_user',
  description: 'Returns usage statistics for the user.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.user.usage(body);
};

export default { metadata, tool, handler };
