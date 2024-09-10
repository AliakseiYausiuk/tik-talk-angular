import {Component, inject} from '@angular/core';
import {AvatarUploadComponent} from "../../settings-page/avatar-upload/avatar-upload.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProfileService} from "../../../data/services/profile.service";
import {debounceTime, startWith, switchMap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-profile-filters',
  standalone: true,
  imports: [
    AvatarUploadComponent,
    ReactiveFormsModule
  ],
  templateUrl: './profile-filters.component.html',
  styleUrl: './profile-filters.component.scss'
})
export class ProfileFiltersComponent {
  fb = inject(FormBuilder)
  profileService = inject(ProfileService);

  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: [''],
  })

  constructor() {
    this.searchForm.valueChanges
      .pipe(
        startWith({}),
        debounceTime(300),
        switchMap(formValue => {
          return this.profileService.filterProfiles(formValue)
        }),
        takeUntilDestroyed()
      )
      .subscribe()
  }
}
