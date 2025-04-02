// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'is_complete_structure',
  description: 'Wait for all specified async tasks to be completed.',
  inputSchema: {
    type: 'object',
    properties: {
      job: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.structure.isComplete(body);
};

export default { tool, handler };
