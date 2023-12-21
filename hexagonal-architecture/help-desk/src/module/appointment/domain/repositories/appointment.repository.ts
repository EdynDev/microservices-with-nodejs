export interface AppointmentRepository {
  receive(consumer: (message: any) => void): Promise<void>;
}
