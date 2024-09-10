import { Component, signal } from '@angular/core';
import { SvgComponent } from '../../../common-ui/svg/svg.component';
import { DndDirective } from '../../../common-ui/directives/dnd.directive';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-avatar-upload',
  standalone: true,
  imports: [SvgComponent, DndDirective, FormsModule],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss',
})
export class AvatarUploadComponent {
  preview = signal<string>('assets/svg/avatar-placeholder.svg');

  avatar: File | null = null;

  fileBrowserHandler(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];

    this.processFile(file);
  }

  onFileDropped(file: File) {
    this.processFile(file);
  }

  processFile(file: File | null | undefined) {
    if (!file || !file.type.match('image')) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      this.preview.set(event.target?.result?.toString() ?? '');
    };

    reader.readAsDataURL(file);
    this.avatar = file;
  }
}
