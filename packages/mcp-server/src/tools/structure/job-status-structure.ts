// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'structure',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/structure/job_status',
  operationId: 'structure_job_status',
};

export const tool: Tool = {
  name: 'job_status_structure',
  description: 'Get status for specified jobs with detailed information similar to websocket endpoint',
  inputSchema: {
    type: 'object',
    properties: {
      job: {
        type: 'object',
        properties: {
          dataset_name: {
            type: 'string',
          },
          job_ids: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.structure.jobStatus(body['job']));
};

export default { metadata, tool, handler };
