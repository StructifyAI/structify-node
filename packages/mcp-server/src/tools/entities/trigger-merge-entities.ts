// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'trigger_merge_entities',
  description: 'Trigger our merge process for a given entity',
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
  return client.entities.triggerMerge(body);
};

export default { tool, handler };
