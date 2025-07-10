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
  httpPath: '/dataset/enrichment_progress',
  operationId: 'dataset_enrichment_progress',
};

export const tool: Tool = {
  name: 'enrichment_progress_datasets',
  description: 'Get the enrichment progress for a dataset',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Enrichment progress for the dataset',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.datasets.enrichmentProgress(body));
};

export default { metadata, tool, handler };
