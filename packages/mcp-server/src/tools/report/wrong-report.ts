// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'wrong_report',
  description: 'Reports a wrong property for an entity',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      property: {
        type: 'string',
        description: 'A property that is being reported',
      },
      source_url: {
        type: 'string',
        description: 'Correct source URL for the reported entity',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.report.wrong(body);
};

export default { tool, handler };
