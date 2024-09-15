import { Component, Input } from '@angular/core';
import {ImgUrlPipe} from "@tt/common-ui";
import {Profile} from "@tt/profile";


@Component({
  selector: 'app-subscriber-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './subscriber-card.component.html',
  styleUrl: './subscriber-card.component.scss',
})
export class SubscriberCardComponent {
  @Input() profile!: Profile;
}
