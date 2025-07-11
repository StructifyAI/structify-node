// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/create_session_response',\n  $defs: {\n    create_session_response: {\n      type: 'object',\n      properties: {\n        url: {\n          type: 'string'\n        }\n      },\n      required: [        'url'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      origin: {
        type: 'string',
      },
      plan: {
        $ref: '#/$defs/subscription_plan',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
  return asTextContentResult(await maybeFilter(args, await client.user.stripe.createSubscription(body)));
};

export default { metadata, tool, handler };
