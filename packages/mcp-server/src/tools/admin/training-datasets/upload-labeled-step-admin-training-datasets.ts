// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'admin.training_datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/admin/training_datasets/upload_labeled_step',
  operationId: 'upload_labeled_step',
};

export const tool: Tool = {
  name: 'upload_labeled_step_admin_training_datasets',
  description: 'Uploads a new training datum to the specified dataset.',
  inputSchema: {
    type: 'object',
    properties: {
      dataset_name: {
        type: 'string',
      },
      step_bytes: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.admin.trainingDatasets.uploadLabeledStep(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
