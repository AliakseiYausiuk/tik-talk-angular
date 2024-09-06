import { Profile } from './../../data/interfaces/profile.interface';
import { Component, Input, input } from '@angular/core';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  // profile = input<Profile | undefined>();

  @Input() profile!: Profile;
}
