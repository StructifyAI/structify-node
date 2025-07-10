// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'user.stripe',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/user/transactions/stripe/create_session',
  operationId: 'create_stripe_session',
};

export const tool: Tool = {
  name: 'create_session_user_stripe',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      credits: {
        type: 'integer',
        description: 'Amount in cents (i64)',
      },
      origin: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.stripe.createSession(body));
};

export default { metadata, tool, handler };
