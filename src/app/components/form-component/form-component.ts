import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.scss'
})
export class FormComponent implements OnInit {
  passwordMisMatch: boolean = false;
  private fb = inject(FormBuilder);
  myForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    subscribe: [false]
  });

  passwordVal$ = this.myForm.controls['password'].valueChanges;
  confirmPasswordVal$ = this.myForm.controls['confirmPassword'].valueChanges;

  ngOnInit() {
    this.myForm.controls['confirmPassword'].disable();
    this.passwordVal$.subscribe(value => {
      if (value !== '') {
        this.myForm.controls['confirmPassword'].setValidators([Validators.required]);
        this.myForm.controls['confirmPassword'].enable();
      }
    })

    combineLatest([this.passwordVal$, this.confirmPasswordVal$]).subscribe(([password, confirmPassword]) => {
      if (password && confirmPassword) {
        this.passwordMisMatch = password !== confirmPassword;
      } else {
        this.passwordMisMatch = false;
      }
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
