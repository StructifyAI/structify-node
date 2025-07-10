// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.human_llm',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/human_llm/add_to_dataset',
  operationId: 'human_llm_add_to_dataset',
};

export const tool: Tool = {
  name: 'add_to_dataset_admin_human_llm',
  description: 'Adds the given step to the HumanLLM dataset.',
  inputSchema: {
    type: 'object',
    properties: {
      extraction_criteria_met: {
        type: 'boolean',
      },
      job_id: {
        type: 'string',
      },
      step_id: {
        type: 'string',
      },
      tool_calls: {
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
  return asTextContentResult((await client.admin.humanLlm.addToDataset(body)) as object);
};

export default { metadata, tool, handler };
