// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/documents/delete',
  operationId: 'documents_delete',
};

export const tool: Tool = {
  name: 'delete_documents',
  description: 'Delete a file from the database',
  inputSchema: {
    type: 'object',
    properties: {
      file_path: {
        type: 'string',
        description: 'The path of the file to delete',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.documents.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
