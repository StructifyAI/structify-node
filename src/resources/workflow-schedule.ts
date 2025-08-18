// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SessionsAPI from './sessions';

export class WorkflowSchedule extends APIResource {
  create(
    chatSessionId: string,
    body: WorkflowScheduleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowScheduleInfo> {
    return this._client.post(`/workflow-schedule/${chatSessionId}`, { body, ...options });
  }

  update(
    scheduleId: string,
    body: WorkflowScheduleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkflowScheduleInfo> {
    return this._client.put(`/workflow-schedule/${scheduleId}`, { body, ...options });
  }

  delete(scheduleId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/workflow-schedule/${scheduleId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  get(chatSessionId: string, options?: Core.RequestOptions): Core.APIPromise<WorkflowScheduleGetResponse> {
    return this._client.get(`/workflow-schedule/${chatSessionId}`, options);
  }

  getAll(options?: Core.RequestOptions): Core.APIPromise<WorkflowScheduleGetAllResponse> {
    return this._client.get('/workflow-schedule', options);
  }

  getSessions(
    scheduleId: string,
    body: WorkflowScheduleGetSessionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GetWorkflowScheduleSessionsResponse> {
    return this._client.post(`/workflow-schedule/${scheduleId}/sessions`, { body, ...options });
  }
}

export interface CreateWorkflowScheduleRequest {
  git_commit_hash: string;

  name: string;

  cron_schedule?: string | null;
}

export interface GetWorkflowScheduleSessionsRequest {
  limit?: number;

  offset?: number;
}

export interface GetWorkflowScheduleSessionsResponse {
  sessions: Array<SessionsAPI.WorkflowSession>;

  total_count: number;
}

export interface UpdateWorkflowScheduleRequest {
  cron_schedule?: string | null;

  git_commit_hash?: string | null;

  name?: string | null;
}

export interface WorkflowScheduleInfo {
  id: string;

  chat_session_id: string;

  git_commit_hash: string;

  name: string;

  cron_schedule?: string | null;

  next_run_time?: string | null;
}

export type WorkflowScheduleGetResponse = Array<WorkflowScheduleInfo>;

export type WorkflowScheduleGetAllResponse = Array<WorkflowScheduleInfo>;

export interface WorkflowScheduleCreateParams {
  git_commit_hash: string;

  name: string;

  cron_schedule?: string | null;
}

export interface WorkflowScheduleUpdateParams {
  cron_schedule?: string | null;

  git_commit_hash?: string | null;

  name?: string | null;
}

export interface WorkflowScheduleGetSessionsParams {
  limit?: number;

  offset?: number;
}

export declare namespace WorkflowSchedule {
  export {
    type CreateWorkflowScheduleRequest as CreateWorkflowScheduleRequest,
    type GetWorkflowScheduleSessionsRequest as GetWorkflowScheduleSessionsRequest,
    type GetWorkflowScheduleSessionsResponse as GetWorkflowScheduleSessionsResponse,
    type UpdateWorkflowScheduleRequest as UpdateWorkflowScheduleRequest,
    type WorkflowScheduleInfo as WorkflowScheduleInfo,
    type WorkflowScheduleGetResponse as WorkflowScheduleGetResponse,
    type WorkflowScheduleGetAllResponse as WorkflowScheduleGetAllResponse,
    type WorkflowScheduleCreateParams as WorkflowScheduleCreateParams,
    type WorkflowScheduleUpdateParams as WorkflowScheduleUpdateParams,
    type WorkflowScheduleGetSessionsParams as WorkflowScheduleGetSessionsParams,
  };
}
