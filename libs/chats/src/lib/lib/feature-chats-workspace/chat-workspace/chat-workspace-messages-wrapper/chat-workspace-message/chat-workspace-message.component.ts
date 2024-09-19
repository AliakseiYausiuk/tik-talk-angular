import { DatePipe } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';
import {Message} from '../../../../data';
import {AvatarCircleComponent} from '@tt/common-ui';

@Component({
  selector: 'app-chat-workspace-message',
  standalone: true,
  imports: [AvatarCircleComponent, DatePipe],
  templateUrl: './chat-workspace-message.component.html',
  styleUrl: './chat-workspace-message.component.scss',
})
export class ChatWorkspaceMessageComponent {
  message = input.required<Message>();

  @HostBinding('class.is-mine')
  get isMine() {
    return this.message().isMine;
  }
}
