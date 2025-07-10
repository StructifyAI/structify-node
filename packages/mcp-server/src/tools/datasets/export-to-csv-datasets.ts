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
  httpPath: '/dataset/export_to_csv',
  operationId: 'dataset_export_csv',
};

export const tool: Tool = {
  name: 'export_to_csv_datasets',
  description: 'You need to specify a dataset and a table_name',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.datasets.exportToCsv(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
