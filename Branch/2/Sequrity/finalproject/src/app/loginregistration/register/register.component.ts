import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      cell: [''],
      address: [''],
      dob: [''],
      gender: [''],
      role:[''],
      image: ['']
    }
    ,{ validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const { name, email, password, cell, address, dob, gender, image, } = this.registerForm.value;

    this.authService.register({ name, email, password, cell, address, dob, gender, image, }).subscribe(
   {

    next: AuthResponse => {
      this.successMessage = 'Registration successful! Please check your email to activate your account.';
      this.router.navigate(['/login']);
    },
    error:error => {
      this.errorMessage = 'Registration failed. Please try again.';
    }

   }
    );
  }



}
