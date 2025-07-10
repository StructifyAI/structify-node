// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/admin/training_datasets/mark_datum_suspicious',
  operationId: 'mark_datum_suspicious',
};

export const tool: Tool = {
  name: 'mark_datum_suspicious_admin_training_datasets',
  description: 'Marks a training datum update as suspicious.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      message: {
        type: 'string',
      },
      status: {
        $ref: '#/$defs/datum_status',
      },
      suspicious_id: {
        type: 'string',
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
  const response = await client.admin.trainingDatasets.markDatumSuspicious(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
