// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'structifyai-mcp/filtering';
import { asTextContentResult } from 'structifyai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Structify from 'structifyai';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/entity/agent_merge',
  operationId: 'entity_agent_merge',
};

export const tool: Tool = {
  name: 'agent_merge_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUse LLM to analyze and automatically merge entities based on sources and properties\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    final_entity_id: {\n      type: 'string'\n    },\n    merged_entities: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    reasoning: {\n      type: 'string'\n    }\n  },\n  required: [    'final_entity_id',\n    'merged_entities'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      dataset: {
        type: 'string',
      },
      entity_id: {
        type: 'string',
      },
      force_consider_entities: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      top_k: {
        type: 'integer',
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
  return asTextContentResult(await maybeFilter(args, await client.entities.agentMerge(body)));
};

export default { metadata, tool, handler };
