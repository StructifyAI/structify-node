// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ReportAPI from './report';

export class Report extends APIResource {
  /**
   * Get all sources for a given entity
   */
  entity(body: ReportEntityParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/report/entity', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Get all sources for a given entity
   */
  step(body: ReportStepParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/report/step', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type ReportEntityResponse = string;

export type ReportStepResponse = string;

export interface ReportEntityParams {
  id: string;

  /**
   * A short message about why the entity is being reported
   */
  property?: string | null;
}

export interface ReportStepParams {
  step_id: string;

  /**
   * A short message about why the step is being reported
   */
  message?: string | null;
}

export namespace Report {
  export import ReportEntityResponse = ReportAPI.ReportEntityResponse;
  export import ReportStepResponse = ReportAPI.ReportStepResponse;
  export import ReportEntityParams = ReportAPI.ReportEntityParams;
  export import ReportStepParams = ReportAPI.ReportStepParams;
}
