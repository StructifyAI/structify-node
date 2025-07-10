// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/project/{project_id}/secrets/{secret_name}',
  operationId: 'get_secret',
};

export const tool: Tool = {
  name: 'get_secrets',
  description: 'Get a secret by name',
  inputSchema: {
    type: 'object',
    properties: {
      project_id: {
        type: 'string',
      },
      secret_name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { project_id, secret_name, ...body } = args as any;
  return asTextContentResult(await client.secrets.get(project_id, secret_name));
};

export default { metadata, tool, handler };
