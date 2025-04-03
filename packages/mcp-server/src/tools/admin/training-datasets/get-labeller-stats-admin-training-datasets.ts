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
  name: 'get_labeller_stats_admin_training_datasets',
  description: "Gets statistics about labellers' work on a dataset.",
  inputSchema: {
    type: 'object',
    properties: {
      end_date: {
        type: 'string',
        format: 'date-time',
      },
      labeled_status: {
        type: 'string',
        enum: ['None', 'SuspiciousOnly', 'VerifiedOnly'],
      },
      max_prop_count: {
        type: 'integer',
      },
      start_date: {
        type: 'string',
        format: 'date-time',
      },
      time_bucket: {
        type: 'string',
        enum: ['Second', 'Minute', 'Hour', 'Day', 'Week', 'Month', 'Quarter', 'Year', 'Decade'],
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.trainingDatasets.getLabellerStats(body);
};

export default { metadata, tool, handler };
