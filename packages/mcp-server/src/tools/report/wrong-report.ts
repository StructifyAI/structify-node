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
  httpPath: '/report/entity/wrong',
  operationId: 'report_entity_wrong',
};

export const tool: Tool = {
  name: 'wrong_report',
  description: 'Reports a wrong property for an entity',
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
  return asTextContentResult(await client.report.wrong(body));
};

export default { metadata, tool, handler };
