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
  httpPath: '/admin/training_datasets/suspicious_count',
  operationId: 'suspicous_count',
};

export const tool: Tool = {
  name: 'suspicious_count_admin_training_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the number of suspicious training datums for the current user's labels.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    count: {\n      type: 'integer'\n    }\n  },\n  required: [    'count'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        $ref: '#/$defs/datum_status',
      },
      dataset_name: {
        type: 'string',
      },
      user_restriction: {
        type: 'boolean',
        description:
          'If true, the query will only return datums that are suspicious for the current user.\nIf false, the query will return datums that are suspicious for any author that does not have the Labeler permission.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      datum_status: {
        type: 'string',
        enum: [
          'unlabeled',
          'nav_labeled',
          'save_labeled',
          'nav_verified',
          'save_verified',
          'pending',
          'skipped',
          'suspicious_nav',
          'suspicious_save',
          'potential_suspicious_nav',
          'potential_suspicious_save',
        ],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.admin.trainingDatasets.suspiciousCount(body)),
  );
};

export default { metadata, tool, handler };
