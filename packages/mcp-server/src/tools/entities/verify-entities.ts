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
  httpPath: '/entity/verify',
  operationId: 'entity_verify',
};

export const tool: Tool = {
  name: 'verify_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nverify a kg against the dataset\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/knowledge_graph',\n  $defs: {\n    knowledge_graph: {\n      type: 'object',\n      description: 'Knowledge graph info structured to deserialize and display\\nin the same format that the LLM outputs.\\nAlso the first representation of an LLM output in the pipeline from raw tool output to being merged into a Neo4j DB',\n      properties: {\n        entities: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/entity'\n          }\n        },\n        relationships: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/relationship'\n          }\n        }\n      },\n      required: [        'entities',\n        'relationships'\n      ]\n    },\n    entity: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        properties: {\n          type: 'object'\n        },\n        type: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'properties',\n        'type'\n      ]\n    },\n    relationship: {\n      type: 'object',\n      properties: {\n        source: {\n          type: 'integer'\n        },\n        target: {\n          type: 'integer'\n        },\n        type: {\n          type: 'string'\n        },\n        properties: {\n          type: 'object'\n        }\n      },\n      required: [        'source',\n        'target',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      entity_graph: {
        $ref: '#/$defs/knowledge_graph',
      },
      fix: {
        type: 'boolean',
        description: 'Whether to apply fixes to the dataset',
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
  return asTextContentResult(await maybeFilter(args, await client.entities.verify(body)));
};

export default { metadata, tool, handler };
