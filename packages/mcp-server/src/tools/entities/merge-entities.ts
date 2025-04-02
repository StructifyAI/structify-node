// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'merge_entities',
  description: 'merge an entity manually',
  inputSchema: {
    type: 'object',
    properties: {
      entity_1_id: {
        type: 'string',
      },
      entity_2_id: {
        type: 'string',
      },
      debug: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.entities.merge(body);
};

export default { tool, handler };
