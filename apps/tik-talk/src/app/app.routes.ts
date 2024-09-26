import { Routes } from '@angular/router';
import {canActivateAuth, LoginPageComponent} from '@tt/auth';
import {chatsRoutes} from '@tt/chats';
import {LayoutComponent} from '@tt/layout';
import {
  ProfilePageComponent,
  SearchPageComponent,
  SettingsPageComponent
} from '@tt/profile';
import {provideStates} from "@ngxs/store";
import {ProfileState} from "../../../../libs/profile/src/lib/data/store/ngxs-state";
import {
  FormsExperimentalComponent
} from "../../../../libs/experimental/src/lib/forms-experimental/forms-experimental.component";


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'profile/me', pathMatch: 'full' },
      { path: 'profile/:id', component: ProfilePageComponent },
      { path: 'settings', component: SettingsPageComponent },
      {
        path: 'search',
        component: SearchPageComponent,
        providers: [
          provideStates([ProfileState])
        ]
      },
      {
        path: 'chats',
        loadChildren: () => chatsRoutes,
      },
    ],
    canActivate: [canActivateAuth],
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'experimental', component: FormsExperimentalComponent
  }
];

