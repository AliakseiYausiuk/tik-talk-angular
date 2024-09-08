import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[dnd]',
  standalone: true,
})
export class DndDirective {
  @Output() fileDropped = new EventEmitter<File>();

  @HostBinding('class.fileover')
  fileover = false;

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileover = true;
  }

  @HostListener('dragLeave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileover = false;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.fileover = false;
    this, this.fileDropped.emit(event.dataTransfer?.files[0]);
  }
}
