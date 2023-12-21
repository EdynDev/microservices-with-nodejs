import { Appoinment, AppoinmentProps } from "../models/appointment.model";

export class AppoinmentFactory {
  private constructor() {}

  static async create(props: AppoinmentProps): Promise<Appoinment> {
    return new Appoinment(props);
  }
}
