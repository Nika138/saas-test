import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disclaimer-div',
  templateUrl: './disclaimer-div.component.html',
  styleUrls: ['./disclaimer-div.component.css'],
})
export class DisclaimerDivComponent {
  @Input() title: string = '';
  @Input() text: string = '';
}
