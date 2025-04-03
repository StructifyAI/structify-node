// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'server',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'version_server',
  description: 'Gets the version of the API server.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Structify, args: any) => {
  const {} = args;
  return client.server.version();
};

export default { metadata, tool, handler };
