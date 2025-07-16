// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/admin/training_datasets/list_datums',
  operationId: 'list_training_datums',
};

export const tool: Tool = {
  name: 'list_datums_admin_training_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all training datums for a dataset.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string'\n      },\n      nav_labelers: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      nav_verifiers: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      save_labelers: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      save_verifiers: {\n        type: 'array',\n        items: {\n          type: 'string'\n        }\n      },\n      status: {\n        $ref: '#/$defs/datum_status'\n      },\n      updated_at: {\n        type: 'string',\n        format: 'date-time'\n      },\n      origin: {\n        type: 'string',\n        enum: [          'human_l_l_m',\n          'user_reported',\n          'manual_upload',\n          'manual_transfer',\n          'tool_parse_failure'\n        ]\n      }\n    },\n    required: [      'id',\n      'nav_labelers',\n      'nav_verifiers',\n      'save_labelers',\n      'save_verifiers',\n      'status',\n      'updated_at'\n    ]\n  },\n  $defs: {\n    datum_status: {\n      type: 'string',\n      enum: [        'unlabeled',\n        'nav_labeled',\n        'save_labeled',\n        'nav_verified',\n        'save_verified',\n        'pending',\n        'skipped',\n        'suspicious_nav',\n        'suspicious_save',\n        'potential_suspicious_nav',\n        'potential_suspicious_save'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      last_updated: {
        type: 'string',
        format: 'date-time',
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
  return asTextContentResult(await maybeFilter(args, await client.admin.trainingDatasets.listDatums(body)));
};

export default { metadata, tool, handler };
