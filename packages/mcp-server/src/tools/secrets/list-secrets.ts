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
  httpPath: '/project/{project_id}/secrets',
  operationId: 'list_secrets',
};

export const tool: Tool = {
  name: 'list_secrets',
  description: 'List all project secrets (metadata only, no sensitive data)',
  inputSchema: {
    type: 'object',
    properties: {
      project_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { project_id, ...body } = args as any;
  return asTextContentResult(await client.secrets.list(project_id));
};

export default { metadata, tool, handler };
