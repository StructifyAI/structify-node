// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.human_llm',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'get_jobs_admin_human_llm',
  description: 'Start the next human llm job in the queue',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
        enum: ['Queued', 'Running', 'Completed', 'Failed'],
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.humanLlm.getJobs(body);
};

export default { metadata, tool, handler };
