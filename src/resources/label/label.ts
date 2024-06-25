// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LlmAssistAPI from './llm-assist';
import * as RefreshAPI from './refresh';
import * as RunAsyncAPI from './run-async';
import * as SubmitAPI from './submit';
import * as UpdateAPI from './update';

export class Label extends APIResource {
  llmAssist: LlmAssistAPI.LlmAssist = new LlmAssistAPI.LlmAssist(this._client);
  refresh: RefreshAPI.Refresh = new RefreshAPI.Refresh(this._client);
  runAsync: RunAsyncAPI.RunAsync = new RunAsyncAPI.RunAsync(this._client);
  submit: SubmitAPI.Submit = new SubmitAPI.Submit(this._client);
  update: UpdateAPI.Update = new UpdateAPI.Update(this._client);
}

export namespace Label {
  export import LlmAssist = LlmAssistAPI.LlmAssist;
  export import ToolInput = LlmAssistAPI.ToolInput;
  export import LlmAssistRetrieveResponse = LlmAssistAPI.LlmAssistRetrieveResponse;
  export import Refresh = RefreshAPI.Refresh;
  export import RefreshResponse = RefreshAPI.RefreshResponse;
  export import RefreshRetrieveParams = RefreshAPI.RefreshRetrieveParams;
  export import RunAsync = RunAsyncAPI.RunAsync;
  export import RunAsyncCreateResponse = RunAsyncAPI.RunAsyncCreateResponse;
  export import RunAsyncCreateParams = RunAsyncAPI.RunAsyncCreateParams;
  export import Submit = SubmitAPI.Submit;
  export import SubmitCreateResponse = SubmitAPI.SubmitCreateResponse;
  export import SubmitCreateParams = SubmitAPI.SubmitCreateParams;
  export import Update = UpdateAPI.Update;
  export import UpdateCreateResponse = UpdateAPI.UpdateCreateResponse;
  export import UpdateCreateParams = UpdateAPI.UpdateCreateParams;
}
