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
  httpPath: '/entity/agent_merge',
  operationId: 'entity_agent_merge',
};

export const tool: Tool = {
  name: 'agent_merge_entities',
  description: 'Use LLM to analyze and automatically merge entities based on sources and properties',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      entity_id: {
        type: 'string',
      },
      force_consider_entities: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      top_k: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.entities.agentMerge(body));
};

export default { metadata, tool, handler };
