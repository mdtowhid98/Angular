import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';
import { userModel } from '../model/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  regForm!:FormGroup;

  constructor(private authService:AuthserviceService,
    private router:Router,
    private formBuilder:FormBuilder
  ){
    this.regForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['',Validators.required]

      // name:['', Validators.required],
      // email:['', [Validators.required, Validators.email]],
      // password:['',[Validators.required, Validators.min(6), Validators.max(20)]]

    })

  }

  onSubmit(): void {
    if (this.regForm.valid) {
      const user: userModel = this.regForm.value;
      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/']); // Navigate to a protected route after registration
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    }
    else{
      alert("Complte mandatory Field");
    }
  }

}
