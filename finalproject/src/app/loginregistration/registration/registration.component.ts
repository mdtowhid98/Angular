import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserModule } from '../../module/user/user.module';
import { faEnvelope, faImage, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{

  regForm!:FormGroup;
  userRole: string | null = '';
  currentUser: UserModule | null = null;

  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faImage = faImage;
  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder
  ){
    this.regForm = this.formBuilder.group({
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['',Validators.required],
      photo:['',Validators.required],
      role:['',Validators.required],

     

      // name:['', Validators.required],
      // email:['', [Validators.required, Validators.email]],
      // password:['',[Validators.required, Validators.min(6), Validators.max(20)]]

    })

  }
  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.userRole = user?.role || null;
    });
  }

  onSubmit(): void {
    if (this.regForm.valid) {
      const user: UserModule = this.regForm.value;
  
      // Add logic to handle role selection issue
      if (user.role === 'Admin') {
        user.role = 'Admin';  // Explicitly set the role if it's Admin
      } else {
        user.role = 'User';  // Default to User if anything else
      }
  
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
    } else {
      alert("Complete mandatory fields");
    }
  }
  

}
