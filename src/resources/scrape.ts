// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SharedAPI from './shared';

export class Scrape extends APIResource {
  list(body: ScrapeListParams, options?: Core.RequestOptions): Core.APIPromise<ScrapeListResponse> {
    return this._client.post('/scrape/list', { body, ...options });
  }
}

/**
 * Request body for scraping a list
 */
export interface ScrapeListRequest {
  /**
   * A dataset is where you put multiple referential schemas.
   *
   * A dataset is a complete namespace where all references between schemas are held
   * within the dataset.
   */
  dataset_descriptor: SharedAPI.DatasetDescriptor;

  input: ScrapeListRequest.Direct | ScrapeListRequest.Related;

  table_name: string;

  dataset_name?: string | null;

  node_id?: string | null;

  /**
   * Configuration parameters for the StopChecker
   */
  stop_config?: ScrapeListRequest.StopConfig | null;
}

export namespace ScrapeListRequest {
  export interface Direct {
    Direct: Direct.Direct;
  }

  export namespace Direct {
    export interface Direct {
      url: string;
    }
  }

  export interface Related {
    Related: Related.Related;
  }

  export namespace Related {
    export interface Related {
      relationship_name: string;

      source_entity: SharedAPI.Entity;

      source_url_column: string;
    }
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

/**
 * Response body
 */
export interface ScrapeListResponse {
  dataset_name: string;

  job_id: string;
}

export interface ScrapeListParams {
  /**
   * A dataset is where you put multiple referential schemas.
   *
   * A dataset is a complete namespace where all references between schemas are held
   * within the dataset.
   */
  dataset_descriptor: SharedAPI.DatasetDescriptor;

  input: ScrapeListParams.Direct | ScrapeListParams.Related;

  table_name: string;

  dataset_name?: string | null;

  node_id?: string | null;

  /**
   * Configuration parameters for the StopChecker
   */
  stop_config?: ScrapeListParams.StopConfig | null;
}

export namespace ScrapeListParams {
  export interface Direct {
    Direct: Direct.Direct;
  }

  export namespace Direct {
    export interface Direct {
      url: string;
    }
  }

  export interface Related {
    Related: Related.Related;
  }

  export namespace Related {
    export interface Related {
      relationship_name: string;

      source_entity: SharedAPI.Entity;

      source_url_column: string;
    }
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
