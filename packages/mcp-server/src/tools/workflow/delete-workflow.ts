// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'workflow',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/workflow/delete',
  operationId: 'dataset_workflow_delete',
};

export const tool: Tool = {
  name: 'delete_workflow',
  description: 'Delete an existing workflow',
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
  const response = await client.workflow.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
