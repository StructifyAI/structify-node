// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'create_datasets',
  description: 'Creates a dataset.',
  inputSchema: {
    type: 'object',
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
                    anyOf: [
                      {
                        type: 'string',
                        enum: ['Unique', 'NoSignal'],
                      },
                      {
                        type: 'object',
                        properties: {
                          Probabilistic: {
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
                        },
                        required: ['Probabilistic'],
                      },
                    ],
                  },
                  prop_type: {
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
                    $ref: '#/properties/relationships/items/properties/items/merge_strategy',
                  },
                  prop_type: {
                    $ref: '#/properties/relationships/items/properties/items/prop_type',
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
          },
          required: ['description', 'name', 'properties'],
        },
      },
      llm_override_field: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.datasets.create(body);
};

export default { tool, handler };
