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
  httpPath: '/chat/sessions/{chat_id}/commits/{commit_hash}',
  operationId: 'get_git_commit',
};

export const tool: Tool = {
  name: 'get_git_commit_chat',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a specific git commit by its hash for a chat session\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response structure for getting a git commit by hash',\n  properties: {\n    commit: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        chat_session_id: {\n          type: 'string'\n        },\n        commit_hash: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'chat_session_id',\n        'commit_hash',\n        'created_at'\n      ]\n    }\n  },\n  required: [    'commit'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      chat_id: {
        type: 'string',
      },
      commit_hash: {
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
  const { chat_id, commit_hash, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.chat.getGitCommit(chat_id, commit_hash)));
};

export default { metadata, tool, handler };
