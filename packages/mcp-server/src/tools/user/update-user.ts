// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/user/update',
  operationId: 'user_update',
};

export const tool: Tool = {
  name: 'update_user',
  description: "Update a user's permissions and type.",
  inputSchema: {
    type: 'object',
    properties: {
      current_email: {
        type: 'string',
      },
      is_developer: {
        type: 'boolean',
      },
      new_email: {
        type: 'string',
      },
      new_feature_flags: {
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
      new_permissions: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['labeler', 'qa_labeler', 'debug', 'human_llm', 'none'],
        },
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.update(body));
};

export default { metadata, tool, handler };
