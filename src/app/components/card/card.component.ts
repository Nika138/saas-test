import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() isClicked: boolean = false;
  @Input() title: string = '';
  @Input() text: string = '';

  toggle() {
    this.isClicked = !this.isClicked;
  }
}
