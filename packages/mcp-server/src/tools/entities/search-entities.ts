// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'search_entities',
  description: 'Search for entities based on the given query',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      query: {
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
  return client.entities.search(body);
};

export default { tool, handler };
