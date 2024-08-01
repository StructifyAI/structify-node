// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as SharedAPI from './shared';

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
}

export namespace DatasetDescriptor {
  export interface Relationship {
    description: string;

    name: string;

    source_table: string;

    target_table: string;

    properties?: Array<Relationship.Property>;
  }

  export namespace Relationship {
    export interface Property {
      description: string;

      name: string;

      merge_strategy?: 'Unique' | 'FuzzyMatch' | 'None';

      prop_type?: SharedAPI.PropertyType;
    }
  }
}

export interface Entity {
  id: number;

  properties: Record<string, string>;

  type: string;
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

export type PropertyType = 'String' | PropertyType.Enum | 'Integer';

export namespace PropertyType {
  export interface Enum {
    Enum: Array<string>;
  }
}

export interface Relationship {
  source: number;

  target: number;

  type: string;
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
}

export namespace Table {
  export interface Property {
    description: string;

    name: string;

    merge_strategy?: 'Unique' | 'FuzzyMatch' | 'None';

    prop_type?: SharedAPI.PropertyType;
  }
}

export namespace Shared {
  export import DatasetDescriptor = SharedAPI.DatasetDescriptor;
  export import Entity = SharedAPI.Entity;
  export import KnowledgeGraph = SharedAPI.KnowledgeGraph;
  export import PropertyType = SharedAPI.PropertyType;
  export import Relationship = SharedAPI.Relationship;
  export import Table = SharedAPI.Table;
}
