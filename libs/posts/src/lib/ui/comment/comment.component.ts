import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import {PostComment} from "../../data";
import {AvatarCircleComponent} from "@tt/common-ui";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [AvatarCircleComponent, DatePipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  comment = input<PostComment>();
}
