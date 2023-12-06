import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Output() scrollToSectionClicked = new EventEmitter<string>();

  scrollToSection(sectionId: string): void {
    this.scrollToSectionClicked.emit(sectionId);
  }
}
