// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.next_action',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_training_data_admin_next_action',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the training datum to delete',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.nextAction.deleteTrainingData(body);
};

export default { metadata, tool, handler };
