// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.next_action',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/admin/next_action/label_action_training_datum',
  operationId: 'label_action_training_datum',
};

export const tool: Tool = {
  name: 'label_training_datum_admin_next_action',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLabel an existing action training datum",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      label: {
        type: 'string',
      },
      output: {
        anyOf: [
          {
            type: 'object',
            properties: {
              SelectedStep: {
                type: 'object',
                properties: {
                  info: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                      },
                      action_name: {
                        type: 'string',
                      },
                      metadata: {
                        type: 'object',
                      },
                    },
                    required: ['id'],
                  },
                  llm_input: {
                    $ref: '#/$defs/chat_prompt',
                  },
                  llm_output: {
                    type: 'string',
                  },
                  step_id: {
                    type: 'string',
                  },
                },
                required: ['info', 'llm_input', 'llm_output', 'step_id'],
              },
            },
            required: ['SelectedStep'],
          },
          {
            type: 'object',
            properties: {
              SearchStep: {
                type: 'object',
                properties: {
                  llm_input: {
                    $ref: '#/$defs/chat_prompt',
                  },
                  llm_output: {
                    type: 'string',
                  },
                  search_query: {
                    type: 'string',
                  },
                },
                required: ['llm_input', 'llm_output', 'search_query'],
              },
            },
            required: ['SearchStep'],
          },
          {
            type: 'object',
            properties: {
              InvalidAction: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                  llm_input: {
                    $ref: '#/$defs/chat_prompt',
                  },
                  llm_output: {
                    type: 'string',
                  },
                },
                required: ['error', 'llm_input', 'llm_output'],
              },
            },
            required: ['InvalidAction'],
          },
          {
            type: 'object',
            properties: {
              Exit: {
                type: 'object',
                properties: {
                  llm_input: {
                    $ref: '#/$defs/chat_prompt',
                  },
                  llm_output: {
                    type: 'string',
                  },
                },
                required: ['llm_input', 'llm_output'],
              },
            },
            required: ['Exit'],
          },
        ],
      },
    },
    $defs: {
      chat_prompt: {
        type: 'object',
        properties: {
          decoding_params: {
            type: 'object',
            properties: {
              parameters: {
                type: 'array',
                items: {
                  anyOf: [
                    {
                      type: 'object',
                      properties: {
                        MaxTokens: {
                          type: 'integer',
                        },
                      },
                      required: ['MaxTokens'],
                    },
                    {
                      type: 'object',
                      properties: {
                        TopP: {
                          type: 'number',
                        },
                      },
                      required: ['TopP'],
                    },
                    {
                      type: 'object',
                      properties: {
                        RepeatWindow: {
                          type: 'integer',
                        },
                      },
                      required: ['RepeatWindow'],
                    },
                    {
                      type: 'object',
                      properties: {
                        RepeatPenalty: {
                          type: 'number',
                        },
                      },
                      required: ['RepeatPenalty'],
                    },
                    {
                      type: 'object',
                      properties: {
                        Temperature: {
                          type: 'number',
                        },
                      },
                      required: ['Temperature'],
                    },
                    {
                      type: 'object',
                      properties: {
                        StopTokens: {
                          type: 'array',
                          items: {
                            type: 'string',
                          },
                        },
                      },
                      required: ['StopTokens'],
                    },
                    {
                      type: 'object',
                      properties: {
                        LogitBias: {
                          type: 'object',
                        },
                      },
                      required: ['LogitBias'],
                    },
                    {
                      type: 'object',
                      properties: {
                        Functions: {
                          type: 'array',
                          items: {
                            type: 'object',
                          },
                        },
                      },
                      required: ['Functions'],
                    },
                    {
                      type: 'object',
                      properties: {
                        JsonValidator: {
                          type: 'object',
                        },
                      },
                      required: ['JsonValidator'],
                    },
                    {
                      type: 'object',
                      properties: {
                        RegexValidator: {
                          type: 'string',
                        },
                      },
                      required: ['RegexValidator'],
                    },
                    {
                      type: 'object',
                      properties: {
                        ContextFreeGrammar: {
                          type: 'string',
                        },
                      },
                      required: ['ContextFreeGrammar'],
                    },
                    {
                      type: 'object',
                      properties: {
                        NumBeams: {
                          type: 'integer',
                        },
                      },
                      required: ['NumBeams'],
                    },
                    {
                      type: 'object',
                      properties: {
                        Crop: {
                          type: 'boolean',
                        },
                      },
                      required: ['Crop'],
                    },
                    {
                      type: 'object',
                      properties: {
                        Thinking: {
                          type: 'integer',
                          description:
                            'Thinking tokens for Claude 3.7. Contains the budget in tokens for thinking.',
                        },
                      },
                      required: ['Thinking'],
                    },
                  ],
                },
              },
            },
            required: ['parameters'],
          },
          messages: {
            type: 'array',
            items: {
              type: 'object',
              description: 'Our generic definition of a message to a chat agent.',
              properties: {
                content: {
                  type: 'array',
                  description:
                    "We want this to be a vec of contents so we can accurately\ncapture an interleaving of images and text.\n\nThis is meant to be a completely raw, unprocessed representation\nof the text. Don't take stuff out.",
                  items: {
                    anyOf: [
                      {
                        type: 'object',
                        properties: {
                          Text: {
                            type: 'string',
                          },
                        },
                        required: ['Text'],
                      },
                      {
                        type: 'object',
                        properties: {
                          Image: {
                            type: 'string',
                          },
                        },
                        required: ['Image'],
                      },
                    ],
                  },
                },
                role: {
                  type: 'string',
                  enum: ['user', 'system', 'assistant'],
                },
              },
              required: ['content', 'role'],
            },
          },
          metadata: {
            type: 'object',
            description: 'All metadata required to generate a prompt for the LLM',
            properties: {
              dataset_descriptor: {
                $ref: '#/$defs/dataset_descriptor',
              },
              extracted_entities: {
                type: 'array',
                items: {
                  $ref: '#/$defs/knowledge_graph',
                },
              },
              extraction_criteria: {
                type: 'array',
                items: {
                  $ref: '#/$defs/save_requirement',
                },
              },
              formatter_specific: {
                anyOf: [
                  {
                    type: 'object',
                    properties: {
                      ImageMeta: {
                        type: 'object',
                        properties: {
                          image: {
                            type: 'string',
                          },
                          document_name: {
                            type: 'string',
                          },
                          document_page: {
                            type: 'integer',
                          },
                          ocr_content: {
                            type: 'string',
                          },
                        },
                        required: ['image'],
                      },
                    },
                    required: ['ImageMeta'],
                  },
                  {
                    type: 'object',
                    properties: {
                      WebMeta: {
                        type: 'object',
                        properties: {
                          flags: {
                            type: 'array',
                            items: {
                              type: 'object',
                              properties: {
                                ariaLabel: {
                                  type: 'string',
                                },
                                type: {
                                  type: 'string',
                                },
                                x: {
                                  type: 'number',
                                },
                                y: {
                                  type: 'number',
                                },
                                height: {
                                  type: 'number',
                                },
                                href: {
                                  type: 'string',
                                },
                                isInteractive: {
                                  type: 'boolean',
                                },
                                number: {
                                  type: 'integer',
                                  description:
                                    'The number by which the flag is referred in image, prompt, and tool calls.',
                                },
                                text: {
                                  type: 'string',
                                },
                                width: {
                                  type: 'number',
                                  description:
                                    "The serde default here is to give us backwards compatibility\nit's fine for these to be anything as long as the image isn't\ngiven since it won't regenerate.",
                                },
                              },
                              required: ['ariaLabel', 'type', 'x', 'y'],
                            },
                          },
                          url: {
                            type: 'string',
                          },
                          ocr_content: {
                            type: 'string',
                          },
                          screenshot: {
                            type: 'string',
                          },
                        },
                        required: ['flags', 'url'],
                      },
                    },
                    required: ['WebMeta'],
                  },
                  {
                    type: 'object',
                    properties: {
                      TextMeta: {
                        type: 'object',
                        properties: {
                          text: {
                            type: 'string',
                          },
                        },
                        required: ['text'],
                      },
                    },
                    required: ['TextMeta'],
                  },
                  {
                    type: 'object',
                    properties: {
                      ScraperMeta: {
                        type: 'object',
                        properties: {
                          html_content: {
                            type: 'string',
                          },
                          url: {
                            type: 'string',
                          },
                        },
                        required: ['html_content', 'url'],
                      },
                    },
                    required: ['ScraperMeta'],
                  },
                ],
              },
              tool_metadata: {
                type: 'array',
                items: {
                  $ref: '#/$defs/tool_metadata',
                },
              },
              qa_potentially_sus_response: {
                type: 'string',
              },
            },
            required: [
              'dataset_descriptor',
              'extracted_entities',
              'extraction_criteria',
              'formatter_specific',
              'tool_metadata',
            ],
          },
        },
        required: ['decoding_params', 'messages', 'metadata'],
      },
      dataset_descriptor: {
        type: 'object',
        description:
          'A dataset is where you put multiple referential schemas.\n\nA dataset is a complete namespace where all references between schemas\nare held within the dataset.',
        properties: {
          description: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          relationships: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                source_table: {
                  type: 'string',
                },
                target_table: {
                  type: 'string',
                },
                merge_strategy: {
                  $ref: '#/$defs/relationship_merge_strategy',
                },
                properties: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      description: {
                        type: 'string',
                      },
                      name: {
                        type: 'string',
                      },
                      merge_strategy: {
                        $ref: '#/$defs/strategy',
                      },
                      prop_type: {
                        $ref: '#/$defs/property_type',
                      },
                    },
                    required: ['description', 'name'],
                  },
                },
              },
              required: ['description', 'name', 'source_table', 'target_table'],
            },
          },
          tables: {
            type: 'array',
            items: {
              $ref: '#/$defs/table',
            },
          },
          llm_override_field: {
            type: 'string',
          },
        },
        required: ['description', 'name', 'relationships', 'tables'],
      },
      relationship_merge_strategy: {
        type: 'object',
        properties: {
          source_cardinality_given_target_match: {
            type: 'integer',
            description:
              'Describes the expected cardinality of the source table when a match is found in the target table\n\nFor example, if we have a source company and a target funding round, we expect the source company\nto appear in multiple funding rounds, but not *too* many.\nSo if we have a funding round match, the expected number of unique companies is relatively small.\nThis is an estimate of that number.',
          },
          target_cardinality_given_source_match: {
            type: 'integer',
            description:
              'Describes the expected cardinality of the target table when a match is found in the source table\n\nFor example, if we have a source company and a target funding round, we usually expect\nsome number of funding rounds to be associated with a single company but not *too* many.\nSo if we have a company match, the expected number of unique funding rounds is relatively small.\nThis is an estimate of that number.',
          },
        },
        required: [],
      },
      strategy: {
        anyOf: [
          {
            type: 'string',
            enum: ['Unique', 'NoSignal'],
          },
          {
            type: 'object',
            properties: {
              Probabilistic: {
                $ref: '#/$defs/merge_config',
              },
            },
            required: ['Probabilistic'],
          },
        ],
      },
      merge_config: {
        type: 'object',
        description: 'The configuration for a probabilistic merge strategy',
        properties: {
          baseline_cardinality: {
            type: 'integer',
            description:
              'The number of unique values that are expected to be present in the complete dataset\n\nThis is used for merging to determine how significant a match is. (i.e. if there are\nonly 2 possible values, a match gives less confidence than if there are 100)',
          },
          match_transfer_probability: {
            type: 'number',
            description:
              "The estimated probability that, given an entity match, the properties also match\n\nFor a person's full name, this would be quite high. For a person's job title, it\nwould be lower because people can have multiple job titles over time or at different\ncompanies at the same time.",
          },
          comparison_strategy: {
            type: 'string',
            enum: ['Default', 'EnforceUniqueness'],
          },
        },
        required: ['baseline_cardinality', 'match_transfer_probability'],
      },
      property_type: {
        anyOf: [
          {
            type: 'string',
            enum: [
              'String',
              'Boolean',
              'Integer',
              'Float',
              'Date',
              'URL',
              'Money',
              'Image',
              'PersonName',
              'Address',
            ],
          },
          {
            type: 'object',
            properties: {
              Enum: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
            required: ['Enum'],
          },
        ],
      },
      table: {
        type: 'object',
        description: 'The full definition of what a schema is - without duplicate information.',
        properties: {
          description: {
            type: 'string',
          },
          name: {
            type: 'string',
            description: 'Organized in a name, description format.',
          },
          properties: {
            type: 'array',
            description: 'Organized in a name, description format.',
            items: {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                merge_strategy: {
                  $ref: '#/$defs/strategy',
                },
                prop_type: {
                  $ref: '#/$defs/property_type',
                },
              },
              required: ['description', 'name'],
            },
          },
          expected_cardinality: {
            type: 'integer',
            description:
              'Expected number of unique values in the complete dataset.\n\nThis is used for our probabilistic merge strategy.',
          },
          primary_column: {
            type: 'string',
          },
        },
        required: ['description', 'name', 'properties'],
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
      save_requirement: {
        anyOf: [
          {
            type: 'object',
            properties: {
              relationship_name: {
                type: 'string',
              },
            },
            required: ['relationship_name'],
          },
          {
            type: 'object',
            properties: {
              seeded_entity_id: {
                type: 'integer',
                description:
                  'The integer id corresponding to an entity in the seeded entity graph (different from the global dataset entity id)',
              },
              entity_id: {
                type: 'string',
              },
            },
            required: ['seeded_entity_id'],
          },
          {
            type: 'object',
            properties: {
              property_names: {
                type: 'array',
                description: 'If there are multiple properties, it can match just one of them',
                items: {
                  type: 'string',
                },
              },
              table_name: {
                type: 'string',
                description: 'The table name of the entity to update',
              },
            },
            required: ['property_names', 'table_name'],
          },
        ],
        description: "It's an OR statement across these.",
      },
      tool_metadata: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
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
          regex_validator: {
            type: 'string',
          },
        },
        required: ['description', 'name', 'regex_validator'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.admin.nextAction.labelTrainingDatum(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
