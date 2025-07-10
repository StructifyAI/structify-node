// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/entity/add_batch',
  operationId: 'entity_add_batch',
};

export const tool: Tool = {
  name: 'add_batch_entities',
  description: 'Add a batch of entities to a dataset given a list of graph representations of the entities.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      entity_graphs: {
        type: 'array',
        items: {
          $ref: '#/$defs/knowledge_graph',
        },
      },
      attempt_merge: {
        type: 'boolean',
        description: 'If true, attempt to merge with existing entities in the dataset',
      },
      skip_malformed_entities: {
        type: 'boolean',
      },
      source: {
        anyOf: [
          {
            type: 'string',
            enum: ['None'],
          },
          {
            type: 'object',
            properties: {
              Web: {
                type: 'string',
              },
            },
            required: ['Web'],
          },
          {
            type: 'object',
            properties: {
              DocumentPage: {
                type: 'array',
                items: {
                  type: 'object',
                },
              },
            },
            required: ['DocumentPage'],
          },
          {
            type: 'object',
            properties: {
              SecFiling: {
                type: 'array',
                items: {
                  type: 'object',
                },
              },
            },
            required: ['SecFiling'],
          },
        ],
      },
      triggering_workflow: {
        type: 'string',
      },
    },
    $defs: {
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
  return asTextContentResult(await client.entities.addBatch(body));
};

export default { metadata, tool, handler };
