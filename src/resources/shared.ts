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

export interface MatchedEntity {
  alternative_matches: Array<MatchedEntity>;

  e1_id: string;

  e2_id: string;

  match_score: number;

  property_matches: MatchedEntity.PropertyMatches;
}

export namespace MatchedEntity {
  export interface PropertyMatches {
    matched_properties: Record<string, PropertyMatches.MatchedProperties>;

    unmatched_properties_1: Record<string, string | boolean | number | SharedAPI.Image>;

    unmatched_properties_2: Record<string, string | boolean | number | SharedAPI.Image>;
  }

  export namespace PropertyMatches {
    export interface MatchedProperties {
      match_score: number;

      value1: string | boolean | number | SharedAPI.Image;

      value2: string | boolean | number | SharedAPI.Image;
    }
  }
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
    type Image as Image,
    type KnowledgeGraph as KnowledgeGraph,
    type MatchedEntity as MatchedEntity,
    type PropertyType as PropertyType,
    type Relationship as Relationship,
    type Table as Table,
  };
}
