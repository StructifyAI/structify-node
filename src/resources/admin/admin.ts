// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HumanLlmAPI from './human-llm';
import { HumanLlm } from './human-llm';
import * as NextActionAPI from './next-action';
import {
  ActionTrainingDataEntry,
  NextAction,
  NextActionAddTrainingDatumParams,
  NextActionDeleteTrainingDataParams,
  NextActionDeleteTrainingDataResponse,
  NextActionGetTrainingDataParams,
  NextActionGetTrainingDataResponse,
  NextActionLabelTrainingDatumParams,
} from './next-action';
import * as TrainingDatasetsAPI from './training-datasets';
import { DatumStatus, LabelingStats, TrainingDatasets } from './training-datasets';
import * as UsersAPI from './users';
import {
  User,
  UserCreateParams,
  UserGetCreditsParams,
  UserGetCreditsResponse,
  UserGetStatsParams,
  UserGetStatsResponse,
  UserListResponse,
  UserSetCreditsParams,
  UserSetCreditsResponse,
  UserUpdateParams,
  Users,
} from './users';

export class Admin extends APIResource {
  humanLlm: HumanLlmAPI.HumanLlm = new HumanLlmAPI.HumanLlm(this._client);
  nextAction: NextActionAPI.NextAction = new NextActionAPI.NextAction(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  trainingDatasets: TrainingDatasetsAPI.TrainingDatasets = new TrainingDatasetsAPI.TrainingDatasets(
    this._client,
  );
}

Admin.HumanLlm = HumanLlm;
Admin.NextAction = NextAction;
Admin.Users = Users;
Admin.TrainingDatasets = TrainingDatasets;

export declare namespace Admin {
  export { HumanLlm as HumanLlm };

  export {
    NextAction as NextAction,
    type ActionTrainingDataEntry as ActionTrainingDataEntry,
    type NextActionDeleteTrainingDataResponse as NextActionDeleteTrainingDataResponse,
    type NextActionGetTrainingDataResponse as NextActionGetTrainingDataResponse,
    type NextActionAddTrainingDatumParams as NextActionAddTrainingDatumParams,
    type NextActionDeleteTrainingDataParams as NextActionDeleteTrainingDataParams,
    type NextActionGetTrainingDataParams as NextActionGetTrainingDataParams,
    type NextActionLabelTrainingDatumParams as NextActionLabelTrainingDatumParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserGetCreditsResponse as UserGetCreditsResponse,
    type UserGetStatsResponse as UserGetStatsResponse,
    type UserSetCreditsResponse as UserSetCreditsResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserGetCreditsParams as UserGetCreditsParams,
    type UserGetStatsParams as UserGetStatsParams,
    type UserSetCreditsParams as UserSetCreditsParams,
  };

  export {
    TrainingDatasets as TrainingDatasets,
    type DatumStatus as DatumStatus,
    type LabelingStats as LabelingStats,
  };
}
