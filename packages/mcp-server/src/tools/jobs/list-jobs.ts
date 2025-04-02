// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'list_jobs',
  description: 'List all the executions',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
        description: 'Dataset name to optionally filter jobs by',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      since: {
        type: 'string',
        description: 'List since a specific timestamp',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Status to optionally filter jobs by',
        enum: ['Queued', 'Running', 'Completed', 'Failed'],
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.jobs.list(body);
};

export default { tool, handler };
