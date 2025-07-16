// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets.evaluate',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/dataset/evaluate/get',
  operationId: 'dataset_evaluate_get',
};

export const tool: Tool = {
  name: 'get_datasets_evaluate',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a dataset evaluation result by ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    dataset_1: {\n      type: 'string'\n    },\n    dataset_1_name: {\n      type: 'string'\n    },\n    dataset_2: {\n      type: 'string'\n    },\n    dataset_2_is_ground_truth: {\n      type: 'boolean'\n    },\n    dataset_2_name: {\n      type: 'string'\n    },\n    iou: {\n      type: 'number'\n    },\n    matched: {\n      type: 'integer'\n    },\n    matches: {\n      type: 'object',\n      properties: {\n        relationship_matches: {\n          type: 'object'\n        },\n        table_matches: {\n          type: 'object'\n        }\n      },\n      required: [        'relationship_matches',\n        'table_matches'\n      ]\n    },\n    started_at: {\n      type: 'string',\n      format: 'date-time'\n    },\n    stats: {\n      type: 'object',\n      properties: {\n        per_relationship: {\n          type: 'object'\n        },\n        per_table: {\n          type: 'object'\n        }\n      },\n      required: [        'per_relationship',\n        'per_table'\n      ]\n    },\n    status: {\n      type: 'string',\n      enum: [        'Running',\n        'Completed',\n        'Failed'\n      ]\n    },\n    unmatched: {\n      type: 'integer'\n    },\n    run_message: {\n      type: 'string'\n    }\n  },\n  required: [    'id',\n    'dataset_1',\n    'dataset_1_name',\n    'dataset_2',\n    'dataset_2_is_ground_truth',\n    'dataset_2_name',\n    'iou',\n    'matched',\n    'matches',\n    'started_at',\n    'stats',\n    'status',\n    'unmatched'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
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
  return asTextContentResult(await maybeFilter(args, await client.datasets.evaluate.get(body)));
};

export default { metadata, tool, handler };
