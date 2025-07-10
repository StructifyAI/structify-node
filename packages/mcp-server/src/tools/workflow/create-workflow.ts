// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'workflow',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/workflow/create',
  operationId: 'dataset_workflow_create',
};

export const tool: Tool = {
  name: 'create_workflow',
  description: 'Create a new workflow',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      workflow: {
        $ref: '#/$defs/workflow',
      },
    },
    $defs: {
      workflow: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          starting_step: {
            type: 'string',
          },
          starting_table: {
            type: 'string',
          },
          steps: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                },
                children: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                operation: {
                  anyOf: [
                    {
                      type: 'object',
                      properties: {
                        EnhanceProperties: {
                          type: 'array',
                          items: {
                            type: 'string',
                          },
                        },
                      },
                      required: ['EnhanceProperties'],
                    },
                    {
                      type: 'object',
                      properties: {
                        EnhanceRelationship: {
                          type: 'string',
                        },
                      },
                      required: ['EnhanceRelationship'],
                    },
                    {
                      type: 'object',
                      properties: {
                        DeriveProperty: {
                          type: 'array',
                          items: {
                            type: 'string',
                          },
                        },
                      },
                      required: ['DeriveProperty'],
                    },
                    {
                      type: 'object',
                      properties: {
                        ScrapePage: {
                          type: 'object',
                          properties: {
                            relationship_name: {
                              type: 'string',
                            },
                            starting_url_property_name: {
                              type: 'string',
                            },
                          },
                          required: ['relationship_name', 'starting_url_property_name'],
                        },
                      },
                      required: ['ScrapePage'],
                    },
                    {
                      type: 'string',
                      enum: ['IngestData'],
                    },
                  ],
                },
                table_name: {
                  type: 'string',
                },
              },
              required: ['id', 'children', 'operation', 'table_name'],
            },
          },
          default_banned_domains: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          default_stop_conditions: {
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
        required: ['name', 'starting_step', 'starting_table', 'steps'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.workflow.create(body));
};

export default { metadata, tool, handler };
