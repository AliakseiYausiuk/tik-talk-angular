import { Component, Input, input } from '@angular/core';
import {AvatarCircleComponent, ImgUrlPipe} from "@tt/common-ui";
import {Profile} from "@tt/profile";

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [ImgUrlPipe, AvatarCircleComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  @Input() profile!: Profile;
}
