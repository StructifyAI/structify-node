// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

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

export const handler = (client: Structify, args: any) => {
  const { step_id } = args;
  return client.admin.humanLlm.prelabelStep(step_id);
};

export default { tool, handler };
