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
  httpPath: '/user/transactions/stripe/create_subscription',
  operationId: 'create_stripe_subscription',
};

export const tool: Tool = {
  name: 'create_subscription_user_stripe',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      origin: {
        type: 'string',
      },
      plan: {
        $ref: '#/$defs/subscription_plan',
      },
    },
    $defs: {
      subscription_plan: {
        type: 'string',
        enum: ['Pro'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.stripe.createSubscription(body));
};

export default { metadata, tool, handler };
