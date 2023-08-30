export interface Bootstrap {
  initialize(): Promise<void>;
  // initialize(): Promise<any>;
  // close(): void;
}
