// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/project/{project_id}/secrets/{secret_name}',
  operationId: 'update_secret',
};

export const tool: Tool = {
  name: 'update_secrets',
  description: 'Update an existing project secret with a new value',
  inputSchema: {
    type: 'object',
    properties: {
      project_id: {
        type: 'string',
      },
      secret_name: {
        type: 'string',
      },
      secret_value: {
        type: 'string',
        description: 'The new secret value to encrypt and store',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { project_id, secret_name, ...body } = args as any;
  return asTextContentResult(await client.secrets.update(project_id, secret_name, body));
};

export default { metadata, tool, handler };
