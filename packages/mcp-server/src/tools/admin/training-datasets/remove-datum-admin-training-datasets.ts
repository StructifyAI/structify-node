// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/admin/training_datasets/remove_from_dataset',
  operationId: 'remove_from_dataset',
};

export const tool: Tool = {
  name: 'remove_datum_admin_training_datasets',
  description: 'Removes a training datum from the specified dataset.',
  inputSchema: {
    type: 'object',
    properties: {
      datum_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.admin.trainingDatasets.removeDatum(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
