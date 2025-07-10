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
  httpPath: '/user/transactions/list',
  operationId: 'user_transactions',
};

export const tool: Tool = {
  name: 'transactions_user',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.user.transactions());
};

export default { metadata, tool, handler };
