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
  httpPath: '/workflow/trigger',
  operationId: 'dataset_workflow_trigger',
};

export const tool: Tool = {
  name: 'trigger_workflow',
  description: 'Trigger a workflow on a set of entities',
  inputSchema: {
    type: 'object',
    properties: {
      entity_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      workflow_id: {
        $ref: '#/$defs/id',
      },
      banned_domains: {
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
    $defs: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.workflow.trigger(body)) as object);
};

export default { metadata, tool, handler };
