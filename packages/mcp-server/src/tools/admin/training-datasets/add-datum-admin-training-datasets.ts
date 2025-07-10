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
  httpPath: '/admin/training_datasets/add_datum',
  operationId: 'add_training_datum',
};

export const tool: Tool = {
  name: 'add_datum_admin_training_datasets',
  description: 'Adds a new training datum to the specified dataset.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      step_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.admin.trainingDatasets.addDatum(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
