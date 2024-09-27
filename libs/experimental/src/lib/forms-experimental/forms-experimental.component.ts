import {Component, inject} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormArray, FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Feature, MockService} from "./mock.service";

enum ReceiverType {
  PERSON = 'PERSON',
  LEGAL = 'LEGAL',
}

interface Address {
  city?: string;
  street?: string;
  building?: number | null;
  apartment?: number | null;
}

function getAddressForm(initValue: Address = {}) {
  return new FormGroup({
    city: new FormControl<string>(initValue.city ?? ''),
    street: new FormControl<string>(initValue.street ?? ''),
    building: new FormControl<number | null>(initValue.building ?? null),
    apartment: new FormControl<number | null>(initValue.apartment ?? null),
  })
}

@Component({
  selector: "tt-forms-experimental",
  templateUrl: "./forms-experimental.component.html",
  styleUrl: "./forms-experimental.component.scss",
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})

export class FormsExperimentalComponent {
  mockService = inject(MockService)
  features: Feature[] = []
  ReceiverType = ReceiverType

  form = new FormGroup({
    type: new FormControl<ReceiverType>(ReceiverType.PERSON),
    name: new FormControl<string>(""),
    lastName: new FormControl<string>(""),
    inn: new FormControl<string>(""),
    addresses: new FormArray([getAddressForm()]),
    feature: new FormRecord({})
  })

  constructor() {
    this.mockService.getAddresses()
      .pipe(takeUntilDestroyed())
      .subscribe((address: any) => {
        // while (this.form.controls.addresses.controls.length > 0) {
        //   this.form.controls.addresses.removeAt(0)
        // }
        // два варианта удаления формы через while и спомощью angular
        this.form.controls.addresses.clear()

        for (const addr of address) {
          this.form.controls.addresses.push(getAddressForm(addr))
        }
      })

    this.mockService.getFeatures()
      .pipe(takeUntilDestroyed())
      .subscribe(features => {
        this.features = features

        for (const feature of features) {
          this.form.controls.feature.addControl(feature.code, new FormControl(feature.value))
        }
      })

    this.form.controls.type.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(val => {
        this.form.controls.inn.clearValidators();

        if (val === ReceiverType.LEGAL) {
          this.form.controls.inn.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        }
      })

    // this.form.setValue({
    //   type: ReceiverType.PERSON,
    //   name: 'Alex',
    //   lastName: 'Popovich',
    //   inn: '1000000020002',
    //   addresses: {
    //     city: 'Minsk',
    //     street: 'Rok',
    //     building: 49,
    //     apartment: 2
    //   }
    // })
  }


  onSubmit(event: SubmitEvent) {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
  }

  addAddress() {
    // два варианта добавления формы
    // this.form.controls.addresses.push(getAddressForm());
    this.form.controls.addresses.insert(0, getAddressForm());
  }

  deleteAddress(index: number) {
    this.form.controls.addresses.removeAt(index, {emitEvent: false});
  }

  sort = () => 0
}
