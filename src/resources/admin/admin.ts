// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as UsersAPI from './users';

export class Admin extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export namespace Admin {
  export import Users = UsersAPI.Users;
  export import User = UsersAPI.User;
  export import UserListResponse = UsersAPI.UserListResponse;
}
