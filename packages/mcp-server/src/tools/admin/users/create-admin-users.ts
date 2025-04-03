// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.users',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_admin_users',
  description: 'Create a user, returing their API token.',
  inputSchema: {
    type: 'object',
    properties: {
      credit_count: {
        type: 'integer',
      },
      email: {
        type: 'string',
      },
      feature_flags: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['functional_test', 'pdf_parsing', 'boredm_construction_model', 'none'],
        },
      },
      is_admin: {
        type: 'boolean',
      },
      permissions: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['labeler', 'qa_labeler', 'debug', 'human_llm', 'none'],
        },
      },
      test: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.users.create(body);
};

export default { metadata, tool, handler };
