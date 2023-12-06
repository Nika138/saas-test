import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      tradingViewUsername: [
        '',
        [Validators.required, Validators.minLength(2), this.usernameValidator],
      ],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    }
  }

  usernameValidator(control: AbstractControl): ValidationErrors | null {
    const usernameRegex = /^[a-zA-Z0-9_\-]+$/;

    if (control.value && !usernameRegex.test(control.value)) {
      return { invalidUsername: true };
    }

    return null;
  }
}
