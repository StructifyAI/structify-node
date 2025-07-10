// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.next_action',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/admin/next_action/get_action_training_datum',
  operationId: 'get_action_training_datum',
};

export const tool: Tool = {
  name: 'get_training_datum_admin_next_action',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the training datum to get',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.nextAction.getTrainingDatum(body));
};

export default { metadata, tool, handler };
