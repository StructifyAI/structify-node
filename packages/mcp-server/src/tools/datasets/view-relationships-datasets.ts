// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/dataset/view_relationships',
  operationId: 'dataset_view_relationships',
};

export const tool: Tool = {
  name: 'view_relationships_datasets',
  description: 'You need to specify a dataset and the name of the relationship',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      job_id: {
        type: 'string',
      },
      last_updated: {
        type: 'string',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      sort_by: {
        type: 'object',
        properties: {
          col_id: {
            anyOf: [
              {
                type: 'object',
                properties: {
                  user_defined_column: {
                    type: 'string',
                  },
                },
                required: ['user_defined_column'],
              },
              {
                type: 'string',
                enum: ['creation_time'],
              },
            ],
          },
          sort: {
            type: 'string',
            enum: ['asc', 'desc'],
          },
        },
        required: ['col_id', 'sort'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.datasets.viewRelationships(body));
};

export default { metadata, tool, handler };
