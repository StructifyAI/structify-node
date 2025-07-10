// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/usage',
  operationId: 'user_usage',
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

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.usage(body));
};

export default { metadata, tool, handler };
