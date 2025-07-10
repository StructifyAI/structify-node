// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/entity/get_merges',
  operationId: 'entity_get_merges',
};

export const tool: Tool = {
  name: 'get_merges_entities',
  description: 'Get all historical merges for a given entity',
  inputSchema: {
    type: 'object',
    properties: {
      entity_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.entities.getMerges(body));
};

export default { metadata, tool, handler };
