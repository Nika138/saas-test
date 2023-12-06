import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aboutus-div',
  templateUrl: './aboutus-div.component.html',
  styleUrls: ['./aboutus-div.component.css'],
})
export class AboutusDivComponent {
  @Input() title: string = '';
  @Input() text: string = '';
}
