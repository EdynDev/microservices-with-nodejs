import { err, ok } from "neverthrow";

import db from "../../../bootstrap/mysql";

import { User } from "../domain/models/user.model";
import {
  UserRepository,
  UserResult,
  UserListResult,
} from "../domain/repositories/user.repository";
import { UserDto } from "./dtos/user-get.dto";

import { UserEntity } from "./entities/user.entity";
import { UserDatabaseException } from "./exceptions/user-database.exception";
import { UserSaveDto } from "./dtos/user-save.dto";

export class UserInfrastructure implements UserRepository {
  async save(user: User): Promise<UserResult> {
    const repository = db.getDataSource().getRepository(UserEntity);

    try {
      await repository.save(UserSaveDto.fromDomainToData(user));
      return ok(user);
    } catch (error) {
      return err(new UserDatabaseException(error.message));
    }
  }
  async getAll(): Promise<UserListResult> {
    const repository = db.getDataSource().getRepository(UserEntity);

    try {
      const users = await repository.find({
        where: { isActive: true },
      });
      return ok((await UserDto.fromDataToDomain(users)) as User[]);
    } catch (error) {
      return err(new UserDatabaseException(error.message));
    }
  }
}
