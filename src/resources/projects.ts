// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ChatAPI from './chat';

/**
 * Project management endpoints
 */
export class Projects extends APIResource {
  create(body: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<Project> {
    return this._client.post('/projects', { body, ...options });
  }

  update(
    projectId: string,
    body: ProjectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Project> {
    return this._client.patch(`/projects/${projectId}`, { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<ListProjectsResponse> {
    return this._client.get('/projects', options);
  }

  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<DeleteProjectResponse> {
    return this._client.delete(`/projects/${projectId}`, options);
  }

  get(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectWithMembers> {
    return this._client.get(`/projects/${projectId}`, options);
  }
}

export interface CreateProjectRequest {
  name: string;

  description?: string | null;
}

export interface DeleteProjectResponse {
  success: boolean;
}

export interface ListProjectsResponse {
  projects: Array<Project>;
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

export interface ProjectWithMembers extends Project {
  members: Array<ProjectMember>;
}

export interface UpdateProjectRequest {
  collaborators?: Array<ProjectCollaboratorInput> | null;

  description?: string | null;

  name?: string | null;

  visibility?: ProjectVisibility | null;
}

export interface ProjectCreateParams {
  name: string;

  description?: string | null;
}

export interface ProjectUpdateParams {
  collaborators?: Array<ProjectCollaboratorInput> | null;

  description?: string | null;

  name?: string | null;

  visibility?: ProjectVisibility | null;
}

export declare namespace Projects {
  export {
    type CreateProjectRequest as CreateProjectRequest,
    type DeleteProjectResponse as DeleteProjectResponse,
    type ListProjectsResponse as ListProjectsResponse,
    type Project as Project,
    type ProjectCollaboratorInput as ProjectCollaboratorInput,
    type ProjectMember as ProjectMember,
    type ProjectVisibility as ProjectVisibility,
    type ProjectWithMembers as ProjectWithMembers,
    type UpdateProjectRequest as UpdateProjectRequest,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };
}
