// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/jobs/get_step/{step_id}',
  operationId: 'get_step',
};

export const tool: Tool = {
  name: 'get_step_jobs',
  description: 'Retrieve a step from structify.',
  inputSchema: {
    type: 'object',
    properties: {
      step_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { step_id, ...body } = args as any;
  return asTextContentResult(await client.jobs.getStep(step_id));
};

export default { metadata, tool, handler };
