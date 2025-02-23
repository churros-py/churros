import { Entity } from "./Entity";

export abstract class AggregateRoot<T> extends Entity<T> {
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
