// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    description: 'Represents a transaction in our database.',\n    properties: {\n      id: {\n        type: 'string'\n      },\n      amount: {\n        type: 'integer'\n      },\n      timestamp: {\n        type: 'string',\n        format: 'date-time'\n      },\n      token_id: {\n        type: 'string'\n      },\n      job_id: {\n        type: 'string'\n      }\n    },\n    required: [      'id',\n      'amount',\n      'timestamp',\n      'token_id'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.user.transactions()));
};

export default { metadata, tool, handler };
