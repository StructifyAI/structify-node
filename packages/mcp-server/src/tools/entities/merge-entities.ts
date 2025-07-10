// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/entity/merge',
  operationId: 'entity_merge',
};

export const tool: Tool = {
  name: 'merge_entities',
  description: 'merge an entity manually',
  inputSchema: {
    type: 'object',
    properties: {
      entity_1_id: {
        type: 'string',
      },
      entity_2_id: {
        type: 'string',
      },
      debug: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.entities.merge(body));
};

export default { metadata, tool, handler };
