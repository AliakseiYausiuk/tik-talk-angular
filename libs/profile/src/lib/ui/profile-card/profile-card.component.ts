import { Component, Input } from '@angular/core';
import {ImgUrlPipe} from "@tt/common-ui";
import {Profile} from "@tt/profile";


@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
  imports: [ImgUrlPipe],
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
