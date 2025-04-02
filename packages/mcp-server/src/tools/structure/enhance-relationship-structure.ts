// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'enhance_relationship_structure',
  description: 'Returns a job id that can be waited on until the request is finished.',
  inputSchema: {
    type: 'object',
    properties: {
      entity_id: {
        type: 'string',
      },
      relationship_name: {
        type: 'string',
      },
      allow_extra_entities: {
        type: 'boolean',
      },
      special_job_type: {
        type: 'string',
        enum: ['HumanLLM'],
      },
      starting_searches: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      starting_urls: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.structure.enhanceRelationship(body);
};

export default { tool, handler };
