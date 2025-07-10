// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/jobs/cancel/{uuid}',
  operationId: 'cancel_job',
};

export const tool: Tool = {
  name: 'cancel_jobs',
  description: 'You successfully cancelled a job.',
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { uuid, ...body } = args as any;
  return asTextContentResult(await client.jobs.cancel(uuid));
};

export default { metadata, tool, handler };
