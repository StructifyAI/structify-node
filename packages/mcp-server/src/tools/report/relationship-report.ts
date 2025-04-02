// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'relationship_report',
  description: 'Reports a missing relationship between entities',
  inputSchema: {
    type: 'object',
    properties: {
      label: {
        type: 'string',
      },
      from_id: {
        type: 'string',
      },
      source_url: {
        type: 'string',
      },
      to_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.report.relationship(body);
};

export default { tool, handler };
