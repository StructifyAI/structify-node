// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/dataset/enrichment_progress',
  operationId: 'dataset_enrichment_progress',
};

export const tool: Tool = {
  name: 'enrichment_progress_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the enrichment progress for a dataset\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    completed: {\n      type: 'integer'\n    },\n    failed: {\n      type: 'integer'\n    },\n    queued: {\n      type: 'integer'\n    },\n    running: {\n      type: 'integer'\n    },\n    total: {\n      type: 'integer'\n    }\n  },\n  required: [    'completed',\n    'failed',\n    'queued',\n    'running',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Enrichment progress for the dataset',
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
  return asTextContentResult(await maybeFilter(args, await client.datasets.enrichmentProgress(body)));
};

export default { metadata, tool, handler };
