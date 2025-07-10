// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets.evaluate',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/dataset/evaluate/run',
  operationId: 'dataset_evaluate_run',
};

export const tool: Tool = {
  name: 'run_datasets_evaluate',
  description: 'Evaluate two datasets',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_1: {
        type: 'string',
      },
      dataset_2: {
        type: 'string',
      },
      dataset_2_is_ground_truth: {
        type: 'boolean',
      },
      merge_threshold_override: {
        type: 'number',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.datasets.evaluate.run(body));
};

export default { metadata, tool, handler };
