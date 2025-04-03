// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_property_datasets',
  description: 'Update a property descriptor in a table in the dataset schema',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      property_name: {
        type: 'string',
      },
      table_name: {
        type: 'string',
      },
      new_property_description: {
        type: 'string',
      },
      new_property_merge_strategy: {
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
      new_property_type: {
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
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.datasets.updateProperty(body);
};

export default { metadata, tool, handler };
