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

  getBatchedTrainingData(
    body: NextActionGetBatchedTrainingDataParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionTrainingDataResponse> {
    return this._client.post('/admin/next_action/get_batched_action_training_data', { body, ...options });
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

  getTrainingDatum(
    query: NextActionGetTrainingDatumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionTrainingDataEntry> {
    return this._client.get('/admin/next_action/get_action_training_datum', { query, ...options });
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

  input_prompt: string;

  outputs: Array<ActionTrainingDataEntry.Output>;
}

export namespace ActionTrainingDataEntry {
  export interface Input {
    all_steps: Array<Input.AllStep>;

    /**
     * A dataset is where you put multiple referential schemas.
     *
     * A dataset is a complete namespace where all references between schemas are held
     * within the dataset.
     */
    descriptor: SharedAPI.DatasetDescriptor;

    extraction_criteria: Array<StructureAPI.SaveRequirement>;

    previous_actions: Array<Input.SelectedStep | Input.SearchStep | Input.InvalidAction | Input.Exit>;

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a DB
     */
    seeded_kg: SharedAPI.KnowledgeGraph;
  }

  export namespace Input {
    export interface AllStep {
      id: string;

      action_name?: string;

      metadata?: { [key: string]: string };
    }

    export interface SelectedStep {
      SelectedStep: SelectedStep.SelectedStep;
    }

    export namespace SelectedStep {
      export interface SelectedStep {
        info: SelectedStep.Info;

        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;

        step_id: string;
      }

      export namespace SelectedStep {
        export interface Info {
          id: string;

          action_name?: string;

          metadata?: { [key: string]: string };
        }
      }
    }

    export interface SearchStep {
      SearchStep: SearchStep.SearchStep;
    }

    export namespace SearchStep {
      export interface SearchStep {
        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;

        search_query: string;
      }
    }

    export interface InvalidAction {
      InvalidAction: InvalidAction.InvalidAction;
    }

    export namespace InvalidAction {
      export interface InvalidAction {
        error: string;

        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;
      }
    }

    export interface Exit {
      Exit: Exit.Exit;
    }

    export namespace Exit {
      export interface Exit {
        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;
      }
    }
  }

  export interface Output {
    id: string;

    created_at: string;

    label: 'HumanLLMLabel' | 'LLMOutput' | 'Pending' | 'Reviewed' | 'Verified' | 'Others';

    output: Output.SelectedStep | Output.SearchStep | Output.InvalidAction | Output.Exit;
  }

  export namespace Output {
    export interface SelectedStep {
      SelectedStep: SelectedStep.SelectedStep;
    }

    export namespace SelectedStep {
      export interface SelectedStep {
        info: SelectedStep.Info;

        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;

        step_id: string;
      }

      export namespace SelectedStep {
        export interface Info {
          id: string;

          action_name?: string;

          metadata?: { [key: string]: string };
        }
      }
    }

    export interface SearchStep {
      SearchStep: SearchStep.SearchStep;
    }

    export namespace SearchStep {
      export interface SearchStep {
        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;

        search_query: string;
      }
    }

    export interface InvalidAction {
      InvalidAction: InvalidAction.InvalidAction;
    }

    export namespace InvalidAction {
      export interface InvalidAction {
        error: string;

        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;
      }
    }

    export interface Exit {
      Exit: Exit.Exit;
    }

    export namespace Exit {
      export interface Exit {
        llm_input: StructureAPI.ChatPrompt;

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
    | AddActionTrainingDatumRequest.InvalidAction
    | AddActionTrainingDatumRequest.Exit;

  job_id?: string | null;
}

export namespace AddActionTrainingDatumRequest {
  export interface Input {
    all_steps: Array<Input.AllStep>;

    /**
     * A dataset is where you put multiple referential schemas.
     *
     * A dataset is a complete namespace where all references between schemas are held
     * within the dataset.
     */
    descriptor: SharedAPI.DatasetDescriptor;

    extraction_criteria: Array<StructureAPI.SaveRequirement>;

    previous_actions: Array<Input.SelectedStep | Input.SearchStep | Input.InvalidAction | Input.Exit>;

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a DB
     */
    seeded_kg: SharedAPI.KnowledgeGraph;
  }

  export namespace Input {
    export interface AllStep {
      id: string;

      action_name?: string;

      metadata?: { [key: string]: string };
    }

    export interface SelectedStep {
      SelectedStep: SelectedStep.SelectedStep;
    }

    export namespace SelectedStep {
      export interface SelectedStep {
        info: SelectedStep.Info;

        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;

        step_id: string;
      }

      export namespace SelectedStep {
        export interface Info {
          id: string;

          action_name?: string;

          metadata?: { [key: string]: string };
        }
      }
    }

    export interface SearchStep {
      SearchStep: SearchStep.SearchStep;
    }

    export namespace SearchStep {
      export interface SearchStep {
        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;

        search_query: string;
      }
    }

    export interface InvalidAction {
      InvalidAction: InvalidAction.InvalidAction;
    }

    export namespace InvalidAction {
      export interface InvalidAction {
        error: string;

        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;
      }
    }

    export interface Exit {
      Exit: Exit.Exit;
    }

    export namespace Exit {
      export interface Exit {
        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;
      }
    }
  }

  export interface SelectedStep {
    SelectedStep: SelectedStep.SelectedStep;
  }

  export namespace SelectedStep {
    export interface SelectedStep {
      info: SelectedStep.Info;

      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;

      step_id: string;
    }

    export namespace SelectedStep {
      export interface Info {
        id: string;

        action_name?: string;

        metadata?: { [key: string]: string };
      }
    }
  }

  export interface SearchStep {
    SearchStep: SearchStep.SearchStep;
  }

  export namespace SearchStep {
    export interface SearchStep {
      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;

      search_query: string;
    }
  }

  export interface InvalidAction {
    InvalidAction: InvalidAction.InvalidAction;
  }

  export namespace InvalidAction {
    export interface InvalidAction {
      error: string;

      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;
    }
  }

  export interface Exit {
    Exit: Exit.Exit;
  }

  export namespace Exit {
    export interface Exit {
      llm_input: StructureAPI.ChatPrompt;

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

export interface GetBatchedActionTrainingDataRequest {
  job_ids: Array<string>;
}

export interface LabelActionTrainingDatumRequest {
  id: string;

  label: string;

  output:
    | LabelActionTrainingDatumRequest.SelectedStep
    | LabelActionTrainingDatumRequest.SearchStep
    | LabelActionTrainingDatumRequest.InvalidAction
    | LabelActionTrainingDatumRequest.Exit;
}

export namespace LabelActionTrainingDatumRequest {
  export interface SelectedStep {
    SelectedStep: SelectedStep.SelectedStep;
  }

  export namespace SelectedStep {
    export interface SelectedStep {
      info: SelectedStep.Info;

      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;

      step_id: string;
    }

    export namespace SelectedStep {
      export interface Info {
        id: string;

        action_name?: string;

        metadata?: { [key: string]: string };
      }
    }
  }

  export interface SearchStep {
    SearchStep: SearchStep.SearchStep;
  }

  export namespace SearchStep {
    export interface SearchStep {
      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;

      search_query: string;
    }
  }

  export interface InvalidAction {
    InvalidAction: InvalidAction.InvalidAction;
  }

  export namespace InvalidAction {
    export interface InvalidAction {
      error: string;

      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;
    }
  }

  export interface Exit {
    Exit: Exit.Exit;
  }

  export namespace Exit {
    export interface Exit {
      llm_input: StructureAPI.ChatPrompt;

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
    | NextActionAddTrainingDatumParams.InvalidAction
    | NextActionAddTrainingDatumParams.Exit;

  job_id?: string | null;
}

export namespace NextActionAddTrainingDatumParams {
  export interface Input {
    all_steps: Array<Input.AllStep>;

    /**
     * A dataset is where you put multiple referential schemas.
     *
     * A dataset is a complete namespace where all references between schemas are held
     * within the dataset.
     */
    descriptor: SharedAPI.DatasetDescriptor;

    extraction_criteria: Array<StructureAPI.SaveRequirement>;

    previous_actions: Array<Input.SelectedStep | Input.SearchStep | Input.InvalidAction | Input.Exit>;

    /**
     * Knowledge graph info structured to deserialize and display in the same format
     * that the LLM outputs. Also the first representation of an LLM output in the
     * pipeline from raw tool output to being merged into a DB
     */
    seeded_kg: SharedAPI.KnowledgeGraph;
  }

  export namespace Input {
    export interface AllStep {
      id: string;

      action_name?: string;

      metadata?: { [key: string]: string };
    }

    export interface SelectedStep {
      SelectedStep: SelectedStep.SelectedStep;
    }

    export namespace SelectedStep {
      export interface SelectedStep {
        info: SelectedStep.Info;

        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;

        step_id: string;
      }

      export namespace SelectedStep {
        export interface Info {
          id: string;

          action_name?: string;

          metadata?: { [key: string]: string };
        }
      }
    }

    export interface SearchStep {
      SearchStep: SearchStep.SearchStep;
    }

    export namespace SearchStep {
      export interface SearchStep {
        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;

        search_query: string;
      }
    }

    export interface InvalidAction {
      InvalidAction: InvalidAction.InvalidAction;
    }

    export namespace InvalidAction {
      export interface InvalidAction {
        error: string;

        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;
      }
    }

    export interface Exit {
      Exit: Exit.Exit;
    }

    export namespace Exit {
      export interface Exit {
        llm_input: StructureAPI.ChatPrompt;

        llm_output: string;
      }
    }
  }

  export interface SelectedStep {
    SelectedStep: SelectedStep.SelectedStep;
  }

  export namespace SelectedStep {
    export interface SelectedStep {
      info: SelectedStep.Info;

      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;

      step_id: string;
    }

    export namespace SelectedStep {
      export interface Info {
        id: string;

        action_name?: string;

        metadata?: { [key: string]: string };
      }
    }
  }

  export interface SearchStep {
    SearchStep: SearchStep.SearchStep;
  }

  export namespace SearchStep {
    export interface SearchStep {
      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;

      search_query: string;
    }
  }

  export interface InvalidAction {
    InvalidAction: InvalidAction.InvalidAction;
  }

  export namespace InvalidAction {
    export interface InvalidAction {
      error: string;

      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;
    }
  }

  export interface Exit {
    Exit: Exit.Exit;
  }

  export namespace Exit {
    export interface Exit {
      llm_input: StructureAPI.ChatPrompt;

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

export interface NextActionGetBatchedTrainingDataParams {
  job_ids: Array<string>;
}

export interface NextActionGetTrainingDataParams {
  from_date?: string | null;

  job_id?: string | null;

  limit?: number;

  offset?: number;

  status?: 'HumanLLMLabel' | 'LLMOutput' | 'Pending' | 'Reviewed' | 'Verified' | 'Others' | null;

  to_date?: string | null;
}

export interface NextActionGetTrainingDatumParams {
  /**
   * ID of the training datum to get
   */
  id: string;
}

export interface NextActionLabelTrainingDatumParams {
  id: string;

  label: string;

  output:
    | NextActionLabelTrainingDatumParams.SelectedStep
    | NextActionLabelTrainingDatumParams.SearchStep
    | NextActionLabelTrainingDatumParams.InvalidAction
    | NextActionLabelTrainingDatumParams.Exit;
}

export namespace NextActionLabelTrainingDatumParams {
  export interface SelectedStep {
    SelectedStep: SelectedStep.SelectedStep;
  }

  export namespace SelectedStep {
    export interface SelectedStep {
      info: SelectedStep.Info;

      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;

      step_id: string;
    }

    export namespace SelectedStep {
      export interface Info {
        id: string;

        action_name?: string;

        metadata?: { [key: string]: string };
      }
    }
  }

  export interface SearchStep {
    SearchStep: SearchStep.SearchStep;
  }

  export namespace SearchStep {
    export interface SearchStep {
      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;

      search_query: string;
    }
  }

  export interface InvalidAction {
    InvalidAction: InvalidAction.InvalidAction;
  }

  export namespace InvalidAction {
    export interface InvalidAction {
      error: string;

      llm_input: StructureAPI.ChatPrompt;

      llm_output: string;
    }
  }

  export interface Exit {
    Exit: Exit.Exit;
  }

  export namespace Exit {
    export interface Exit {
      llm_input: StructureAPI.ChatPrompt;

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
    type GetBatchedActionTrainingDataRequest as GetBatchedActionTrainingDataRequest,
    type LabelActionTrainingDatumRequest as LabelActionTrainingDatumRequest,
    type NextActionAddTrainingDatumParams as NextActionAddTrainingDatumParams,
    type NextActionDeleteTrainingDataParams as NextActionDeleteTrainingDataParams,
    type NextActionGetBatchedTrainingDataParams as NextActionGetBatchedTrainingDataParams,
    type NextActionGetTrainingDataParams as NextActionGetTrainingDataParams,
    type NextActionGetTrainingDatumParams as NextActionGetTrainingDatumParams,
    type NextActionLabelTrainingDatumParams as NextActionLabelTrainingDatumParams,
  };
}
