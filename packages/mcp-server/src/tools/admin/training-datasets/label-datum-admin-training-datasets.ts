// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/admin/training_datasets/label_datum',
  operationId: 'update_training_datum',
};

export const tool: Tool = {
  name: 'label_datum_admin_training_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the status and content of an existing training datum.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        $ref: '#/$defs/datum_status',
      },
      updated_tool_calls: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            input: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    Save: {
                      $ref: '#/$defs/knowledge_graph',
                    },
                  },
                  required: ['Save'],
                },
                {
                  type: 'object',
                  properties: {
                    Scroll: {
                      type: 'object',
                      description: 'For tools with no inputs.',
                      properties: {
                        reason: {
                          type: 'string',
                          description: 'Dummy argument',
                        },
                      },
                      required: ['reason'],
                    },
                  },
                  required: ['Scroll'],
                },
                {
                  type: 'object',
                  properties: {
                    ScrollToBottom: {
                      type: 'object',
                      description: 'For tools with no inputs.',
                      properties: {
                        reason: {
                          type: 'string',
                          description: 'Dummy argument',
                        },
                      },
                      required: ['reason'],
                    },
                  },
                  required: ['ScrollToBottom'],
                },
                {
                  type: 'object',
                  properties: {
                    Exit: {
                      type: 'object',
                      description: 'For tools with no inputs.',
                      properties: {
                        reason: {
                          type: 'string',
                          description: 'Dummy argument',
                        },
                      },
                      required: ['reason'],
                    },
                  },
                  required: ['Exit'],
                },
                {
                  type: 'object',
                  properties: {
                    Click: {
                      type: 'object',
                      properties: {
                        flag: {
                          type: 'integer',
                        },
                      },
                      required: ['flag'],
                    },
                  },
                  required: ['Click'],
                },
                {
                  type: 'object',
                  properties: {
                    Hover: {
                      type: 'object',
                      properties: {
                        flag: {
                          type: 'integer',
                        },
                      },
                      required: ['flag'],
                    },
                  },
                  required: ['Hover'],
                },
                {
                  type: 'object',
                  properties: {
                    Wait: {
                      type: 'object',
                      properties: {
                        seconds: {
                          type: 'integer',
                          description: 'Time in seconds to wait',
                        },
                      },
                      required: [],
                    },
                  },
                  required: ['Wait'],
                },
                {
                  type: 'object',
                  properties: {
                    Error: {
                      type: 'object',
                      properties: {
                        error: {
                          type: 'string',
                        },
                      },
                      required: ['error'],
                    },
                  },
                  required: ['Error'],
                },
                {
                  type: 'object',
                  properties: {
                    Google: {
                      type: 'object',
                      properties: {
                        query: {
                          type: 'string',
                        },
                      },
                      required: ['query'],
                    },
                  },
                  required: ['Google'],
                },
                {
                  type: 'object',
                  properties: {
                    Type: {
                      type: 'object',
                      properties: {
                        flag: {
                          type: 'integer',
                        },
                        input: {
                          type: 'string',
                        },
                      },
                      required: ['flag', 'input'],
                    },
                  },
                  required: ['Type'],
                },
              ],
            },
            name: {
              type: 'string',
              enum: [
                'Exit',
                'Save',
                'Wait',
                'Type',
                'Scroll',
                'ScrollToBottom',
                'Click',
                'Hover',
                'Error',
                'Google',
              ],
            },
            result: {
              anyOf: [
                {
                  type: 'object',
                  properties: {
                    ToolQueued: {
                      type: 'string',
                    },
                  },
                  required: ['ToolQueued'],
                },
                {
                  type: 'object',
                  properties: {
                    ToolFail: {
                      type: 'string',
                    },
                  },
                  required: ['ToolFail'],
                },
                {
                  type: 'object',
                  properties: {
                    InputParseFail: {
                      type: 'string',
                    },
                  },
                  required: ['InputParseFail'],
                },
                {
                  type: 'object',
                  properties: {
                    Success: {
                      type: 'string',
                    },
                  },
                  required: ['Success'],
                },
              ],
            },
          },
          required: ['input', 'name'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      datum_status: {
        type: 'string',
        enum: [
          'unlabeled',
          'nav_labeled',
          'save_labeled',
          'nav_verified',
          'save_verified',
          'pending',
          'skipped',
          'suspicious_nav',
          'suspicious_save',
          'potential_suspicious_nav',
          'potential_suspicious_save',
        ],
      },
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
  const response = await client.admin.trainingDatasets.labelDatum(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
