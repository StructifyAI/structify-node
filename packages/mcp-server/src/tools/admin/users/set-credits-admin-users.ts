// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/users/set_credits',
  operationId: 'admin_user_set_credits',
};

export const tool: Tool = {
  name: 'set_credits_admin_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nset the credit balance of  a user, returing that new credit balance.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    credit_count: {\n      type: 'integer'\n    }\n  },\n  required: [    'credit_count'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      credit_count: {
        type: 'integer',
      },
      user_email: {
        type: 'string',
      },
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.admin.users.setCredits(body)));
};

export default { metadata, tool, handler };
