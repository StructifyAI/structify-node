// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Structify, { toFile } from 'structifyai';
import { Response } from 'node-fetch';

const client = new Structify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource admin', () => {
  test('batchCreateCredentialFields: only required params', async () => {
    const responsePromise = client.connectorCatalog.admin.batchCreateCredentialFields({
      fields: [
        {
          auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          display_order: 0,
          field_type: 'field_type',
          is_optional: true,
          name: 'name',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batchCreateCredentialFields: required and optional params', async () => {
    const response = await client.connectorCatalog.admin.batchCreateCredentialFields({
      fields: [
        {
          auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          display_order: 0,
          field_type: 'field_type',
          is_optional: true,
          name: 'name',
          default_value: 'default_value',
          description: 'description',
          label: 'label',
          options: {},
        },
      ],
    });
  });

  test('batchCreateScopes: only required params', async () => {
    const responsePromise = client.connectorCatalog.admin.batchCreateScopes({
      scopes: [
        { connector_auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', scope_value: 'scope_value' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batchCreateScopes: required and optional params', async () => {
    const response = await client.connectorCatalog.admin.batchCreateScopes({
      scopes: [
        {
          connector_auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          scope_value: 'scope_value',
          is_recommended: true,
          is_required: true,
          query_parameter: 'query_parameter',
        },
      ],
    });
  });

  test('createAuthMethod: only required params', async () => {
    const responsePromise = client.connectorCatalog.admin.createAuthMethod({
      auth_type: 'credentials',
      connector_catalog_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      is_active: true,
      priority: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createAuthMethod: required and optional params', async () => {
    const response = await client.connectorCatalog.admin.createAuthMethod({
      auth_type: 'credentials',
      connector_catalog_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      is_active: true,
      priority: 0,
      label: 'label',
      nango_integration_key: 'nango_integration_key',
    });
  });

  test('createCatalog: only required params', async () => {
    const responsePromise = client.connectorCatalog.admin.createCatalog({ name: 'name', slug: 'slug' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createCatalog: required and optional params', async () => {
    const response = await client.connectorCatalog.admin.createCatalog({
      name: 'name',
      slug: 'slug',
      categories: ['string'],
      description: 'description',
      priority: 0,
    });
  });

  test('createCredentialField: only required params', async () => {
    const responsePromise = client.connectorCatalog.admin.createCredentialField({
      auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      display_order: 0,
      field_type: 'field_type',
      is_optional: true,
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createCredentialField: required and optional params', async () => {
    const response = await client.connectorCatalog.admin.createCredentialField({
      auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      display_order: 0,
      field_type: 'field_type',
      is_optional: true,
      name: 'name',
      default_value: 'default_value',
      description: 'description',
      label: 'label',
      options: {},
    });
  });

  test('createScope: only required params', async () => {
    const responsePromise = client.connectorCatalog.admin.createScope({
      connector_auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      scope_value: 'scope_value',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createScope: required and optional params', async () => {
    const response = await client.connectorCatalog.admin.createScope({
      connector_auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      scope_value: 'scope_value',
      is_recommended: true,
      is_required: true,
      query_parameter: 'query_parameter',
    });
  });

  test('deleteCredentialField', async () => {
    const responsePromise = client.connectorCatalog.admin.deleteCredentialField(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteCredentialField: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectorCatalog.admin.deleteCredentialField('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('deleteScope', async () => {
    const responsePromise = client.connectorCatalog.admin.deleteScope('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteScope: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectorCatalog.admin.deleteScope('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('listNangoPending', async () => {
    const responsePromise = client.connectorCatalog.admin.listNangoPending();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listNangoPending: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectorCatalog.admin.listNangoPending({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Structify.NotFoundError);
  });

  test('listScopes: only required params', async () => {
    const responsePromise = client.connectorCatalog.admin.listScopes({
      connector_auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listScopes: required and optional params', async () => {
    const response = await client.connectorCatalog.admin.listScopes({
      connector_auth_method_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('updateAuthMethod', async () => {
    const responsePromise = client.connectorCatalog.admin.updateAuthMethod(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateCatalog', async () => {
    const responsePromise = client.connectorCatalog.admin.updateCatalog(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateCredentialField', async () => {
    const responsePromise = client.connectorCatalog.admin.updateCredentialField(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateScope', async () => {
    const responsePromise = client.connectorCatalog.admin.updateScope(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadLogo: only required params', async () => {
    const responsePromise = client.connectorCatalog.admin.uploadLogo('slug', {
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('uploadLogo: required and optional params', async () => {
    const response = await client.connectorCatalog.admin.uploadLogo('slug', {
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
