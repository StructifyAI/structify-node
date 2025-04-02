// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'update_admin_users',
  description: "Update a user's permissions and type.",
  inputSchema: {
    type: 'object',
    properties: {
      current_email: {
        type: 'string',
      },
      new_email: {
        type: 'string',
      },
      new_feature_flags: {
        type: 'array',
        items: {
          type: 'string',
          enum: ['functional_test', 'pdf_parsing', 'boredm_construction_model', 'none'],
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

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.users.update(body);
};

export default { tool, handler };
