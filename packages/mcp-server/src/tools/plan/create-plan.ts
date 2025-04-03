// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'plan',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_plan',
  description: 'Create a plan to run consecutive jobs as each step finishes.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      plan: {
        type: 'object',
        properties: {
          steps: {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    entity_id: {
                      type: 'string',
                    },
                    property_name: {
                      type: 'string',
                    },
                    allow_extra_entities: {
                      type: 'boolean',
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
                  required: ['entity_id', 'property_name'],
                },
                {
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
                  required: ['entity_id', 'relationship_name'],
                },
                {
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
                  required: ['from_id', 'relationship_name', 'to_id'],
                },
                {
                  type: 'array',
                  items: {
                    anyOf: [
                      {
                        $ref: '#/properties/plan/steps/items/anyOf/0',
                      },
                      {
                        $ref: '#/properties/plan/steps/items/anyOf/1',
                      },
                      {
                        $ref: '#/properties/plan/steps/items/anyOf/2',
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
        required: ['steps'],
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.plan.create(body);
};

export default { metadata, tool, handler };
