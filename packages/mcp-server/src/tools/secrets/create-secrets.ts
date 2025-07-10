// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/project/{project_id}/secrets',
  operationId: 'create_secret',
};

export const tool: Tool = {
  name: 'create_secrets',
  description: 'Create a new project secret using envelope encryption with Google Cloud KMS',
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
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { project_id, ...body } = args as any;
  const response = await client.secrets.create(project_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
