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
  httpPath: '/report/relationship/missing',
  operationId: 'report_relationship_missing',
};

export const tool: Tool = {
  name: 'relationship_report',
  description: 'Reports a missing relationship between entities',
  inputSchema: {
    type: 'object',
    properties: {
      label: {
        type: 'string',
      },
      from_id: {
        type: 'string',
      },
      source_url: {
        type: 'string',
      },
      to_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.report.relationship(body));
};

export default { metadata, tool, handler };
