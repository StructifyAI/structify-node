// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/entity/add',
  operationId: 'entity_add',
};

export const tool: Tool = {
  name: 'add_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd an entity (or entities) to a dataset given a graph representation of the entity (or entities).\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'string'\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      entity_graph: {
        $ref: '#/$defs/knowledge_graph',
      },
      attempt_merge: {
        type: 'boolean',
        description: 'If true, attempt to merge with existing entities in the dataset',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
  return asTextContentResult(await maybeFilter(args, await client.entities.add(body)));
};

export default { metadata, tool, handler };
