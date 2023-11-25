import { Result } from "neverthrow";
import { User } from "../models/user.model";

export type UserResult = Result<User, Error>;
export type UserListResult = Result<User[], Error>;

export interface UserRepository {
  save(user: User): Promise<UserResult>;
  getAll(): Promise<UserListResult>;
}
