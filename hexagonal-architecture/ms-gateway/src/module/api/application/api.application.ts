import { ApiRepository } from "../domain/repositories/api.repository";

export class ApiApplication {
  constructor(private readonly repository: ApiRepository) {}

  async endpointRequest(url: string, method: string, data: any) {
    return await this.repository.requestByType(url, method, data);
  }
}
