import { Routes } from '@angular/router';
import {canActivateAuth, LoginPageComponent} from "@tt/auth";
import {ProfilePageComponent, SearchPageComponent, SettingsPageComponent} from "@tt/profile";
import {chatsRoutes} from "../../../../libs/chats/src/lib/feature-chats-workspace/chat-page/chatsRoutes";
import {LayoutComponent} from "@tt/layout";



export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile/me',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: SearchPageComponent,
      },
      {
        path: 'profile/:id',
        component: ProfilePageComponent,
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
      },
      {
        path: 'chats',
        loadChildren: () => chatsRoutes,
      },
    ],
    canActivate: [canActivateAuth],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
