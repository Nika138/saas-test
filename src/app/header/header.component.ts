import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isClicked: boolean = false;
  showSubMenuFlag = false;
  subMenuType!: 'info' | 'services';

  toggleMenu() {
    if (this.showSubMenuFlag) {
      this.hideSubMenu();
    }

    this.isClicked = !this.isClicked;
  }

  showSubMenu(type: 'info' | 'services') {
    this.showSubMenuFlag = true;
    this.subMenuType = type;
  }

  hideSubMenu() {
    this.showSubMenuFlag = false;
  }

  @Output() sectionClicked = new EventEmitter<string>();

  redirectToSection(sectionId: string): void {
    this.sectionClicked.emit(sectionId);
  }
}
