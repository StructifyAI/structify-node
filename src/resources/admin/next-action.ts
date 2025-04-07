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
  ): Core.APIPromise<DeleteActionTrainingDataResponse> {
    const { id } = params;
    return this._client.delete('/admin/next_action/delete_action_training_data', {
      query: { id },
      ...options,
    });
  }

  getTrainingData(
    query?: NextActionGetTrainingDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionTrainingDataResponse>;
  getTrainingData(options?: Core.RequestOptions): Core.APIPromise<ActionTrainingDataResponse>;
  getTrainingData(
    query: NextActionGetTrainingDataParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionTrainingDataResponse> {
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
  id: string;

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
      id: string;

      action_name?: string;

      metadata?: Record<string, string>;
    }
  }

  export interface Output {
    id: string;

    created_at: string;

    label: 'HumanLLMLabel' | 'LLMOutput' | 'Pending' | 'Reviewed' | 'Verified' | 'Others';

    output: Output.SelectedStep | Output.SearchStep | Output.InvalidAction;
  }

  export namespace Output {
    export interface SelectedStep {
      SelectedStep: SelectedStep.SelectedStep;
    }

    export namespace SelectedStep {
      export interface SelectedStep {
        step_id: string;
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

export interface ActionTrainingDataResponse {
  data: Array<ActionTrainingDataEntry>;
}

export interface AddActionTrainingDatumRequest {
  input: AddActionTrainingDatumRequest.Input;

  label: string;

  output:
    | AddActionTrainingDatumRequest.SelectedStep
    | AddActionTrainingDatumRequest.SearchStep
    | AddActionTrainingDatumRequest.InvalidAction;

  job_id?: string | null;
}

export namespace AddActionTrainingDatumRequest {
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
      id: string;

      action_name?: string;

      metadata?: Record<string, string>;
    }
  }

  export interface SelectedStep {
    SelectedStep: SelectedStep.SelectedStep;
  }

  export namespace SelectedStep {
    export interface SelectedStep {
      step_id: string;
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

export interface DeleteActionTrainingDataParams {
  id: string;
}

export interface DeleteActionTrainingDataResponse {
  deleted_count: number;
}

export interface GetActionTrainingDataParams {
  status: string;

  from_date?: string | null;

  job_id?: string | null;

  limit?: number;

  offset?: number;

  to_date?: string | null;
}

export interface LabelActionTrainingDatumRequest {
  id: string;

  label: string;

  output:
    | LabelActionTrainingDatumRequest.SelectedStep
    | LabelActionTrainingDatumRequest.SearchStep
    | LabelActionTrainingDatumRequest.InvalidAction;
}

export namespace LabelActionTrainingDatumRequest {
  export interface SelectedStep {
    SelectedStep: SelectedStep.SelectedStep;
  }

  export namespace SelectedStep {
    export interface SelectedStep {
      step_id: string;
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

export interface NextActionAddTrainingDatumParams {
  input: NextActionAddTrainingDatumParams.Input;

  label: string;

  output:
    | NextActionAddTrainingDatumParams.SelectedStep
    | NextActionAddTrainingDatumParams.SearchStep
    | NextActionAddTrainingDatumParams.InvalidAction;

  job_id?: string | null;
}

export namespace NextActionAddTrainingDatumParams {
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
      id: string;

      action_name?: string;

      metadata?: Record<string, string>;
    }
  }

  export interface SelectedStep {
    SelectedStep: SelectedStep.SelectedStep;
  }

  export namespace SelectedStep {
    export interface SelectedStep {
      step_id: string;
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

export interface NextActionDeleteTrainingDataParams {
  /**
   * ID of the training datum to delete
   */
  id: string;
}

export interface NextActionGetTrainingDataParams {
  from_date?: string | null;

  job_id?: string | null;

  limit?: number;

  offset?: number;

  status?: 'HumanLLMLabel' | 'LLMOutput' | 'Pending' | 'Reviewed' | 'Verified' | 'Others' | null;

  to_date?: string | null;
}

export interface NextActionLabelTrainingDatumParams {
  id: string;

  label: string;

  output:
    | NextActionLabelTrainingDatumParams.SelectedStep
    | NextActionLabelTrainingDatumParams.SearchStep
    | NextActionLabelTrainingDatumParams.InvalidAction;
}

export namespace NextActionLabelTrainingDatumParams {
  export interface SelectedStep {
    SelectedStep: SelectedStep.SelectedStep;
  }

  export namespace SelectedStep {
    export interface SelectedStep {
      step_id: string;
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

export declare namespace NextAction {
  export {
    type ActionTrainingDataEntry as ActionTrainingDataEntry,
    type ActionTrainingDataResponse as ActionTrainingDataResponse,
    type AddActionTrainingDatumRequest as AddActionTrainingDatumRequest,
    type DeleteActionTrainingDataParams as DeleteActionTrainingDataParams,
    type DeleteActionTrainingDataResponse as DeleteActionTrainingDataResponse,
    type GetActionTrainingDataParams as GetActionTrainingDataParams,
    type LabelActionTrainingDatumRequest as LabelActionTrainingDatumRequest,
    type NextActionAddTrainingDatumParams as NextActionAddTrainingDatumParams,
    type NextActionDeleteTrainingDataParams as NextActionDeleteTrainingDataParams,
    type NextActionGetTrainingDataParams as NextActionGetTrainingDataParams,
    type NextActionLabelTrainingDatumParams as NextActionLabelTrainingDatumParams,
  };
}
