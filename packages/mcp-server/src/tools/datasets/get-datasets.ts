// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'get_datasets',
  description: 'Grab a dataset by its name.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Information about the dataset',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.datasets.get(body);
};

export default { tool, handler };
