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
  httpPath: '/team/list',
  operationId: 'team_list',
};

export const tool: Tool = {
  name: 'list_teams',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.teams.list());
};

export default { metadata, tool, handler };
