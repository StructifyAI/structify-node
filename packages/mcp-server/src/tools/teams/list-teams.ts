// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'teams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/team/list',
  operationId: 'team_list',
};

export const tool: Tool = {
  name: 'list_teams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/list_teams_response',\n  $defs: {\n    list_teams_response: {\n      type: 'object',\n      properties: {\n        teams: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/team_with_role'\n          }\n        }\n      },\n      required: [        'teams'\n      ]\n    },\n    team_with_role: {\n      allOf: [        {\n          $ref: '#/$defs/team'\n        }\n      ]\n    },\n    team: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.teams.list()));
};

export default { metadata, tool, handler };
