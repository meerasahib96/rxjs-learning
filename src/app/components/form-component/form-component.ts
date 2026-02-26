import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.scss'
})
export class FormComponent implements OnInit {
  private fb = inject(FormBuilder);
  myForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    subscribe: [false]
  });

  ngOnInit() {
    this.myForm.controls['confirmPassword'].disable();
    this.myForm.controls['password'].valueChanges.subscribe(value => {
      if (value !== '') {
        this.myForm.controls['confirmPassword'].setValidators([Validators.required]);
        this.myForm.controls['confirmPassword'].enable();
      }
    })
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
