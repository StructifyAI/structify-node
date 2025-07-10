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
  httpPath: '/admin/human_llm/finish_job',
  operationId: 'human_llm_finish_job',
};

export const tool: Tool = {
  name: 'finish_job_admin_human_llm',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['Queued', 'Running', 'Completed', 'Failed'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.admin.humanLlm.finishJob(body)) as object);
};

export default { metadata, tool, handler };
