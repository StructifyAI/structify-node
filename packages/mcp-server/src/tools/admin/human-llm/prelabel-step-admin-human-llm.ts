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
  httpPath: '/admin/human_llm/prelabel_step/{step_id}',
  operationId: 'human_llm_prelabel_step',
};

export const tool: Tool = {
  name: 'prelabel_step_admin_human_llm',
  description:
    'Update a step by setting and preparing the given tool calls, then return possible next steps with descriptions.',
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
  return asTextContentResult(await client.admin.humanLlm.prelabelStep(step_id));
};

export default { metadata, tool, handler };
