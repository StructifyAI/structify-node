// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'step_report',
  description: 'Report a step',
  inputSchema: {
    type: 'object',
    properties: {
      step_id: {
        type: 'string',
      },
      message: {
        type: 'string',
        description: 'A short message about why the step is being reported',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.report.step(body);
};

export default { tool, handler };
