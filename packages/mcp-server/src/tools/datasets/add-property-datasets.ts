// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'add_property_datasets',
  description: 'Add a property descriptor to a table in the dataset schema',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      property: {
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
      table_name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.datasets.addProperty(body);
};

export default { tool, handler };
