// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.next_action',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'add_training_datum_admin_next_action',
  description: 'Add a new action training datum',
  inputSchema: {
    type: 'object',
    properties: {
      input: {
        type: 'object',
        properties: {
          all_steps: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                action_name: {
                  type: 'string',
                },
                metadata: {
                  type: 'object',
                },
              },
              required: ['id'],
            },
          },
          extraction_criteria: {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    relationship_name: {
                      type: 'string',
                    },
                  },
                  required: ['relationship_name'],
                },
                {
                  type: 'object',
                  properties: {
                    seeded_entity_id: {
                      type: 'integer',
                      description:
                        'The integer id corresponding to an entity in the seeded entity graph (different from the global dataset entity id)',
                    },
                    entity_id: {
                      type: 'string',
                    },
                  },
                  required: ['seeded_entity_id'],
                },
                {
                  type: 'object',
                  properties: {
                    property_names: {
                      type: 'array',
                      description: 'If there are multiple properties, it can match just one of them',
                      items: {
                        type: 'string',
                      },
                    },
                    table_name: {
                      type: 'string',
                      description: 'The table name of the entity to update',
                    },
                  },
                  required: ['property_names', 'table_name'],
                },
              ],
              description: "It's an OR statement across these.",
            },
          },
          previous_queries: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          seeded_kg: {
            type: 'object',
            description:
              'Knowledge graph info structured to deserialize and display\nin the same format that the LLM outputs.\nAlso the first representation of an LLM output in the pipeline from raw tool output to being merged into a Neo4j DB',
            properties: {
              entities: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'integer',
                    },
                    properties: {
                      type: 'object',
                    },
                    type: {
                      type: 'string',
                    },
                  },
                  required: ['id', 'properties', 'type'],
                },
              },
              relationships: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    source: {
                      type: 'integer',
                    },
                    target: {
                      type: 'integer',
                    },
                    type: {
                      type: 'string',
                    },
                    properties: {
                      type: 'object',
                    },
                  },
                  required: ['source', 'target', 'type'],
                },
              },
            },
            required: [],
          },
        },
        required: ['all_steps', 'extraction_criteria', 'previous_queries', 'seeded_kg'],
      },
      label: {
        type: 'string',
      },
      output: {
        anyOf: [
          {
            type: 'object',
            properties: {
              SelectedStep: {
                type: 'object',
                properties: {
                  step_id: {
                    type: 'string',
                  },
                },
                required: ['step_id'],
              },
            },
            required: ['SelectedStep'],
          },
          {
            type: 'object',
            properties: {
              SearchStep: {
                type: 'object',
                properties: {
                  search_query: {
                    type: 'string',
                  },
                },
                required: ['search_query'],
              },
            },
            required: ['SearchStep'],
          },
          {
            type: 'object',
            properties: {
              InvalidAction: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                  llm_output: {
                    type: 'string',
                  },
                },
                required: ['error', 'llm_output'],
              },
            },
            required: ['InvalidAction'],
          },
        ],
      },
      job_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.nextAction.addTrainingDatum(body);
};

export default { metadata, tool, handler };
