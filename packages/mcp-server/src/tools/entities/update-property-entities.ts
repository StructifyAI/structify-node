// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_property_entities',
  description: 'update an entity manually',
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
        type: 'object',
      },
      source: {
        anyOf: [
          {
            type: 'string',
            enum: ['None'],
          },
          {
            type: 'object',
            properties: {
              Web: {
                type: 'string',
              },
            },
            required: ['Web'],
          },
          {
            type: 'object',
            properties: {
              DocumentPage: {
                type: 'array',
                items: {
                  type: 'object',
                },
              },
            },
            required: ['DocumentPage'],
          },
          {
            type: 'object',
            properties: {
              SecFiling: {
                type: 'array',
                items: {
                  type: 'object',
                },
              },
            },
            required: ['SecFiling'],
          },
        ],
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.entities.updateProperty(body);
};

export default { metadata, tool, handler };
