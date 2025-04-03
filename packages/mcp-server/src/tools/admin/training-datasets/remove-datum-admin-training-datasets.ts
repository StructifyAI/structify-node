// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'write',
  tags: [],
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

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.trainingDatasets.removeDatum(body);
};

export default { metadata, tool, handler };
