// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { Metadata, asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/user/jwt_to_api_token/{jwt}',
  operationId: 'user_jwt_to_api_token',
};

export const tool: Tool = {
  name: 'jwt_to_api_token_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nJWTs are commonly used for authentication in web applications. They contain\nencoded information about the user and are typically short-lived for security reasons.\n\nThis endpoint exists to allow clients who have authenticated via JWT (e.g., through\nSupabase) to obtain a long-lived API token. The API token can then be used\nfor subsequent requests to the API without requiring frequent re-authentication.\n\nThis conversion process enhances security by separating the authentication mechanism\n(JWT) from the API access mechanism (API token), while providing a seamless experience\nfor users transitioning from web-based authentication to API usage.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token_response',\n  $defs: {\n    token_response: {\n      type: 'object',\n      properties: {\n        token: {\n          type: 'string'\n        },\n        permissions: {\n          type: 'array',\n          items: {\n            type: 'string',\n            enum: [              'labeler',\n              'qa_labeler',\n              'debug',\n              'human_llm',\n              'none'\n            ]\n          }\n        }\n      },\n      required: [        'token',\n        'permissions'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jwt: {
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
  const { jwt, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.user.jwtToAPIToken(jwt)));
};

export default { metadata, tool, handler };
