// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/user/survey/submit',
  operationId: 'submit_survey',
};

export const tool: Tool = {
  name: 'survey_submit_user',
  description: 'Submit user onboarding survey',
  inputSchema: {
    type: 'object',
    properties: {
      survey_response: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.surveySubmit(body));
};

export default { metadata, tool, handler };
