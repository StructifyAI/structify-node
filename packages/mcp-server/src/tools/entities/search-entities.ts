// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/entity/search',
  operationId: 'entity_search',
};

export const tool: Tool = {
  name: 'search_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch for entities based on the given query\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string'\n      },\n      created_at: {\n        type: 'string',\n        format: 'date-time'\n      },\n      dataset_id: {\n        type: 'string'\n      },\n      label: {\n        type: 'string'\n      },\n      properties: {\n        type: 'object'\n      },\n      updated_at: {\n        type: 'string',\n        format: 'date-time'\n      }\n    },\n    required: [      'id',\n      'created_at',\n      'dataset_id',\n      'label',\n      'properties',\n      'updated_at'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      query: {
        type: 'string',
      },
      table_name: {
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
  return asTextContentResult(await maybeFilter(args, await client.entities.search(body)));
};

export default { metadata, tool, handler };
