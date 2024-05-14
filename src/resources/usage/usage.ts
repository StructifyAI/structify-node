// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GetJobInfoAPI from './get-job-info';

export class Usage extends APIResource {
  getJobInfo: GetJobInfoAPI.GetJobInfo = new GetJobInfoAPI.GetJobInfo(this._client);
}

export namespace Usage {
  export import GetJobInfo = GetJobInfoAPI.GetJobInfo;
  export import GetJobInfoCreateResponse = GetJobInfoAPI.GetJobInfoCreateResponse;
  export import GetJobInfoCreateParams = GetJobInfoAPI.GetJobInfoCreateParams;
}
