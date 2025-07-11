// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'server',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/server/version',
  operationId: 'server_version',
};

export const tool: Tool = {
  name: 'version_server',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets the version of the API server.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/server_information',\n  $defs: {\n    server_information: {\n      type: 'object',\n      properties: {\n        version: {\n          type: 'string'\n        }\n      },\n      required: [        'version'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.server.version()));
};

export default { metadata, tool, handler };
