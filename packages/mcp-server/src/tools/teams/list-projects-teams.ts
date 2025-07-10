// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'teams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/team/{team_id}/projects',
  operationId: 'project_list',
};

export const tool: Tool = {
  name: 'list_projects_teams',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      team_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { team_id, ...body } = args as any;
  return asTextContentResult(await client.teams.listProjects(team_id));
};

export default { metadata, tool, handler };
