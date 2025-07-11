// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'chat',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/chat/sessions/{session_id}/timeline',
  operationId: 'chat_get_session_timeline',
};

export const tool: Tool = {
  name: 'get_session_timeline_chat',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet chronological timeline of messages and commits for a chat session\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response structure for getting session timeline',\n  properties: {\n    timeline: {\n      type: 'array',\n      description: 'Chronologically sorted list of messages and commits',\n      items: {\n        anyOf: [          {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              chat_session_id: {\n                type: 'string'\n              },\n              content: {\n                type: 'string'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              role: {\n                type: 'string'\n              },\n              timestamp: {\n                type: 'string',\n                format: 'date-time'\n              },\n              type: {\n                type: 'string',\n                enum: [                  'Message'\n                ]\n              }\n            },\n            required: [              'id',\n              'chat_session_id',\n              'content',\n              'created_at',\n              'role',\n              'timestamp',\n              'type'\n            ]\n          },\n          {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              chat_session_id: {\n                type: 'string'\n              },\n              commit_hash: {\n                type: 'string'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              type: {\n                type: 'string',\n                enum: [                  'GitCommit'\n                ]\n              }\n            },\n            required: [              'id',\n              'chat_session_id',\n              'commit_hash',\n              'created_at',\n              'type'\n            ]\n          }\n        ]\n      }\n    }\n  },\n  required: [    'timeline'\n  ]\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.chat.getSessionTimeline(session_id)));
};

export default { metadata, tool, handler };
