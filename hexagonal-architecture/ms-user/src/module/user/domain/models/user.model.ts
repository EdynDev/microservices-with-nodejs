import { UserEssentials, UserOptionals } from "../interfaces/user.interface";

export type UserProps = UserEssentials & Partial<UserOptionals>;

export class User {
  private readonly id: string;
  private name: string;
  private email: string;
  private isActive: boolean;
  private password: string;

  constructor(props: UserProps) {
    Object.assign(this, props);
    this.isActive = true;
  }

  properties(): UserProps {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      isActive: this.isActive,
    };
  }
}
