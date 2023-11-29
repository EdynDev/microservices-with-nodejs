import { User } from "../../domain/models/user.model";
import { UserEntity } from "../entities/user.entity";

export class UserSaveDto {
  static fromDomainToData(user: User): UserEntity {
    const properties: any = user.properties();

    const entity = new UserEntity();
    entity.id = properties.id;
    entity.name = properties.name;
    entity.email = properties.email;
    entity.password = properties.password;
    entity.isActive = properties.isActive;
    return entity;
  }
}
