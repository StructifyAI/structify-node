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
  httpPath: '/entity/get_source_entities',
  operationId: 'entity_get_source_entities',
};

export const tool: Tool = {
  name: 'get_source_entities_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    source_entities: {\n      type: 'array',\n      items: {\n        type: 'array',\n        items: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            is_summary: {\n              type: 'boolean'\n            },\n            label: {\n              type: 'string'\n            },\n            llm_id: {\n              type: 'integer'\n            },\n            properties: {\n              type: 'object'\n            },\n            source_id: {\n              type: 'string'\n            },\n            user_specified: {\n              type: 'boolean'\n            },\n            job_id: {\n              type: 'string'\n            },\n            kg_entity_id: {\n              type: 'string'\n            },\n            link: {\n              $ref: '#/$defs/source'\n            },\n            location: {\n              anyOf: [                {\n                  type: 'object',\n                  properties: {\n                    Text: {\n                      type: 'object',\n                      properties: {\n                        byte_offset: {\n                          type: 'integer'\n                        }\n                      },\n                      required: [                        'byte_offset'\n                      ]\n                    }\n                  },\n                  required: [                    'Text'\n                  ]\n                },\n                {\n                  type: 'object',\n                  properties: {\n                    Visual: {\n                      type: 'object',\n                      properties: {\n                        x: {\n                          type: 'integer'\n                        },\n                        y: {\n                          type: 'integer'\n                        }\n                      },\n                      required: [                        'x',\n                        'y'\n                      ]\n                    }\n                  },\n                  required: [                    'Visual'\n                  ]\n                },\n                {\n                  type: 'object',\n                  properties: {\n                    Page: {\n                      type: 'object',\n                      properties: {\n                        page_number: {\n                          type: 'integer'\n                        }\n                      },\n                      required: [                        'page_number'\n                      ]\n                    }\n                  },\n                  required: [                    'Page'\n                  ]\n                }\n              ]\n            },\n            scraper_id: {\n              type: 'string'\n            },\n            step_id: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'created_at',\n            'is_summary',\n            'label',\n            'llm_id',\n            'properties',\n            'source_id',\n            'user_specified'\n          ]\n        }\n      }\n    }\n  },\n  required: [    'source_entities'\n  ],\n  $defs: {\n    source: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            Web: {\n              type: 'object',\n              properties: {\n                url: {\n                  type: 'string'\n                }\n              },\n              required: [                'url'\n              ]\n            }\n          },\n          required: [            'Web'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            Document: {\n              type: 'object',\n              properties: {\n                name: {\n                  type: 'string'\n                }\n              },\n              required: [                'name'\n              ]\n            }\n          },\n          required: [            'Document'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            SecFiling: {\n              type: 'object',\n              properties: {\n                accession_number: {\n                  type: 'string'\n                },\n                cik_number: {\n                  type: 'string'\n                }\n              },\n              required: [                'accession_number',\n                'cik_number'\n              ]\n            }\n          },\n          required: [            'SecFiling'\n          ]\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
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
  return asTextContentResult(await maybeFilter(args, await client.entities.getSourceEntities(body)));
};

export default { metadata, tool, handler };
