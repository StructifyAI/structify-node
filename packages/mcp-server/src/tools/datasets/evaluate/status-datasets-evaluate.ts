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
  httpPath: '/dataset/evaluate/status',
  operationId: 'dataset_evaluate_status',
};

export const tool: Tool = {
  name: 'status_datasets_evaluate',
  description: 'Get the status of a dataset evaluation',
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
  return asTextContentResult(await client.datasets.evaluate.status(body));
};

export default { metadata, tool, handler };
