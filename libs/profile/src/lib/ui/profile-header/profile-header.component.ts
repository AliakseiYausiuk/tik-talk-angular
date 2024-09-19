import { Component, input } from '@angular/core';
import {AvatarCircleComponent, ImgUrlPipe} from '@tt/common-ui';
import {Profile} from '@tt/interfaces/profile';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [ImgUrlPipe, AvatarCircleComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  profile = input<Profile>();
}
