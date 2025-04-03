// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'view_table_datasets',
  description: 'You need to specify a dataset and a table_name',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      job_id: {
        type: 'string',
      },
      last_updated: {
        type: 'string',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      sort_by: {
        type: 'object',
        properties: {
          col_id: {
            type: 'string',
            enum: ['creation_time'],
          },
          sort: {
            type: 'string',
            enum: ['asc', 'desc'],
          },
        },
        required: ['col_id', 'sort'],
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.datasets.viewTable(body);
};

export default { metadata, tool, handler };
