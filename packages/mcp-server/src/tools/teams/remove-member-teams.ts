// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'teams',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/team/{team_id}/members/{user_id}',
  operationId: 'team_remove_member',
};

export const tool: Tool = {
  name: 'remove_member_teams',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      team_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { team_id, user_id, ...body } = args as any;
  return asTextContentResult(await client.teams.removeMember(team_id, user_id));
};

export default { metadata, tool, handler };
