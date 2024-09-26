import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

enum ReceiverType {
  PERSON = 'PERSON',
  LEGAL = 'LEGAL',
}

@Component({
  selector: "tt-forms-experimental",
  templateUrl: "./forms-experimental.component.html",
  styleUrl: "./forms-experimental.component.scss",
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})

export class FormsExperimentalComponent {

  ReceiverType = ReceiverType

  form = new FormGroup({
    type: new FormControl<ReceiverType>(ReceiverType.PERSON),
    name: new FormControl<string>(""),
    lastName: new FormControl<string>(""),
    inn: new FormControl<string>(""),
    address: new FormGroup({
      city: new FormControl<string>(""),
      street: new FormControl<string>(""),
      building: new FormControl<number | null>(null),
      apartment: new FormControl<number | null>(null),
    })
  })

  constructor() {
  this.form.controls.type.valueChanges
    .pipe(takeUntilDestroyed())
    .subscribe(val => {
      this.form.controls.inn.clearValidators();

      if (val === ReceiverType.LEGAL) {
        this.form.controls.inn.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
      }
    })

    const formPatch = {
      name: 'Alesha',
      lastName: 'Popovich'
    }

    // this.form.patchValue(formPatch)

    this.form.setValue({
      type: ReceiverType.PERSON,
      name: 'Alex',
      lastName: 'Popovich',
      inn: '1000000020002',
      address: {
        city: 'Minsk',
        street: 'Rok',
        building: 42,
        apartment: 69
      }
    })
  }

  onSubmit(event: SubmitEvent) {
  }
}
