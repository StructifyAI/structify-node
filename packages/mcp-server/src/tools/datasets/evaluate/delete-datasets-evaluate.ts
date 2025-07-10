// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets.evaluate',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/dataset/evaluate/delete',
  operationId: 'dataset_evaluate_delete',
};

export const tool: Tool = {
  name: 'delete_datasets_evaluate',
  description: 'Delete a dataset evaluation result by ID',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.datasets.evaluate.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
