export interface UserEssentials {
  readonly id: string;
  readonly name: string;
  password: string;
}

export interface UserOptionals {
  readonly isActive: boolean;
}
