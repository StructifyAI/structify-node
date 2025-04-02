// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'list_admin_training_datasets',
  description: 'Lists all training datasets.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Structify, args: any) => {
  const {} = args;
  return client.admin.trainingDatasets.list();
};

export default { tool, handler };
