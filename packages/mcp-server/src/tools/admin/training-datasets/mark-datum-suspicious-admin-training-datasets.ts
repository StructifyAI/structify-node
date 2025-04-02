// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

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
      suspicious_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.trainingDatasets.markDatumSuspicious(body);
};

export default { tool, handler };
