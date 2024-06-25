// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify from 'structifyai';
import { Response } from 'node-fetch';

const structify = new Structify({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource update', () => {
  test('create: only required params', async () => {
    const responsePromise = structify.label.update.create('string', 0, [
      { input: { Save: {} }, name: 'Save' },
      { input: { Save: {} }, name: 'Save' },
      { input: { Save: {} }, name: 'Save' },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await structify.label.update.create('string', 0, [
      {
        input: {
          Save: {
            entities: [
              { id: 0, properties: { foo: 'string' }, type: 'string' },
              { id: 0, properties: { foo: 'string' }, type: 'string' },
              { id: 0, properties: { foo: 'string' }, type: 'string' },
            ],
            relationships: [
              { source: 0, target: 0, type: 'string' },
              { source: 0, target: 0, type: 'string' },
              { source: 0, target: 0, type: 'string' },
            ],
          },
        },
        name: 'Save',
        result: { ToolQueued: 'string' },
      },
      {
        input: {
          Save: {
            entities: [
              { id: 0, properties: { foo: 'string' }, type: 'string' },
              { id: 0, properties: { foo: 'string' }, type: 'string' },
              { id: 0, properties: { foo: 'string' }, type: 'string' },
            ],
            relationships: [
              { source: 0, target: 0, type: 'string' },
              { source: 0, target: 0, type: 'string' },
              { source: 0, target: 0, type: 'string' },
            ],
          },
        },
        name: 'Save',
        result: { ToolQueued: 'string' },
      },
      {
        input: {
          Save: {
            entities: [
              { id: 0, properties: { foo: 'string' }, type: 'string' },
              { id: 0, properties: { foo: 'string' }, type: 'string' },
              { id: 0, properties: { foo: 'string' }, type: 'string' },
            ],
            relationships: [
              { source: 0, target: 0, type: 'string' },
              { source: 0, target: 0, type: 'string' },
              { source: 0, target: 0, type: 'string' },
            ],
          },
        },
        name: 'Save',
        result: { ToolQueued: 'string' },
      },
    ]);
  });
});
