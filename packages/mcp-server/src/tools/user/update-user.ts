// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a user's permissions and type.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user',\n  $defs: {\n    user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        email: {\n          type: 'string'\n        },\n        feature_flags: {\n          type: 'array',\n          items: {\n            type: 'string',\n            enum: [              'functional_test',\n              'pdf_parsing',\n              'boredm_construction_model',\n              'generic_suspicious_queue',\n              'new_use_case_preview',\n              'none'\n            ]\n          }\n        },\n        is_developer: {\n          type: 'boolean'\n        },\n        permissions: {\n          type: 'array',\n          items: {\n            type: 'string',\n            enum: [              'labeler',\n              'qa_labeler',\n              'debug',\n              'human_llm',\n              'none'\n            ]\n          }\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user_type: {\n          type: 'string',\n          enum: [            'admin',\n            'public',\n            'end_user',\n            'pro'\n          ]\n        },\n        survey_completed_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        survey_response: {\n          type: 'object'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'email',\n        'feature_flags',\n        'is_developer',\n        'permissions',\n        'updated_at',\n        'user_type'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.user.update(body)));
};

export default { metadata, tool, handler };
