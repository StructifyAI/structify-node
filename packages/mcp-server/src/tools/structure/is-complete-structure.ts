// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'structure',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/structure/is_complete',
  operationId: 'structure_is_complete',
};

export const tool: Tool = {
  name: 'is_complete_structure',
  description: 'Wait for all specified async tasks to be completed.',
  inputSchema: {
    type: 'object',
    properties: {
      job: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.structure.isComplete(body['job']));
};

export default { metadata, tool, handler };
