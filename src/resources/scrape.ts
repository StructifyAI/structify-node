// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SharedAPI from './shared';

export class Scrape extends APIResource {
  /**
   * Scrape a list from a URL and return a knowledge graph
   */
  list(body: ScrapeListParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/scrape/list', { body, ...options });
  }
}

/**
 * Request body for scraping a list from a URL
 */
export interface ScrapeListRequest {
  /**
   * A dataset is where you put multiple referential schemas.
   *
   * A dataset is a complete namespace where all references between schemas are held
   * within the dataset.
   */
  dataset_descriptor: SharedAPI.DatasetDescriptor;

  table_name: string;

  url: string;

  run_metadata?: ScrapeListRequest.RunMetadata | null;

  /**
   * Configuration parameters for the StopChecker
   */
  stop_config?: ScrapeListRequest.StopConfig | null;
}

export namespace ScrapeListRequest {
  export interface RunMetadata {
    node_id: string;

    session_id: string;
  }

  /**
   * Configuration parameters for the StopChecker
   */
  export interface StopConfig {
    max_steps_without_save: number;

    max_errors?: number | null;

    max_execution_time_secs?: number | null;

    max_total_steps?: number | null;
  }
}

export type ScrapeListResponse = string;

export interface ScrapeListParams {
  /**
   * A dataset is where you put multiple referential schemas.
   *
   * A dataset is a complete namespace where all references between schemas are held
   * within the dataset.
   */
  dataset_descriptor: SharedAPI.DatasetDescriptor;

  table_name: string;

  url: string;

  run_metadata?: ScrapeListParams.RunMetadata | null;

  /**
   * Configuration parameters for the StopChecker
   */
  stop_config?: ScrapeListParams.StopConfig | null;
}

export namespace ScrapeListParams {
  export interface RunMetadata {
    node_id: string;

    session_id: string;
  }

  /**
   * Configuration parameters for the StopChecker
   */
  export interface StopConfig {
    max_steps_without_save: number;

    max_errors?: number | null;

    max_execution_time_secs?: number | null;

    max_total_steps?: number | null;
  }
}

export declare namespace Scrape {
  export {
    type ScrapeListRequest as ScrapeListRequest,
    type ScrapeListResponse as ScrapeListResponse,
    type ScrapeListParams as ScrapeListParams,
  };
}
