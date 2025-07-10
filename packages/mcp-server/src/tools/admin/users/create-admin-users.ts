// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/users/create',
  operationId: 'admin_user_create',
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
          enum: [
            'functional_test',
            'pdf_parsing',
            'boredm_construction_model',
            'generic_suspicious_queue',
            'new_use_case_preview',
            'none',
          ],
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

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.users.create(body));
};

export default { metadata, tool, handler };
