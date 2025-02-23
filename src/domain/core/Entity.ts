export abstract class Entity<T> {
  public readonly id: string;

  constructor(props: T, id?: string) {
    this.id = id || crypto.randomUUID();
    Object.assign(this, props);
  }

  equals(entity: Entity<T>): boolean {
    return this.id === entity.id;
  }
}
