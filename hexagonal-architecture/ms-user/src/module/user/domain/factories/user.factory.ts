import { User, UserProps } from "../models/user.model";
import { IdVO } from "../value-objects/id.vo";
import { BCrypt } from "../services/bcrypt";

export class UserFactory {
  private constructor() {}

  static async create(props: UserProps): Promise<User> {
    const idResult = IdVO.create(props.id);
    if (idResult.isErr()) throw idResult.error;

    props.password = await BCrypt.hash(props.password);

    return new User(props);
  }
}
