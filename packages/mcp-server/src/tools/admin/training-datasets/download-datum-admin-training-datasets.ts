// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/admin/training_datasets/download_datum_step',
  operationId: 'download_datum_step',
};

export const tool: Tool = {
  name: 'download_datum_admin_training_datasets',
  description: 'Lists all training datums for a dataset.',
  inputSchema: {
    type: 'object',
    properties: {
      datum_id: {
        type: 'string',
      },
      require_labels: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.admin.trainingDatasets.downloadDatum(body));
};

export default { metadata, tool, handler };
