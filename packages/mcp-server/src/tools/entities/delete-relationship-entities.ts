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
  httpPath: '/entity/delete_relationship',
  operationId: 'entity_delete_relationship',
};

export const tool: Tool = {
  name: 'delete_relationship_entities',
  description: 'delete a relationship between two entities in a dataset',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      relationship_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.entities.deleteRelationship(body)) as object);
};

export default { metadata, tool, handler };
