// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/dataset/view_relationships',
  operationId: 'dataset_view_relationships',
};

export const tool: Tool = {
  name: 'view_relationships_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nYou need to specify a dataset and the name of the relationship\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    title: 'Relationship',\n    properties: {\n      id: {\n        type: 'string'\n      },\n      created_at: {\n        type: 'string',\n        format: 'date-time'\n      },\n      dataset_id: {\n        type: 'string'\n      },\n      from_id: {\n        type: 'string'\n      },\n      label: {\n        type: 'string'\n      },\n      properties: {\n        type: 'object'\n      },\n      to_id: {\n        type: 'string'\n      },\n      updated_at: {\n        type: 'string',\n        format: 'date-time'\n      }\n    },\n    required: [      'id',\n      'created_at',\n      'dataset_id',\n      'from_id',\n      'label',\n      'properties',\n      'to_id',\n      'updated_at'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      job_id: {
        type: 'string',
      },
      last_updated: {
        type: 'string',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      sort_by: {
        type: 'object',
        properties: {
          col_id: {
            anyOf: [
              {
                type: 'object',
                properties: {
                  user_defined_column: {
                    type: 'string',
                  },
                },
                required: ['user_defined_column'],
              },
              {
                type: 'string',
                enum: ['creation_time'],
              },
            ],
          },
          sort: {
            type: 'string',
            enum: ['asc', 'desc'],
          },
        },
        required: ['col_id', 'sort'],
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
  const response = await client.datasets.viewRelationships(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
