import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChatsListComponent} from "../chats-list/chats-list.component";

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [RouterOutlet, ChatsListComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss',
})
export class ChatPageComponent {}
