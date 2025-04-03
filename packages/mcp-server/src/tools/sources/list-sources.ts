// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'sources',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_sources',
  description: 'Get all sources for a given entity',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Entity ID to get sources for',
      },
      property: {
        type: 'string',
        description: 'Optional property name to filter sources by',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.sources.list(body);
};

export default { metadata, tool, handler };
