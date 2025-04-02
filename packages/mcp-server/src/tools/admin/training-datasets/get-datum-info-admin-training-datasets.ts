// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'get_datum_info_admin_training_datasets',
  description:
    'This includes the status, step, last updated time, and all updates.\nIf the datum does not exist, a 204 status is returned.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.trainingDatasets.getDatumInfo(body);
};

export default { tool, handler };
