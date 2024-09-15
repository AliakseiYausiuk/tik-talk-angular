import {Component, Input} from '@angular/core';
import {ImgUrlPipe} from "../../pipes";



@Component({
  selector: 'app-avatar-circle',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './avatar-circle.component.html',
  styleUrl: './avatar-circle.component.scss',
})
export class AvatarCircleComponent {
  @Input() avatarUrl!: string | null | undefined;
}
