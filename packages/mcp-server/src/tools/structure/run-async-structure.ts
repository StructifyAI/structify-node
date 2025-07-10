// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'structure',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/structure/run_async',
  operationId: 'structure_run_async',
};

export const tool: Tool = {
  name: 'run_async_structure',
  description: 'Returns a token that can be waited on until the request is finished.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      source: {
        anyOf: [
          {
            type: 'object',
            properties: {
              PDF: {
                type: 'object',
                description: 'Ingest all pages of a PDF and process them independently.',
                properties: {
                  path: {
                    type: 'string',
                  },
                },
                required: ['path'],
              },
            },
            required: ['PDF'],
          },
          {
            type: 'object',
            properties: {
              Web: {
                type: 'object',
                properties: {
                  banned_domains: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
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
                required: [],
              },
            },
            required: ['Web'],
          },
        ],
        description: 'These are all the types that can be converted into a BasicInputType',
      },
      run_metadata: {
        type: 'object',
        properties: {
          node_id: {
            type: 'string',
          },
          session_id: {
            type: 'string',
          },
        },
        required: ['node_id', 'session_id'],
      },
      save_requirement: {
        type: 'array',
        items: {
          $ref: '#/$defs/save_requirement',
        },
      },
      seeded_entity: {
        $ref: '#/$defs/knowledge_graph',
      },
      special_job_type: {
        type: 'string',
        enum: ['HumanLLM'],
      },
      stop_config: {
        type: 'object',
        description: 'Configuration parameters for the StopChecker',
        properties: {
          max_steps_without_save: {
            type: 'integer',
          },
          max_errors: {
            type: 'integer',
          },
          max_execution_time_secs: {
            type: 'integer',
          },
          max_total_steps: {
            type: 'integer',
          },
        },
        required: ['max_steps_without_save'],
      },
    },
    $defs: {
      save_requirement: {
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
      knowledge_graph: {
        type: 'object',
        description:
          'Knowledge graph info structured to deserialize and display\nin the same format that the LLM outputs.\nAlso the first representation of an LLM output in the pipeline from raw tool output to being merged into a Neo4j DB',
        properties: {
          entities: {
            type: 'array',
            items: {
              $ref: '#/$defs/entity',
            },
          },
          relationships: {
            type: 'array',
            items: {
              $ref: '#/$defs/relationship',
            },
          },
        },
        required: ['entities', 'relationships'],
      },
      entity: {
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
      relationship: {
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
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.structure.runAsync(body));
};

export default { metadata, tool, handler };
