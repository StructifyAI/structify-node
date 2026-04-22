// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as StructureAPI from './structure';
import * as ChatAPI from './chat';
import * as SharedAPI from './shared';

export class Structure extends APIResource {
  /**
   * For each entity in `table_name`, queues a job that structures the given source
   * into either new property values (when `target` is `Properties`) or a new
   * relationship (when `target` is `Relationship`), seeded with that entity. Returns
   * the list of queued job ids, which the caller can wait on.
   */
  bulkEnhance(
    body: StructureBulkEnhanceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StructureBulkEnhanceResponse> {
    return this._client.post('/structure/bulk_enhance', { body, ...options });
  }

  /**
   * Returns a job id that can be waited on until the request is finished.
   */
  enhanceProperty(
    body: StructureEnhancePropertyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/structure/enhance_property', {
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
   * Attempt to find the given relation between two entities.
   */
  findRelationship(
    body: StructureFindRelationshipParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    return this._client.post('/structure/find_relationship', {
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
   * If only dataset_name is provided, up to 1000 of the most recent jobs for that
   * dataset will be returned.
   */
  jobStatus(
    body: StructureJobStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StructureJobStatusResponse> {
    return this._client.post('/structure/job_status', { body, ...options });
  }

  /**
   * For single mode, creates one job for the entire PDF. For batch mode, creates one
   * job per PDF page.
   */
  pdf(body: StructurePdfParams, options?: Core.RequestOptions): Core.APIPromise<StructurePdfResponse> {
    return this._client.post('/structure/pdf', { body, ...options });
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

  messages: Array<ChatAPI.Message>;

  /**
   * All metadata required to generate a prompt for the LLM
   */
  metadata: ChatPrompt.Metadata;
}

export namespace ChatPrompt {
  export interface DecodingParams {
    parameters: Array<
      | DecodingParams.MaxTokens
      | DecodingParams.MaxCompletionTokens
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
      | DecodingParams.Thinking
      | DecodingParams.Verbosity
      | DecodingParams.ReasoningEffort
      | DecodingParams.NativeTools
    >;
  }

  export namespace DecodingParams {
    export interface MaxTokens {
      MaxTokens: number;
    }

    export interface MaxCompletionTokens {
      MaxCompletionTokens: number;
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
      LogitBias: { [key: string]: number };
    }

    export interface Functions {
      Functions: Array<{ [key: string]: unknown }>;
    }

    export interface JsonValidator {
      JsonValidator: { [key: string]: unknown };
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

    export interface Thinking {
      /**
       * Thinking tokens for Claude 3.7. Contains the budget in tokens for thinking.
       */
      Thinking: number;
    }

    export interface Verbosity {
      Verbosity: 'low' | 'medium' | 'high';
    }

    export interface ReasoningEffort {
      ReasoningEffort: 'low' | 'medium' | 'high' | 'minimal';
    }

    export interface NativeTools {
      /**
       * Native OpenAI-style tool definitions sent directly to the LLM.
       */
      NativeTools: Array<NativeTools.NativeTool>;
    }

    export namespace NativeTools {
      export interface NativeTool {
        description: string;

        name: string;

        parameters_schema: { [key: string]: unknown };
      }
    }
  }

  /**
   * All metadata required to generate a prompt for the LLM
   */
  export interface Metadata {
    /**
     * A dataset is where you put multiple referential schemas.
     *
     * A dataset is a complete namespace where all references between schemas are held
     * within the dataset.
     */
    dataset_descriptor: SharedAPI.DatasetDescriptor;

    extracted_entities: Array<SharedAPI.KnowledgeGraph>;

    extraction_criteria: Array<StructureAPI.SaveRequirement>;

    formatter_specific: Metadata.ImageMeta | Metadata.WebMeta | Metadata.TextMeta | Metadata.ScraperMeta;

    qa_potentially_sus_response?: string | null;
  }

  export namespace Metadata {
    export interface ImageMeta {
      ImageMeta: ImageMeta.ImageMeta;
    }

    export namespace ImageMeta {
      export interface ImageMeta {
        image: string | null;

        document_name?: string | null;

        document_page?: number | null;

        ocr_content?: string | null;
      }
    }

    export interface WebMeta {
      WebMeta: WebMeta.WebMeta;
    }

    export namespace WebMeta {
      export interface WebMeta {
        flags: Array<WebMeta.Flag>;

        url: string;

        ocr_content?: string | null;

        screenshot?: Core.Uploadable | null;
      }

      export namespace WebMeta {
        export interface Flag {
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

    export interface TextMeta {
      TextMeta: TextMeta.TextMeta;
    }

    export namespace TextMeta {
      export interface TextMeta {
        text: string;
      }
    }

    export interface ScraperMeta {
      ScraperMeta: ScraperMeta.ScraperMeta;
    }

    export namespace ScraperMeta {
      export interface ScraperMeta {
        html_content: string;

        url: string;
      }
    }
  }
}

/**
 * It's an OR statement across these.
 */
export type SaveRequirement =
  | SaveRequirement.RequiredRelationship
  | SaveRequirement.RequiredEntity
  | SaveRequirement.RequiredProperty;

export namespace SaveRequirement {
  export interface RequiredRelationship {
    relationship_name: string;
  }

  export interface RequiredEntity {
    /**
     * The integer id corresponding to an entity in the seeded entity graph (different
     * from the global dataset entity id)
     */
    seeded_entity_id: number;

    entity_id?: string | null;
  }

  export interface RequiredProperty {
    /**
     * If there are multiple properties, it can match just one of them
     */
    property_names: Array<string>;

    /**
     * The table name of the entity to update
     */
    table_name: string;
  }
}

export type StructureBulkEnhanceResponse = Array<string>;

export type StructureEnhancePropertyResponse = string;

export type StructureEnhanceRelationshipResponse = string;

export type StructureFindRelationshipResponse = string;

export type StructureIsCompleteResponse = string;

export type StructureJobStatusResponse = Array<StructureJobStatusResponse.StructureJobStatusResponseItem>;

export namespace StructureJobStatusResponse {
  export interface StructureJobStatusResponseItem {
    dataset_name: string;

    job_id: string;

    status?: 'Queued' | 'Running' | 'Completed' | 'Failed' | null;

    target?: StructureJobStatusResponseItem.Target | null;
  }

  export namespace StructureJobStatusResponseItem {
    export interface Target {
      entity_id: string;

      property_names?: Array<string> | null;

      relationship_name?: string | null;
    }
  }
}

export interface StructurePdfResponse {
  job_ids: Array<string>;
}

export type StructureRunAsyncResponse = string;

export interface StructureBulkEnhanceParams {
  dataset: string;

  table_name: string;

  target: StructureBulkEnhanceParams.Properties | StructureBulkEnhanceParams.Relationship;

  instructions?: string | null;

  model?: string | null;

  node_id?: string | null;

  source?: 'Web' | StructureBulkEnhanceParams.Scrape | null;

  use_proxy?: boolean | null;
}

export namespace StructureBulkEnhanceParams {
  export interface Properties {
    Properties: Properties.Properties;
  }

  export namespace Properties {
    export interface Properties {
      property_names: Array<string>;
    }
  }

  export interface Relationship {
    Relationship: Relationship.Relationship;
  }

  export namespace Relationship {
    export interface Relationship {
      relationship_name: string;
    }
  }

  export interface Scrape {
    Scrape: Scrape.Scrape;
  }

  export namespace Scrape {
    export interface Scrape {
      url_column: string;
    }
  }
}

export interface StructureEnhancePropertyParams {
  entity_id: string;

  property_name: string;

  allow_extra_entities?: boolean;

  node_id?: string | null;
}

export interface StructureEnhanceRelationshipParams {
  entity_id: string;

  relationship_name: string;

  allow_extra_entities?: boolean;

  node_id?: string | null;
}

export interface StructureFindRelationshipParams {
  from_id: string;

  relationship_name: string;

  to_id: string;

  allow_extra_entities?: boolean;
}

export type StructureIsCompleteParams = Array<string>;

export type StructureJobStatusParams = StructureJobStatusParams.Job;

export namespace StructureJobStatusParams {
  export interface Job {
    dataset_name?: string | null;

    job_ids?: Array<string> | null;
  }
}

export interface StructurePdfParams {
  dataset: string;

  path: string;

  instructions?: string | null;

  model?: string | null;

  node_id?: string | null;

  pages?: Array<number> | null;
}

export interface StructureRunAsyncParams {
  dataset: string;

  instructions?: string | null;

  model?: string | null;

  node_id?: string | null;

  save_requirement?: Array<SaveRequirement>;

  /**
   * Knowledge graph info structured to deserialize and display in the same format
   * that the LLM outputs. Also the first representation of an LLM output in the
   * pipeline from raw tool output to being merged into a DB
   */
  seeded_entity?: SharedAPI.KnowledgeGraph;

  source?: 'Web' | StructureRunAsyncParams.Scrape | null;

  use_proxy?: boolean | null;
}

export namespace StructureRunAsyncParams {
  export interface Scrape {
    Scrape: Scrape.Scrape;
  }

  export namespace Scrape {
    export interface Scrape {
      url_column: string;
    }
  }
}

export declare namespace Structure {
  export {
    type ChatPrompt as ChatPrompt,
    type SaveRequirement as SaveRequirement,
    type StructureBulkEnhanceResponse as StructureBulkEnhanceResponse,
    type StructureEnhancePropertyResponse as StructureEnhancePropertyResponse,
    type StructureEnhanceRelationshipResponse as StructureEnhanceRelationshipResponse,
    type StructureFindRelationshipResponse as StructureFindRelationshipResponse,
    type StructureIsCompleteResponse as StructureIsCompleteResponse,
    type StructureJobStatusResponse as StructureJobStatusResponse,
    type StructurePdfResponse as StructurePdfResponse,
    type StructureRunAsyncResponse as StructureRunAsyncResponse,
    type StructureBulkEnhanceParams as StructureBulkEnhanceParams,
    type StructureEnhancePropertyParams as StructureEnhancePropertyParams,
    type StructureEnhanceRelationshipParams as StructureEnhanceRelationshipParams,
    type StructureFindRelationshipParams as StructureFindRelationshipParams,
    type StructureIsCompleteParams as StructureIsCompleteParams,
    type StructureJobStatusParams as StructureJobStatusParams,
    type StructurePdfParams as StructurePdfParams,
    type StructureRunAsyncParams as StructureRunAsyncParams,
  };
}
