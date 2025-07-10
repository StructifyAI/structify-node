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
  httpPath: '/admin/next_action/get_action_training_data',
  operationId: 'get_action_training_data',
};

export const tool: Tool = {
  name: 'get_training_data_admin_next_action',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      from_date: {
        type: 'string',
        format: 'date-time',
      },
      job_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
      status: {
        type: 'string',
        enum: ['HumanLLMLabel', 'LLMOutput', 'Pending', 'Reviewed', 'Verified', 'Others'],
      },
      to_date: {
        type: 'string',
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.admin.nextAction.getTrainingData(body));
};

export default { metadata, tool, handler };
