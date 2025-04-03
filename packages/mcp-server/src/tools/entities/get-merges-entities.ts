// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_merges_entities',
  description: 'Get all historical merges for a given entity',
  inputSchema: {
    type: 'object',
    properties: {
      entity_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.entities.getMerges(body);
};

export default { metadata, tool, handler };
