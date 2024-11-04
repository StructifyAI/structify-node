// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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
   * Report a step
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
   * A property that is being reported
   */
  property?: string | null;

  /**
   * Correct source URL for the reported entity
   */
  source_url?: string | null;
}

export interface ReportStepParams {
  step_id: string;

  /**
   * A short message about why the step is being reported
   */
  message?: string | null;
}

export declare namespace Report {
  export {
    type ReportEntityResponse as ReportEntityResponse,
    type ReportStepResponse as ReportStepResponse,
    type ReportEntityParams as ReportEntityParams,
    type ReportStepParams as ReportStepParams,
  };
}
