// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'workflow',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/workflow/list',
  operationId: 'dataset_workflow_list',
};

export const tool: Tool = {
  name: 'list_workflow',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist a new workflow\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/existing_workflow'\n  },\n  $defs: {\n    existing_workflow: {\n      allOf: [        {\n          $ref: '#/$defs/workflow'\n        }\n      ]\n    },\n    workflow: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        starting_step: {\n          type: 'string'\n        },\n        starting_table: {\n          type: 'string'\n        },\n        steps: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              children: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              operation: {\n                anyOf: [                  {\n                    type: 'object',\n                    properties: {\n                      EnhanceProperties: {\n                        type: 'array',\n                        items: {\n                          type: 'string'\n                        }\n                      }\n                    },\n                    required: [                      'EnhanceProperties'\n                    ]\n                  },\n                  {\n                    type: 'object',\n                    properties: {\n                      EnhanceRelationship: {\n                        type: 'string'\n                      }\n                    },\n                    required: [                      'EnhanceRelationship'\n                    ]\n                  },\n                  {\n                    type: 'object',\n                    properties: {\n                      DeriveProperty: {\n                        type: 'array',\n                        items: {\n                          type: 'string'\n                        }\n                      }\n                    },\n                    required: [                      'DeriveProperty'\n                    ]\n                  },\n                  {\n                    type: 'object',\n                    properties: {\n                      ScrapePage: {\n                        type: 'object',\n                        properties: {\n                          relationship_name: {\n                            type: 'string'\n                          },\n                          starting_url_property_name: {\n                            type: 'string'\n                          }\n                        },\n                        required: [                          'relationship_name',\n                          'starting_url_property_name'\n                        ]\n                      }\n                    },\n                    required: [                      'ScrapePage'\n                    ]\n                  },\n                  {\n                    type: 'string',\n                    enum: [                      'IngestData'\n                    ]\n                  }\n                ]\n              },\n              table_name: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'children',\n              'operation',\n              'table_name'\n            ]\n          }\n        },\n        default_banned_domains: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        default_stop_conditions: {\n          type: 'object',\n          description: 'Configuration parameters for the StopChecker',\n          properties: {\n            max_steps_without_save: {\n              type: 'integer'\n            },\n            max_errors: {\n              type: 'integer'\n            },\n            max_execution_time_secs: {\n              type: 'integer'\n            },\n            max_total_steps: {\n              type: 'integer'\n            }\n          },\n          required: [            'max_steps_without_save'\n          ]\n        }\n      },\n      required: [        'name',\n        'starting_step',\n        'starting_table',\n        'steps'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
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
  return asTextContentResult(await maybeFilter(args, await client.workflow.list(body)));
};

export default { metadata, tool, handler };
