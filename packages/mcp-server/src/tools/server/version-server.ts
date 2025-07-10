// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'server',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/server/version',
  operationId: 'server_version',
};

export const tool: Tool = {
  name: 'version_server',
  description: 'Gets the version of the API server.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.server.version());
};

export default { metadata, tool, handler };
