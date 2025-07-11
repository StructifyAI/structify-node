// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'structure',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/structure/job_status',
  operationId: 'structure_job_status',
};

export const tool: Tool = {
  name: 'job_status_structure',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet status for specified jobs with detailed information similar to websocket endpoint\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      dataset_name: {\n        type: 'string'\n      },\n      job_id: {\n        type: 'string'\n      },\n      status: {\n        type: 'string',\n        enum: [          'Queued',\n          'Running',\n          'Completed',\n          'Failed'\n        ]\n      },\n      target: {\n        type: 'object',\n        properties: {\n          entity_id: {\n            type: 'string'\n          },\n          property_names: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          relationship_name: {\n            type: 'string'\n          }\n        },\n        required: [          'entity_id'\n        ]\n      }\n    },\n    required: [      'dataset_name',\n      'job_id'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      job: {
        type: 'object',
        properties: {
          dataset_name: {
            type: 'string',
          },
          job_ids: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Structify, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.structure.jobStatus(body['job'])));
};

export default { metadata, tool, handler };
