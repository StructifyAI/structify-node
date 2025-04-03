// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_step_jobs',
  description: 'Retrieve a step from structify.',
  inputSchema: {
    type: 'object',
    properties: {
      step_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { step_id } = args;
  return client.jobs.getStep(step_id);
};

export default { metadata, tool, handler };
