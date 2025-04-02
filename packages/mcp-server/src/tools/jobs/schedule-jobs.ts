// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'schedule_jobs',
  description:
    'One example use case is every single day check the news websites and\npull them into my dataset.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Structify, args: any) => {
  const {} = args;
  return client.jobs.schedule();
};

export default { tool, handler };
