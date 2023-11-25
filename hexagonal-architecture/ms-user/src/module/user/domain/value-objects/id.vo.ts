import { err, ok, Result } from "neverthrow";
import { validate } from "uuid";
import { IdException } from "../exceptions/id.exception";

export type IdVOResult = Result<IdVO, IdException>;

export class IdVO {
  private constructor(private readonly _id: string) {}

  public static create(_id: string): IdVOResult {
    if (validate(_id)) {
      return ok(new IdVO(_id));
    }

    return err(new IdException());
  }

  public getvalue(): string {
    return this._id;
  }
}
