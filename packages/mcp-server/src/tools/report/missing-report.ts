// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'report',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/report/entity/missing',
  operationId: 'report_entity_missing',
};

export const tool: Tool = {
  name: 'missing_report',
  description:
    'Returns a success message if the report was added successfully\nThrows an error if the property for this entity has already been reported',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      property: {
        type: 'string',
        description: 'A property that is being reported',
      },
      source_url: {
        type: 'string',
        description: 'Correct source URL for the reported entity',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.report.missing(body));
};

export default { metadata, tool, handler };
