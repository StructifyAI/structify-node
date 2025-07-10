// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.human_llm',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/human_llm/get_jobs',
  operationId: 'human_llm_get_jobs',
};

export const tool: Tool = {
  name: 'get_jobs_admin_human_llm',
  description: 'Start the next human llm job in the queue',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
        enum: ['Queued', 'Running', 'Completed', 'Failed'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.humanLlm.getJobs(body));
};

export default { metadata, tool, handler };
