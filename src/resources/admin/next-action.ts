// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SharedAPI from '../shared';
import * as StructureAPI from '../structure';

export class NextAction extends APIResource {
  /**
   * Add a new action training datum
   */
  addTrainingDatum(
    body: NextActionAddTrainingDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/admin/next_action/add_action_training_datum', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  deleteTrainingData(
    params: NextActionDeleteTrainingDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { id } = params;
    return this._client.delete('/admin/next_action/delete_action_training_data', {
      query: { id },
      ...options,
    });
  }

  getTrainingData(
    query?: NextActionGetTrainingDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  getTrainingData(options?: Core.RequestOptions): Core.APIPromise<unknown>;
  getTrainingData(
    query: NextActionGetTrainingDataParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.getTrainingData({}, query);
    }
    return this._client.get('/admin/next_action/get_action_training_data', { query, ...options });
  }

  /**
   * Label an existing action training datum
   */
  labelTrainingDatum(
    body: NextActionLabelTrainingDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put('/admin/next_action/label_action_training_datum', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ActionTrainingDataEntry {
  id: number;

  author: string;

  created_at: string;

  input: ActionTrainingDataEntry.Input;

  outputs: Array<ActionTrainingDataEntry.Output>;
}

export namespace ActionTrainingDataEntry {
  export interface Input {
    all_steps: Array<Input.AllStep>;

    extraction_criteria: Array<StructureAPI.SaveRequirement>;

    previous_queries: Array<string>;

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a Neo4j DB
     */
    seeded_kg: SharedAPI.KnowledgeGraph;
  }

  export namespace Input {
    export interface AllStep {
      id: number;

      action_name?: string;

      metadata?: Record<string, string>;
    }
  }

  export interface Output {
    id: number;

    created_at: string;

    label: unknown;

    output: Output.SelectedStep | Output.SearchStep | Output.InvalidAction;
  }

  export namespace Output {
    export interface SelectedStep {
      SelectedStep: SelectedStep.SelectedStep;
    }

    export namespace SelectedStep {
      export interface SelectedStep {
        step_id: number;
      }
    }

    export interface SearchStep {
      SearchStep: SearchStep.SearchStep;
    }

    export namespace SearchStep {
      export interface SearchStep {
        search_query: string;
      }
    }

    export interface InvalidAction {
      InvalidAction: InvalidAction.InvalidAction;
    }

    export namespace InvalidAction {
      export interface InvalidAction {
        error: string;

        llm_output: string;
      }
    }
  }
}

export type NextActionDeleteTrainingDataResponse = unknown;

export type NextActionGetTrainingDataResponse = unknown;

export type NextActionAddTrainingDatumParams = unknown;

export interface NextActionDeleteTrainingDataParams {
  /**
   * ID of the training datum to delete
   */
  id: number;
}

export interface NextActionGetTrainingDataParams {
  job_id?: number | null;

  limit?: number;

  offset?: number;

  status?: unknown;
}

export type NextActionLabelTrainingDatumParams = unknown;

export declare namespace NextAction {
  export {
    type ActionTrainingDataEntry as ActionTrainingDataEntry,
    type NextActionDeleteTrainingDataResponse as NextActionDeleteTrainingDataResponse,
    type NextActionGetTrainingDataResponse as NextActionGetTrainingDataResponse,
    type NextActionAddTrainingDatumParams as NextActionAddTrainingDatumParams,
    type NextActionDeleteTrainingDataParams as NextActionDeleteTrainingDataParams,
    type NextActionGetTrainingDataParams as NextActionGetTrainingDataParams,
    type NextActionLabelTrainingDatumParams as NextActionLabelTrainingDatumParams,
  };
}
