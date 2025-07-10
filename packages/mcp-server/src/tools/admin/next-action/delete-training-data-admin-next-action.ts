// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.next_action',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/admin/next_action/delete_action_training_data',
  operationId: 'delete_action_training_data',
};

export const tool: Tool = {
  name: 'delete_training_data_admin_next_action',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the training datum to delete',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.nextAction.deleteTrainingData(body));
};

export default { metadata, tool, handler };
