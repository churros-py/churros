import { DomainEvent } from "./DomainEvent";

type EventHandler = (event: DomainEvent) => void;

export class EventDispatcher {
  private static handlers: Map<string, EventHandler[]> = new Map();

  static register(
    eventType: string,
    handler: EventHandler
  ) {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)?.push(handler);
  }

  static dispatch(event: DomainEvent) {
    const eventType = event.constructor.name;
    this.handlers.get(eventType)?.forEach((handler) => handler(event));
  }
}
