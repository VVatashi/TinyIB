export default interface IModule {
  onReady(): void;
  onPostInsert(post: Element): void;
}
