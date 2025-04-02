// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Structify from 'structifyai';

export const tool: Tool = {
  name: 'label_training_datum_admin_next_action',
  description: 'Label an existing action training datum',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      label: {
        type: 'string',
      },
      output: {
        anyOf: [
          {
            type: 'object',
            properties: {
              SelectedStep: {
                type: 'object',
                properties: {
                  step_id: {
                    type: 'string',
                  },
                },
                required: ['step_id'],
              },
            },
            required: ['SelectedStep'],
          },
          {
            type: 'object',
            properties: {
              SearchStep: {
                type: 'object',
                properties: {
                  search_query: {
                    type: 'string',
                  },
                },
                required: ['search_query'],
              },
            },
            required: ['SearchStep'],
          },
          {
            type: 'object',
            properties: {
              InvalidAction: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                  },
                  llm_output: {
                    type: 'string',
                  },
                },
                required: ['error', 'llm_output'],
              },
            },
            required: ['InvalidAction'],
          },
        ],
      },
    },
  },
};

export const handler = (client: Structify, args: any) => {
  const { ...body } = args;
  return client.admin.nextAction.labelTrainingDatum(body);
};

export default { tool, handler };
