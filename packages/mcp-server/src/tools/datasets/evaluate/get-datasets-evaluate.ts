// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets.evaluate',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/dataset/evaluate/get',
  operationId: 'dataset_evaluate_get',
};

export const tool: Tool = {
  name: 'get_datasets_evaluate',
  description: 'Get a dataset evaluation result by ID',
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
  return asTextContentResult(await client.datasets.evaluate.get(body));
};

export default { metadata, tool, handler };
