import { AppoinmentEssentials } from "../interfaces/appointment.interface";

export type AppoinmentProps = AppoinmentEssentials;

export class Appoinment {
  private readonly name: string;
  private readonly lastname: string;
  private readonly email: string;
  private readonly date: string;
  private readonly medicId: number;
  private readonly specialtyId: number;
  private readonly centerId: number;
  private readonly isoCountryCode: "CO" | "PE" | "MX";

  constructor(props: AppoinmentProps) {
    Object.assign(this, props);
  }

  properties(): AppoinmentProps {
    return {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      date: this.date,
      medicId: this.medicId,
      specialtyId: this.specialtyId,
      centerId: this.centerId,
      isoCountryCode: this.isoCountryCode,
    };
  }
}
