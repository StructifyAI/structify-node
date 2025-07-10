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
  httpPath: '/admin/human_llm/get_next_step',
  operationId: 'human_llm_get_next_step',
};

export const tool: Tool = {
  name: 'get_next_step_admin_human_llm',
  description: 'Given a step id, get the next formatted step to label.',
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'string',
      },
      step_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.humanLlm.getNextStep(body));
};

export default { metadata, tool, handler };
