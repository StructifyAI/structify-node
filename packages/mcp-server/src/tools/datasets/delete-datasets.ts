// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/dataset/delete',
  operationId: 'dataset_delete',
};

export const tool: Tool = {
  name: 'delete_datasets',
  description: 'Permanently delete a dataset and all its contents',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the dataset',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.datasets.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
