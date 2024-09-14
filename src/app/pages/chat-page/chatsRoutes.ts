import {Route} from "@angular/router";
import {ChatPageComponent} from "./chat-page.component";
import {ChatWorkspaceComponent} from "./chat-workspace/chat-workspace.component";

export const chatsRoutes: Route[] = [
  {
    path: '',
    component: ChatPageComponent,
    children: [
      {
        path: ':id',
        component: ChatWorkspaceComponent
      }
    ]
  }
]
