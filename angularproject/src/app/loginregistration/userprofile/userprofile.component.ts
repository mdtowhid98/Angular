import { Component } from '@angular/core';
import { UserModule } from '../../module/user/user.module';
import { UserprofileService } from '../../service/userprofile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {

  user!: UserModule;

  constructor(private userprofileService: UserprofileService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.loadUserProfile();

  }

  loadUserProfile(): void {

    this.userprofileService.getUserProfile()
      .subscribe({
        next:(user)=>{
          if(user){
            this.user=user;
            

          }
        },
        error:error=>{
          console.log('error user profile',error);
        }

      });

  }



}
