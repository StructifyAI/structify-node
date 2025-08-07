// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class WorkflowSchedule extends APIResource {}

export interface CreateWorkflowScheduleRequest {
  git_commit_hash: string;

  cron_schedule?: string | null;
}

export interface UpdateWorkflowScheduleRequest {
  cron_schedule?: string | null;

  git_commit_hash?: string | null;
}

export interface WorkflowScheduleInfo {
  id: string;

  git_commit_hash: string;

  cron_schedule?: string | null;

  next_run_time?: string | null;
}

export declare namespace WorkflowSchedule {
  export {
    type CreateWorkflowScheduleRequest as CreateWorkflowScheduleRequest,
    type UpdateWorkflowScheduleRequest as UpdateWorkflowScheduleRequest,
    type WorkflowScheduleInfo as WorkflowScheduleInfo,
  };
}
