// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as SharedAPI from './shared';
import * as DatasetsAPI from './datasets/datasets';

export class Shared extends APIResource {}

/**
 * A dataset is where you put multiple referential schemas.
 *
 * A dataset is a complete namespace where all references between schemas are held
 * within the dataset.
 */
export interface DatasetDescriptor {
  description: string;

  name: string;

  relationships: Array<DatasetDescriptor.Relationship>;

  tables: Array<Table>;

  llm_override_field?: string | null;
}

export namespace DatasetDescriptor {
  export interface Relationship {
    description: string;

    name: string;

    source_table: string;

    target_table: string;

    merge_strategy?: DatasetsAPI.RelationshipMergeStrategy | null;

    properties?: Array<Relationship.Property>;
  }

  export namespace Relationship {
    export interface Property {
      description: string;

      name: string;

      merge_strategy?: DatasetsAPI.Strategy;

      prop_type?: SharedAPI.PropertyType;
    }
  }
}

export interface Entity {
  id: number;

  properties: Record<string, string | boolean | number | Image>;

  type: string;
}

export interface EntityMatch {
  /**
   * Alternate matches for entity a - just used for dataset eval
   */
  alternate_matches: Array<EntityMatch>;

  baseline_cardinality: number;

  entity_a: EntityMatch.EntityA;

  entity_b: EntityMatch.EntityB;

  matched_properties: Array<EntityMatch.MatchedProperty>;

  p_match: number;

  p_match_threshold: number;

  cardinality_override?: EntityMatch.CardinalityOverride | null;
}

export namespace EntityMatch {
  export interface EntityA {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    updated_at: string;
  }

  export interface EntityB {
    id: string;

    created_at: string;

    dataset_id: string;

    label: string;

    properties: Record<string, string | boolean | number | SharedAPI.Image>;

    updated_at: string;
  }

  export interface MatchedProperty {
    match_prob: number;

    match_transfer_prob: number;

    name: string;

    property_cardinality: number;

    unique: boolean;
  }

  export interface CardinalityOverride {
    cardinality: number;

    entity_id: string;

    relationship_name: string;
  }
}

export interface Image {
  number: number;

  hash?: string;
}

/**
 * Knowledge graph info structured to deserialize and display in the same format
 * that the LLM outputs. Also the first representation of an LLM output in the
 * pipeline from raw tool output to being merged into a Neo4j DB
 */
export interface KnowledgeGraph {
  entities?: Array<Entity>;

  relationships?: Array<Relationship>;
}

export type PropertyType =
  | 'String'
  | 'Boolean'
  | 'Integer'
  | 'Float'
  | 'Date'
  | 'URL'
  | 'Money'
  | 'Image'
  | 'PersonName'
  | 'Address'
  | PropertyType.Enum;

export namespace PropertyType {
  export interface Enum {
    Enum: Array<string>;
  }
}

export interface Relationship {
  source: number;

  target: number;

  type: string;

  properties?: Record<string, string | boolean | number | Image>;
}

/**
 * The full definition of what a schema is - without duplicate information.
 */
export interface Table {
  description: string;

  /**
   * Organized in a name, description format.
   */
  name: string;

  /**
   * Organized in a name, description format.
   */
  properties: Array<Table.Property>;

  /**
   * Expected number of unique values in the complete dataset.
   *
   * This is used for our probabilistic merge strategy.
   */
  expected_cardinality?: number | null;
}

export namespace Table {
  export interface Property {
    description: string;

    name: string;

    merge_strategy?: DatasetsAPI.Strategy;

    prop_type?: SharedAPI.PropertyType;
  }
}

export declare namespace Shared {
  export {
    type DatasetDescriptor as DatasetDescriptor,
    type Entity as Entity,
    type EntityMatch as EntityMatch,
    type Image as Image,
    type KnowledgeGraph as KnowledgeGraph,
    type PropertyType as PropertyType,
    type Relationship as Relationship,
    type Table as Table,
  };
}
