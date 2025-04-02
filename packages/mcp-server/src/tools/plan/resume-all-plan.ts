// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'resume_all_plan',
  description: 'Resume all paused plans for your user account in the database.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
        description: 'Name of the dataset to resume plans for',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.plan.resumeAll(body);
};

export default { tool, handler };
