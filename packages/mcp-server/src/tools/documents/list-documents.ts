// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
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

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.documents.list(body);
};

export default { metadata, tool, handler };
