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
  httpPath: '/entity/derive',
  operationId: 'entity_derive',
};

export const tool: Tool = {
  name: 'derive_entities',
  description: 'Derive a new property value based on existing source properties',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      derived_property: {
        type: 'string',
      },
      entity_id: {
        type: 'string',
      },
      table_name: {
        type: 'string',
      },
      extra_instruction: {
        type: 'string',
      },
      input_properties: {
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
  return asTextContentResult(await client.entities.derive(body));
};

export default { metadata, tool, handler };
