// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SharedAPI from '../shared';

export class Dataset extends APIResource {
  getById(query: DatasetGetByIDParams, options?: Core.RequestOptions): Core.APIPromise<AdminDatasetReturn> {
    return this._client.get('/admin/dataset/get_by_id', { query, ...options });
  }
}

/**
 * A dataset is where you put multiple referential schemas.
 *
 * A dataset is a complete namespace where all references between schemas are held
 * within the dataset.
 */
export interface AdminDatasetReturn extends SharedAPI.DatasetDescriptor {
  id: string;

  created_timestamp: string;

  user_id: string;
}

export interface DatasetGetByIDParams {
  /**
   * ID of the dataset to retrieve
   */
  id: string;
}

export declare namespace Dataset {
  export { type AdminDatasetReturn as AdminDatasetReturn, type DatasetGetByIDParams as DatasetGetByIDParams };
}
