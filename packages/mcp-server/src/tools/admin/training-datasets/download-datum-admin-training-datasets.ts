// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'read',
  tags: [],
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

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.trainingDatasets.downloadDatum(body);
};

export default { metadata, tool, handler };
