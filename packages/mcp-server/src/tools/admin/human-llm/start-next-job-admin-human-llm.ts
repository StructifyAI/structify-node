// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.human_llm',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/human_llm/start_next_job',
  operationId: 'human_llm_start_next_job',
};

export const tool: Tool = {
  name: 'start_next_job_admin_human_llm',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart the next human llm job in the queue\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/step_choices',\n  $defs: {\n    step_choices: {\n      type: 'object',\n      properties: {\n        extraction_criteria: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/save_requirement'\n          }\n        },\n        job_id: {\n          type: 'string'\n        },\n        seeded_kg: {\n          $ref: '#/$defs/knowledge_graph'\n        },\n        step_options: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              action_name: {\n                type: 'string'\n              },\n              metadata: {\n                type: 'object'\n              }\n            },\n            required: [              'id'\n            ]\n          }\n        }\n      },\n      required: [        'extraction_criteria',\n        'job_id',\n        'seeded_kg',\n        'step_options'\n      ]\n    },\n    save_requirement: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            relationship_name: {\n              type: 'string'\n            }\n          },\n          required: [            'relationship_name'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            seeded_entity_id: {\n              type: 'integer',\n              description: 'The integer id corresponding to an entity in the seeded entity graph (different from the global dataset entity id)'\n            },\n            entity_id: {\n              type: 'string'\n            }\n          },\n          required: [            'seeded_entity_id'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            property_names: {\n              type: 'array',\n              description: 'If there are multiple properties, it can match just one of them',\n              items: {\n                type: 'string'\n              }\n            },\n            table_name: {\n              type: 'string',\n              description: 'The table name of the entity to update'\n            }\n          },\n          required: [            'property_names',\n            'table_name'\n          ]\n        }\n      ],\n      description: 'It\\'s an OR statement across these.'\n    },\n    knowledge_graph: {\n      type: 'object',\n      description: 'Knowledge graph info structured to deserialize and display\\nin the same format that the LLM outputs.\\nAlso the first representation of an LLM output in the pipeline from raw tool output to being merged into a Neo4j DB',\n      properties: {\n        entities: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/entity'\n          }\n        },\n        relationships: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/relationship'\n          }\n        }\n      },\n      required: [        'entities',\n        'relationships'\n      ]\n    },\n    entity: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        properties: {\n          type: 'object'\n        },\n        type: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'properties',\n        'type'\n      ]\n    },\n    relationship: {\n      type: 'object',\n      properties: {\n        source: {\n          type: 'integer'\n        },\n        target: {\n          type: 'integer'\n        },\n        type: {\n          type: 'string'\n        },\n        properties: {\n          type: 'object'\n        }\n      },\n      required: [        'source',\n        'target',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
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
  return asTextContentResult(await maybeFilter(args, await client.admin.humanLlm.startNextJob(body)));
};

export default { metadata, tool, handler };
