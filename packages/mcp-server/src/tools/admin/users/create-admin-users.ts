// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a user, returing their API token.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token_response',\n  $defs: {\n    token_response: {\n      type: 'object',\n      properties: {\n        token: {\n          type: 'string'\n        },\n        permissions: {\n          type: 'array',\n          items: {\n            type: 'string',\n            enum: [              'labeler',\n              'qa_labeler',\n              'debug',\n              'human_llm',\n              'none'\n            ]\n          }\n        }\n      },\n      required: [        'token',\n        'permissions'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.admin.users.create(body)));
};

export default { metadata, tool, handler };
