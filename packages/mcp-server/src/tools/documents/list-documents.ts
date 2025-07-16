// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/documents/list',
  operationId: 'documents_list',
};

export const tool: Tool = {
  name: 'list_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all files for your user account in the database.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string'\n      },\n      created_at: {\n        type: 'string',\n        format: 'date-time'\n      },\n      file_bytes: {\n        type: 'string'\n      },\n      file_type: {\n        type: 'string',\n        enum: [          'Text',\n          'PDF',\n          'SEC'\n        ]\n      },\n      name: {\n        type: 'string'\n      },\n      user_id: {\n        type: 'string'\n      },\n      created_from_job: {\n        type: 'string'\n      },\n      dataset_id: {\n        type: 'string'\n      }\n    },\n    required: [      'id',\n      'created_at',\n      'file_bytes',\n      'file_type',\n      'name',\n      'user_id'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.documents.list(body)));
};

export default { metadata, tool, handler };
