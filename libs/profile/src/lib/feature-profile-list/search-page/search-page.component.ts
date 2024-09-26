import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {ProfileCardComponent} from '../../ui';
import {ProfileFiltersComponent} from '../profile-filters/profile-filters.component';
import {selectFilteredProfiles} from '../../data';
import {Store} from "@ngxs/store";
import {ProfileState} from "../../data/store/ngxs-state";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent, ProfileFiltersComponent, AsyncPipe],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  store = inject(Store);
  profiles = this.store.selectSignal(ProfileState.getProfiles);

  constructor() {
  }
}
