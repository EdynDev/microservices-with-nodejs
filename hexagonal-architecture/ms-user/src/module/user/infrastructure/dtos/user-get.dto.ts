import { UserFactory } from "../../domain/factories/user.factory";
import { User } from "../../domain/models/user.model";
import { UserEntity } from "../entities/user.entity";

export class UserDto {
  static async fromDataToDomain(
    data: UserEntity | UserEntity[]
  ): Promise<User | User[]> {
    if (Array.isArray(data)) {
      for (const user of data) {
        return await UserDto.fromDataToDomain(user);
      }
    }

    const userInfo = data as UserEntity;

    const user = await UserFactory.create({
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
      password: userInfo.password,
      isActive: userInfo.isActive,
    });

    return user;
  }
}
