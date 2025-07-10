// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'sources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/source/entity',
  operationId: 'delete_source_entity',
};

export const tool: Tool = {
  name: 'delete_entity_sources',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      source_entity_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sources.deleteEntity(body));
};

export default { metadata, tool, handler };
