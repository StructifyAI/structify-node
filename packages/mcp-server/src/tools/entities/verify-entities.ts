// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'verify_entities',
  description: 'verify a kg against the dataset',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      entity_graph: {
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
      fix: {
        type: 'boolean',
        description: 'Whether to apply fixes to the dataset',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.entities.verify(body);
};

export default { metadata, tool, handler };
