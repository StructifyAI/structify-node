// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'cancel_jobs',
  description: 'You successfully cancelled a job.',
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { uuid } = args;
  return client.jobs.cancel(uuid);
};

export default { tool, handler };
