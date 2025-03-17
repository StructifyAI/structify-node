// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class TrainingDatasets extends APIResource {}

export type DatumStatus =
  | 'unlabeled'
  | 'nav_labeled'
  | 'save_labeled'
  | 'nav_verified'
  | 'save_verified'
  | 'pending'
  | 'skipped'
  | 'suspicious_nav'
  | 'suspicious_save'
  | 'potential_suspicious_nav'
  | 'potential_suspicious_save';

export interface LabelingStats {
  author: string;

  count: number;

  dataset: string;

  period: string;

  status: DatumStatus;

  capped_count?: number | null;
}

export declare namespace TrainingDatasets {
  export { type DatumStatus as DatumStatus, type LabelingStats as LabelingStats };
}
