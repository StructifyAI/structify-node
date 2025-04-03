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
  name: 'suspicious_count_admin_training_datasets',
  description: "Returns the number of suspicious training datums for the current user's labels.",
  inputSchema: {
    type: 'object',
    properties: {
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
      dataset_name: {
        type: 'string',
      },
      user_restriction: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.trainingDatasets.suspiciousCount(body);
};

export default { metadata, tool, handler };
