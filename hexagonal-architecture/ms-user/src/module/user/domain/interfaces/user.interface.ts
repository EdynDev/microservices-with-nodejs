export interface UserEssentials {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  password: string;
}

export interface UserOptionals {
  readonly isActive: boolean;
}
