// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

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

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.humanLlm.getNextStep(body);
};

export default { tool, handler };
