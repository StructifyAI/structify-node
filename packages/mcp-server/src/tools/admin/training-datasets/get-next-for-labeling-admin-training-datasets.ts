// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/admin/training_datasets/get_next_for_labeling',
  operationId: 'get_next_for_labeling',
};

export const tool: Tool = {
  name: 'get_next_for_labeling_admin_training_datasets',
  description: 'Returns None if no datum is available.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      status: {
        $ref: '#/$defs/datum_status',
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
  return asTextContentResult(await client.admin.trainingDatasets.getNextForLabeling(body));
};

export default { metadata, tool, handler };
