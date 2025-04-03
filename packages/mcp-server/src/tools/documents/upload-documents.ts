// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
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

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.documents.upload(body);
};

export default { metadata, tool, handler };
