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
  httpPath: '/admin/human_llm/start_next_job',
  operationId: 'human_llm_start_next_job',
};

export const tool: Tool = {
  name: 'start_next_job_admin_human_llm',
  description: 'Start the next human llm job in the queue',
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
  const body = args as any;
  return asTextContentResult(await client.admin.humanLlm.startNextJob(body));
};

export default { metadata, tool, handler };
