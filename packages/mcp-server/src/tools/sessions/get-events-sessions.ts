// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sessions/{session_id}/events',
  operationId: 'get_session_events',
};

export const tool: Tool = {
  name: 'get_events_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet events from all jobs in a session's event queue (without removing them).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/get_session_events_response',\n  $defs: {\n    get_session_events_response: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer'\n        },\n        events: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              body: {\n                type: 'object'\n              },\n              job_id: {\n                type: 'string'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              node_id: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'body',\n              'job_id'\n            ]\n          }\n        }\n      },\n      required: [        'count',\n        'events'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
        description: 'Maximum number of events to fetch (default: 100).',
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
  return asTextContentResult(await maybeFilter(args, await client.sessions.getEvents(session_id, body)));
};

export default { metadata, tool, handler };
