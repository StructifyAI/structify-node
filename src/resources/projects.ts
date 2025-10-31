// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ChatAPI from './chat';

export class Projects extends APIResource {
  update(
    teamId: string,
    projectId: string,
    body: ProjectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Project> {
    return this._client.patch(`/team/${teamId}/project/${projectId}`, { body, ...options });
  }

  delete(
    teamId: string,
    projectId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeleteProjectResponse> {
    return this._client.delete(`/team/${teamId}/project/${projectId}`, options);
  }

  get(teamId: string, projectId: string, options?: Core.RequestOptions): Core.APIPromise<Project> {
    return this._client.get(`/team/${teamId}/project/${projectId}`, options);
  }
}

export interface DeleteProjectResponse {
  success: boolean;
}

export interface Project {
  id: string;

  created_at: string;

  name: string;

  team_id: string;

  updated_at: string;

  visibility: ProjectVisibility;

  description?: string | null;
}

export interface ProjectCollaboratorInput {
  email: string;

  role: ChatAPI.ChatSessionRole;
}

export interface ProjectMember {
  created_at: string;

  email: string;

  role: ChatAPI.ChatSessionRole;

  updated_at: string;

  user_id: string;
}

export type ProjectVisibility = 'private' | 'shared_with_team';

export interface UpdateProjectRequest {
  collaborators?: Array<ProjectCollaboratorInput> | null;

  description?: string | null;

  name?: string | null;

  visibility?: ProjectVisibility | null;
}

export interface ProjectUpdateParams {
  collaborators?: Array<ProjectCollaboratorInput> | null;

  description?: string | null;

  name?: string | null;

  visibility?: ProjectVisibility | null;
}

export declare namespace Projects {
  export {
    type DeleteProjectResponse as DeleteProjectResponse,
    type Project as Project,
    type ProjectCollaboratorInput as ProjectCollaboratorInput,
    type ProjectMember as ProjectMember,
    type ProjectVisibility as ProjectVisibility,
    type UpdateProjectRequest as UpdateProjectRequest,
    type ProjectUpdateParams as ProjectUpdateParams,
  };
}
