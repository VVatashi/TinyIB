import { Event } from '../Event';

export abstract class Component {
  abstract dispatchEvent(event: Event, data: any): void;
}
