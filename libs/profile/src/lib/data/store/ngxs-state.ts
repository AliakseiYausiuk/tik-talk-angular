import {Profile} from "@tt/interfaces/profile";
import {inject, Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {FilterEvents} from "./ngxs-actions";
import {Observable, tap} from "rxjs";
import {ProfileService} from "@tt/profile";
import {Pageble} from "@tt/shared";

export interface ProfileStateModel {
  profile: Profile[];
  profileFilters: Record<string, any>
}

@State({
  name: 'profileState',
  defaults: {
    profile: [],
    profileFilters: {}
  }
})
@Injectable()
export class ProfileState {
  #profileService = inject(ProfileService);

  @Selector()
  static getProfiles(state: ProfileStateModel): Profile[] {
    return state.profile
  }

  @Action(FilterEvents)
  onFilterEvents(ctx: StateContext<ProfileStateModel>, {filters}: FilterEvents): Observable<Pageble<Profile>> {
    return this.#profileService.filterProfiles(filters).pipe(
      tap(res => {
        ctx.patchState({
          profile: res.items
        });
      })
    )
  }
}
