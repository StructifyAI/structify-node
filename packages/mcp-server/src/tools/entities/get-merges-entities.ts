// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/entity/get_merges',
  operationId: 'entity_get_merges',
};

export const tool: Tool = {
  name: 'get_merges_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all historical merges for a given entity\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/entity_match'\n  },\n  $defs: {\n    entity_match: {\n      type: 'object',\n      properties: {\n        baseline_cardinality: {\n          type: 'integer'\n        },\n        entity_a: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            dataset_id: {\n              type: 'string'\n            },\n            label: {\n              type: 'string'\n            },\n            properties: {\n              type: 'object'\n            },\n            updated_at: {\n              type: 'string',\n              format: 'date-time'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'dataset_id',\n            'label',\n            'properties',\n            'updated_at'\n          ]\n        },\n        entity_b: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            dataset_id: {\n              type: 'string'\n            },\n            label: {\n              type: 'string'\n            },\n            properties: {\n              type: 'object'\n            },\n            updated_at: {\n              type: 'string',\n              format: 'date-time'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'dataset_id',\n            'label',\n            'properties',\n            'updated_at'\n          ]\n        },\n        matched_properties: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              match_prob: {\n                type: 'number'\n              },\n              match_transfer_prob: {\n                type: 'number'\n              },\n              name: {\n                type: 'string'\n              },\n              property_cardinality: {\n                type: 'integer'\n              },\n              unique: {\n                type: 'boolean'\n              }\n            },\n            required: [              'match_prob',\n              'match_transfer_prob',\n              'name',\n              'property_cardinality',\n              'unique'\n            ]\n          }\n        },\n        p_match: {\n          type: 'number'\n        },\n        p_match_threshold: {\n          type: 'number'\n        },\n        cardinality_override: {\n          type: 'object',\n          properties: {\n            cardinality: {\n              type: 'integer'\n            },\n            entity_id: {\n              type: 'string'\n            },\n            relationship_name: {\n              type: 'string'\n            }\n          },\n          required: [            'cardinality',\n            'entity_id',\n            'relationship_name'\n          ]\n        }\n      },\n      required: [        'baseline_cardinality',\n        'entity_a',\n        'entity_b',\n        'matched_properties',\n        'p_match',\n        'p_match_threshold'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entity_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.entities.getMerges(body)));
};

export default { metadata, tool, handler };
