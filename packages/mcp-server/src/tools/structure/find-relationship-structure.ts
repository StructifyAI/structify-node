// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'structure',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'find_relationship_structure',
  description: 'Attempt to find the given relation between two entities.',
  inputSchema: {
    type: 'object',
    properties: {
      from_id: {
        type: 'string',
      },
      relationship_name: {
        type: 'string',
      },
      to_id: {
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
  return client.structure.findRelationship(body);
};

export default { metadata, tool, handler };
