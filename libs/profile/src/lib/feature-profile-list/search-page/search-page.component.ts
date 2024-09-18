import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from '../../ui/profile-card/profile-card.component';
import { ProfileFiltersComponent } from '../profile-filters/profile-filters.component';
import { AsyncPipe } from '@angular/common';
import {ProfileService} from "@tt/profile";

@Component({
  selector: 'app-search-page',
  standalone: true,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  imports: [ProfileCardComponent, ProfileFiltersComponent, AsyncPipe],
})
export class SearchPageComponent {
  profileService = inject(ProfileService);
  profiles = this.profileService.filteredProfiles;

  constructor() {}
}
