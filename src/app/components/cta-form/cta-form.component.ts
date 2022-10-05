import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cta-form',
  templateUrl: './cta-form.component.html',
  styleUrls: ['./cta-form.component.scss'],
})
export class CtaFormComponent implements OnInit {
  ctaForm!: FormGroup;

  constructor(private fbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ctaForm = this.fbuilder.group(
      {
        fullName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }

  onSubmit(): void {
    if (this.ctaForm.valid) {
    } else {
      this.ctaForm.reset();
    }
  }

  get fullName() {
    return this.ctaForm.get('fullName');
  }

  get email() {
    return this.ctaForm.get('email');
  }

  get phoneNumber() {
    return this.ctaForm.get('phoneNumber');
  }
}
