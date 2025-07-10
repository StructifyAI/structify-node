// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'workflow',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/workflow/jobs',
  operationId: 'dataset_workflow_jobs',
};

export const tool: Tool = {
  name: 'jobs_workflow',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      workflow_id: {
        $ref: '#/$defs/id',
      },
      group_id: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: ['Queued', 'Running', 'Completed', 'Failed'],
      },
      step_id: {
        type: 'string',
      },
    },
    $defs: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.workflow.jobs(body));
};

export default { metadata, tool, handler };
