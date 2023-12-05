export interface AppoinmentEssentials {
  readonly name: string;
  readonly lastname: string;
  readonly email: string;
  readonly date: string;
  readonly medicId: number;
  readonly specialtyId: number;
  readonly centerId: number;
  readonly isoCountryCode: "CO" | "PE" | "MX";
}
