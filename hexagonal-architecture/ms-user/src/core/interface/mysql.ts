export interface MySQLConfig {
  host: string;
  username: string;
  password: string;
  database: string;
  portt: number;
  entities: string[];
  synchronize: boolean;
  logging: boolean;
  poolSize: number;
  maxQueryExecutionTime: number;
}
