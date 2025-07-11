// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'teams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/team/{team_id}/members',
  operationId: 'team_list_members',
};

export const tool: Tool = {
  name: 'list_members_teams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/list_members_response',\n  $defs: {\n    list_members_response: {\n      type: 'object',\n      properties: {\n        members: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/user_team'\n          }\n        }\n      },\n      required: [        'members'\n      ]\n    },\n    user_team: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        role: {\n          $ref: '#/$defs/team_role'\n        },\n        team_id: {\n          type: 'string'\n        },\n        user_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'role',\n        'team_id',\n        'user_id'\n      ]\n    },\n    team_role: {\n      type: 'string',\n      enum: [        'member',\n        'admin',\n        'owner'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      team_id: {
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
  const { team_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.teams.listMembers(team_id)));
};

export default { metadata, tool, handler };
