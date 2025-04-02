// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'get_training_data_admin_next_action',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      status: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.nextAction.getTrainingData(body);
};

export default { tool, handler };
