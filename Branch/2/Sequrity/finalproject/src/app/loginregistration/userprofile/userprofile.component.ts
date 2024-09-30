import { Component } from '@angular/core';
import { UserModule } from '../../module/user/user.module';
import { UserprofileService } from '../../service/userprofile.service';
import { Router } from '@angular/router';
import { faUser, faUserCircle, faEnvelope, faImage, faTag, faSpinner } from '@fortawesome/free-solid-svg-icons'; // Import icons

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {

  user!: UserModule;

  faUser = faUser;
  faUserCircle = faUserCircle;
  faEnvelope = faEnvelope;
  faImage = faImage;
  faTag = faTag;
  faSpinner = faSpinner;
  constructor(private userprofileService: UserprofileService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.loadUserProfile();

  }

  loadUserProfile(): void {
    this.userprofileService.getUserProfile()
      .subscribe({
        next: (user) => {
          if (user) {
            this.user = user;
          }
        },
        error: (error) => {
          if (error.status === 401) {
            // Handle unauthorized user (redirect to login, show error, etc.)
            this.router.navigate(['/login']);
          } else {
            console.log('Error fetching user profile', error);
          }
        }
      });
  }
  
  



}