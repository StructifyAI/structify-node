// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/jobs/cancel/{uuid}',
  operationId: 'cancel_job',
};

export const tool: Tool = {
  name: 'cancel_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nYou successfully cancelled a job.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    created_at: {\n      type: 'string',\n      format: 'date-time'\n    },\n    dataset_id: {\n      type: 'string'\n    },\n    job_type: {\n      type: 'string',\n      enum: [        'Web',\n        'Pdf',\n        'Derive',\n        'Scrape'\n      ]\n    },\n    max_steps_without_save: {\n      type: 'integer'\n    },\n    selected_next_workflow_step: {\n      type: 'boolean'\n    },\n    status: {\n      type: 'string',\n      enum: [        'Queued',\n        'Running',\n        'Completed',\n        'Failed'\n      ]\n    },\n    user_id: {\n      type: 'string'\n    },\n    max_errors: {\n      type: 'integer'\n    },\n    max_execution_time_secs: {\n      type: 'integer'\n    },\n    max_total_steps: {\n      type: 'integer'\n    },\n    message: {\n      type: 'string',\n      description: 'A message about the status of the job at completion'\n    },\n    node_id: {\n      type: 'string'\n    },\n    parameters: {\n      type: 'string',\n      description: 'Proto for JobInput'\n    },\n    reason: {\n      type: 'string',\n      description: 'A reason for the job\\'s existence'\n    },\n    run_started_time: {\n      type: 'string',\n      description: 'What time did the job start running?',\n      format: 'date-time'\n    },\n    run_time_milliseconds: {\n      type: 'integer'\n    },\n    seeded_kg_search_term: {\n      type: 'string'\n    },\n    session_id: {\n      type: 'string'\n    },\n    workflow_group_id: {\n      type: 'string'\n    },\n    workflow_id: {\n      $ref: '#/$defs/id'\n    },\n    workflow_step_id: {\n      type: 'string'\n    }\n  },\n  required: [    'id',\n    'created_at',\n    'dataset_id',\n    'job_type',\n    'max_steps_without_save',\n    'selected_next_workflow_step',\n    'status',\n    'user_id'\n  ],\n  $defs: {\n    id: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uuid: {
        type: 'string',
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
  const { uuid, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.jobs.cancel(uuid)));
};

export default { metadata, tool, handler };
