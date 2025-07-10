// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/jobs/schedule',
  operationId: 'schedule_job',
};

export const tool: Tool = {
  name: 'schedule_jobs',
  description:
    'One example use case is every single day check the news websites and\npull them into my dataset.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const response = await client.jobs.schedule().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
