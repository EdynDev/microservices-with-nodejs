import { User, UserProps } from "../models/user.model";
import { IdVO } from "../value-objects/id.vo";

export class UserFactory {
  private constructor() {}

  static async create(props: UserProps): Promise<User> {
    const idResult = IdVO.create(props.id);
    if (idResult.isErr()) throw idResult.error;

    return new User(props);
  }
}
