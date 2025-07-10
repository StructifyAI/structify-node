// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'workflow',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/workflow/list',
  operationId: 'dataset_workflow_list',
};

export const tool: Tool = {
  name: 'list_workflow',
  description: 'list a new workflow',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.workflow.list(body));
};

export default { metadata, tool, handler };
