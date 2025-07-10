// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/jobs/list',
  operationId: 'jobs_list',
};

export const tool: Tool = {
  name: 'list_jobs',
  description: 'List all the executions',
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
        description: 'Dataset name to optionally filter jobs by',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      seeded_kg_search_term: {
        type: 'string',
        description: 'seeded kg search term',
      },
      since: {
        type: 'string',
        description: 'List since a specific timestamp',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Status to optionally filter jobs by',
        enum: ['Queued', 'Running', 'Completed', 'Failed'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.jobs.list(body));
};

export default { metadata, tool, handler };
