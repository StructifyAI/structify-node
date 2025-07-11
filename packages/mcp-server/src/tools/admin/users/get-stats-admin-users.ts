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
  httpPath: '/admin/users/get_stats',
  operationId: 'admin_user_stats',
};

export const tool: Tool = {
  name: 'get_stats_admin_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      job_count: {\n        type: 'integer'\n      },\n      period: {\n        type: 'string',\n        format: 'date-time'\n      }\n    },\n    required: [      'job_count',\n      'period'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucket: {
        type: 'string',
        enum: ['Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Quarter', 'Year', 'Decade'],
      },
      end_date: {
        type: 'string',
        format: 'date-time',
      },
      start_date: {
        type: 'string',
        format: 'date-time',
      },
      user_email: {
        type: 'string',
      },
      user_token: {
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
  return asTextContentResult(await maybeFilter(args, await client.admin.users.getStats(body)));
};

export default { metadata, tool, handler };
