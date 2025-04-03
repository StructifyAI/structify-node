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
  name: 'remove_property_datasets',
  description: 'Remove a property descriptor from a table in the dataset schema',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      property_name: {
        type: 'string',
      },
      table_name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.datasets.removeProperty(body);
};

export default { metadata, tool, handler };
