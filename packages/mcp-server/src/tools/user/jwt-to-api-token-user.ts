// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'jwt_to_api_token_user',
  description:
    'JWTs are commonly used for authentication in web applications. They contain\nencoded information about the user and are typically short-lived for security reasons.\n\nThis endpoint exists to allow clients who have authenticated via JWT (e.g., through\nSupabase) to obtain a long-lived API token. The API token can then be used\nfor subsequent requests to the API without requiring frequent re-authentication.\n\nThis conversion process enhances security by separating the authentication mechanism\n(JWT) from the API access mechanism (API token), while providing a seamless experience\nfor users transitioning from web-based authentication to API usage.',
  inputSchema: {
    type: 'object',
    properties: {
      jwt: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { jwt } = args;
  return client.user.jwtToAPIToken(jwt);
};

export default { tool, handler };
