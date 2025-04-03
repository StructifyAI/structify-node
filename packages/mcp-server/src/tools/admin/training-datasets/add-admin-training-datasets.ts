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
  name: 'add_admin_training_datasets',
  description: 'Creates a new training dataset with the given name.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
        description: 'The name of the training dataset to add.',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.trainingDatasets.add(body);
};

export default { metadata, tool, handler };
