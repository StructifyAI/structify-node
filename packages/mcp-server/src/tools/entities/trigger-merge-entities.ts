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
  httpPath: '/entity/trigger_merge',
  operationId: 'entity_triggermerge',
};

export const tool: Tool = {
  name: 'trigger_merge_entities',
  description: 'Trigger our merge process for a given entity',
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
  return asTextContentResult(await client.entities.triggerMerge(body));
};

export default { metadata, tool, handler };
