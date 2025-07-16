// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/dataset/create',
  operationId: 'dataset_create',
};

export const tool: Tool = {
  name: 'create_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a dataset.\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
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
      ephemeral: {
        type: 'boolean',
      },
      generate_merge_criteria: {
        type: 'boolean',
      },
      llm_override_field: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
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
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.datasets.create(body)));
};

export default { metadata, tool, handler };
