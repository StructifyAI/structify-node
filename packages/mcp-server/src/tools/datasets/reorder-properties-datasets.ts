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
  httpPath: '/dataset/reorder_properties',
  operationId: 'dataset_reorder_properties',
};

export const tool: Tool = {
  name: 'reorder_properties_datasets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      property_names: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      table_name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.datasets.reorderProperties(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
