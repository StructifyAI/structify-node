// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'structure',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'job_status_structure',
  description: 'Wait for all specified async tasks to be completed. Returns the state of the job tasks',
  inputSchema: {
    type: 'object',
    properties: {
      job: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.structure.jobStatus(body);
};

export default { metadata, tool, handler };
