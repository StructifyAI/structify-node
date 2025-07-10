// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/team/{team_id}/project/{project_id}',
  operationId: 'project_get',
};

export const tool: Tool = {
  name: 'get_projects',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      team_id: {
        type: 'string',
      },
      project_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { team_id, project_id, ...body } = args as any;
  return asTextContentResult(await client.projects.get(team_id, project_id));
};

export default { metadata, tool, handler };
