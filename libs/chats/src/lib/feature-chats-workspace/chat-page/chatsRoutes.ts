import { Route } from '@angular/router';
import {ChatPageComponent, ChatWorkspaceComponent} from "@tt/chats";


export const chatsRoutes: Route[] = [
  {
    path: '',
    component: ChatPageComponent,
    children: [
      {
        path: ':id',
        component: ChatWorkspaceComponent,
      },
    ],
  },
];
