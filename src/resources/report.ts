// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Report extends APIResource {
  /**
   * Returns a success message if the report was added successfully Throws an error
   * if the property for this entity has already been reported
   */
  missing(body: ReportMissingParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/report/entity/missing', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Reports a missing relationship between entities
   */
  relationship(body: ReportRelationshipParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/report/relationship/missing', {
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

  /**
   * Reports a wrong property for an entity
   */
  wrong(body: ReportWrongParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/report/entity/wrong', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type ReportMissingResponse = string;

export type ReportRelationshipResponse = string;

export type ReportStepResponse = string;

export type ReportWrongResponse = string;

export interface ReportMissingParams {
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

export interface ReportRelationshipParams {
  label: string;

  from_id?: string | null;

  source_url?: string | null;

  to_id?: string | null;
}

export interface ReportStepParams {
  step_id: string;

  /**
   * A short message about why the step is being reported
   */
  message?: string | null;
}

export interface ReportWrongParams {
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

export declare namespace Report {
  export {
    type ReportMissingResponse as ReportMissingResponse,
    type ReportRelationshipResponse as ReportRelationshipResponse,
    type ReportStepResponse as ReportStepResponse,
    type ReportWrongResponse as ReportWrongResponse,
    type ReportMissingParams as ReportMissingParams,
    type ReportRelationshipParams as ReportRelationshipParams,
    type ReportStepParams as ReportStepParams,
    type ReportWrongParams as ReportWrongParams,
  };
}
