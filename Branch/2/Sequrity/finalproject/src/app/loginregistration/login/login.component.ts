import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.successMessage = 'Login successful!';
        this.errorMessage = null;
        
        // Reset the form and clear validation states
        this.loginForm.reset();
        this.loginForm.markAsPristine();
        this.loginForm.markAsUntouched();

        // Redirect to home or another route after login
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.successMessage = null;
      }
    });
  }
}