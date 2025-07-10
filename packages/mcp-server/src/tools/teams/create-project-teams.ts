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
  httpPath: '/team/{team_id}/projects',
  operationId: 'project_create',
};

export const tool: Tool = {
  name: 'create_project_teams',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      team_id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { team_id, ...body } = args as any;
  return asTextContentResult(await client.teams.createProject(team_id, body));
};

export default { metadata, tool, handler };
