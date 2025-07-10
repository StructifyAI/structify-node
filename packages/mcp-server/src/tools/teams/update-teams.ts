// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'teams',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/team/{team_id}',
  operationId: 'team_update',
};

export const tool: Tool = {
  name: 'update_teams',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      team_id: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { team_id, ...body } = args as any;
  return asTextContentResult(await client.teams.update(team_id, body));
};

export default { metadata, tool, handler };
