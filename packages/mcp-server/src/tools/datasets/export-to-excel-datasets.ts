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
  httpPath: '/dataset/export_to_excel',
  operationId: 'dataset_export_excel',
};

export const tool: Tool = {
  name: 'export_to_excel_datasets',
  description: 'Each table and relationship type will be in its own sheet',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.datasets.exportToExcel(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
