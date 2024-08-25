// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ReportAPI from './report';

export class Report extends APIResource {
  /**
   * Get all sources for a given entity
   */
  reportEntity(body: ReportReportEntityParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/report/entity', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Get all sources for a given entity
   */
  reportStep(body: ReportReportStepParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/report/step', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface ReportParams {
  id: string;

  /**
   * A short message about why the entity is being reported
   */
  property?: string | null;
}

export type ReportReportEntityResponse = string;

export type ReportReportStepResponse = string;

export interface ReportReportEntityParams {
  id: string;

  /**
   * A short message about why the entity is being reported
   */
  property?: string | null;
}

export interface ReportReportStepParams {
  id: string;

  /**
   * A short message about why the entity is being reported
   */
  property?: string | null;
}

export namespace Report {
  export import ReportParams = ReportAPI.ReportParams;
  export import ReportReportEntityResponse = ReportAPI.ReportReportEntityResponse;
  export import ReportReportStepResponse = ReportAPI.ReportReportStepResponse;
  export import ReportReportEntityParams = ReportAPI.ReportReportEntityParams;
  export import ReportReportStepParams = ReportAPI.ReportReportStepParams;
}
