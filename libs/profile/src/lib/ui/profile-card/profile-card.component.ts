import { Component, Input } from '@angular/core';
import {ImgUrlPipe} from '@tt/common-ui';
import {Profile} from '@tt/interfaces/profile';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [ImgUrlPipe],

  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
