// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'get_entities',
  description: 'Get entity with a given id',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      resolve_id: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.entities.get(body);
};

export default { tool, handler };
