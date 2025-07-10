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
  httpPath: '/jobs/delete/{job_id}',
  operationId: 'delete_job',
};

export const tool: Tool = {
  name: 'delete_jobs',
  description: 'Delete a job',
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
  return asTextContentResult(await client.jobs.delete(job_id));
};

export default { metadata, tool, handler };
