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
  httpPath: '/dataset/evaluate/list',
  operationId: 'dataset_evaluate_list',
};

export const tool: Tool = {
  name: 'list_datasets_evaluate',
  description: 'List all dataset evaluation results with pagination',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.datasets.evaluate.list(body));
};

export default { metadata, tool, handler };
