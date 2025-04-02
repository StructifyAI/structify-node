// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'list_datasets_evaluate',
  description: 'List all dataset evaluation results with pagination',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.datasets.evaluate.list(body);
};

export default { tool, handler };
