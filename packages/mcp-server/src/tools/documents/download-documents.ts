// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/documents/download',
  operationId: 'documents_download',
};

export const tool: Tool = {
  name: 'download_documents',
  description: 'Download a file from the database',
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
  return asTextContentResult(await client.documents.download(body));
};

export default { metadata, tool, handler };
