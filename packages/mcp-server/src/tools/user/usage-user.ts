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
  httpPath: '/user/usage',
  operationId: 'user_usage',
};

export const tool: Tool = {
  name: 'usage_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns usage statistics for the user.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    credits_used: {\n      type: 'integer'\n    },\n    num_entities: {\n      type: 'integer'\n    },\n    num_jobs: {\n      type: 'integer'\n    },\n    num_relationships: {\n      type: 'integer'\n    }\n  },\n  required: [    'credits_used',\n    'num_entities',\n    'num_jobs',\n    'num_relationships'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
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
  return asTextContentResult(await maybeFilter(args, await client.user.usage(body)));
};

export default { metadata, tool, handler };
