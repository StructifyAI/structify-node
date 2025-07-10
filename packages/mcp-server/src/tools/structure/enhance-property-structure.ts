// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'structure',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/structure/enhance_property',
  operationId: 'structure_enhance_property',
};

export const tool: Tool = {
  name: 'enhance_property_structure',
  description: 'Returns a job id that can be waited on until the request is finished.',
  inputSchema: {
    type: 'object',
    properties: {
      entity_id: {
        type: 'string',
      },
      property_name: {
        type: 'string',
      },
      allow_extra_entities: {
        type: 'boolean',
      },
      banned_domains: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      run_metadata: {
        type: 'object',
        properties: {
          node_id: {
            type: 'string',
          },
          session_id: {
            type: 'string',
          },
        },
        required: ['node_id', 'session_id'],
      },
      special_job_type: {
        type: 'string',
        enum: ['HumanLLM'],
      },
      starting_searches: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      starting_urls: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      stop_config: {
        type: 'object',
        description: 'Configuration parameters for the StopChecker',
        properties: {
          max_steps_without_save: {
            type: 'integer',
          },
          max_errors: {
            type: 'integer',
          },
          max_execution_time_secs: {
            type: 'integer',
          },
          max_total_steps: {
            type: 'integer',
          },
        },
        required: ['max_steps_without_save'],
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.structure.enhanceProperty(body));
};

export default { metadata, tool, handler };
