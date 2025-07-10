// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'teams',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/team/{team_id}/members',
  operationId: 'team_add_member',
};

export const tool: Tool = {
  name: 'add_member_teams',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      team_id: {
        type: 'string',
      },
      role: {
        $ref: '#/$defs/team_role',
      },
      user_id: {
        type: 'string',
      },
    },
    $defs: {
      team_role: {
        type: 'string',
        enum: ['member', 'admin', 'owner'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { team_id, ...body } = args as any;
  return asTextContentResult(await client.teams.addMember(team_id, body));
};

export default { metadata, tool, handler };
