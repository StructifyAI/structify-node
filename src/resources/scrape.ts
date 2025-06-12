// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SharedAPI from './shared';

export class Scrape extends APIResource {
  /**
   * Scrape a list from a URL and return a knowledge graph
   */
  list(body: ScrapeListParams, options?: Core.RequestOptions): Core.APIPromise<ScrapeListResponse> {
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
}

/**
 * Response containing the extracted knowledge graph
 */
export interface ScrapeListResponse {
  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  knowledge_graph: SharedAPI.KnowledgeGraph;
}

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
}

export declare namespace Scrape {
  export {
    type ScrapeListRequest as ScrapeListRequest,
    type ScrapeListResponse as ScrapeListResponse,
    type ScrapeListParams as ScrapeListParams,
  };
}
