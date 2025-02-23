export abstract class Entity<T> {
  public readonly id: string;
  protected domainEvents: any[] = [];

  constructor(props: T, id?: string) {
    this.id = id || crypto.randomUUID();
    Object.assign(this, props);
  }

  equals(entity: Entity<T>): boolean {
    return this.id === entity.id;
  }

  private deleted: boolean = false;

  delete(): void {
    this.deleted = true;
  }

  isDeleted(): boolean {
    return this.deleted;
  }

  addDomainEvent(event: any): void {
    this.domainEvents.push(event);
  }

  getDomainEvents(): any[] {
    return this.domainEvents;
  }

  clearEvents(): void {
    this.domainEvents = [];
  }
}
