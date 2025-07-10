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
  httpPath: '/documents/upload',
  operationId: 'documents_upload',
};

export const tool: Tool = {
  name: 'upload_documents',
  description: 'Add a new file to the database',
  inputSchema: {
    type: 'object',
    properties: {
      content: {
        type: 'string',
      },
      file_type: {
        type: 'string',
        enum: ['Text', 'PDF', 'SEC'],
      },
      path: {
        type: 'string',
      },
      dataset: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.documents.upload(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
