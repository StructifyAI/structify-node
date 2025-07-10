// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/dataset/match',
  operationId: 'dataset_match',
};

export const tool: Tool = {
  name: 'match_datasets',
  description: 'Returns: The matched subgraph and a score for the match.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
        description: 'The dataset to match against',
      },
      query_kg: {
        $ref: '#/$defs/knowledge_graph',
      },
      match_threshold: {
        type: 'number',
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
  return asTextContentResult(await client.datasets.match(body));
};

export default { metadata, tool, handler };
