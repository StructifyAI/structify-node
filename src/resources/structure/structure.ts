// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IsCompleteAPI from './is-complete';
import * as JobStatusAPI from './job-status';
import * as RunAPI from './run';
import * as RunAsyncAPI from './run-async';

export class Structure extends APIResource {
  isComplete: IsCompleteAPI.IsComplete = new IsCompleteAPI.IsComplete(this._client);
  jobStatus: JobStatusAPI.JobStatus = new JobStatusAPI.JobStatus(this._client);
  run: RunAPI.Run = new RunAPI.Run(this._client);
  runAsync: RunAsyncAPI.RunAsync = new RunAsyncAPI.RunAsync(this._client);
}

export namespace Structure {
  export import IsComplete = IsCompleteAPI.IsComplete;
  export import IsCompleteCreateParams = IsCompleteAPI.IsCompleteCreateParams;
  export import JobStatus = JobStatusAPI.JobStatus;
  export import JobStatusCreateResponse = JobStatusAPI.JobStatusCreateResponse;
  export import JobStatusCreateParams = JobStatusAPI.JobStatusCreateParams;
  export import Run = RunAPI.Run;
  export import RunCreateResponse = RunAPI.RunCreateResponse;
  export import RunCreateParams = RunAPI.RunCreateParams;
  export import RunAsync = RunAsyncAPI.RunAsync;
  export import RunAsyncCreateResponse = RunAsyncAPI.RunAsyncCreateResponse;
  export import RunAsyncCreateParams = RunAsyncAPI.RunAsyncCreateParams;
}
