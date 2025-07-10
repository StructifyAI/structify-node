// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/documents/list',
  operationId: 'documents_list',
};

export const tool: Tool = {
  name: 'list_documents',
  description: 'List all files for your user account in the database.',
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
  return asTextContentResult(await client.documents.list(body));
};

export default { metadata, tool, handler };
