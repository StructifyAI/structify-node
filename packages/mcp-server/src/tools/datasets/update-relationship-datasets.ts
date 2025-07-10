// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/dataset/update_relationship',
  operationId: 'dataset_update_relationship',
};

export const tool: Tool = {
  name: 'update_relationship_datasets',
  description: 'Update a relationship descriptor in the dataset schema',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      relationship_name: {
        type: 'string',
      },
      new_description: {
        type: 'string',
      },
      new_merge_strategy: {
        $ref: '#/$defs/relationship_merge_strategy',
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
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.datasets.updateRelationship(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
