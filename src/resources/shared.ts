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

      /**
       * Property with unique 1:1 correspondence to its parent.
       *
       * Merge based on this property 100% of the time
       */
      merge_strategy?: 'Unique' | Property.Probabilistic | 'NoSignal';

      prop_type?: SharedAPI.PropertyType;
    }

    export namespace Property {
      export interface Probabilistic {
        Probabilistic: Probabilistic.Probabilistic;
      }

      export namespace Probabilistic {
        export interface Probabilistic {
          /**
           * The number of unique values that are expected to be present in the complete
           * dataset
           *
           * This is used for merging to determine how significant a match is. (i.e. if there
           * are only 2 possible values, a match gives less confidence than if there are 100)
           */
          baseline_cardinality: number;

          /**
           * The estimated probability that, given an entity match, the properties also match
           *
           * For a person's full name, this would be quite high. For a person's job title, it
           * would be lower because people can have multiple job titles over time or at
           * different companies at the same time.
           */
          match_transfer_probability: number;
        }
      }
    }
  }
}

export interface Entity {
  id: number;

  properties: Record<string, string | number | boolean>;

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

export type PropertyType = 'String' | 'Boolean' | PropertyType.Enum | 'Integer';

export namespace PropertyType {
  export interface Enum {
    Enum: Array<string>;
  }
}

export interface Relationship {
  source: number;

  target: number;

  type: string;

  properties?: Record<string, string | number | boolean>;
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

    /**
     * Property with unique 1:1 correspondence to its parent.
     *
     * Merge based on this property 100% of the time
     */
    merge_strategy?: 'Unique' | Property.Probabilistic | 'NoSignal';

    prop_type?: SharedAPI.PropertyType;
  }

  export namespace Property {
    export interface Probabilistic {
      Probabilistic: Probabilistic.Probabilistic;
    }

    export namespace Probabilistic {
      export interface Probabilistic {
        /**
         * The number of unique values that are expected to be present in the complete
         * dataset
         *
         * This is used for merging to determine how significant a match is. (i.e. if there
         * are only 2 possible values, a match gives less confidence than if there are 100)
         */
        baseline_cardinality: number;

        /**
         * The estimated probability that, given an entity match, the properties also match
         *
         * For a person's full name, this would be quite high. For a person's job title, it
         * would be lower because people can have multiple job titles over time or at
         * different companies at the same time.
         */
        match_transfer_probability: number;
      }
    }
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
