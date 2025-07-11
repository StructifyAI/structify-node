// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/admin/training_datasets/labeller_stats',
  operationId: 'get_labeller_stats',
};

export const tool: Tool = {
  name: 'get_labeller_stats_admin_training_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets statistics about labellers' work on a dataset.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/labeling_stats'\n  },\n  $defs: {\n    labeling_stats: {\n      type: 'object',\n      properties: {\n        author: {\n          type: 'string'\n        },\n        capped_prop_count: {\n          type: 'integer'\n        },\n        count: {\n          type: 'integer'\n        },\n        dataset: {\n          type: 'string'\n        },\n        prop_count: {\n          type: 'integer'\n        },\n        status: {\n          $ref: '#/$defs/datum_status'\n        },\n        window_start: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'author',\n        'capped_prop_count',\n        'count',\n        'dataset',\n        'prop_count',\n        'status',\n        'window_start'\n      ]\n    },\n    datum_status: {\n      type: 'string',\n      enum: [        'unlabeled',\n        'nav_labeled',\n        'save_labeled',\n        'nav_verified',\n        'save_verified',\n        'pending',\n        'skipped',\n        'suspicious_nav',\n        'suspicious_save',\n        'potential_suspicious_nav',\n        'potential_suspicious_save'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        format: 'date-time',
      },
      labeled_status: {
        type: 'string',
        enum: ['None', 'SuspiciousOnly', 'VerifiedOnly'],
      },
      max_prop_count: {
        type: 'integer',
      },
      start_date: {
        type: 'string',
        format: 'date-time',
      },
      time_bucket: {
        type: 'string',
        enum: ['Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Quarter', 'Year', 'Decade'],
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
  return asTextContentResult(
    await maybeFilter(args, await client.admin.trainingDatasets.getLabellerStats(body)),
  );
};

export default { metadata, tool, handler };
