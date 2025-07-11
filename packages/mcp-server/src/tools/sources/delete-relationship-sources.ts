// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'sources',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/source/relationship',
  operationId: 'delete_source_relationship',
};

export const tool: Tool = {
  name: 'delete_relationship_sources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/delete_source_relationship_response',\n  $defs: {\n    delete_source_relationship_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Optional message about the deletion'\n        },\n        success: {\n          type: 'boolean',\n          description: 'Whether the deletion was successful'\n        }\n      },\n      required: [        'message',\n        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      source_relationship_id: {
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
  return asTextContentResult(await maybeFilter(args, await client.sources.deleteRelationship(body)));
};

export default { metadata, tool, handler };
