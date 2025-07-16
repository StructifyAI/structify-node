// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/chat/sessions/{session_id}/messages',
  operationId: 'chat_add_message',
};

export const tool: Tool = {
  name: 'add_message_chat',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a message to a chat session\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/add_chat_message_response',\n  $defs: {\n    add_chat_message_response: {\n      type: 'object',\n      description: 'Response for adding a message',\n      properties: {\n        message: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            chat_session_id: {\n              type: 'string'\n            },\n            content: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            role: {\n              type: 'string'\n            },\n            timestamp: {\n              type: 'string',\n              format: 'date-time'\n            }\n          },\n          required: [            'id',\n            'chat_session_id',\n            'content',\n            'created_at',\n            'role',\n            'timestamp'\n          ]\n        }\n      },\n      required: [        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
      },
      content: {
        type: 'string',
      },
      role: {
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
  return asTextContentResult(await maybeFilter(args, await client.chat.addMessage(session_id, body)));
};

export default { metadata, tool, handler };
