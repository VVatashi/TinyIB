import ModuleManager from "../ModuleManager";

export default interface IModule {
  onReady(): void;
  onResize(): void;
  onPostInsert(post: Element): void;
  onEvent(event: string, data?: any): void;
}

export interface IModuleConstructor {
  new(manager: ModuleManager): IModule;
}
