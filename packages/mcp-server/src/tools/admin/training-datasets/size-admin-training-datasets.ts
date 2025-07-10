// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/training_datasets/size',
  operationId: 'get_training_dataset_size',
};

export const tool: Tool = {
  name: 'size_admin_training_datasets',
  description: 'Returns the number of training data in the specified dataset, filtered by status.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      end_date: {
        type: 'string',
        format: 'date-time',
      },
      start_date: {
        type: 'string',
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.trainingDatasets.size(body));
};

export default { metadata, tool, handler };
