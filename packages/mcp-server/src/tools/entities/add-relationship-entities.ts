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
  httpPath: '/entity/add_relationship',
  operationId: 'entity_add_relationship',
};

export const tool: Tool = {
  name: 'add_relationship_entities',
  description: 'Add a relationship between two entities in a dataset',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      from_id: {
        type: 'string',
      },
      relationship_type: {
        type: 'string',
      },
      to_id: {
        type: 'string',
      },
      properties: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.entities.addRelationship(body));
};

export default { metadata, tool, handler };
