// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as SharedAPI from './shared';
import { JobsList } from '../pagination';

export class Shared extends APIResource {}

export class StructifyEntitiesJobsList extends JobsList<StructifyEntity> {}

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

  tables: Array<TableDescriptor>;

  llm_override_field?: string | null;
}

export namespace DatasetDescriptor {
  export interface Relationship {
    description: string;

    name: string;

    source_table: string;

    target_table: string;

    merge_strategy?: Relationship.MergeStrategy | null;

    properties?: Array<Relationship.Property>;
  }

  export namespace Relationship {
    export interface MergeStrategy {
      Probabilistic: MergeStrategy.Probabilistic;
    }

    export namespace MergeStrategy {
      export interface Probabilistic {
        /**
         * Describes the expected cardinality of the source table when a match is found in
         * the target table
         *
         * For example, if we have a source company and a target funding round, we expect
         * the source company to appear in multiple funding rounds, but not _too_ many. So
         * if we have a funding round match, the expected number of unique companies is
         * relatively small. This is an estimate of that number.
         */
        source_cardinality_given_target_match?: number | null;

        /**
         * Describes the expected cardinality of the target table when a match is found in
         * the source table
         *
         * For example, if we have a source company and a target funding round, we usually
         * expect some number of funding rounds to be associated with a single company but
         * not _too_ many. So if we have a company match, the expected number of unique
         * funding rounds is relatively small. This is an estimate of that number.
         */
        target_cardinality_given_source_match?: number | null;
      }
    }

    export interface Property {
      description: string;

      name: string;

      merge_strategy?: 'Unique' | 'NoSignal' | Property.Probabilistic;

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

          comparison_strategy?: 'Default' | 'EnforceUniqueness';
        }
      }
    }
  }
}

export interface Entity {
  id: number;

  properties: Record<string, string | boolean | number | Image>;

  type: string;
}

/**
 * Knowledge graph info structured to deserialize and display in the same format
 * that the LLM outputs. Also the first representation of an LLM output in the
 * pipeline from raw tool output to being merged into a Neo4j DB
 */
export interface EntityGraph {
  entities?: Array<Entity>;

  relationships?: Array<Relationship>;
}

export interface ErrorMessage {
  error: string;
}

export interface FlagSelector {
  flag: number;
}

export interface Image {
  number: number;

  hash?: string;
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

/**
 * For tools with no inputs.
 */
export interface NoArgInput {
  /**
   * Dummy argument
   */
  reason: string;
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

export interface SearchInput {
  query: string;
}

export interface StructifyEntity {
  id: string;

  creation_time: string;

  label: string;

  properties: Record<string, string | boolean | number | Image>;
}

/**
 * The full definition of what a schema is - without duplicate information.
 */
export interface TableDescriptor {
  description: string;

  /**
   * Organized in a name, description format.
   */
  name: string;

  /**
   * Organized in a name, description format.
   */
  properties: Array<TableDescriptor.Property>;

  /**
   * Expected number of unique values in the complete dataset.
   *
   * This is used for our probabilistic merge strategy.
   */
  expected_cardinality?: number | null;
}

export namespace TableDescriptor {
  export interface Property {
    description: string;

    name: string;

    merge_strategy?: 'Unique' | 'NoSignal' | Property.Probabilistic;

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

        comparison_strategy?: 'Default' | 'EnforceUniqueness';
      }
    }
  }
}

export interface ToolCall {
  input:
    | ToolCall.Save
    | ToolCall.Scroll
    | ToolCall.ScrollToBottom
    | ToolCall.Exit
    | ToolCall.Click
    | ToolCall.Hover
    | ToolCall.Wait
    | ToolCall.Error
    | ToolCall.Google
    | ToolCall.Type;

  name:
    | 'Exit'
    | 'Save'
    | 'Wait'
    | 'Type'
    | 'Scroll'
    | 'ScrollToBottom'
    | 'Click'
    | 'Hover'
    | 'Error'
    | 'Google';

  result?: ToolCall.ToolQueued | ToolCall.ToolFail | ToolCall.InputParseFail | ToolCall.Success | null;
}

export namespace ToolCall {
  export interface Save {
    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a Neo4j DB
     */
    Save: SharedAPI.EntityGraph;
  }

  export interface Scroll {
    /**
     * For tools with no inputs.
     */
    Scroll: SharedAPI.NoArgInput;
  }

  export interface ScrollToBottom {
    /**
     * For tools with no inputs.
     */
    ScrollToBottom: SharedAPI.NoArgInput;
  }

  export interface Exit {
    /**
     * For tools with no inputs.
     */
    Exit: SharedAPI.NoArgInput;
  }

  export interface Click {
    Click: SharedAPI.FlagSelector;
  }

  export interface Hover {
    Hover: SharedAPI.FlagSelector;
  }

  export interface Wait {
    Wait: SharedAPI.WaitInput;
  }

  export interface Error {
    Error: SharedAPI.ErrorMessage;
  }

  export interface Google {
    Google: SharedAPI.SearchInput;
  }

  export interface Type {
    Type: SharedAPI.TypeInput;
  }

  export interface ToolQueued {
    ToolQueued: string;
  }

  export interface ToolFail {
    ToolFail: string;
  }

  export interface InputParseFail {
    InputParseFail: string;
  }

  export interface Success {
    Success: string;
  }
}

export interface TypeInput {
  flag: number;

  input: string;
}

export interface WaitInput {
  /**
   * Time in seconds to wait
   */
  seconds?: number;
}

export declare namespace Shared {
  export {
    type DatasetDescriptor as DatasetDescriptor,
    type Entity as Entity,
    type EntityGraph as EntityGraph,
    type ErrorMessage as ErrorMessage,
    type FlagSelector as FlagSelector,
    type Image as Image,
    type MatchedEntity as MatchedEntity,
    type NoArgInput as NoArgInput,
    type PropertyType as PropertyType,
    type Relationship as Relationship,
    type SearchInput as SearchInput,
    type StructifyEntity as StructifyEntity,
    type TableDescriptor as TableDescriptor,
    type ToolCall as ToolCall,
    type TypeInput as TypeInput,
    type WaitInput as WaitInput,
  };
}
