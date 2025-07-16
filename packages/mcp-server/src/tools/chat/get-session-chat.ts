// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/chat/sessions/{session_id}',
  operationId: 'chat_get_session',
};

export const tool: Tool = {
  name: 'get_session_chat',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a chat session with all its messages\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/get_chat_session_response',\n  $defs: {\n    get_chat_session_response: {\n      type: 'object',\n      description: 'Response for getting a chat session',\n      properties: {\n        session: {\n          $ref: '#/$defs/chat_session_with_messages'\n        }\n      },\n      required: [        'session'\n      ]\n    },\n    chat_session_with_messages: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        git_repo_id: {\n          type: 'string'\n        },\n        messages: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              chat_session_id: {\n                type: 'string'\n              },\n              content: {\n                type: 'string'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              role: {\n                type: 'string'\n              },\n              timestamp: {\n                type: 'string',\n                format: 'date-time'\n              }\n            },\n            required: [              'id',\n              'chat_session_id',\n              'content',\n              'created_at',\n              'role',\n              'timestamp'\n            ]\n          }\n        },\n        project_id: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'git_repo_id',\n        'messages',\n        'project_id',\n        'updated_at',\n        'user_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
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
  const { session_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.chat.getSession(session_id)));
};

export default { metadata, tool, handler };
