// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'plan',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_plan',
  description: 'List all plans for your user account in the database.',
  inputSchema: {
    type: 'object',
    properties: {
      created_since: {
        type: 'string',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      status: {
        type: 'string',
        enum: ['Queued', 'Running', 'Completed', 'Failed', 'Paused'],
      },
      updated_since: {
        type: 'string',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.plan.list(body);
};

export default { metadata, tool, handler };
