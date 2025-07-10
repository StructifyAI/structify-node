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
  httpPath: '/workflow/job_progress',
  operationId: 'dataset_workflow_job_progress',
};

export const tool: Tool = {
  name: 'job_progress_workflow',
  description: 'Get the job status breakdown of a workflow',
  inputSchema: {
    type: 'object',
    properties: {
      workflow_id: {
        $ref: '#/$defs/id',
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
  return asTextContentResult(await client.workflow.jobProgress(body));
};

export default { metadata, tool, handler };
