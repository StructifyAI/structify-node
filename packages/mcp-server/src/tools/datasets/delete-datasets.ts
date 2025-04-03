// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_datasets',
  description: 'Permanently delete a dataset and all its contents',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the dataset',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.datasets.delete(body);
};

export default { metadata, tool, handler };
