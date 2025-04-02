// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'summarize_entities',
  description: 'Search for entities based on the given query',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      entity_id: {
        type: 'string',
      },
      properties: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      extra_instructions: {
        type: 'array',
        description: 'A list of instructions for each property to guide the summarization process',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.entities.summarize(body);
};

export default { tool, handler };
