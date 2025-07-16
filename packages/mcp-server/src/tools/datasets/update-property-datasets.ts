// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/dataset/update_property',
  operationId: 'dataset_update_property',
};

export const tool: Tool = {
  name: 'update_property_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a property descriptor in a table in the dataset schema\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
        $ref: '#/$defs/strategy',
      },
      new_property_type: {
        $ref: '#/$defs/property_type',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
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
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.datasets.updateProperty(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
