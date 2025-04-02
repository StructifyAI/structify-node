// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'add_search_for_job_admin_human_llm',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'string',
      },
      search_query: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.humanLlm.addSearchForJob(body);
};

export default { tool, handler };
