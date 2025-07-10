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
  httpPath: '/dataset/remove_property',
  operationId: 'dataset_remove_property',
};

export const tool: Tool = {
  name: 'remove_property_datasets',
  description: 'Remove a property descriptor from a table in the dataset schema',
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
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.datasets.removeProperty(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
