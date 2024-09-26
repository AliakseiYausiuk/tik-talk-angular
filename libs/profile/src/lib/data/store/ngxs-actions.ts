export class FilterEvents {
  static type = '[Profile] filter events';

  constructor(public filters: Record<string, any>) {

  }

}
