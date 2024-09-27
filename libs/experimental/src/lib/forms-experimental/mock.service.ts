import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

export interface Feature {
  code: string,
  label: string,
  value: boolean
}


@Injectable({
  providedIn: 'root',
})
export class MockService {

  getAddresses() {
    return of([
      {
        city: 'Minsk',
        street: 'Rok',
        building: 49,
        apartment: 23,
      },
      {
        city: 'Russia',
        street: 'Rok',
        building: 494,
        apartment: 233,
      }
    ])
  }

  getFeatures(): Observable<Feature[]> {
    return of([
      {
        code: 'lift',
        label: 'Подъём',
        value: true,
      },
      {
        code: 'strong-package',
        label: 'Усиленная упаковка',
        value: true,
      },
      {
        code: 'fast',
        label: 'Ускоренная доставка',
        value: false,
      },
    ])
  }
}
