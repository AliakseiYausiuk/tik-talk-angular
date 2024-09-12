import {Component, EventEmitter, HostBinding, inject, input, Output, Renderer2} from '@angular/core';
import {AvatarCircleComponent} from "../../../common-ui/avatar-circle/avatar-circle.component";
import {ProfileService} from "../../../data/services/profile.service";
import {NgIf} from "@angular/common";
import {SvgComponent} from "../../../common-ui/svg/svg.component";
import {PostService} from "../../../data/services/post.service";
import {FormsModule} from "@angular/forms";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-post-input',
  standalone: true,
  imports: [
    AvatarCircleComponent,
    NgIf,
    SvgComponent,
    FormsModule
  ],
  templateUrl: './post-input.component.html',
  styleUrl: './post-input.component.scss'
})
export class PostInputComponent {
  r2 = inject(Renderer2)
  postService = inject(PostService);

  isCommentInput = input<boolean>(false);
  postId = input<number>(0)
  profile = inject(ProfileService).me;

  @Output() created = new EventEmitter();

  @HostBinding('class.dashed')
  get isDashed() {
    return this.isCommentInput()
  }

  postText = '';

  onTextAreaInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement

    this.r2.setStyle(textarea, 'height', 'auto');
    this.r2.setStyle(textarea, 'height', textarea.scrollHeight + 'px');
  }

  onCreatePost() {
    if (!this.postText) return;

    if (this.isCommentInput()) {
      firstValueFrom(this.postService.createComment({
        text: this.postText,
        authorId: this.profile()!.id,
        postId: this.postId()
      })).then(() => {
        this.postText = ''
        this.created.emit()
      })
      return;
    }

    firstValueFrom(this.postService.createPost({
      title: 'Nice post',
      content: this.postText,
      authorId: this.profile()!.id
    })).then(() => {
      this.postText = ''
    })
  }
}
