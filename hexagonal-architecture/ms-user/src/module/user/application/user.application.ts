import { UserRepository } from "../domain/repositories/user.repository";
import { User } from "../domain/models/user.model";

export class UserApplication {
  constructor(private readonly repository: UserRepository) {}

  async save(user: User) {
    return await this.repository.save(user);
  }

  async getAll() {
    return await this.repository.getAll();
  }
}
