// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as StructureAPI from './structure';
import * as SharedAPI from './shared';

export class Structure extends APIResource {
  /**
   * Returns a job id that can be waited on until the request is finished.
   */
  enhance(body: StructureEnhanceParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/structure/enhance', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Returns a job id that can be waited on until the request is finished.
   */
  enhanceRelationship(
    body: StructureEnhanceRelationshipParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/structure/enhance_relationship', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Wait for all specified async tasks to be completed.
   */
  isComplete(body: StructureIsCompleteParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/structure/is_complete', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * and any associated LogNodes that have been added to them
   */
  jobStatus(
    body: StructureJobStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StructureJobStatusResponse> {
    return this._client.post('/structure/job_status', { body, ...options });
  }

  /**
   * Returns a token that can be waited on until the request is finished.
   */
  runAsync(body: StructureRunAsyncParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.post('/structure/run_async', {
      body,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export interface ChatPrompt {
  decoding_params: ChatPrompt.DecodingParams;

  messages: Array<ChatPrompt.Message>;

  metadata: ChatPrompt.Metadata;
}

export namespace ChatPrompt {
  export interface DecodingParams {
    parameters: Array<
      | DecodingParams.MaxTokens
      | DecodingParams.TopP
      | DecodingParams.RepeatWindow
      | DecodingParams.RepeatPenalty
      | DecodingParams.Temperature
      | DecodingParams.StopTokens
      | DecodingParams.LogitBias
      | DecodingParams.Functions
      | DecodingParams.JsonValidator
      | DecodingParams.RegexValidator
      | DecodingParams.ContextFreeGrammar
      | DecodingParams.NumBeams
      | DecodingParams.Crop
    >;
  }

  export namespace DecodingParams {
    export interface MaxTokens {
      MaxTokens: number;
    }

    export interface TopP {
      TopP: number;
    }

    export interface RepeatWindow {
      RepeatWindow: number;
    }

    export interface RepeatPenalty {
      RepeatPenalty: number;
    }

    export interface Temperature {
      Temperature: number;
    }

    export interface StopTokens {
      StopTokens: Array<string>;
    }

    export interface LogitBias {
      LogitBias: Record<string, number>;
    }

    export interface Functions {
      Functions: Array<Record<string, unknown>>;
    }

    export interface JsonValidator {
      JsonValidator: Record<string, unknown>;
    }

    export interface RegexValidator {
      RegexValidator: string;
    }

    export interface ContextFreeGrammar {
      ContextFreeGrammar: string;
    }

    export interface NumBeams {
      NumBeams: number;
    }

    export interface Crop {
      Crop: boolean;
    }
  }

  /**
   * Our generic definition of a message to a chat agent.
   */
  export interface Message {
    /**
     * We want this to be a vec of contents so we can accurately capture an
     * interleaving of images and text.
     *
     * This is meant to be a completely raw, unprocessed representation of the text.
     * Don't take stuff out.
     */
    content: Array<Message.Text | Message.Image>;

    role: 'user' | 'system' | 'assistant';
  }

  export namespace Message {
    export interface Text {
      Text: string;
    }

    export interface Image {
      Image: Core.Uploadable;
    }
  }

  export interface Metadata {
    /**
     * A dataset is where you put multiple referential schemas.
     *
     * A dataset is a complete namespace where all references between schemas are held
     * within the dataset.
     */
    dataset_descriptor: SharedAPI.DatasetDescriptor;

    extracted_entities: Array<SharedAPI.KnowledgeGraph>;

    extraction_criteria: Array<StructureAPI.ExtractionCriteria>;

    tool_metadata: Array<StructureAPI.ToolMetadata>;

    ocr_content?: string | null;

    screenshot?: Core.Uploadable | null;

    url?: string | null;

    web_flags?: Array<Metadata.WebFlag> | null;
  }

  export namespace Metadata {
    export interface WebFlag {
      ariaLabel: string;

      type: string;

      x: number;

      y: number;

      height?: number;

      href?: string | null;

      isInteractive?: boolean | null;

      /**
       * The number by which the flag is referred in image, prompt, and tool calls.
       */
      number?: number | null;

      text?: string;

      /**
       * The serde default here is to give us backwards compatibility it's fine for these
       * to be anything as long as the image isn't given since it won't regenerate.
       */
      width?: number;
    }
  }
}

export interface ExecutionStep {
  id: string;

  prompt: ChatPrompt;

  response: ExecutionStep.Response;
}

export namespace ExecutionStep {
  export interface Response {
    llm: string;

    text: string;

    tool_calls: Array<Response.ToolCall>;
  }

  export namespace Response {
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
        | 'Save'
        | 'Scroll'
        | 'ScrollToBottom'
        | 'Exit'
        | 'Click'
        | 'Hover'
        | 'Wait'
        | 'Error'
        | 'Google'
        | 'Type';

      result?: ToolCall.ToolQueued | ToolCall.ToolFail | ToolCall.InputParseFail | ToolCall.Success | null;
    }

    export namespace ToolCall {
      export interface Save {
        /**
         * Knowledge graph info structured to deserialize and display in the same format
         * that the LLM outputs. Also the first representation of an LLM output in the
         * pipeline from raw tool output to being merged into a Neo4j DB
         */
        Save: SharedAPI.KnowledgeGraph;
      }

      export interface Scroll {
        /**
         * For tools with no inputs.
         */
        Scroll: Scroll.Scroll;
      }

      export namespace Scroll {
        /**
         * For tools with no inputs.
         */
        export interface Scroll {
          /**
           * Dummy argument
           */
          reason: string;
        }
      }

      export interface ScrollToBottom {
        /**
         * For tools with no inputs.
         */
        ScrollToBottom: ScrollToBottom.ScrollToBottom;
      }

      export namespace ScrollToBottom {
        /**
         * For tools with no inputs.
         */
        export interface ScrollToBottom {
          /**
           * Dummy argument
           */
          reason: string;
        }
      }

      export interface Exit {
        /**
         * For tools with no inputs.
         */
        Exit: Exit.Exit;
      }

      export namespace Exit {
        /**
         * For tools with no inputs.
         */
        export interface Exit {
          /**
           * Dummy argument
           */
          reason: string;
        }
      }

      export interface Click {
        Click: Click.Click;
      }

      export namespace Click {
        export interface Click {
          flag: number;
        }
      }

      export interface Hover {
        Hover: Hover.Hover;
      }

      export namespace Hover {
        export interface Hover {
          flag: number;
        }
      }

      export interface Wait {
        Wait: Wait.Wait;
      }

      export namespace Wait {
        export interface Wait {
          /**
           * Time in seconds to wait
           */
          seconds?: number;
        }
      }

      export interface Error {
        Error: Error.Error;
      }

      export namespace Error {
        export interface Error {
          error: string;
        }
      }

      export interface Google {
        Google: Google.Google;
      }

      export namespace Google {
        export interface Google {
          query: string;
        }
      }

      export interface Type {
        Type: Type.Type;
      }

      export namespace Type {
        export interface Type {
          flag: number;

          input: string;
        }
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
  }
}

/**
 * It's an OR statement across these.
 */
export type ExtractionCriteria =
  | ExtractionCriteria.RelationshipExtraction
  | ExtractionCriteria.EntityExtraction
  | ExtractionCriteria.GenericProperty;

export namespace ExtractionCriteria {
  export interface RelationshipExtraction {
    RelationshipExtraction: RelationshipExtraction.RelationshipExtraction;
  }

  export namespace RelationshipExtraction {
    export interface RelationshipExtraction {
      relationship_name: string;
    }
  }

  export interface EntityExtraction {
    EntityExtraction: EntityExtraction.EntityExtraction;
  }

  export namespace EntityExtraction {
    export interface EntityExtraction {
      /**
       * The integer id corresponding to an entity in the seeded kg
       */
      seeded_kg_id: number;

      dataset_entity_id?: string | null;
    }
  }

  export interface GenericProperty {
    GenericProperty: GenericProperty.GenericProperty;
  }

  export namespace GenericProperty {
    export interface GenericProperty {
      property_names: Array<string>;

      /**
       * Vec<ExtractionCriteria> = it has to meet every one.
       */
      table_name: string;
    }
  }
}

export interface ToolMetadata {
  description: string;

  name:
    | 'Save'
    | 'Scroll'
    | 'ScrollToBottom'
    | 'Exit'
    | 'Click'
    | 'Hover'
    | 'Wait'
    | 'Error'
    | 'Google'
    | 'Type';

  regex_validator: string;

  tool_validator: Record<string, unknown>;
}

export type StructureEnhanceResponse = string;

export type StructureEnhanceRelationshipResponse = string;

export type StructureIsCompleteResponse = string;

export interface StructureJobStatusResponse {
  job_status: Array<'Queued' | 'Running' | 'Completed' | 'Failed'>;

  log_nodes: Array<string>;
}

export type StructureRunAsyncResponse = string;

export interface StructureEnhanceParams {
  entity_id: string;

  allow_new_entities?: boolean;

  property_name?: string | null;

  relationship_name?: string | null;
}

export interface StructureEnhanceRelationshipParams {
  relationship_name: string;

  allow_new_entities?: boolean;

  source_id?: string | null;

  target_id?: string | null;
}

export type StructureIsCompleteParams = Array<string>;

export type StructureJobStatusParams = Array<string>;

export interface StructureRunAsyncParams {
  name: string;

  /**
   * These are all the types that can be converted into a BasicInputType
   */
  structure_input:
    | StructureRunAsyncParams.SecIngestor
    | StructureRunAsyncParams.PdfIngestor
    | StructureRunAsyncParams.EnhanceIngestor
    | StructureRunAsyncParams.Basic;

  extraction_criteria?: Array<ExtractionCriteria>;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a Neo4j DB
   */
  seeded_entity?: SharedAPI.KnowledgeGraph;

  special_job_type?: 'HumanLLM' | null;
}

export namespace StructureRunAsyncParams {
  export interface SecIngestor {
    SECIngestor: SecIngestor.SecIngestor;
  }

  export namespace SecIngestor {
    export interface SecIngestor {
      accession_number?: string | null;

      quarter?: number | null;

      year?: number | null;
    }
  }

  export interface PdfIngestor {
    /**
     * This is currently a very simple ingestor. It converts everything to an image and
     * processes them independently.
     */
    PDFIngestor: PdfIngestor.PdfIngestor;
  }

  export namespace PdfIngestor {
    /**
     * This is currently a very simple ingestor. It converts everything to an image and
     * processes them independently.
     */
    export interface PdfIngestor {
      path: string;
    }
  }

  export interface EnhanceIngestor {
    EnhanceIngestor: EnhanceIngestor.EnhanceIngestor;
  }

  export namespace EnhanceIngestor {
    export interface EnhanceIngestor {
      central_entity: SharedAPI.Entity;

      /**
       * Knowledge graph info structured to deserialize and display in the same format
       * that the LLM outputs. Also the first representation of an LLM output in the
       * pipeline from raw tool output to being merged into a Neo4j DB
       */
      surrounding_kg: SharedAPI.KnowledgeGraph;

      target_descriptor: EnhanceIngestor.Property | EnhanceIngestor.Relationship;

      allow_new_entities?: boolean;
    }

    export namespace EnhanceIngestor {
      export interface Property {
        Property: Property.Property;
      }

      export namespace Property {
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

              comparison_strategy?: 'Default' | 'EnforceUniqueness';
            }
          }
        }
      }

      export interface Relationship {
        Relationship: Relationship.Relationship;
      }

      export namespace Relationship {
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

                comparison_strategy?: 'Default' | 'EnforceUniqueness';
              }
            }
          }
        }
      }
    }
  }

  export interface Basic {
    /**
     * These are all the types for which we have an agent that is directly capable of
     * navigating. There should be a one to one mapping between them.
     */
    Basic: Basic.TextDocument | Basic.WebSearch | Basic.ImageDocument;
  }

  export namespace Basic {
    export interface TextDocument {
      TextDocument: TextDocument.TextDocument;
    }

    export namespace TextDocument {
      export interface TextDocument {
        content?: string | null;

        path?: string | null;
      }
    }

    export interface WebSearch {
      WebSearch: WebSearch.WebSearch;
    }

    export namespace WebSearch {
      export interface WebSearch {
        starting_website?: string | null;

        use_local_browser?: boolean;
      }
    }

    export interface ImageDocument {
      ImageDocument: ImageDocument.ImageDocument;
    }

    export namespace ImageDocument {
      export interface ImageDocument {
        content: Core.Uploadable;

        document_name: string;

        document_page: number;

        ocr_content?: string | null;
      }
    }
  }
}

export declare namespace Structure {
  export {
    type ChatPrompt as ChatPrompt,
    type ExecutionStep as ExecutionStep,
    type ExtractionCriteria as ExtractionCriteria,
    type ToolMetadata as ToolMetadata,
    type StructureEnhanceResponse as StructureEnhanceResponse,
    type StructureEnhanceRelationshipResponse as StructureEnhanceRelationshipResponse,
    type StructureIsCompleteResponse as StructureIsCompleteResponse,
    type StructureJobStatusResponse as StructureJobStatusResponse,
    type StructureRunAsyncResponse as StructureRunAsyncResponse,
    type StructureEnhanceParams as StructureEnhanceParams,
    type StructureEnhanceRelationshipParams as StructureEnhanceRelationshipParams,
    type StructureIsCompleteParams as StructureIsCompleteParams,
    type StructureJobStatusParams as StructureJobStatusParams,
    type StructureRunAsyncParams as StructureRunAsyncParams,
  };
}
