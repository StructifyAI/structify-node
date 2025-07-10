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
  httpPath: '/jobs/get_step_graph/{job_id}',
  operationId: 'get_step_graph',
};

export const tool: Tool = {
  name: 'get_step_graph_jobs',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return asTextContentResult(await client.jobs.getStepGraph(job_id));
};

export default { metadata, tool, handler };
