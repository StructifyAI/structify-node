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
  httpPath: '/entity/summarize',
  operationId: 'entity_summarize',
};

export const tool: Tool = {
  name: 'summarize_entities',
  description: 'Search for entities based on the given query',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      entity_id: {
        type: 'string',
      },
      properties: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      extra_instructions: {
        type: 'array',
        description: 'A list of instructions for each property to guide the summarization process',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.entities.summarize(body));
};

export default { metadata, tool, handler };
