// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/jobs/list',
  operationId: 'jobs_list',
};

export const tool: Tool = {
  name: 'list_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all the executions\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string'\n      },\n      created_at: {\n        type: 'string',\n        format: 'date-time'\n      },\n      dataset_id: {\n        type: 'string'\n      },\n      job_type: {\n        type: 'string',\n        enum: [          'Web',\n          'Pdf',\n          'Derive',\n          'Scrape'\n        ]\n      },\n      selected_next_workflow_step: {\n        type: 'boolean'\n      },\n      status: {\n        type: 'string',\n        enum: [          'Queued',\n          'Running',\n          'Completed',\n          'Failed'\n        ]\n      },\n      user_id: {\n        type: 'string'\n      },\n      message: {\n        type: 'string'\n      },\n      parameters: {\n        type: 'object',\n        properties: {\n          allow_extra_entities: {\n            type: 'boolean'\n          },\n          extraction_criteria: {\n            type: 'array',\n            items: {\n              $ref: '#/$defs/save_requirement'\n            }\n          },\n          seeded_kg: {\n            $ref: '#/$defs/knowledge_graph'\n          },\n          structuring_input: {\n            anyOf: [              {\n                type: 'object',\n                properties: {\n                  Agent: {\n                    anyOf: [                      {\n                        type: 'object',\n                        properties: {\n                          PDF: {\n                            type: 'object',\n                            description: 'Ingest all pages of a PDF and process them independently.',\n                            properties: {\n                              path: {\n                                type: 'string'\n                              }\n                            },\n                            required: [                              'path'\n                            ]\n                          }\n                        },\n                        required: [                          'PDF'\n                        ]\n                      },\n                      {\n                        type: 'object',\n                        properties: {\n                          Web: {\n                            type: 'object',\n                            properties: {\n                              banned_domains: {\n                                type: 'array',\n                                items: {\n                                  type: 'string'\n                                }\n                              },\n                              starting_searches: {\n                                type: 'array',\n                                items: {\n                                  type: 'string'\n                                }\n                              },\n                              starting_urls: {\n                                type: 'array',\n                                items: {\n                                  type: 'string'\n                                }\n                              }\n                            },\n                            required: []\n                          }\n                        },\n                        required: [                          'Web'\n                        ]\n                      }\n                    ],\n                    description: 'These are all the types that can be converted into a BasicInputType'\n                  }\n                },\n                required: [                  'Agent'\n                ]\n              },\n              {\n                type: 'object',\n                properties: {\n                  TransformationPrompt: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'TransformationPrompt'\n                ]\n              },\n              {\n                type: 'object',\n                properties: {\n                  ScrapeFromUrlProperty: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'ScrapeFromUrlProperty'\n                ]\n              },\n              {\n                type: 'object',\n                properties: {\n                  ScrapeUrl: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'ScrapeUrl'\n                ]\n              }\n            ]\n          }\n        },\n        required: [          'allow_extra_entities',\n          'extraction_criteria',\n          'seeded_kg',\n          'structuring_input'\n        ]\n      },\n      reason: {\n        type: 'string'\n      },\n      run_started_time: {\n        type: 'string',\n        format: 'date-time'\n      },\n      run_time_milliseconds: {\n        type: 'integer'\n      },\n      special_job_type: {\n        type: 'string',\n        enum: [          'HumanLLM'\n        ]\n      },\n      workflow_group_id: {\n        type: 'string'\n      },\n      workflow_id: {\n        $ref: '#/$defs/id'\n      },\n      workflow_step_id: {\n        type: 'string'\n      }\n    },\n    required: [      'id',\n      'created_at',\n      'dataset_id',\n      'job_type',\n      'selected_next_workflow_step',\n      'status',\n      'user_id'\n    ]\n  },\n  $defs: {\n    save_requirement: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            relationship_name: {\n              type: 'string'\n            }\n          },\n          required: [            'relationship_name'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            seeded_entity_id: {\n              type: 'integer',\n              description: 'The integer id corresponding to an entity in the seeded entity graph (different from the global dataset entity id)'\n            },\n            entity_id: {\n              type: 'string'\n            }\n          },\n          required: [            'seeded_entity_id'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            property_names: {\n              type: 'array',\n              description: 'If there are multiple properties, it can match just one of them',\n              items: {\n                type: 'string'\n              }\n            },\n            table_name: {\n              type: 'string',\n              description: 'The table name of the entity to update'\n            }\n          },\n          required: [            'property_names',\n            'table_name'\n          ]\n        }\n      ],\n      description: 'It\\'s an OR statement across these.'\n    },\n    knowledge_graph: {\n      type: 'object',\n      description: 'Knowledge graph info structured to deserialize and display\\nin the same format that the LLM outputs.\\nAlso the first representation of an LLM output in the pipeline from raw tool output to being merged into a Neo4j DB',\n      properties: {\n        entities: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/entity'\n          }\n        },\n        relationships: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/relationship'\n          }\n        }\n      },\n      required: [        'entities',\n        'relationships'\n      ]\n    },\n    entity: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        properties: {\n          type: 'object'\n        },\n        type: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'properties',\n        'type'\n      ]\n    },\n    relationship: {\n      type: 'object',\n      properties: {\n        source: {\n          type: 'integer'\n        },\n        target: {\n          type: 'integer'\n        },\n        type: {\n          type: 'string'\n        },\n        properties: {\n          type: 'object'\n        }\n      },\n      required: [        'source',\n        'target',\n        'type'\n      ]\n    },\n    id: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
        description: 'Dataset name to optionally filter jobs by',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      seeded_kg_search_term: {
        type: 'string',
        description: 'seeded kg search term',
      },
      since: {
        type: 'string',
        description: 'List since a specific timestamp',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Status to optionally filter jobs by',
        enum: ['Queued', 'Running', 'Completed', 'Failed'],
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
  const response = await client.jobs.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
