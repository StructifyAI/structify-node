// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Projects extends APIResource {
  delete(
    teamId: string,
    projectId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeleteProjectResponse> {
    return this._client.delete(`/team/${teamId}/project/${projectId}`, options);
  }

  get(teamId: string, projectId: string, options?: Core.RequestOptions): Core.APIPromise<GetProjectResponse> {
    return this._client.get(`/team/${teamId}/project/${projectId}`, options);
  }
}

export interface DeleteProjectResponse {
  success: boolean;
}

export interface GetProjectResponse {
  project: Project;
}

export interface Project {
  id: string;

  created_at: string;

  name: string;

  team_id: string;

  updated_at: string;

  description?: string | null;
}

export declare namespace Projects {
  export {
    type DeleteProjectResponse as DeleteProjectResponse,
    type GetProjectResponse as GetProjectResponse,
    type Project as Project,
  };
}
