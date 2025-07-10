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
  httpPath: '/report/step',
  operationId: 'report_step',
};

export const tool: Tool = {
  name: 'step_report',
  description: 'Report a step',
  inputSchema: {
    type: 'object',
    properties: {
      step_id: {
        type: 'string',
      },
      message: {
        type: 'string',
        description: 'A short message about why the step is being reported',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.report.step(body));
};

export default { metadata, tool, handler };
